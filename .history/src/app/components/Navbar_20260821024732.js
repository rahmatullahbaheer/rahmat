"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0e1a]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-slate-800/80"
          : "bg-[#0a0e1a]/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Rahmat Ullah — Home"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(249,115,22,0.4)]">
            R
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-white font-bold text-sm group-hover:text-orange-400 transition-colors">
              Rahmat Ullah
            </span>
            <span className="text-slate-500 text-[10px] font-medium">
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-orange-400 bg-orange-500/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/resume"
            className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_2px_12px_rgba(249,115,22,0.35)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.55)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-slate-800 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden bg-[#0a0e1a]/98 backdrop-blur-xl border-t border-slate-800"
        >
          <ul className="max-w-7xl mx-auto px-4 py-4 space-y-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleNavClick}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive(link.href)
                      ? "text-orange-400 bg-orange-500/10"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 border-t border-slate-800 flex gap-3">
              <Link
                href="/resume"
                onClick={handleNavClick}
                className="flex-1 text-center px-4 py-2.5 rounded-xl border border-slate-700 text-sm font-semibold text-slate-300 hover:border-orange-500/50 hover:text-white transition-all"
              >
                Resume
              </Link>
              <Link
                href="/contact"
                onClick={handleNavClick}
                className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
