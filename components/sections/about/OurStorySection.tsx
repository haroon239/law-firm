// components/sections/about/OurStorySection.tsx
import { Scale, ShieldCheck, Users, TrendingUp } from "lucide-react";

const values = [
  { icon: ShieldCheck, label: "Integrity" },
  { icon: Users, label: "Client First" },
  { icon: TrendingUp, label: "Proven Results" },
];

export function OurStorySection() {
  return (
    <section className="w-full bg-neutral-950 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-amber-500/40" />
        <div className="absolute top-0 right-0 w-40 h-40 border-t border-r border-amber-500/40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Image column — ab text column ke barabar height le ga */}
          <div className="relative rounded-lg overflow-hidden border border-amber-500/20 min-h-[320px] lg:min-h-0">
            <img
              src="/images/about/office.png"
              alt="AG&R Law Firm office"
              className="absolute inset-0 w-full h-full lg:object-fill md:object-cover"
            />
          </div>

          {/* Content column */}
          <div>
            <p className="flex items-center gap-2 text-amber-500 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">
              <Scale className="w-4 h-4" strokeWidth={2} />
              Our Story
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-6">
              Building Trust Through Excellence in Law
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                AG&amp;R Law Firm was founded with a vision to provide
                exceptional legal services built on integrity,
                professionalism, and unwavering commitment to justice. From
                the beginning, our mission has been to protect our
                clients&apos; rights while delivering practical and strategic
                legal solutions.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Over the years, our experienced attorneys have successfully
                represented individuals, families, and businesses across a
                wide range of legal matters, earning a reputation for
                excellence, trust, and client-focused representation.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Today, we continue to combine legal expertise with
                personalized service, ensuring every client receives
                dedicated attention, transparent communication, and the
                highest standard of professional advocacy.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.label}
                    className="border border-amber-500/25 rounded-lg bg-neutral-900/60 p-4 sm:p-5 text-center hover:border-amber-500/50 transition-colors duration-300"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-amber-500/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-amber-500" strokeWidth={1.75} />
                    </div>
                    <p className="text-white font-semibold text-xs sm:text-sm leading-snug">
                      {value.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-gradient-to-b from-amber-300 to-amber-500 text-neutral-900 font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-300">
                Learn More About Us
              </button>
              <button className="border border-amber-500/50 text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-amber-500/10 transition-colors duration-300">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}