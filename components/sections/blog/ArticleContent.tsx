// components/sections/blog/ArticleContent.tsx
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

export function ArticleContent({ post }: { post: BlogPost }) {
  const paragraphs = post.content.split("\n\n");

  return (
    <article className="w-full bg-[#111827] pt-32 sm:pt-36 pb-16 sm:pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <span className="inline-block bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-full mb-5">
          {post.category}
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
          {post.title}
        </h1>

        <div className="flex items-center gap-5 text-gray-400 text-sm mb-8">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {post.readingTime}
          </span>
        </div>

        <div className="relative rounded-xl overflow-hidden mb-10 aspect-[16/9]">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="space-y-5">
          {paragraphs.map((para, idx) => (
            <p key={idx} className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}