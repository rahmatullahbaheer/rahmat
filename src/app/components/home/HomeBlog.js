import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";
import BlogCard from "../shared/BlogCard";
import { getFeaturedBlogPosts } from "../../data/blog";

export default function HomeBlog() {
  const posts = getFeaturedBlogPosts();

  return (
    <section id="blog-preview" className="py-24 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6">
          <SectionHeader
            label="Technical Blog"
            title="Developer Insights"
            subtitle="Practical articles on Next.js, React, Node.js, and modern web development."
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold hover:gap-3 transition-all whitespace-nowrap mb-14"
          >
            Read All Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
