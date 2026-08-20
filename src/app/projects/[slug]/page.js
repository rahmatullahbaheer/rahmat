import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getProjectBySlug, getAllProjectSlugs, projects } from "../../data/projects";
import { breadcrumbSchema, creativeWorkSchema } from "../../lib/structured-data";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const techKeywords = project.technologies.flatMap((tech) => [
    tech,
    `${tech} developer`,
    `${tech} project`,
    `${tech} web application`,
  ]);

  return {
    title: `${project.title} — Full Stack Project | Rahmat Ullah`,
    description: `${project.shortDescription} CV project details and technologies: ${project.technologies.slice(0, 6).join(", ")}.`,
    keywords: [
      project.title,
      ...techKeywords,
      "full stack project",
      "MERN stack project",
      "Next.js project",
      "React project",
      "full stack web application",
      "Rahmat Ullah project",
      project.category,
      `${project.category} developer`,
      `${project.category} web app`,
    ],
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.title} | Rahmat Ullah — Full Stack Developer`,
      description: `${project.shortDescription} Technologies: ${project.technologies.slice(0, 8).join(", ")}.`,
      url: `https://rahmatullah.dev/projects/${slug}`,
      type: "website",
      siteName: "Rahmat Ullah — Full Stack Developer",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${project.title} — Full Stack Project by Rahmat Ullah`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@rahmatullah_dev",
      title: `${project.title} | Rahmat Ullah`,
      description: `${project.shortDescription} Built with ${project.technologies.slice(0, 5).join(", ")}.`,
      images: ["/og-image.jpg"],
    },
  };
}


export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.slug !== slug)
    .filter((p) => p.technologies.some((t) => project.technologies.includes(t)))
    .slice(0, 3);

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path: `/projects/${slug}` },
  ]);

  const creative = creativeWorkSchema(project);

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creative) }} />

      <main className="pt-24 pb-20 min-h-screen bg-[#0a0e1a]" id="main-content">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500 flex-wrap">
              <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li className="text-slate-700">/</li>
              <li><a href="/projects" className="hover:text-orange-400 transition-colors">Projects</a></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-300 truncate">{project.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded-lg bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-semibold">
                {project.category}
              </span>
              {project.featured && (
                <span className="inline-block px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 text-xs font-semibold">
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">{project.title}</h1>
            <p className="text-slate-300 text-lg leading-relaxed">{project.shortDescription}</p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-sm text-slate-400">
              {project.organization && <span>{project.organization}</span>}
              {project.period && <span>{project.period}</span>}
            </div>

            {/* Links */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex gap-4 mt-6">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-orange-500 hover:bg-orange-600 transition-all">
                    Live Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-300 border border-slate-700 hover:border-orange-500/50 transition-all">
                    GitHub
                  </a>
                )}
              </div>
            )}
          </header>

          {/* Tech Stack */}
          <section className="bg-[#111827] border border-slate-800 rounded-2xl p-6 mb-8" aria-labelledby="tech-stack-heading">
            <h2 id="tech-stack-heading" className="text-white font-bold text-sm uppercase tracking-wider mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-sm px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Overview */}
          <section className="bg-[#111827] border border-slate-800 rounded-2xl p-6 sm:p-8 mb-8">
            <h2 className="text-white font-bold text-xl mb-4">Project Overview</h2>
            <p className="text-slate-300 text-base leading-relaxed">{project.overview}</p>
          </section>

          {/* Role */}
          <section className="bg-[#111827] border border-slate-800 rounded-2xl p-6 sm:p-8 mb-8">
            <h2 className="text-white font-bold text-xl mb-4">Role</h2>
            <p className="text-slate-300 text-base leading-relaxed">{project.role}</p>
          </section>

          {/* Features */}
          <section className="bg-[#111827] border border-slate-800 rounded-2xl p-6 sm:p-8 mb-8">
            <h2 className="text-white font-bold text-xl mb-5">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                  <span className="text-orange-500 mt-0.5 flex-shrink-0">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="mb-10">
              <h2 className="text-white font-bold text-xl mb-6">Related Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProjects.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/projects/${rp.slug}`}
                    className="bg-[#111827] border border-slate-800 rounded-xl p-5 hover:border-orange-500/40 hover:-translate-y-0.5 transition-all"
                  >
                    <span className="block text-orange-400 text-xs font-semibold mb-2">{rp.category}</span>
                    <h3 className="text-white text-sm font-bold hover:text-orange-400 transition-colors">{rp.title}</h3>
                    <p className="text-slate-500 text-xs mt-1.5 line-clamp-2">{rp.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#111d35] to-[#0f1729] border border-orange-500/15 rounded-2xl p-8 text-center">
            <h2 className="text-white font-bold text-xl mb-3">Interested in similar work?</h2>
            <p className="text-slate-400 text-sm mb-6">I build production-quality applications like this. Let&apos;s discuss your project.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_4px_15px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5">
                Contact Me
              </a>
              <a href="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 border border-slate-700 hover:border-orange-500/50 transition-all hover:-translate-y-0.5">
                All Projects
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
