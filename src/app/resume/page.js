import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { breadcrumbSchema } from "../lib/structured-data";

export const metadata = {
  title: "Resume — Rahmat Ullah | Full Stack Developer CV Download",
  description:
    "View and download the resume of Rahmat Ullah — Full Stack Developer (MERN Stack). Skills: Next.js, React.js, Node.js, MongoDB, PostgreSQL, TypeScript, JavaScript, Redux Toolkit, Socket.IO, React Native, OpenAI, Stripe. 2+ years professional experience. 9 production projects. Available for hire worldwide.",
  keywords: [
    "Rahmat Ullah resume",
    "Rahmat Ullah CV",
    "Rahmat Ullah developer resume",
    "full stack developer resume",
    "MERN developer resume",
    "Next.js developer resume",
    "React developer resume",
    "Node.js developer resume",
    "developer CV download",
    "full stack developer CV",
    "JavaScript developer resume",
    "TypeScript developer resume",
    "MongoDB developer resume",
    "PostgreSQL developer resume",
    "developer resume Pakistan",
    "developer resume 2024",
    "developer resume 2025",
    "hire full stack developer resume",
  ],
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume — Rahmat Ullah | Full Stack Developer",
    description:
      "Download the resume of Rahmat Ullah — Full Stack Developer with Next.js, React, Node.js, MongoDB, PostgreSQL & AI expertise. 2+ years, 9 production projects.",
    url: "https://rahmatullah.dev/resume",
    type: "website",
    siteName: "Rahmat Ullah — Full Stack Developer",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Resume — Rahmat Ullah Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rahmatullah_dev",
    title: "Resume — Rahmat Ullah | Full Stack Developer CV",
    description: "Download resume of Rahmat Ullah — Next.js, React, Node.js, MongoDB, PostgreSQL, AI. 2+ years experience. Available for hire.",
    images: ["/og-image.jpg"],
  },
};

const skills = [
  { category: "Frontend", items: ["Next.js", "React.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT", "NextAuth.js"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "SQL"] },
  { category: "Mobile", items: ["React Native", "Expo"] },
  { category: "Tools & DevOps", items: ["Git", "Vercel", "CI/CD", "Redux Toolkit"] },
  { category: "Integrations", items: ["OpenAI", "Stripe", "Socket.IO", "Agora", "Zoom SDK"] },
];

const experiences = [
  { company: "Must Services", role: "Full Stack Developer", period: "2024 — Present", current: true },
  { company: "M Techub LLC", role: "Full Stack Developer", period: "2023 — 2024" },
  { company: "Alphinex Solutions", role: "Full Stack Developer", period: "2023" },
  { company: "WQ Softwares", role: "Junior Full Stack Developer", period: "2022 — 2023" },
  { company: "NausalTech", role: "Frontend Developer (Internship)", period: "2022" },
  { company: "KPITB", role: "Web Development Trainee", period: "2021 — 2022" },
];

export default function ResumePage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
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
              <li className="text-slate-300">Resume</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-extrabold text-white mb-2">Rahmat Ullah</h1>
              <p className="text-orange-400 font-semibold text-lg">Full Stack Developer</p>
              <p className="text-slate-400 text-sm mt-1">Rawalpindi, Pakistan · baheer224@gmail.com</p>
            </div>
            <a
              href="/rahmat_ullah.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_4px_15px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5 flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume (PDF)
            </a>
          </div>

          {/* Summary */}
          <section className="bg-[#111827] border border-slate-800 rounded-2xl p-8 mb-8">
            <h2 className="text-white font-bold text-xl mb-4">Professional Summary</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Full Stack Developer with 2+ years of experience building scalable web applications using the MERN stack 
              and Next.js. Experienced in developing AI-powered features, real-time applications, video conferencing 
              integrations, cross-platform mobile apps, and e-commerce platforms. Strong focus on clean code, 
              performance, and production reliability.
            </p>
          </section>

          {/* Experience */}
          <section className="bg-[#111827] border border-slate-800 rounded-2xl p-8 mb-8">
            <h2 className="text-white font-bold text-xl mb-6">Work Experience</h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.company} className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-white font-semibold text-base">{exp.role}</h3>
                    <p className="text-orange-400 text-sm font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {exp.current && <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />}
                    <span className="text-slate-500 text-xs">{exp.period}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-slate-800">
              <a href="/experience" className="text-orange-400 text-sm font-semibold hover:text-orange-300 transition-colors">
                View full experience details →
              </a>
            </div>
          </section>

          {/* Skills */}
          <section className="bg-[#111827] border border-slate-800 rounded-2xl p-8 mb-8">
            <h2 className="text-white font-bold text-xl mb-6">Technical Skills</h2>
            <div className="space-y-5">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="text-sm px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Download CTA */}
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-4">Get the complete resume with all project details</p>
            <a
              href="/rahmat_ullah.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_4px_15px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Full Resume (PDF)
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
