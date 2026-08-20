import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { breadcrumbSchema } from "../lib/structured-data";
import { getAllSkillCategories } from "../data/skills";
import { skillsPageKeywords } from "../lib/keywords";

export const metadata = {
  title: "Technical Skills — Rahmat Ullah | Next.js, React, Node.js, MongoDB, PostgreSQL",
  description:
    "Complete technical skill set of Rahmat Ullah — Full Stack Developer. Frontend: React.js, Next.js, Vue.js, TypeScript, JavaScript, React Native, Tailwind CSS. Backend: Node.js, Express.js, REST APIs, JWT, NextAuth.js. Databases: MongoDB, PostgreSQL, MySQL, SQL. Tools: Redux Toolkit, Socket.IO, Agora, OpenAI, Stripe, Vercel, Git.",
  keywords: skillsPageKeywords,
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Technical Skills — Rahmat Ullah | Full Stack Developer",
    description:
      "React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Redux Toolkit, Socket.IO, React Native, OpenAI, Stripe — complete technical stack of Full Stack Developer Rahmat Ullah.",
    url: "https://rahmatullah.dev/skills",
    type: "website",
    siteName: "Rahmat Ullah — Full Stack Developer",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Rahmat Ullah Technical Skills — Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rahmatullah_dev",
    title: "Technical Skills — Rahmat Ullah | Next.js, React, Node.js, MongoDB",
    description: "Full skill set: React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Socket.IO, React Native, OpenAI, Stripe & more.",
    images: ["/og-image.jpg"],
  },
};

export default function SkillsPage() {
  const categories = getAllSkillCategories();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
  ]);

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <main className="pt-24 pb-20 min-h-screen bg-[#0a0e1a]" id="main-content">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-300">Skills</li>
            </ol>
          </nav>

          <div className="mb-14">
            <span className="inline-block text-orange-500 font-semibold text-xs tracking-widest uppercase mb-3">Expertise</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">Technical Skills</h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
              A comprehensive skill set built through real-world project experience across multiple industries. 
              Every technology listed has been used in production applications.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="space-y-10">
            {categories.map((category) => (
              <section key={category.id}>
                <h2 className="flex items-center gap-3 text-lg font-bold text-white mb-5">
                  <span className="text-2xl">{category.icon}</span>
                  {category.label}
                  <span className="text-slate-600 text-sm font-normal ml-1">
                    ({category.skills.length} technologies)
                  </span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group bg-[#111827] border border-slate-800 rounded-xl p-4 hover:border-orange-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    >
                      <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center font-bold text-xs text-orange-400 mb-3">
                        {skill.icon}
                      </div>
                      <p className="text-white font-semibold text-xs group-hover:text-orange-400 transition-colors">
                        {skill.name}
                      </p>
                      {/* Skill bar */}
                      <div className="mt-2 h-0.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-[#111827] border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Ready to Build Something?</h2>
            <p className="text-slate-400 text-sm mb-6">
              These skills translate into real production applications. View my projects to see them in action.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_4px_15px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5">
                View Projects
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 border border-slate-700 hover:border-orange-500/50 transition-all hover:-translate-y-0.5">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
