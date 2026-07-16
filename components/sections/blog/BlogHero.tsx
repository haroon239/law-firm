// components/sections/blog/BlogHero.tsx
import { Scale } from "lucide-react";

const stats = [
  { value: "150+", label: "Legal Articles" },
  { value: "20+", label: "Practice Areas" },
  { value: "15+", label: "Years of Expertise" },
  { value: "Weekly", label: "Legal Updates" },
];

export function BlogHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#111827]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/blog/BlogHero.png"
          alt="Premium law office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#111827]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20 text-center">
        <p className="flex items-center justify-center gap-2 text-[#D4AF37] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-6">
          <Scale className="w-4 h-4" strokeWidth={2} />
          Legal Insights
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Expert Legal Knowledge &amp; Professional Guidance
        </h1>

        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Stay informed with expert legal insights, industry updates,
          practical advice, and in-depth articles written by our experienced
          attorneys. Explore the latest developments in corporate law, family
          law, litigation, property law, and more.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20">
          <button className="bg-gradient-to-b from-[#C8A24D] to-[#D4AF37] text-[#111827] font-bold text-sm px-8 py-3.5 rounded-full shadow-[0_8px_24px_-8px_rgba(212,175,55,0.5)] hover:shadow-[0_8px_32px_-6px_rgba(212,175,55,0.7)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
            Browse Articles
          </button>
          <button className="border border-[#D4AF37]/60 text-white font-bold text-sm px-8 py-3.5 rounded-full hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-colors duration-300 whitespace-nowrap">
            Contact Our Lawyers
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative bg-black/40 backdrop-blur-md border border-[#D4AF37]/40 rounded-2xl px-4 py-6 sm:py-7 hover:border-[#D4AF37]/70 hover:-translate-y-1 transition-all duration-300"
            >
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1">
                {stat.value}
              </p>
              <p className="text-white text-xs sm:text-sm font-medium tracking-wide">
                {stat.label}
              </p>
              {/* soft gold glow under the card */}
              <div className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-[#D4AF37]/20 blur-xl rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 leading-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-14 sm:h-20 lg:h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C240,90 480,10 720,40 C960,70 1200,20 1440,55 L1440,100 L0,100 Z"
            fill="#111827"
          />
        </svg>
      </div>
    </section>
  );
}