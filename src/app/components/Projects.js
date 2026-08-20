import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Oferta Marketplace",
      desc: "Full-featured marketplace app with real-time chat, Agora live video streaming, and Stripe payment integration.",
      img: "/project-oferta.png",
      tag: "React / Node",
      tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      link: "https://play.google.com/store/apps/details?id=com.ofertasvAppMtechub",
      github: "https://github.com",
    },
    {
      title: "CareerBooster AI",
      desc: "AI-powered resume builder with OpenAI integration, instant template customization, and Stripe payments.",
      img: "/project-careerbooster.png",
      tag: "Next.js",
      tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      link: "https://www.careerbooster.ai/",
      github: "https://github.com",
    },
    {
      title: "MCare Hospital System",
      desc: "Comprehensive hospital system with Zoom SDK integration for online doctor consultations & appointments.",
      img: "/project-mcare.png",
      tag: "Next.js / Zoom",
      tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      link: "#",
      github: "https://github.com",
    },
    {
      title: "Hantidhowre FMS",
      desc: "Financial management system with expense tracking, budgeting, multi-currency support, and dynamic analytics.",
      img: "/project-fms.png",
      tag: "Vue / Pinia",
      tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      link: "#",
      github: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a0e1a] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with View All Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-orange-500 font-semibold text-xs tracking-widest uppercase mb-2 block">
              FEATURED PROJECTS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Some Things I&apos;ve Built
            </h2>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors group"
          >
            <span>View All Projects</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a]/70 border border-slate-800 rounded-2xl overflow-hidden group hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col backdrop-blur-sm"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Tag & Title Row */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <h3 className="font-bold text-white text-base truncate group-hover:text-orange-400 transition-colors">
                    {p.title}
                  </h3>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border shrink-0 ${p.tagColor}`}>
                    {p.tag}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed mb-5 flex-1 line-clamp-3">
                  {p.desc}
                </p>

                {/* Links Row */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <span>Live Demo</span>
                    <span>→</span>
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
