export default function Achievements() {
  const milestones = [
    {
      year: "2022",
      title: "KPITB Developer",
      desc: "Built complaint registration & analytics system using MERN stack at KPITB, Peshawar.",
      icon: (
        <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
    },
    {
      year: "2023",
      title: "BSCS & NausalTech",
      desc: "Graduated Abasyn Univ (3.1 GPA). Built dynamic SSR apps with Next.js & MongoDB.",
      icon: (
        <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
    },
    {
      year: "2024",
      title: "Full-Time Developer",
      desc: "Developed Vue.js, Pinia & React Native mobile apps at Alphinex & WQ Softwares.",
      icon: (
        <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
    },
    {
      year: "2025",
      title: "Senior MERN Developer",
      desc: "Built real-time apps with Agora streaming, Socket.IO & Next.js at M TECHUB & Must Services.",
      icon: (
        <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
          <path d="M4 22h16"/>
          <path d="M10 14.66V17c0 .55-.45 1-1 1H7v2h10v-2h-2c-.55 0-1-.45-1-1v-2.34"/>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
        </svg>
      ),
    },
    {
      year: "2026",
      title: "Freelance & Beyond",
      desc: "Delivering high-performance full-stack web & mobile apps for global clients worldwide.",
      icon: (
        <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-[#0a0e1a] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-xs tracking-widest uppercase mb-2">
            JOURNEY & ACHIEVEMENTS
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Milestones That Matter
          </h2>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          {/* Continuous Orange Line Across With Right Arrow */}
          <div className="absolute top-[26px] left-[6%] right-[2%] h-[2px] bg-gradient-to-r from-orange-500/70 via-orange-500 to-orange-400 z-0">
            {/* Arrowhead at the right end */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[9px] border-l-orange-400 drop-shadow-[0_0_6px_rgba(249,115,22,0.8)]" />
          </div>

          {/* 5 Milestone Nodes Grid */}
          <div className="grid grid-cols-5 gap-3 relative z-10">
            {milestones.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group px-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Icon Circle on Line */}
                <div className="w-[52px] h-[52px] rounded-full bg-[#0a0e1a] border-2 border-orange-500 flex items-center justify-center shadow-[0_0_16px_rgba(249,115,22,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(249,115,22,0.7)] group-hover:border-orange-400 relative">
                  {/* Outer subtle concentric ring */}
                  <div className="absolute -inset-1.5 rounded-full border border-orange-500/25 group-hover:border-orange-500/60 transition-all duration-300 pointer-events-none" />
                  {item.icon}
                </div>

                {/* Year */}
                <span className="text-orange-500 font-bold text-sm tracking-wider mt-4 block">
                  {item.year}
                </span>

                {/* Title */}
                <h4 className="text-white font-bold text-sm mt-1 transition-colors group-hover:text-orange-400">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-slate-400 text-xs mt-1.5 leading-relaxed max-w-[190px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden relative pl-8 border-l-2 border-orange-500/60 ml-6 flex flex-col gap-9 max-w-md mx-auto">
          {milestones.map((item, index) => (
            <div key={index} className="relative group">
              {/* Circle on Left Line */}
              <div className="absolute -left-[49px] top-0 w-10 h-10 rounded-full bg-[#0a0e1a] border-2 border-orange-500 flex items-center justify-center shadow-[0_0_12px_rgba(249,115,22,0.4)]">
                {item.icon}
              </div>

              <div>
                <span className="text-orange-500 font-bold text-xs tracking-wider">
                  {item.year}
                </span>
                <h4 className="text-white font-bold text-sm mt-0.5">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
