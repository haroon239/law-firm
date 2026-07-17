// components/sections/PracticeAreasBar.tsx
import {
  Gavel,
  Building2,
  Users,
  Briefcase,
  Landmark,
  Scale,
} from "lucide-react";

interface PracticeArea {
  id: number;
  name: string;
  icon: React.ElementType;
}

const practiceAreas: PracticeArea[] = [
  { id: 1, name: "Criminal Law", icon: Gavel },
  { id: 2, name: "Property Law", icon: Building2 },
  { id: 3, name: "Family Law", icon: Users },
  { id: 4, name: "Business Law", icon: Briefcase },
  { id: 5, name: "Corporate Law", icon: Landmark },
  { id: 6, name: "Civil Law", icon: Scale }
];

export function PracticeAreasBar() {
  return (
    <section className="w-full overflow-hidden border-y border-amber-400/10 bg-[#111827] py-8 sm:py-10">
      <div className="relative w-full">
        {/* fade edges so items don't hard-cut at screen boundary */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#111827] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#111827] to-transparent sm:w-24" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* render the list TWICE back-to-back so the loop is seamless */}
          {[...practiceAreas, ...practiceAreas].map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={`${area.id}-${idx}`}
                className="flex cursor-pointer items-center gap-2 px-6 text-slate-400 transition-colors duration-300 hover:text-amber-300 sm:px-8"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 shrink-0" strokeWidth={1.75} />
                <span className="text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
                  {area.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
