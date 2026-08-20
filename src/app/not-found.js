import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0e1a] flex items-center justify-center pt-16 pb-20" id="main-content">
        <div className="max-w-lg mx-auto px-6 text-center">
          {/* 404 visual */}
          <div className="relative mb-8">
            <p className="text-[8rem] sm:text-[10rem] font-black text-slate-800 leading-none select-none">
              404
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-3xl">
                🔍
              </div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let me help you find what you need.
          </p>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { label: "View Projects", href: "/projects" },
              { label: "About Me", href: "/about" },
              { label: "Technical Blog", href: "/blog" },
              { label: "Contact Me", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-[#111827] border border-slate-800 rounded-xl px-4 py-3 text-slate-300 text-sm font-medium hover:border-orange-500/50 hover:text-white transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_4px_15px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
