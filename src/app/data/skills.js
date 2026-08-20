export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "🖥️",
    skills: [
      { name: "React.js", level: 95, icon: "⚛" },
      { name: "Next.js", level: 95, icon: "▲" },
      { name: "TypeScript", level: 85, icon: "TS" },
      { name: "JavaScript", level: 95, icon: "JS" },
      { name: "Vue.js", level: 75, icon: "V" },
      { name: "React Native", level: 85, icon: "📱" },
      { name: "HTML5", level: 98, icon: "</>" },
      { name: "CSS3", level: 92, icon: "✦" },
      { name: "Tailwind CSS", level: 95, icon: "🌊" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 92, icon: "⬡" },
      { name: "Express.js", level: 90, icon: "🚂" },
      { name: "REST APIs", level: 95, icon: "🔗" },
      { name: "JWT", level: 90, icon: "🔑" },
      { name: "NextAuth.js", level: 88, icon: "🔐" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 90, icon: "🍃" },
      { name: "PostgreSQL", level: 85, icon: "🐘" },
      { name: "MySQL", level: 80, icon: "🐬" },
      { name: "SQLite", level: 78, icon: "📦" },
      { name: "SQL", level: 85, icon: "📊" },
    ],
  },
  {
    id: "state-management",
    label: "State Management",
    icon: "🔄",
    skills: [
      { name: "Redux Toolkit", level: 92, icon: "🔷" },
      { name: "Redux", level: 88, icon: "🔶" },
      { name: "Pinia", level: 78, icon: "🍍" },
      { name: "Vuex", level: 75, icon: "📦" },
    ],
  },
  {
    id: "realtime",
    label: "Real-Time / Communication",
    icon: "⚡",
    skills: [
      { name: "Socket.IO", level: 88, icon: "🔌" },
      { name: "Agora", level: 80, icon: "📡" },
      { name: "Zoom SDK", level: 78, icon: "🎥" },
    ],
  },
  {
    id: "ui-libraries",
    label: "UI Libraries",
    icon: "🎨",
    skills: [
      { name: "Shadcn/ui", level: 90, icon: "◈" },
      { name: "Material UI", level: 88, icon: "🔷" },
      { name: "Ant Design", level: 82, icon: "🐜" },
    ],
  },
  {
    id: "ai-payments",
    label: "AI / Payments",
    icon: "🤖",
    skills: [
      { name: "OpenAI API", level: 85, icon: "🧠" },
      { name: "Stripe", level: 88, icon: "💳" },
    ],
  },
  {
    id: "deployment",
    label: "Deployment / DevOps",
    icon: "🚀",
    skills: [
      { name: "Git", level: 95, icon: "⌥" },
      { name: "Vercel", level: 90, icon: "▲" },
      { name: "CI/CD", level: 80, icon: "♾" },
      { name: "Expo", level: 82, icon: "📱" },
    ],
  },
];

export function getAllSkillCategories() {
  return skillCategories;
}

export const featuredTechStack = [
  { name: "Next.js", color: "#ffffff", symbol: "▲", bg: "#ffffff15", border: "#ffffff30" },
  { name: "React", color: "#61dafb", symbol: "⚛", bg: "#61dafb15", border: "#61dafb40" },
  { name: "TypeScript", color: "#3178c6", symbol: "TS", bg: "#3178c615", border: "#3178c640" },
  { name: "Node.js", color: "#68a063", symbol: "⬡", bg: "#68a06315", border: "#68a06340" },
  { name: "MongoDB", color: "#47a248", symbol: "🍃", bg: "#47a24815", border: "#47a24840" },
  { name: "PostgreSQL", color: "#336791", symbol: "🐘", bg: "#33679115", border: "#33679140" },
];
