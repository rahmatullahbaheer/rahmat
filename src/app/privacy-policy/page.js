import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Rahmat Ullah's portfolio website. Information about data collection, cookies, and contact form usage.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen bg-[#0a0e1a]" id="main-content">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: August 2025</p>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Overview</h2>
              <p className="leading-relaxed">
                This website (rahmatullah.dev) is the personal portfolio of Rahmat Ullah, a Full Stack Developer. 
                This privacy policy explains what information is collected when you visit this website and how it is used.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Information Collected</h2>
              <p className="leading-relaxed mb-3">This website does not collect personal information automatically. The contact form on the Contact page opens your default email client via mailto: — no form data is transmitted to or stored on any server operated by this website.</p>
              <p className="leading-relaxed">If you contact me directly via email (baheer224@gmail.com), I will receive your email address and the content of your message. This information is used solely to respond to your inquiry and is not shared with any third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Cookies</h2>
              <p className="leading-relaxed">
                This website does not use tracking cookies or third-party analytics cookies. 
                Next.js may use session-related technical cookies for its own functionality, 
                which do not track personal activity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Third-Party Services</h2>
              <p className="leading-relaxed">
                This website is hosted on Vercel. Vercel may collect anonymous usage data as part of their hosting service. 
                Please refer to <a href="https://vercel.com/legal/privacy-policy" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Vercel&apos;s Privacy Policy</a> for details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
              <p className="leading-relaxed">
                If you have any questions about this privacy policy, please contact me at{" "}
                <a href="mailto:baheer224@gmail.com" className="text-orange-400 hover:underline">baheer224@gmail.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
