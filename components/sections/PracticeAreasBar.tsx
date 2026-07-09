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
  { id: 6, name: "Civil Law", icon: Scale },
];

export function PracticeAreasBar() {
  return (
    <section className="w-full bg-white border-y border-gray-100 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-5 sm:gap-x-6 md:gap-x-8">
          {practiceAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.id}
                className="flex items-center gap-2 text-gray-500 hover:text-amber-600 transition-colors duration-300 cursor-pointer"
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