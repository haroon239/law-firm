import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Globe2,
  Heart,
  Lightbulb,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { legalServices, type ServiceIconName } from "@/data/services";

const icons = {
  briefcase: BriefcaseBusiness,
  heart: Heart,
  shield: ShieldCheck,
  scale: Scale,
  building: Building2,
  globe: Globe2,
  lightbulb: Lightbulb,
  users: Users,
} satisfies Record<ServiceIconName, React.ElementType>;

export function ServicesGrid() {
  return (
    <section id="services-list" className="relative overflow-hidden bg-[#080b12] py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(45deg,#d4af37_1px,transparent_1px),linear-gradient(-45deg,#d4af37_1px,transparent_1px)] [background-position:0_0,0_0] [background-size:140px_140px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080b12]/50 via-[#080b12]/80 to-[#080b12]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-amber-300">Our Practice Areas</p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Expert Legal Services Tailored to Your Needs</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">Our experienced legal team provides strategic representation across a wide range of practice areas, delivering personalized solutions with integrity and proven results.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {legalServices.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article key={service.slug} className="group flex min-h-[300px] flex-col rounded-2xl border border-white/10 bg-[#111827]/95 p-6 shadow-[0_22px_55px_-35px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-1 hover:border-amber-300/50 hover:shadow-[0_25px_60px_-30px_rgba(212,175,55,0.35)] sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-100/30 bg-gradient-to-br from-amber-200 to-amber-500 text-neutral-950 shadow-lg">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">{service.shortDescription}</p>
                <Link href={`/services/${service.slug}`} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-amber-300 transition group-hover:gap-3 group-hover:text-amber-200">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
