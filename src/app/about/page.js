import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createPageMetadata } from "../lib/seo";
import { breadcrumbSchema } from "../lib/structured-data";

export const metadata = createPageMetadata(
  "About Rahmat Ullah",
  "Learn about Rahmat Ullah — Full Stack Developer with 2+ years building scalable web applications with Next.js, React, Node.js, MongoDB, and PostgreSQL. Based in Rawalpindi, Pakistan.",
  "/about"
);

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
                I&apos;m <strong className="text-white">Rahmat Ullah</strong>, a Full Stack Developer specializing in the MERN stack 
                and Next.js with over 2 years of professional experience building scalable web applications. 
                My focus is on creating clean, maintainable solutions that solve real business problems — 
                from SaaS platforms to hospital management systems to real-time marketplaces.
              </p>
              <p>
                I work across the complete development lifecycle: from database schema design and API architecture 
                to responsive frontends and production deployments. I&apos;ve built applications with 
                <span className="text-orange-400 font-medium"> Next.js</span>, 
                <span className="text-orange-400 font-medium"> React</span>, 
                <span className="text-orange-400 font-medium"> Node.js</span>, 
                <span className="text-orange-400 font-medium"> MongoDB</span>, 
                <span className="text-orange-400 font-medium"> PostgreSQL</span>, 
                and integrated technologies including OpenAI, Stripe, Socket.IO, Zoom SDK, and Agora.
              </p>
              <p>
                Beyond standard web development, I&apos;ve delivered AI-powered features using the OpenAI API, 
                real-time messaging and live streaming systems, video conferencing integrations, 
                cross-platform mobile applications with React Native and Expo, and e-commerce platforms 
                with payment processing via Stripe.
              </p>
              <p>
                I&apos;m based in Rawalpindi, Pakistan, and work with clients and companies remotely across different 
                time zones. I&apos;m currently open to full-time, contract, and freelance opportunities.
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
              { label: "Location", value: "Rawalpindi, PK" },
              { label: "Experience", value: "2+ Years" },
              { label: "Projects", value: "15+ Delivered" },
              { label: "Availability", value: "Open to Work", highlight: true },
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
            <a href="/Rahmat_Ullah_Resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 border border-slate-700 hover:border-orange-500/50 hover:text-white transition-all hover:-translate-y-0.5">
              Download Resume
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
