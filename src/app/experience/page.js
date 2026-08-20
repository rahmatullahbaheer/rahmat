import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { breadcrumbSchema } from "../lib/structured-data";
import { getAllExperiences } from "../data/experience";
import { experiencePageKeywords } from "../lib/keywords";

export const metadata = {
  title: "Work Experience — Rahmat Ullah | Full Stack Developer Career History",
  description:
    "Professional experience of Rahmat Ullah — Full Stack Developer at Must Services, M Techub LLC, Alphinex Solutions, WQ Softwares, NausalTech, and KPITB. 2+ years building production applications with Next.js, React, Node.js, MongoDB, PostgreSQL, Socket.IO, Agora, Zoom SDK, Stripe, and OpenAI API.",
  keywords: [
    ...experiencePageKeywords,
    "Must Services developer",
    "M Techub LLC developer",
    "Alphinex Solutions developer",
    "WQ Softwares developer",
    "NausalTech developer",
    "KPITB developer",
    "developer work history Pakistan",
    "full stack developer career timeline",
    "professional developer experience 2 years",
  ],
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Work Experience — Rahmat Ullah | Full Stack Developer",
    description:
      "2+ years of full stack development experience across 6 companies. Next.js, React, Node.js, MongoDB, PostgreSQL, AI integrations, real-time systems & mobile development.",
    url: "https://rahmatullah.dev/experience",
    type: "website",
    siteName: "Rahmat Ullah — Full Stack Developer",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Rahmat Ullah Work Experience — Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rahmatullah_dev",
    title: "Work Experience — Rahmat Ullah | Full Stack Developer",
    description: "2+ years full stack experience — Next.js, React, Node.js, MongoDB, AI, real-time. 6 companies across multiple industries.",
    images: ["/og-image.jpg"],
  },
};

export default function ExperiencePage() {
  const experiences = getAllExperiences();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
  ]);

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <main className="pt-24 pb-20 min-h-screen bg-[#0a0e1a]" id="main-content">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-300">Experience</li>
            </ol>
          </nav>

          <div className="mb-14">
            <span className="inline-block text-orange-500 font-semibold text-xs tracking-widest uppercase mb-3">Professional History</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">Work Experience</h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
              Professional experience building full-stack web applications across multiple industries — 
              from SaaS and healthcare to e-commerce and real-time platforms.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/60 via-orange-500/30 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <article
                  key={exp.id}
                  className="relative sm:pl-16"
                >
                  {/* Dot */}
                  <div className={`absolute left-0 top-7 w-10 h-10 rounded-full hidden sm:flex items-center justify-center font-bold text-sm border-2 ${exp.isCurrent ? "bg-orange-500 border-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.5)]" : "bg-[#111827] border-slate-700 text-slate-400"}`}>
                    {exp.company[0]}
                  </div>

                  <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-orange-500/30 transition-all">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <h2 className="text-white font-bold text-lg">{exp.position}</h2>
                        <p className="text-orange-400 font-semibold text-sm">{exp.company}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{exp.location} · {exp.type}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {exp.isCurrent && (
                          <span className="flex items-center gap-1.5 text-green-400 text-xs font-semibold bg-green-500/10 border border-green-500/30 px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Current
                          </span>
                        )}
                        <span className="text-slate-500 text-xs bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                    {/* Responsibilities */}
                    <div className="mb-5">
                      <h3 className="text-slate-300 font-semibold text-xs uppercase tracking-wider mb-3">Key Responsibilities</h3>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((r, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                            <span className="text-orange-500 mt-1 flex-shrink-0">▸</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-slate-300 font-semibold text-xs uppercase tracking-wider mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-slate-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center">
            <p className="text-slate-400 text-sm mb-4">Interested in working together?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_4px_15px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5">
                Contact Me
              </a>
              <a href="/rahmat_ullah.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 border border-slate-700 hover:border-orange-500/50 transition-all hover:-translate-y-0.5">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
