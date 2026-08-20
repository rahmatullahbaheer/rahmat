import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";
import { experiences } from "../../data/experience";

export default function HomeExperience() {
  const recentExperiences = experiences.slice(0, 3);

  return (
    <section id="experience-preview" className="py-24 bg-gradient-to-b from-[#0a0e1a] to-[#0d1525]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6">
          <SectionHeader
            label="Experience"
            title="Where I've Worked"
            subtitle="Professional experience across multiple companies and tech stacks."
          />
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold hover:gap-3 transition-all whitespace-nowrap mb-14"
          >
            View Full History
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="space-y-4">
          {recentExperiences.map((exp, i) => (
            <div
              key={exp.id}
              className="bg-[#111827] border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm flex-shrink-0">
                    {exp.company[0]}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">{exp.position}</h3>
                    <p className="text-orange-400 text-sm font-medium">{exp.company}</p>
                    <p className="text-slate-500 text-xs mt-1">{exp.location} · {exp.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {exp.isCurrent && (
                    <span className="flex items-center gap-1.5 text-green-400 text-xs font-medium">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Current
                    </span>
                  )}
                  <span className="text-slate-500 text-xs bg-slate-800 px-3 py-1 rounded-full">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-5">
                {exp.technologies.slice(0, 6).map((tech) => (
                  <span key={tech} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-slate-400">
                    {tech}
                  </span>
                ))}
                {exp.technologies.length > 6 && (
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-slate-500">
                    +{exp.technologies.length - 6} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
