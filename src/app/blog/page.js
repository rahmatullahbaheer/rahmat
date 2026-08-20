import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { breadcrumbSchema } from "../lib/structured-data";
import { getAllBlogPosts } from "../data/blog";
import BlogCard from "../components/shared/BlogCard";
import { blogPageKeywords } from "../lib/keywords";

export const metadata = {
  title: "Technical Blog — Rahmat Ullah | Next.js, React, Node.js Developer Articles",
  description:
    "Practical developer articles by Rahmat Ullah — Full Stack Developer. Topics: Next.js App Router, React Server Components, Node.js REST APIs, Socket.IO real-time apps, OpenAI integration, TypeScript, MongoDB, PostgreSQL, authentication, performance optimization, SEO, React Native & system design. Real production experience, actionable insights.",
  keywords: [
    ...blogPageKeywords,
    "Next.js App Router tutorial 2024",
    "Next.js App Router tutorial 2025",
    "React Server Components guide",
    "Socket.IO Node.js tutorial",
    "OpenAI Next.js integration guide",
    "Next.js SEO metadata API guide",
    "full stack developer blog",
    "MERN developer blog",
    "developer technical articles",
    "web development insights",
    "programmer articles Pakistan",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Technical Blog — Rahmat Ullah | Full Stack Developer",
    description:
      "Practical articles on Next.js, React, Node.js, TypeScript, MongoDB, PostgreSQL, Socket.IO & AI development. Real production insights by a Full Stack Developer.",
    url: "https://rahmatullah.dev/blog",
    type: "website",
    siteName: "Rahmat Ullah — Full Stack Developer",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Rahmat Ullah Technical Blog — Developer Articles" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rahmatullah_dev",
    title: "Technical Blog — Rahmat Ullah | Developer Articles",
    description: "Next.js, React, Node.js, Socket.IO, OpenAI & SEO articles. Real production insights from a Full Stack Developer.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
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
              <li className="text-slate-300">Blog</li>
            </ol>
          </nav>

          <div className="mb-14">
            <span className="inline-block text-orange-500 font-semibold text-xs tracking-widest uppercase mb-3">Technical Writing</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">Developer Blog</h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
              Practical insights on Next.js, React, Node.js, and modern web development — 
              based on real production experience. No filler content, just actionable knowledge.
            </p>
          </div>

          {/* Articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Topics Covered */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-8">
            <h2 className="text-white font-bold text-lg mb-5">Topics Covered</h2>
            <div className="flex flex-wrap gap-2">
              {["Next.js","React","Node.js","TypeScript","JavaScript","MongoDB","PostgreSQL","Socket.IO","OpenAI","REST APIs","Authentication","Performance","SEO","React Native","System Design","Full Stack"].map((topic) => (
                <span key={topic} className="text-sm px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
