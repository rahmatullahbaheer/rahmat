import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { breadcrumbSchema } from "../lib/structured-data";
import { aboutPageKeywords } from "../lib/keywords";
import { profile } from "../data/profile";

export const metadata = {
  title: "About Rahmat Ullah — Full Stack Developer | MERN Stack",
  description:
    "Learn about Rahmat Ullah, a Full Stack Developer (MERN Stack) with 2+ years of experience building scalable web applications using Next.js, React.js, Node.js, MongoDB, and PostgreSQL. Skilled in AI features, real-time applications, and React Native mobile development. Based in Rawalpindi, Pakistan.",
  keywords: aboutPageKeywords,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Rahmat Ullah — Full Stack Developer | MERN Stack & Next.js",
    description:
      "Full Stack Developer with 2+ years building scalable web apps with Next.js, React, Node.js, MongoDB, PostgreSQL, TypeScript, AI features, and React Native.",
    url: "https://rahmatullah.dev/about",
    type: "website",
    siteName: "Rahmat Ullah — Full Stack Developer",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "About Rahmat Ullah — Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rahmatullah_dev",
    title: "About Rahmat Ullah — Full Stack Developer",
    description: "Full Stack Developer — Next.js, React, Node.js, MongoDB, PostgreSQL, AI, and React Native. 2+ years of experience. Based in Pakistan.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <main className="pt-24 pb-20 min-h-screen bg-[#0a0e1a]" id="main-content">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-300">About</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-14">
            <span className="inline-block text-orange-500 font-semibold text-xs tracking-widest uppercase mb-3">
              About Me
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Full Stack Developer<br />
              <span className="text-slate-400 text-3xl font-bold">building for the web</span>
            </h1>
          </div>

          {/* Bio */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-8 sm:p-10 mb-8">
            <h2 className="text-xl font-bold text-white mb-5">Professional Background</h2>
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                I&apos;m <strong className="text-white">{profile.name}</strong>, a Full Stack Developer specializing in the MERN stack and Next.js. {profile.summary}
              </p>
              <p>
                I work across the complete development lifecycle, from database schema design and API architecture to responsive interfaces and deployment. My CV includes work with 
                <span className="text-orange-400 font-medium"> Next.js</span>, 
                <span className="text-orange-400 font-medium"> React</span>, 
                <span className="text-orange-400 font-medium"> Node.js</span>, 
                <span className="text-orange-400 font-medium"> MongoDB</span>, 
                <span className="text-orange-400 font-medium"> PostgreSQL</span>, 
                and technologies including OpenAI, Socket.IO, Zoom SDK, Agora, Git, Vercel, Namecheap, and CI/CD.
              </p>
              <p>
                My project experience includes AI-powered resume content, real-time chat and live streaming, video consultations, cross-platform React Native applications, ecommerce, inventory, financial management, and IoT smart irrigation.
              </p>
              <p>
                I&apos;m based in {profile.location}.
              </p>
            </div>
          </div>

          {/* Approach */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-8 sm:p-10 mb-8">
            <h2 className="text-xl font-bold text-white mb-5">My Development Approach</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: "🏗️", title: "Architecture First", desc: "I think through the data model, API design, and component structure before writing production code. Solid foundations prevent costly rewrites." },
                { icon: "⚡", title: "Performance by Default", desc: "Server Components where possible, lazy loading, database indexing, image optimization, and Core Web Vitals as non-negotiables." },
                { icon: "🔒", title: "Security Conscious", desc: "JWT best practices, input validation, environment variables for secrets, proper CORS, and role-based access control in every application." },
                { icon: "📖", title: "Clean, Readable Code", desc: "Code is read far more than it is written. I prioritize clarity, consistent naming, and documentation over clever one-liners." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Location", value: profile.location },
              { label: "Experience", value: "2+ Years" },
              { label: "Projects", value: "9 CV Projects" },
              { label: "Education", value: "BSCS, 2023" },
            ].map((item) => (
              <div key={item.label} className="bg-[#111827] border border-slate-800 rounded-xl p-4">
                <span className="block text-slate-500 text-xs uppercase tracking-wider mb-1">{item.label}</span>
                <span className={`font-semibold text-sm ${item.highlight ? "text-green-400" : "text-white"}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_4px_15px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5">
              Let&apos;s Work Together
            </a>
            <a href="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 border border-slate-700 hover:border-orange-500/50 hover:text-white transition-all hover:-translate-y-0.5">
              View My Projects
            </a>
            <a href="/rahmat_ullah.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 border border-slate-700 hover:border-orange-500/50 hover:text-white transition-all hover:-translate-y-0.5">
              Download Resume
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
