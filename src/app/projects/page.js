import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { breadcrumbSchema } from "../lib/structured-data";
import { projects } from "../data/projects";
import ProjectCard from "../components/shared/ProjectCard";
import { projectsPageKeywords } from "../lib/keywords";

export const metadata = {
  title: "Projects Portfolio — Rahmat Ullah | Full Stack Developer Work",
  description:
    "Portfolio of 9 full-stack web applications by Rahmat Ullah — CareerBooster AI (Next.js, OpenAI, Stripe), MCare Hospital System (Next.js, Zoom SDK), Oferta Marketplace (React, Socket.IO, Agora), fleet management, inventory management, EPOS, real estate, e-commerce & IoT systems. Built with Next.js, React, Node.js, MongoDB, PostgreSQL.",
  keywords: [
    ...projectsPageKeywords,
    "CareerBooster AI portfolio",
    "MCare hospital management Next.js",
    "Oferta marketplace Socket.IO",
    "Next.js OpenAI project",
    "React Node.js portfolio",
    "MERN stack project examples",
    "full stack portfolio 2024",
    "full stack portfolio 2025",
    "Next.js developer portfolio projects",
    "real-time app portfolio",
    "AI web app portfolio",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects Portfolio — Rahmat Ullah | Full Stack Developer",
    description:
      "9 production-grade full-stack projects: AI SaaS, hospital management, marketplace with live streaming, fleet & inventory systems, EPOS, real estate, e-commerce & IoT.",
    url: "https://rahmatullah.dev/projects",
    type: "website",
    siteName: "Rahmat Ullah — Full Stack Developer",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Rahmat Ullah Projects Portfolio — Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rahmatullah_dev",
    title: "Projects Portfolio — Rahmat Ullah | Full Stack Developer",
    description: "9 production projects: AI SaaS, hospital system, marketplace, fleet management, EPOS & more. Next.js, React, Node.js, MongoDB.",
    images: ["/og-image.jpg"],
  },
};

export default function ProjectsPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ]);

  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <main className="pt-24 pb-20 min-h-screen bg-[#0a0e1a]" id="main-content">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-300">Projects</li>
            </ol>
          </nav>

          <div className="mb-14">
            <span className="inline-block text-orange-500 font-semibold text-xs tracking-widest uppercase mb-3">Portfolio</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">Projects</h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
              {projects.length} production-grade projects built with real-world requirements. 
              Each project includes an in-depth breakdown of the problem, solution, architecture, and technologies.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-slate-400 text-sm mb-4">Want to work on a project together?</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_4px_15px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5">
              Let&apos;s Work Together
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
