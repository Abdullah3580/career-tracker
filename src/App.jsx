import React, { useState, useEffect } from "react";
import { supabase } from "./supabase"; // Supabase import
import { phases, getRank } from "./data/checklistData";
import { ChevronDown, ChevronUp, ExternalLink, CheckCircle, Circle, LogOut, Github } from "lucide-react";

function App() {
  const [user, setUser] = useState(null);
  const [completed, setCompleted] = useState({}); 
  const [expandedPhase, setExpandedPhase] = useState(phases[0].id);
  const [loading, setLoading] = useState(true);

  // 1. Auth Listener & Data Fetching
  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchData(session.user.id);
      else setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchData(session.user.id);
      else {
        setCompleted({});
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch Data Function
  const fetchData = async (userId) => {
    const { data, error } = await supabase
      .from('user_progress')
      .select('completed_items')
      .eq('user_id', userId)
      .single();

    if (data) {
      setCompleted(data.completed_items || {});
    }
    setLoading(false);
  };

  // 2. Toggle Checkbox & Save to Supabase (PostgreSQL)
  const toggleItem = async (itemId) => {
    if (!user) return alert("Please login to save progress!");
    
    const newCompleted = { ...completed, [itemId]: !completed[itemId] };
    setCompleted(newCompleted);

    // Upsert: Insert if not exists, Update if exists
    const { error } = await supabase
      .from('user_progress')
      .upsert({ 
        user_id: user.id, 
        completed_items: newCompleted 
      });

    if (error) console.error("Error saving:", error.message);
  };

  // 3. Login Handlers
  const handleLogin = async () => {
    // এখানে আপনি Google ও ব্যবহার করতে পারেন যদি সেটআপ করা থাকে
    await supabase.auth.signInWithOAuth({
      provider: 'github', // অথবা 'google'
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // Calculation Logic
  const totalItems = phases.reduce((acc, phase) => acc + phase.items.length, 0);
  const completedCount = Object.values(completed).filter(Boolean).length;
  const progress = Math.round((completedCount / totalItems) * 100) || 0;
  const rank = getRank(progress);

  if (loading) return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans selection:bg-green-500 selection:text-black">
      
      {/* Header & Nav */}
      <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Zero2Hero <span className="text-green-400">Roadmap</span></h1>
            {user && <p className="text-xs text-gray-400">Current Rank: <span className="text-yellow-400 font-bold">{rank}</span></p>}
          </div>
          
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-green-400 hidden sm:block">{user.email}</span>
              <button onClick={handleLogout} className="p-2 hover:bg-gray-800 rounded-full transition"><LogOut size={18} /></button>
            </div>
          ) : (
            <button onClick={handleLogin} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2">
              <Github size={16} /> Login
            </button>
          )}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Progress Bar */}
        <div className="mb-8 bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl">
          <div className="flex justify-between mb-2 text-sm font-medium">
            <span>Progress</span>
            <span className="text-green-400">{progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-400 h-4 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-center text-sm text-gray-400 italic">
            "{progress === 100 ? "You are a God now." : "Keep grinding. Consistency is key."}"
          </p>
        </div>

        {/* Phases Accordion */}
        <div className="space-y-4">
          {phases.map((phase) => (
            <div key={phase.id} className="border border-gray-800 rounded-xl overflow-hidden bg-gray-800/40">
              <button 
                onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-800 transition"
              >
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                  <p className="text-xs text-gray-400">{phase.description}</p>
                </div>
                {expandedPhase === phase.id ? <ChevronUp className="text-green-400" /> : <ChevronDown className="text-gray-500" />}
              </button>

              {expandedPhase === phase.id && (
                <div className="bg-gray-900/50 border-t border-gray-800 p-4 space-y-2">
                  {phase.items.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => toggleItem(item.id)}
                      className={`
                        group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all border border-transparent
                        ${completed[item.id] ? "bg-green-900/20 border-green-900/30" : "hover:bg-gray-800"}
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <button className={`transition-colors ${completed[item.id] ? "text-green-500" : "text-gray-600 group-hover:text-gray-400"}`}>
                          {completed[item.id] ? <CheckCircle size={22} fill="currentColor" className="text-green-500/20" /> : <Circle size={22} />}
                        </button>
                        <span className={`${completed[item.id] ? "text-gray-500 line-through decoration-green-500/50" : "text-gray-200"}`}>
                          {item.text}
                        </span>
                      </div>
                      
                      {item.resource && (
                        <a 
                          href={item.resource} 
                          target="_blank" 
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()} 
                          className="p-2 text-gray-500 hover:text-blue-400 transition"
                          title="Learn Resource"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;