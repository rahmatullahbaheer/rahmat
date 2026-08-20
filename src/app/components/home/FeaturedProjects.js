import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";
import ProjectCard from "../shared/ProjectCard";
import { getFeaturedProjects } from "../../data/projects";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects-preview" className="py-24 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6">
          <SectionHeader
            label="Featured Projects"
            title="What I've Built"
            subtitle="A selection of production applications built with real-world requirements and scale in mind."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold hover:gap-3 transition-all whitespace-nowrap mb-14"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900/80 border border-slate-700 hover:border-orange-500/60 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            See All 9 Projects
            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
