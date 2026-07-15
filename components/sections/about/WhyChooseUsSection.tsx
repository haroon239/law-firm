// components/sections/about/WhyChooseUsSection.tsx
import {
  Scale,
  Briefcase,
  Handshake,
  Trophy,
  Landmark,
  ShieldCheck,
  Clock,
} from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Experienced Legal Experts",
    description:
      "Our highly qualified attorneys bring years of courtroom and corporate legal experience across multiple practice areas.",
    icon: Briefcase,
  },
  {
    id: 2,
    title: "Client-Centered Approach",
    description:
      "Every client receives personalized legal guidance, transparent communication, and dedicated support throughout the process.",
    icon: Handshake,
  },
  {
    id: 3,
    title: "Proven Success Record",
    description:
      "Hundreds of successful cases and long-term client relationships built on trust and outstanding legal representation.",
    icon: Trophy,
  },
  {
    id: 4,
    title: "Strategic Legal Solutions",
    description:
      "We develop customized legal strategies designed to achieve the best possible outcome for every specific legal challenge.",
    icon: Landmark,
  },
  {
    id: 5,
    title: "Complete Confidentiality",
    description:
      "We maintain the highest standards of professionalism, ethics, and complete client confidentiality in all matters.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Available When You Need Us",
    description:
      "Our legal team is committed to providing timely responses and dependable support throughout your legal journey.",
    icon: Clock,
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="w-full bg-neutral-950 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* top divider line, separates this section from the one above */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <p className="flex items-center justify-center gap-2 text-amber-500 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">
            <Scale className="w-4 h-4" strokeWidth={2} />
            Why Choose AG&amp;R
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-5">
            The Difference That Sets Us Apart
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            At AG&amp;R Law Firm, we combine decades of legal expertise with a
            client-first philosophy, delivering strategic legal solutions
            with integrity, transparency, and exceptional results. Our
            commitment to excellence has earned the trust of individuals,
            businesses, and organizations.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="border border-amber-500/20 rounded-xl bg-neutral-900/40 p-6 sm:p-7 hover:border-amber-500/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-900" strokeWidth={1.75} />
                </div>
                <h3 className="text-white font-serif text-lg sm:text-xl font-bold leading-snug mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}