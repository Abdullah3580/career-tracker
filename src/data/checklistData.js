export const phases = [
  // --- EXISTING PHASES ---
  {
    id: "phase1",
    title: "Phase 1: The Foundation (Basics)",
    description: "Programming language basics & logic building.",
    items: [
      { id: "p1_1", text: "Choose a Language (C++/Python/JS)", resource: "https://www.learncpp.com/" },
      { id: "p1_2", text: "Variables, Loops & Conditions", resource: "https://www.w3schools.com/" },
      { id: "p1_3", text: "Functions & Arrays", resource: "" },
      { id: "p1_4", text: "Solve 50+ Easy Problems", resource: "https://leetcode.com/" },
    ]
  },
  {
    id: "phase2",
    title: "Phase 2: Data Structures & Algorithms",
    description: "Core CS concepts to crack interviews.",
    items: [
      { id: "p2_1", text: "Time & Space Complexity (Big O)", resource: "" },
      { id: "p2_2", text: "Arrays, Linked Lists, Stacks, Queues", resource: "" },
      { id: "p2_3", text: "Recursion, Sorting & Searching", resource: "" },
      { id: "p2_4", text: "Trees, Graphs & DP", resource: "" },
    ]
  },
  {
    id: "phase3",
    title: "Phase 3: Frontend Mastery",
    description: "Building interactive UIs.",
    items: [
      { id: "p3_1", text: "HTML/CSS & Responsive Design", resource: "" },
      { id: "p3_2", text: "JavaScript (ES6+) Deep Dive", resource: "" },
      { id: "p3_3", text: "React JS (Hooks, Context, Redux)", resource: "" },
      { id: "p3_4", text: "Tailwind CSS & Component Libraries", resource: "" },
    ]
  },
  {
    id: "phase4",
    title: "Phase 4: Backend Engineering",
    description: "Server side logic & Databases.",
    items: [
      { id: "p4_1", text: "Node.js & Express / Go / Python", resource: "" },
      { id: "p4_2", text: "REST API & GraphQL", resource: "" },
      { id: "p4_3", text: "Databases (SQL vs NoSQL & ORMs)", resource: "" },
      { id: "p4_4", text: "Authentication (OAuth2, JWT)", resource: "" },
    ]
  },

  // --- NEW ADVANCED PHASES ---
  
  {
    id: "phase5",
    title: "Phase 5: The Modern Stack (Pro Level)",
    description: "Industry standard tools you MUST know.",
    items: [
      { id: "p5_1", text: "TypeScript (Static Typing)", resource: "https://www.typescriptlang.org/" },
      { id: "p5_2", text: "Next.js (SSR, SSG, Server Actions)", resource: "https://nextjs.org/" },
      { id: "p5_3", text: "State Management (Zustand/Redux Toolkit)", resource: "" },
      { id: "p5_4", text: "Unit & Integration Testing (Jest/Cypress)", resource: "" },
    ]
  },
  {
    id: "phase6",
    title: "Phase 6: DevOps & Cloud",
    description: "Deploying and scaling applications.",
    items: [
      { id: "p6_1", text: "Docker & Kubernetes Basics", resource: "" },
      { id: "p6_2", text: "CI/CD Pipelines (GitHub Actions)", resource: "" },
      { id: "p6_3", text: "Cloud Services (AWS EC2/S3/Lambda)", resource: "" },
      { id: "p6_4", text: "Nginx & Reverse Proxies", resource: "" },
    ]
  },
  {
    id: "phase7",
    title: "Phase 7: System Design (Architect Level)",
    description: "Designing large-scale scalable systems.",
    items: [
      { id: "p7_1", text: "Load Balancing & Horizontal Scaling", resource: "https://github.com/donnemartin/system-design-primer" },
      { id: "p7_2", text: "Caching Strategies (Redis/Memcached)", resource: "" },
      { id: "p7_3", text: "Message Queues (Kafka/RabbitMQ)", resource: "" },
      { id: "p7_4", text: "Microservices Architecture", resource: "" },
      { id: "p7_5", text: "CAP Theorem & Database Sharding", resource: "" },
    ]
  },
  {
    id: "phase8",
    title: "Phase 8: Emerging Tech (The Future)",
    description: "Staying ahead of the curve.",
    items: [
      { id: "p8_1", text: "AI Integration (OpenAI API/LangChain)", resource: "" },
      { id: "p8_2", text: "Web3/Blockchain Basics (Optional)", resource: "" },
      { id: "p8_3", text: "Mobile Dev (React Native/Flutter)", resource: "" },
    ]
  },
  {
    id: "phase9",
    title: "Phase 9: Soft Skills & Career",
    description: "The non-coding skills that get you hired.",
    items: [
      { id: "p9_1", text: "System Design Interviews", resource: "" },
      { id: "p9_2", text: "Open Source Contributions", resource: "" },
      { id: "p9_3", text: "Building a Personal Brand", resource: "" },
      { id: "p9_4", text: "Negotiation & Leadership", resource: "" },
    ]
  }
];

export const getRank = (percentage) => {
  if (percentage === 0) return "Noob 🥚";
  if (percentage < 10) return "Script Kiddie 👶";
  if (percentage < 30) return "Junior Dev 💻";
  if (percentage < 50) return "Mid-Level Dev 🛠️";
  if (percentage < 70) return "Senior Engineer 🏗️";
  if (percentage < 85) return "Tech Lead 🚀";
  if (percentage < 95) return "System Architect 🏛️";
  return "Tech God / CTO 👽";
};