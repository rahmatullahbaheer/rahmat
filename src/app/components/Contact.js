export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#0a0e1a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0f172a] via-[#162036] to-[#0f172a] border border-orange-500/20 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Subtle Orange Glow Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="text-orange-500 font-semibold text-xs tracking-widest uppercase mb-2 block">
                LET&apos;S WORK TOGETHER
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Have a Project in Mind?
              </h2>
              <p className="text-slate-300 text-sm mt-2 max-w-md">
                Let&apos;s bring your ideas to life. I&apos;m just a message away!
              </p>
            </div>

            {/* Right Contact Details & CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full lg:w-auto justify-center">
              
              {/* Email */}
              <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800 px-4 py-3 rounded-2xl w-full sm:w-auto">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href="mailto:baheer224@gmail.com"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-orange-400 transition-colors"
                  >
                    baheer224@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800 px-4 py-3 rounded-2xl w-full sm:w-auto">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block uppercase tracking-wider">
                    Phone
                  </span>
                  <a
                    href="tel:+923435185993"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-orange-400 transition-colors"
                  >
                    +92 343 5185993
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="mailto:baheer224@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_4px_20px_rgba(249,115,22,0.4)] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap w-full sm:w-auto"
              >
                <span>Send Message</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
