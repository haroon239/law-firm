// components/sections/blog/LatestArticles.tsx
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

export function LatestArticles({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="w-full bg-[#111827] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-center font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="group border border-[#D4AF37]/25 rounded-2xl overflow-hidden bg-neutral-900/40 hover:border-[#D4AF37]/60 transition-colors duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <span className="inline-block w-fit bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-full mb-4">
                  {post.category}
                </span>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-gray-500 text-xs mb-5">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <div className="mt-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#D4AF37] font-semibold text-sm hover:gap-2.5 transition-all duration-300"
                  >
                    Read More
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}