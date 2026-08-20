import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article className="group bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
      {/* Cover */}
      <div className="relative h-40 bg-gradient-to-br from-slate-800 to-[#0a0e1a] flex-shrink-0 flex items-center justify-center">
        <span className="text-orange-500/20 text-7xl select-none">✍</span>
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 rounded-md bg-orange-500/15 border border-orange-500/30 text-orange-400 text-[11px] font-semibold">
            {post.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 text-slate-500 text-[11px]">
          {post.readingTime}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <time className="text-slate-500 text-xs" dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </div>

        <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-orange-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-orange-400 text-xs font-semibold hover:gap-3 transition-all duration-200"
        >
          Read Article
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
