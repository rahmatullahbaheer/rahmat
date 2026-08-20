import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/shared/ContactForm";
import { breadcrumbSchema } from "../lib/structured-data";
import { contactPageKeywords } from "../lib/keywords";

export const metadata = {
  title: "Contact — Hire Rahmat Ullah | Full Stack Developer Available for Work",
  description:
    "Contact Rahmat Ullah — Full Stack Developer available for hire. Open to full-time positions, contract work, and freelance projects. Specializing in Next.js, React, Node.js, MongoDB, PostgreSQL, and AI integration. Remote-friendly. Based in Rawalpindi, Pakistan. Email: baheer224@gmail.com. Responds within 24 hours.",
  keywords: contactPageKeywords,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Hire Rahmat Ullah | Full Stack Developer",
    description:
      "Full Stack Developer available for hire — full-time, contract & freelance. Next.js, React, Node.js, AI. Remote-friendly. Get in touch today.",
    url: "https://rahmatullah.dev/contact",
    type: "website",
    siteName: "Rahmat Ullah — Full Stack Developer",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact Rahmat Ullah — Full Stack Developer for Hire" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rahmatullah_dev",
    title: "Contact Rahmat Ullah — Full Stack Developer for Hire",
    description: "Full Stack Developer available for full-time, contract & freelance. Next.js, React, Node.js. Remote-friendly. Responds in 24h.",
    images: ["/og-image.jpg"],
  },
};


const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "baheer224@gmail.com",
    href: "mailto:baheer224@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Rawalpindi, Pakistan (Remote-friendly)",
    href: null,
  },
];

export default function ContactPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
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
              <li className="text-slate-300">Contact</li>
            </ol>
          </nav>

          <div className="mb-12 text-center">
            <span className="inline-block text-orange-500 font-semibold text-xs tracking-widest uppercase mb-3">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">Let&apos;s Work Together</h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto">
              Whether you need a full-stack application, a Next.js project, backend APIs, or an AI-powered feature — 
              I&apos;m available and ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Availability */}
              <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                  <h2 className="text-white font-bold">Currently Available</h2>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Open to full-time positions, contract work, and freelance projects. 
                  Typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-5">
                <h2 className="text-white font-bold">Contact Information</h2>
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-white text-sm font-medium hover:text-orange-400 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* What I&apos;m Looking For */}
              <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">
                <h2 className="text-white font-bold mb-4">What I&apos;m Looking For</h2>
                <ul className="space-y-2.5">
                  {["Full-time developer roles", "Contract / freelance projects", "Long-term client partnerships", "Interesting technical challenges"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-400 text-sm">
                      <span className="text-orange-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#111827] border border-slate-800 rounded-2xl p-7 sm:p-10">
                <h2 className="text-white font-bold text-xl mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
