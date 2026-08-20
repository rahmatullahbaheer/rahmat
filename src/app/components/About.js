import Image from "next/image";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0e1a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0f172a]/80 border border-slate-800 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Developer Workspace Image */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden">
            <Image
              src="/workspace.png"
              alt="Developer Workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0f172a]/20 to-[#0f172a]" />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <span className="text-orange-500 font-semibold text-xs tracking-widest uppercase mb-2">
              ABOUT ME
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5">
              Crafting Digital Experiences <br />
              with Code
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              {profile.summary}
            </p>

            {/* 4 Metadata Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 flex flex-col gap-1">
                <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                  <span className="text-orange-400">👤</span> Name
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white truncate">
                  {profile.name}
                </span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 flex flex-col gap-1">
                <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                  <span className="text-orange-400">📍</span> Location
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white truncate">
                  {profile.location}
                </span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 flex flex-col gap-1">
                <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                  <span className="text-orange-400">✉️</span> Email
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white truncate" title="baheer224@gmail.com">
                  baheer224@gmail.com
                </span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 flex flex-col gap-1">
                <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                  <span className="text-orange-400">📞</span> Phone
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white truncate">
                  {profile.phone}
                </span>
              </div>
            </div>

            {/* More About Me Button */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:border-orange-500/80 bg-slate-900/60 text-slate-200 hover:text-white text-xs font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
              >
                More About Me
                <svg className="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
