// src/data/checklistData.js
export const phases = [
  {
    id: "phase1",
    title: "Phase 1: Foundation (The Beginning)",
    description: "Programming language basics & logic building.",
    items: [
      { id: "p1_1", text: "Master C++ Syntax & Loops", resource: "https://www.learncpp.com/" },
      { id: "p1_2", text: "Solve 50 Easy Problems on Codeforces", resource: "https://codeforces.com/problemset?order=BY_RATING_ASC" },
      { id: "p1_3", text: "Learn Time Complexity (Big O)", resource: "https://www.youtube.com/watch?v=V42FBiohc6c" },
    ]
  },
  {
    id: "phase2",
    title: "Phase 2: Data Structures & Algorithms",
    description: "Core CS concepts for competitive programming.",
    items: [
      { id: "p2_1", text: "Learn STL (Vector, Map, Set)", resource: "https://www.geeksforgeeks.org/the-c-standard-template-library-stl/" },
      { id: "p2_2", text: "Master Binary Search", resource: "" },
      { id: "p2_3", text: "Number Theory (Sieve, GCD)", resource: "" },
    ]
  },
  // ... এখানে বাকি ফেজগুলো যোগ করবেন
];

export const getRank = (percentage) => {
  if (percentage === 100) return "Alien God 👽";
  if (percentage >= 80) return "Grandmaster 👑";
  if (percentage >= 60) return "Master ⚔️";
  if (percentage >= 40) return "Specialist 🛠️";
  if (percentage >= 20) return "Pupil 🧑‍🎓";
  return "Newbie 👶";
};