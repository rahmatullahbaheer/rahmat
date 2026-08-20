import { skillGroups } from "./profile";

const icons = {
  JavaScript: "JS",
  TypeScript: "TS",
  React: "⚛",
  "Next.js": "▲",
  "Vue.js": "V",
  "Node.js": "⬡",
  "Express.js": "E",
  MongoDB: "🍃",
  PostgreSQL: "🐘",
  SQL: "▤",
  SQLite: "◫",
  "React Native": "📱",
  Expo: "◈",
  HTML5: "</>",
  CSS3: "✦",
  "Tailwind CSS": "🌊",
  "Ant Design": "🐜",
  "shadcn/ui": "◈",
  "Material UI": "M",
  "Socket.IO": "🔌",
  Agora: "📡",
  OpenAI: "🤖",
  Git: "⌥",
  Vuex: "Vx",
  Pinia: "🍍",
  Vercel: "▲",
  Namecheap: "N",
  "CI/CD": "∞",
};

export const skillCategories = skillGroups.map((group) => ({
  ...group,
  skills: group.skills.map((name) => ({ name, icon: icons[name] || "•" })),
}));

export function getAllSkillCategories() {
  return skillCategories;
}

export const featuredTechStack = [
  { name: "React", color: "#61dafb", symbol: "⚛", bg: "#61dafb15", border: "#61dafb40" },
  { name: "Next.js", color: "#ffffff", symbol: "▲", bg: "#ffffff15", border: "#ffffff30" },
  { name: "TypeScript", color: "#3178c6", symbol: "TS", bg: "#3178c615", border: "#3178c640" },
  { name: "Node.js", color: "#68a063", symbol: "⬡", bg: "#68a06315", border: "#68a06340" },
  { name: "MongoDB", color: "#47a248", symbol: "🍃", bg: "#47a24815", border: "#47a24840" },
  { name: "PostgreSQL", color: "#336791", symbol: "🐘", bg: "#33679115", border: "#33679140" },
];
