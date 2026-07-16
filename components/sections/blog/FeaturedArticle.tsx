// components/sections/blog/FeaturedArticle.tsx
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

export function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <section className="w-full bg-[#111827] py-16 sm:py-20 relative overflow-hidden">
      {/* decorative gold geometric pattern, top-right */}
      <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 opacity-10">
        <div className="absolute inset-0 border-t border-r border-[#D4AF37] rotate-45" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-center font-serif text-3xl sm:text-4xl font-bold text-white mb-10 sm:mb-14">
          Featured Article
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#D4AF37]/30 rounded-2xl overflow-hidden bg-neutral-900/40">
          {/* Image */}
          <div className="relative min-h-[220px] md:min-h-0">
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <span className="inline-block w-fit bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-full mb-4">
              {post.category}
            </span>

            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug mb-3">
              {post.title}
            </h3>

            <div className="flex items-center gap-4 text-gray-400 text-xs sm:text-sm mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-block w-fit bg-gradient-to-b from-[#C8A24D] to-[#D4AF37] text-[#111827] font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              Read Full Article
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}