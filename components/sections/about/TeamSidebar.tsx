import { Award, BriefcaseBusiness, Scale, Star } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Award,
    title: "Award-Winning Lawyers",
    description: "Recognized legal professionals",
  },
  {
    icon: Scale,
    title: "Ethical Representation",
    description: "Justice delivered with integrity",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Specialists",
    description: "Business and commercial counsel",
  },
];

const stats = [
  { value: "15+", label: "Years" },
  { value: "500+", label: "Cases" },
  { value: "98%", label: "Success" },
];

export default function TeamSidebar() {
  return (
    <div className="w-full min-w-0 max-w-xl lg:max-w-md">
      <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
        <span className="h-px w-8 bg-amber-400" />
        Our Legal Team
      </p>

      <h2 className="font-serif text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
        Experience you can trust.
      </h2>

      <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
        Meet the legal professionals committed to protecting your rights with
        integrity, strategic thinking, and exceptional client service.
      </p>

      <div className="mt-5 grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
              <Icon className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="mt-0.5 text-xs text-slate-500">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-3 border-y border-white/10 py-4">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="border-r border-white/10 px-3 first:pl-0 last:border-0"
          >
            <p className="text-2xl font-bold text-amber-400">
              {value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Link
          href="#team"
          className="rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:brightness-110"
        >
          Meet Our Team
        </Link>
        <Link
          href="#contact"
          className="rounded-full border border-amber-400/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-amber-400 hover:bg-amber-400/10"
        >
          Contact Us
        </Link>
        <div
          className="ml-1 flex items-center gap-1 text-amber-400"
          aria-label="Five-star client rating"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} fill="currentColor" className="h-3.5 w-3.5" />
          ))}
        </div>
      </div>
    </div>
  );
}
