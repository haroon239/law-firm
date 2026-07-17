import Image from "next/image";
import {
  Scale,
  ShieldCheck,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "Award-Winning Attorneys",
    description:
      "Recognized for outstanding advocacy, strategic counsel, and a consistent commitment to legal excellence.",
  },
  {
    icon: Users,
    title: "Client-Focused Representation",
    description:
      "Every case receives personal attention, responsive communication, and a solution tailored to the client.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential Consultation",
    description:
      "Your privacy is protected with complete discretion throughout every stage of your legal matter.",
  },
  {
    icon: Scale,
    title: "Transparent Legal Process",
    description:
      "Clear advice, honest assessments, and straightforward updates ensure you always understand the next step.",
  },
  {
    icon: TrendingUp,
    title: "Proven Success Rate",
    description:
      "A strong record of favorable results built through preparation, experience, and focused legal strategy.",
  },
];

export function WhyChooseServices() {
  return (
    <section className="relative overflow-hidden bg-[#070a11] py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-amber-300/5 blur-[130px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-300/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-14 xl:gap-20">
          <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-amber-300/20 sm:min-h-[520px] lg:min-h-0">
            <Image
              src="/images/services/services.png"
              alt="AG&R Law Firm modern legal office"
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-md sm:p-5">
                {[
                  ["15+", "Years"],
                  ["500+", "Cases"],
                  ["98%", "Success"],
                ].map(([value, label]) => (
                  <div key={label} className="border-r border-white/10 text-center last:border-0">
                    <p className="font-serif text-2xl font-bold text-amber-300 sm:text-3xl">{value}</p>
                    <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-widest text-slate-300 sm:text-xs">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute left-5 top-5 h-20 w-20 border-l border-t border-amber-300/50" />
            <div className="pointer-events-none absolute bottom-5 right-5 h-20 w-20 border-b border-r border-amber-300/50" />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-amber-300">Why Choose Us</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Why Clients Trust Our Legal Expertise</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">Our reputation is built on integrity, meticulous preparation, and legal strategies that go beyond representation. We protect the interests, assets, and long-term goals of every client we serve.</p>

            <div className="mt-6 flex items-center gap-4 text-sm italic text-slate-400">
              <span className="h-px w-10 shrink-0 bg-amber-300" />
              Defining the gold standard in legal counsel.
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {reasons.map(({ icon: Icon, title, description }, index) => (
                <article
                  key={title}
                  className={`group rounded-2xl border border-white/10 bg-[#111827]/90 p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 sm:p-6 ${index === 0 ? "sm:col-span-2" : ""}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-300/10 text-amber-300 transition group-hover:bg-amber-300 group-hover:text-neutral-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
