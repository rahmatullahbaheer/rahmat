import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createPageMetadata } from "../lib/seo";
import { breadcrumbSchema } from "../lib/structured-data";

export const metadata = createPageMetadata(
  "Services",
  "Full Stack development services by Rahmat Ullah — Next.js development, React development, backend API development, database design, AI integration, real-time applications, and React Native mobile apps.",
  "/services"
);

const services = [
  {
    icon: "🏗️",
    title: "Full Stack Web Development",
    desc: "End-to-end web application development using modern technologies. From database schema to deployment — I handle the entire stack so you get a complete, production-ready product.",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "PostgreSQL", "Tailwind CSS"],
  },
  {
    icon: "▲",
    title: "Next.js Development",
    desc: "Server-side rendering, App Router, ISR, SEO optimization, and production deployments. Next.js applications built for performance, scalability, and search engine visibility.",
    stack: ["Next.js", "React", "TypeScript", "Vercel", "Tailwind CSS"],
  },
  {
    icon: "⚙️",
    title: "Backend & API Development",
    desc: "RESTful API design and development with Node.js and Express.js. Secure authentication (JWT, NextAuth), rate limiting, middleware, and scalable API architecture.",
    stack: ["Node.js", "Express.js", "JWT", "NextAuth.js", "REST APIs"],
  },
  {
    icon: "🗄️",
    title: "Database Design & Optimization",
    desc: "MongoDB schema design with aggregation pipelines, PostgreSQL relational modeling, query optimization, and indexing strategies for high-performance data access.",
    stack: ["MongoDB", "PostgreSQL", "MySQL", "SQL", "Redis"],
  },
  {
    icon: "🤖",
    title: "AI Integration & Development",
    desc: "Integrating OpenAI and other AI APIs into web applications. Prompt engineering, streaming responses, cost optimization, and building AI-powered product features.",
    stack: ["OpenAI API", "Next.js", "Node.js", "Stream API"],
  },
  {
    icon: "⚡",
    title: "Real-Time Application Development",
    desc: "Building real-time features with Socket.IO for live chat, notifications, and data streaming. Video conferencing with Agora and Zoom SDK for communication platforms.",
    stack: ["Socket.IO", "Agora", "Zoom SDK", "WebSockets"],
  },
  {
    icon: "📱",
    title: "React Native Mobile Development",
    desc: "Cross-platform iOS and Android mobile applications using React Native and Expo. Native device APIs, smooth navigation, and optimized performance across platforms.",
    stack: ["React Native", "Expo", "JavaScript", "TypeScript"],
  },
  {
    icon: "💳",
    title: "Payment Integration",
    desc: "Secure payment processing with Stripe — subscription models, one-time payments, webhooks, and complete checkout flows for SaaS and e-commerce applications.",
    stack: ["Stripe", "Webhooks", "Node.js", "Next.js"],
  },
];

export default function ServicesPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <main className="pt-24 pb-20 min-h-screen bg-[#0a0e1a]" id="main-content">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-300">Services</li>
            </ol>
          </nav>

          <div className="mb-14 text-center">
            <span className="inline-block text-orange-500 font-semibold text-xs tracking-widest uppercase mb-3">What I Offer</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">Development Services</h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
              Specialized full-stack development services for startups, agencies, and businesses. 
              Every service is backed by real production experience — not just tutorials.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-[#111827] border border-slate-800 rounded-2xl p-7 hover:border-orange-500/40 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500/60 transition-all duration-500" />
                <div className="text-3xl mb-5">{service.icon}</div>
                <h2 className="text-white font-bold text-lg mb-3 group-hover:text-orange-400 transition-colors">{service.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.stack.map((tech) => (
                    <span key={tech} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#111d35] to-[#0f1729] border border-orange-500/15 rounded-2xl p-10 text-center">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-xs font-semibold">Available for new projects</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to build your project?</h2>
            <p className="text-slate-400 text-base mb-8 max-w-xl mx-auto">
              Tell me about your project requirements and I&apos;ll respond within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_4px_20px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5">
                Start a Project
              </a>
              <a href="/projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-slate-300 border border-slate-700 hover:border-orange-500/50 transition-all hover:-translate-y-0.5">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
