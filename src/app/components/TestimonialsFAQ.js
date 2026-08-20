"use client";
import { useState } from "react";
import Image from "next/image";

export default function TestimonialsFAQ() {
  const testimonials = [
    {
      text: "Rahmat is an exceptional full-stack developer. He understood our requirements perfectly and delivered a scalable, high-quality product on time. Communication and code quality were outstanding.",
      name: "Umer Farooq",
      role: "CEO, TechWave",
      avatar: "/profile.png",
      stars: 5,
    },
    {
      text: "Working with Rahmat on the CareerBooster AI project was a fantastic experience. His expertise in Next.js, API integration, and performance optimization made our launch seamless.",
      name: "Asad Khan",
      role: "CTO, NausalTech",
      avatar: "/profile.png",
      stars: 5,
    },
    {
      text: "Rahmat built our financial dashboard with Vue.js and Pinia with incredible attention to detail. Fast, responsive, and pixel-perfect execution.",
      name: "Sarah Jenkins",
      role: "Product Lead, Alphinex",
      avatar: "/profile.png",
      stars: 5,
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const faqs = [
    {
      q: "What technologies do you work with?",
      a: "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js (SSR & App Router), Vue.js (Pinia/Vuex), React Native with Expo, PostgreSQL, SQL, Socket.IO, and modern UI frameworks like Shadcn UI, Ant Design, and Tailwind CSS.",
    },
    {
      q: "Are you available for freelance projects?",
      a: "Yes! I am actively open to freelance projects, contracts, and full-time remote engineering roles worldwide. Feel free to contact me via email or phone.",
    },
    {
      q: "How do you ensure projects are delivered on time?",
      a: "I follow Agile sprint methodologies with structured milestone breakdowns, regular progress updates, CI/CD automated testing, and transparent communication throughout the project lifecycle.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes, I provide comprehensive post-launch support including performance monitoring, bug fixes, feature enhancements, and continuous cloud deployment maintenance.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-[#0a0e1a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Testimonials */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-orange-500 font-semibold text-xs tracking-widest uppercase mb-2 block">
                TESTIMONIALS
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
                What Clients Say
              </h2>

              {/* Testimonial Card */}
              <div className="bg-[#0f172a]/80 border border-slate-800 rounded-2xl p-7 sm:p-8 relative backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                {/* Large Orange Quote Mark */}
                <div className="text-orange-500 text-5xl font-serif font-black leading-none mb-3 opacity-90">
                  “
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal min-h-[72px]">
                  {testimonials[activeTestimonial].text}
                </p>

                {/* Author Info & Stars */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-slate-800 border border-orange-500/40 overflow-hidden relative">
                      <Image
                        src={testimonials[activeTestimonial].avatar}
                        alt={testimonials[activeTestimonial].name}
                        fill
                        sizes="44px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-slate-400 text-xs">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    {"★".repeat(testimonials[activeTestimonial].stars)}
                  </div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${
                      activeTestimonial === i ? "w-7 bg-orange-500" : "w-2 bg-slate-700 hover:bg-slate-500"
                    }`}
                    aria-label={`Testimonial slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: FAQs */}
          <div className="lg:col-span-6">
            <span className="text-orange-500 font-semibold text-xs tracking-widest uppercase mb-2 block">
              FAQS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-3.5">
              {faqs.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className={`bg-[#0f172a]/70 border rounded-xl overflow-hidden transition-all duration-200 backdrop-blur-sm ${
                      isOpen ? "border-orange-500/50 bg-[#0f172a]" : "border-slate-800/90 hover:border-slate-700"
                    }`}
                  >
                    <button
                      className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer bg-transparent border-none"
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    >
                      <span className="text-sm font-semibold text-white pr-4">
                        {f.q}
                      </span>
                      <span
                        className={`text-orange-400 transition-transform duration-300 shrink-0 text-sm ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/50">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
