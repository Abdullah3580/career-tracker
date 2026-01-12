export const phases = [
  // Phase 1: Basics
  {
    id: "phase1",
    title: "Phase 1: The Foundation (Basics)",
    description: "Programming language basics & logic building.",
    items: [
      { id: "p1_1", text: "Choose a Language (C++/Python/JS)", resource: "https://www.learncpp.com/" },
      { id: "p1_2", text: "Variables, Loops & Conditions", resource: "https://www.w3schools.com/" },
      { id: "p1_3", text: "Functions & Arrays", resource: "" },
      { id: "p1_4", text: "Solve 50+ Easy Problems (Codeforces/LeetCode)", resource: "https://leetcode.com/problemset/all/" },
    ]
  },
  
  // Phase 2: DSA
  {
    id: "phase2",
    title: "Phase 2: Data Structures & Algorithms",
    description: "Core CS concepts to crack interviews.",
    items: [
      { id: "p2_1", text: "Time & Space Complexity (Big O)", resource: "" },
      { id: "p2_2", text: "Arrays, Linked Lists, Stacks, Queues", resource: "" },
      { id: "p2_3", text: "Recursion & Sorting Algorithms", resource: "" },
      { id: "p2_4", text: "Trees, Graphs & BFS/DFS", resource: "" },
      { id: "p2_5", text: "Dynamic Programming (DP)", resource: "" },
    ]
  },

  // Phase 3: Frontend Development
  {
    id: "phase3",
    title: "Phase 3: Frontend Mastery (The Art)",
    description: "Building beautiful user interfaces.",
    items: [
      { id: "p3_1", text: "HTML5 & CSS3 (Flexbox/Grid)", resource: "https://web.dev/learn/css/" },
      { id: "p3_2", text: "Modern JavaScript (ES6+)", resource: "https://javascript.info/" },
      { id: "p3_3", text: "React JS (Components, Hooks, State)", resource: "https://react.dev/" },
      { id: "p3_4", text: "Tailwind CSS for Styling", resource: "https://tailwindcss.com/" },
      { id: "p3_5", text: "API Integration (Fetch/Axios)", resource: "" },
    ]
  },

  // Phase 4: Backend & Database
  {
    id: "phase4",
    title: "Phase 4: Backend Engineering (The Brain)",
    description: "Server logic, Databases & APIs.",
    items: [
      { id: "p4_1", text: "Node.js & Express.js Basics", resource: "" },
      { id: "p4_2", text: "REST API Design", resource: "" },
      { id: "p4_3", text: "Database: SQL (PostgreSQL) or NoSQL (MongoDB)", resource: "" },
      { id: "p4_4", text: "Authentication (JWT/OAuth)", resource: "" },
      { id: "p4_5", text: "Backend Security Basics", resource: "" },
    ]
  },

  // Phase 5: Tools & Deployment
  {
    id: "phase5",
    title: "Phase 5: Professional Tools (DevOps)",
    description: "Git, Cloud, and Deployment.",
    items: [
      { id: "p5_1", text: "Git & GitHub (Version Control)", resource: "https://git-scm.com/doc" },
      { id: "p5_2", text: "Linux Command Line Basics", resource: "" },
      { id: "p5_3", text: "Docker (Containerization)", resource: "" },
      { id: "p5_4", text: "CI/CD Pipelines (GitHub Actions)", resource: "" },
      { id: "p5_5", text: "Cloud Deployment (AWS/Vercel/Supabase)", resource: "" },
    ]
  },

  // Phase 6: Job Ready
  {
    id: "phase6",
    title: "Phase 6: Getting Hired 💼",
    description: "Projects, Resume & Interviews.",
    items: [
      { id: "p6_1", text: "Build 2 Major Projects (Full Stack)", resource: "" },
      { id: "p6_2", text: "Contribute to Open Source", resource: "" },
      { id: "p6_3", text: "Prepare ATS Friendly Resume", resource: "" },
      { id: "p6_4", text: "Mock Interviews & Soft Skills", resource: "" },
    ]
  }
];

export const getRank = (percentage) => {
  if (percentage === 0) return "Noob 🥚";
  if (percentage < 20) return "Script Kiddie 👶";
  if (percentage < 40) return "Junior Dev 💻";
  if (percentage < 60) return "Code Ninja 🥷";
  if (percentage < 80) return "Senior Engineer 🛠️";
  if (percentage < 100) return "Tech Lead 🚀";
  return "God Mode 👽";
};