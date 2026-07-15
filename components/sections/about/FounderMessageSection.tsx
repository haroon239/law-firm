// components/sections/about/FounderMessageSection.tsx
import { Scale } from "lucide-react";

export function FounderMessageSection() {
  return (
    <section className="w-full bg-neutral-950 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* decorative gold linework */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute top-0 right-0 w-2/3 h-full border-t border-r border-amber-500/20" />
        <div className="absolute bottom-8 left-4 w-3 h-3 rotate-45 bg-amber-500/40" />
        <div className="absolute top-1/2 -translate-y-1/2 right-10 w-3 h-3 rotate-45 bg-amber-500/40 hidden lg:block" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Image column */}
          <div className="relative rounded-xl overflow-hidden border-2 border-amber-500/40 shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)] min-h-[320px] sm:min-h-[420px] lg:min-h-0">
            <img
              src="/images/about/founder.png"
              alt="John Anderson, Managing Partner & Founder"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content column */}
          <div className="flex flex-col justify-center">
            <p className="flex items-center gap-2 text-amber-500 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">
              <Scale className="w-4 h-4" strokeWidth={2} />
              Message from the Founder
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-6">
              Leading with Integrity, Excellence &amp; Justice
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              At AG&amp;R Law Firm, we believe that every client deserves
              trusted legal guidance, unwavering commitment, and exceptional
              representation. Since our founding, our mission has remained
              the same—to protect our clients&apos; rights, build lasting
              relationships based on trust, and deliver strategic legal
              solutions that create meaningful results. Every case is handled
              with integrity, professionalism, and dedication because your
              success is our highest priority.
            </p>

            <div className="mb-6">
              <p className="text-white font-semibold text-base sm:text-lg">
                John Anderson
              </p>
              <p className="text-gray-400 text-sm">Managing Partner &amp; Founder</p>
            </div>

            {/* Signature — styled cursive text, not an image */}
            <p
              className="text-white text-2xl sm:text-3xl mb-8 leading-none"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              John Anderson
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}