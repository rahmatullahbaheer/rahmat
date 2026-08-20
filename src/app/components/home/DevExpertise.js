import SectionHeader from "../shared/SectionHeader";

const areas = [
  {
    icon: "🏗️",
    title: "Full Stack Development",
    desc: "End-to-end application development from database schema to responsive UI. Delivering complete, production-ready web applications that solve real business problems.",
  },
  {
    icon: "▲",
    title: "Next.js Development",
    desc: "Server Components, App Router, ISR, SSR, and Metadata API. Building Next.js applications optimized for performance, SEO, and scalability.",
  },
  {
    icon: "⚛",
    title: "React Development",
    desc: "Component architecture, performance optimization with hooks, state management with Redux Toolkit, and complex UI patterns.",
  },
  {
    icon: "⚙️",
    title: "Backend & API Development",
    desc: "RESTful API design with Express.js and Node.js. JWT authentication, middleware, rate limiting, and API security best practices.",
  },
  {
    icon: "🗄️",
    title: "Database Development",
    desc: "MongoDB schema design, aggregation pipelines, PostgreSQL relational modeling, query optimization, and indexing strategies.",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "OpenAI API integration with prompt engineering, streaming responses, and cost-optimized AI feature implementation.",
  },
  {
    icon: "⚡",
    title: "Real-Time Applications",
    desc: "Socket.IO for live messaging and data streaming. Agora and Zoom SDK for video conferencing and live broadcast features.",
  },
  {
    icon: "📱",
    title: "React Native Development",
    desc: "Cross-platform iOS and Android applications with Expo. Native device APIs, navigation, and performance optimization for mobile.",
  },
];

export default function DevExpertise() {
  return (
    <section id="dev-expertise" className="py-24 bg-gradient-to-b from-[#0d1525] to-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Development Expertise"
          title="What I Specialize In"
          subtitle="Focused expertise across the full development lifecycle — from architecture decisions to production deployment."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group bg-[#111827] border border-slate-800 rounded-2xl p-6 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden cursor-default"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500/60 transition-all duration-500" />
              <div className="text-3xl mb-4">{area.icon}</div>
              <h3 className="text-white font-bold text-sm mb-2 group-hover:text-orange-400 transition-colors">
                {area.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
