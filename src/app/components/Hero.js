import Image from "next/image";
import { profile } from "../data/profile";
import { featuredTechStack } from "../data/skills";

export default function Hero() {
  const badges = [
    { label: "Clean Code", icon: "✨" },
    { label: "Scalable Solutions", icon: "⚡" },
    { label: "User Focused", icon: "🎯" },
    { label: "Performance Driven", icon: "🚀" },
  ];

  const techIcons = featuredTechStack;

  return (
    <section id="home" className="min-h-screen bg-[#0a0e1a] relative flex items-center pt-[100px] pb-20 overflow-hidden">
      {/* Background Subtle Grid & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.07]" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-orange-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Role Tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-orange-500 font-semibold text-xs tracking-widest uppercase">
                SOFTWARE DEVELOPER
              </span>
            </div>

            {/* Main Heading — SEO H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-[1.15] mb-5 tracking-tight">
              <span className="block text-slate-400 text-2xl sm:text-3xl font-semibold mb-1">Hi, I&apos;m</span>
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(249,115,22,0.3)]">
                {profile.name}
              </span>
              <span className="block text-2xl sm:text-3xl font-bold text-white/90 mt-2">
                {profile.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed mb-3 font-normal">
              MERN Stack and Next.js Developer building scalable web applications, AI-powered features, real-time systems, and cross-platform mobile applications.
            </p>
            <p className="text-slate-400 text-sm max-w-xl leading-relaxed mb-6">
              Specialized in <span className="text-orange-400 font-medium">Next.js</span> · <span className="text-orange-400 font-medium">React</span> · <span className="text-orange-400 font-medium">Node.js</span> · <span className="text-orange-400 font-medium">MongoDB</span> · <span className="text-orange-400 font-medium">PostgreSQL</span>
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-slate-300 text-xs font-medium backdrop-blur-sm hover:border-orange-500/50 transition-colors"
                >
                  <span className="text-orange-400 text-sm">{b.icon}</span>
                  <span>{b.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_4px_20px_rgba(249,115,22,0.4)] hover:shadow-[0_6px_28px_rgba(249,115,22,0.6)] transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 border border-slate-700 hover:border-orange-500/70 hover:text-white transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                Contact Me
              </a>

              <a
                href="/rahmat_ullah.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-slate-400 hover:text-orange-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Resume
              </a>
            </div>

            {/* Tech Icons Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
                Tech I love working with:
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                {techIcons.map((t) => (
                  <div
                    key={t.name}
                    title={t.name}
                    style={{ backgroundColor: t.bg, borderColor: t.border, color: t.text }}
                    className="w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-xs shadow-sm hover:scale-110 transition-transform duration-200 cursor-pointer backdrop-blur-sm"
                  >
                    <span>{t.symbol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Photo & Glowing Ring + Stats Bar) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Floating Code Badges */}
            <div className="absolute -top-4 left-4 z-20 w-11 h-11 rounded-xl bg-slate-900/90 border border-orange-500/40 text-orange-400 flex items-center justify-center text-sm font-mono font-bold shadow-[0_0_20px_rgba(249,115,22,0.3)] animate-bounce [animation-duration:4s]">
              &lt;/&gt;
            </div>
            <div className="absolute top-10 -right-2 z-20 w-11 h-11 rounded-xl bg-slate-900/90 border border-orange-500/40 text-orange-400 flex items-center justify-center text-sm font-mono font-bold shadow-[0_0_20px_rgba(249,115,22,0.3)] animate-bounce [animation-duration:5s]">
              &#123;&#125;
            </div>
            <div className="absolute bottom-28 -left-4 z-20 w-11 h-11 rounded-xl bg-slate-900/90 border border-orange-500/40 text-orange-400 flex items-center justify-center text-sm font-mono font-bold shadow-[0_0_20px_rgba(249,115,22,0.3)] animate-bounce [animation-duration:6s]">
              &gt;_
            </div>

            {/* Halo Sunburst Background behind Portrait */}
            <div className="relative w-[340px] sm:w-[380px] h-[440px] sm:h-[480px] flex items-center justify-center">
              
              {/* Outer Dashed Orbit Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-orange-500/30 animate-[spin_40s_linear_infinite]" />
              
              {/* Inner Glowing Sunburst Circle */}
              <div className="absolute w-[290px] sm:w-[320px] h-[290px] sm:h-[320px] rounded-full bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-500 opacity-90 shadow-[0_0_80px_rgba(249,115,22,0.7)]" />
              
              {/* Profile Image with subtle cutout effect */}
              <div className="relative z-10 w-[350px] sm:w-[400px] h-[370px] sm:h-[410px] overflow-hidden rounded-b-3xl">
                <Image
                  src="/profile.png"
                  alt="Rahmat Ullah"
                  fill
                  priority
                  sizes="(max-width: 640px) 270px, 300px"
                  className="object-cover object-top filter bg-none brightness-105 contrast-105"
                />
              </div>

              {/* Floating Combined Stats Bar Overlaid at Bottom */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 w-[94%] bg-slate-900/95 border border-slate-700/80 rounded-2xl p-3 sm:p-4 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md">
                <div className="grid grid-cols-3 divide-x divide-slate-800 text-center">
                  <div className="px-1.5">
                    <span className="block text-lg sm:text-xl font-extrabold text-orange-500">2+</span>
                    <span className="block text-[10px] sm:text-[11px] text-slate-400 leading-tight mt-0.5">Years<br/>Experience</span>
                  </div>
                  <div className="px-1.5">
                    <span className="block text-lg sm:text-xl font-extrabold text-orange-500">9</span>
                    <span className="block text-[10px] sm:text-[11px] text-slate-400 leading-tight mt-0.5">CV<br/>Projects</span>
                  </div>
                  <div className="px-1.5">
                    <span className="block text-lg sm:text-xl font-extrabold text-orange-500">BSCS</span>
                    <span className="block text-[10px] sm:text-[11px] text-slate-400 leading-tight mt-0.5">Abasyn<br/>University</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
