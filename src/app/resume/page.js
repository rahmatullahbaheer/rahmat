import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { breadcrumbSchema } from "../lib/structured-data";
import { experiences } from "../data/experience";
import { skillCategories } from "../data/skills";
import { profile } from "../data/profile";

export const metadata = {
  title: "Resume — Rahmat Ullah | Full Stack Developer (MERN Stack)",
  description:
    "Resume of Rahmat Ullah, a Full Stack Developer (MERN Stack) with 2+ years of experience in Next.js, React.js, Node.js, MongoDB, PostgreSQL, React Native, Expo, Vue.js, real-time applications, and AI features.",
  keywords: [
    "Rahmat Ullah resume",
    "Rahmat Ullah CV",
    "Full Stack Developer resume",
    "MERN Stack Developer CV",
    "Next.js developer resume",
    "React developer resume",
    "Node.js developer resume",
    "Pakistan developer resume",
  ],
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume — Rahmat Ullah | Full Stack Developer",
    description: "Full Stack Developer (MERN Stack) with 2+ years of experience in web and mobile development.",
    url: "https://rahmatullah.dev/resume",
    type: "website",
    siteName: "Rahmat Ullah — Full Stack Developer",
  },
};

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
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-300">Resume</li>
            </ol>
          </nav>

          <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-extrabold text-white mb-2">{profile.name}</h1>
              <p className="text-orange-400 font-semibold text-lg">{profile.title}</p>
              <p className="text-slate-400 text-sm mt-1">{profile.location} · {profile.email} · {profile.phone}</p>
            </div>
            <a href="/rahmat_ullah.pdf" download className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_4px_15px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5 flex-shrink-0">
              Download Resume (PDF)
            </a>
          </header>

          <section className="bg-[#111827] border border-slate-800 rounded-2xl p-8 mb-8">
            <h2 className="text-white font-bold text-xl mb-4">Professional Summary</h2>
            <p className="text-slate-300 text-base leading-relaxed">{profile.summary}</p>
          </section>

          <section className="bg-[#111827] border border-slate-800 rounded-2xl p-8 mb-8">
            <h2 className="text-white font-bold text-xl mb-6">Work Experience</h2>
            <div className="space-y-5">
              {experiences.map((experience) => (
                <div key={experience.id} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-slate-800 pb-5 last:border-0 last:pb-0">
                  <div>
                    <h3 className="text-white font-semibold text-base">{experience.position}</h3>
                    <p className="text-orange-400 text-sm font-medium">{experience.company}</p>
                    <p className="text-slate-500 text-xs mt-1">{experience.location}</p>
                  </div>
                  <span className="text-slate-400 text-xs whitespace-nowrap">{experience.startDate} — {experience.endDate}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-slate-800">
              <a href="/experience" className="text-orange-400 text-sm font-semibold hover:text-orange-300 transition-colors">View full experience details →</a>
            </div>
          </section>

          <section className="bg-[#111827] border border-slate-800 rounded-2xl p-8 mb-8">
            <h2 className="text-white font-bold text-xl mb-6">Technical Skills</h2>
            <div className="space-y-5">
              {skillCategories.map((group) => (
                <div key={group.id}>
                  <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">{group.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill.name} className="text-sm px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">{skill.name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <section className="bg-[#111827] border border-slate-800 rounded-2xl p-8">
              <h2 className="text-white font-bold text-xl mb-4">Education</h2>
              <p className="text-white font-semibold">{profile.education.degree}</p>
              <p className="text-orange-400 text-sm mt-1">{profile.education.institution}</p>
              <p className="text-slate-400 text-sm mt-2">{profile.education.year} · {profile.education.location}</p>
              <p className="text-slate-400 text-sm">{profile.education.gpa}</p>
            </section>
            <section className="bg-[#111827] border border-slate-800 rounded-2xl p-8">
              <h2 className="text-white font-bold text-xl mb-4">Hobbies</h2>
              <div className="flex flex-wrap gap-2">
                {profile.hobbies.map((hobby) => <span key={hobby} className="text-sm px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">{hobby}</span>)}
              </div>
            </section>
          </div>

          <div className="text-center">
            <a href="/rahmat_ullah.pdf" download className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_4px_15px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5">Download Full Resume (PDF)</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
