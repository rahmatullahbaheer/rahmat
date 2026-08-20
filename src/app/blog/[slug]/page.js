import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from "../../data/blog";
import { breadcrumbSchema, blogPostingSchema } from "../../lib/structured-data";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .filter((p) => p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 2);

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${slug}` },
  ]);

  const blogSchema = blogPostingSchema(post);

  // Simple markdown-like rendering for code blocks and headings
  const renderContent = (content) => {
    return content
      .trim()
      .split("\n\n")
      .map((block, i) => {
        if (block.startsWith("## ")) {
          return <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">{block.replace("## ", "")}</h2>;
        }
        if (block.startsWith("### ")) {
          return <h3 key={i} className="text-xl font-bold text-white mt-8 mb-3">{block.replace("### ", "")}</h3>;
        }
        if (block.startsWith("```")) {
          const code = block.replace(/^```[a-z]*\n?/, "").replace(/```$/, "");
          return (
            <pre key={i} className="bg-[#0a0e1a] border border-slate-800 rounded-xl p-5 overflow-x-auto my-5">
              <code className="text-sm text-slate-300 font-mono leading-relaxed">{code}</code>
            </pre>
          );
        }
        if (block.match(/^\d+\.\s/m)) {
          const items = block.split("\n").filter(Boolean);
          return (
            <ol key={i} className="list-decimal list-inside space-y-1.5 my-4">
              {items.map((item, j) => (
                <li key={j} className="text-slate-300 text-base leading-relaxed">{item.replace(/^\d+\.\s/, "")}</li>
              ))}
            </ol>
          );
        }
        if (block.startsWith("- ") || block.match(/^- /m)) {
          const items = block.split("\n").filter((l) => l.startsWith("- "));
          return (
            <ul key={i} className="space-y-1.5 my-4">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2.5 text-slate-300 text-base">
                  <span className="text-orange-500 mt-0.5 flex-shrink-0">▸</span>
                  {item.replace("- ", "")}
                </li>
              ))}
            </ul>
          );
        }
        // Inline code and bold
        const formatted = block
          .replace(/`([^`]+)`/g, '<code class="bg-slate-800 text-orange-400 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
          .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
          .replace(/\*([^*]+)\*/g, '<em>$1</em>');
        return <p key={i} className="text-slate-300 text-base leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: formatted }} />;
      });
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      <main className="pt-24 pb-20 min-h-screen bg-[#0a0e1a]" id="main-content">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500 flex-wrap">
              <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li className="text-slate-700">/</li>
              <li><a href="/blog" className="hover:text-orange-400 transition-colors">Blog</a></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-300 truncate">{post.title}</li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded-lg bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-semibold">
                {post.category}
              </span>
              <span className="text-slate-500 text-xs">{post.readingTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">{post.title}</h1>
            <p className="text-slate-400 text-base leading-relaxed mb-6">{post.excerpt}</p>

            {/* Author & Date */}
            <div className="flex items-center gap-4 py-4 border-t border-b border-slate-800">
              <div className="w-10 h-10 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold">
                R
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  <a href="/about" className="hover:text-orange-400 transition-colors">{post.author}</a>
                </p>
                <div className="flex items-center gap-3 text-slate-500 text-xs">
                  <time dateTime={post.publishedAt}>
                    Published {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                  {post.updatedAt !== post.publishedAt && (
                    <span>· Updated {new Date(post.updatedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose-custom">
            {renderContent(post.content)}
          </article>

          {/* Tags */}
          <div className="mt-10 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-sm px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-12">
              <h2 className="text-white font-bold text-xl mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="bg-[#111827] border border-slate-800 rounded-xl p-5 hover:border-orange-500/40 hover:-translate-y-0.5 transition-all"
                  >
                    <span className="block text-orange-400 text-xs font-semibold mb-2">{rp.category}</span>
                    <h3 className="text-white text-sm font-bold hover:text-orange-400 transition-colors line-clamp-2">{rp.title}</h3>
                    <p className="text-slate-500 text-xs mt-1.5 line-clamp-2">{rp.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Author CTA */}
          <div className="mt-12 bg-gradient-to-br from-[#111d35] to-[#0f1729] border border-orange-500/15 rounded-2xl p-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-lg flex-shrink-0">
                R
              </div>
              <div>
                <h2 className="text-white font-bold text-base mb-1">Written by Rahmat Ullah</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Full Stack Developer specializing in Next.js, React, and Node.js. 
                  Building scalable web applications and sharing practical insights.
                </p>
                <div className="flex gap-3">
                  <a href="/about" className="text-sm text-orange-400 font-semibold hover:text-orange-300 transition-colors">About Me →</a>
                  <a href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
