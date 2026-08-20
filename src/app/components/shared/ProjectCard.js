import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-44 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-10 select-none">⚡</span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 rounded-md bg-orange-500/15 border border-orange-500/30 text-orange-400 text-[11px] font-semibold">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.shortDescription}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Link */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-orange-400 text-sm font-semibold hover:gap-3 transition-all duration-200"
        >
          View Details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
