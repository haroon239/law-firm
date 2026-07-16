// components/sections/ProcessSection.tsx
import { CalendarDays, Search, Gavel, ShieldCheck } from "lucide-react";

interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: ProcessStep[] = [
  {
    id: 1,
    number: "01",
    title: "Step 01 – Initial Consultation",
    description:
      "Schedule a confidential consultation to discuss your legal matter and receive professional guidance.",
    icon: CalendarDays,
  },
  {
    id: 2,
    number: "02",
    title: "Step 02 – Case Evaluation",
    description:
      "Our attorneys carefully review your case, analyze the evidence, and develop the best legal strategy.",
    icon: Search,
  },
  {
    id: 3,
    number: "03",
    title: "Step 03 – Legal Representation",
    description:
      "We represent your interests through negotiations, documentation, litigation, or courtroom proceedings.",
    icon: Gavel,
  },
  {
    id: 4,
    number: "04",
    title: "Step 04 – Successful Resolution",
    description:
      "We work tirelessly to achieve the best possible outcome while protecting your rights and interests.",
    icon: ShieldCheck,
  },
];

function StepCard({ step }: { step: ProcessStep }) {
  const Icon = step.icon;
  return (
    <div className="flex flex-col items-center">
      {/* Number badge */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-b from-amber-200 to-amber-500 flex items-center justify-center shadow-[0_0_14px_-2px_rgba(217,169,63,0.45)] mb-[-2rem] relative z-20">
        <span className="text-neutral-900 text-xl font-black">{step.number}</span>
      </div>

      {/* Card */}
      <div className="w-full border border-amber-500/25 rounded-xl bg-neutral-900/60 pt-10 pb-8 px-5 sm:px-6 text-center hover:border-amber-500/50 transition-colors duration-300">
        <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center text-[#C8A24D]">
          <Icon className="w-6 h-6" strokeWidth={1.75} />
        </div>
        <h3 className="text-white font-bold text-base sm:text-lg leading-snug mb-3">
          {step.title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

// small line segment with a dot in the middle, used between/around cards on desktop
function Connector({ edge }: { edge?: "start" | "end" }) {
  return (
    <div className="hidden xl:flex items-center h-px w-10 shrink-0 mt-8">
      {edge !== "start" && <span className="h-px flex-1 bg-amber-500/40" />}
      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
      {edge !== "end" && <span className="h-px flex-1 bg-amber-500/40" />}
    </div>
  );
}

export function ProcessSection() {
  return (
    <section
      id="our-process"
      className="w-full bg-[#1b1919] py-16 sm:py-20 lg:py-24  relative overflow-hidden scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute top-8 right-8 w-40 h-40 rounded-full border border-amber-500/30" />
        <div className="absolute top-16 left-0 w-24 h-24 border-t border-l border-amber-500/20 rotate-45" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-20">
          <p className="flex items-center justify-center gap-2 text-[#C8A24D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
            <Gavel className="w-4 h-4" strokeWidth={2} />
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-4">
            Simple Steps to Trusted Legal Representation
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We make the legal process straightforward and transparent. From
            your first consultation to the successful resolution of your
            case, our experienced attorneys are with you every step of the
            way.
          </p>
        </div>

        {/* Mobile / tablet / small-laptop: stacked grid, no connectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:hidden gap-y-14 gap-x-6">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

        {/* Full desktop only: row with connector dots between and at both ends */}
        <div className="hidden xl:flex items-start">
          {steps.map((step, idx) => (
            <div key={step.id} className="flex items-start flex-1">
              {idx === 0 && <Connector edge="start" />}
              <div className="flex-1">
                <StepCard step={step} />
              </div>
              <Connector edge={idx === steps.length - 1 ? "end" : undefined} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}