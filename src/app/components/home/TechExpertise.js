import SectionHeader from "../shared/SectionHeader";

const expertise = [
  {
    icon: "▲",
    title: "Next.js",
    color: "#ffffff",
    desc: "App Router, SSR, SSG, ISR, Server Components, Metadata API, API Routes",
  },
  {
    icon: "⚛",
    title: "React.js",
    color: "#61dafb",
    desc: "Hooks, Context, performance optimization, component architecture",
  },
  {
    icon: "⬡",
    title: "Node.js",
    color: "#68a063",
    desc: "Express.js, REST APIs, middleware, authentication, async patterns",
  },
  {
    icon: "TS",
    title: "TypeScript",
    color: "#3178c6",
    desc: "Strict typing, interfaces, generics, type-safe API contracts",
  },
  {
    icon: "🍃",
    title: "MongoDB",
    color: "#47a248",
    desc: "Schema design, aggregation pipelines, indexing, Atlas",
  },
  {
    icon: "🐘",
    title: "PostgreSQL",
    color: "#336791",
    desc: "Relational schema, complex queries, transactions, indexing",
  },
  {
    icon: "🔗",
    title: "REST APIs",
    color: "#f97316",
    desc: "RESTful design, JWT auth, rate limiting, OpenAPI documentation",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    color: "#a78bfa",
    desc: "OpenAI API, prompt engineering, streaming responses",
  },
  {
    icon: "⚡",
    title: "Real-Time",
    color: "#fbbf24",
    desc: "Socket.IO, Agora, Zoom SDK, WebSocket patterns",
  },
  {
    icon: "📱",
    title: "React Native",
    color: "#61dafb",
    desc: "Cross-platform mobile apps with Expo, navigation, device APIs",
  },
];

export default function TechExpertise() {
  return (
    <section id="expertise" className="py-24 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Technical Expertise"
          title="Technologies I Build With"
          subtitle="A focused stack chosen for performance, scalability, and real business impact."
          center
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="group bg-[#111827] border border-slate-800 rounded-2xl p-5 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm mb-4 border"
                style={{
                  backgroundColor: `${item.color}15`,
                  borderColor: `${item.color}40`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>
              <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
