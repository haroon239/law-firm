// components/sections/about/AboutHero.tsx
import { Scale } from "lucide-react";

const stats = [
  { value: "15+", label: "YEARS EXPERIENCE" },
  { value: "500+", label: "SUCCESSFUL CASES" },
  { value: "98%", label: "CLIENT SATISFACTION" },
  { value: "24/7", label: "LEGAL SUPPORT" },
];

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/about/AboutHero.png"
          alt="AG&R Law Firm office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <p className="flex items-center justify-center gap-2 text-amber-500 text-xs sm:text-sm font-bold tracking-widest uppercase mb-5">
          <Scale className="w-4 h-4" strokeWidth={2} />
          About AG&amp;R Law Firm
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
          Excellence, Integrity &amp; Trusted Legal Representation
        </h1>

        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          For more than 15 years, AG&amp;R Law Firm has been dedicated to
          protecting the rights of individuals, families, and businesses
          through strategic legal solutions, unwavering integrity, and
          exceptional client service. Our experienced attorneys are committed
          to achieving the best possible outcome for every client.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20">
          <button className="bg-gradient-to-b from-amber-300 to-amber-500 text-neutral-900 font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity duration-300 whitespace-nowrap">
            Book a Free Consultation
          </button>
          <button className="border border-white/40 text-white font-bold text-sm px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors duration-300 whitespace-nowrap">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-neutral-950/70 border border-amber-500/20 rounded-xl px-4 py-6 sm:py-8"
            >
              <p className="font-serif text-3xl sm:text-4xl font-bold text-amber-500 mb-2">
                {stat.value}
              </p>
              <p className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}