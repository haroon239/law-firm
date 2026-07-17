import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "15+ Years Experience",
  "500+ Successful Cases",
  "Award-Winning Attorneys",
];

export function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d0e0d] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_30%_45%,rgba(200,162,77,0.1),transparent_58%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="relative mx-auto grid min-h-[760px] w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8 lg:pb-20 lg:pt-36 xl:gap-20">
        <div className="min-w-0">
          <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.28em] text-amber-300">
            <span className="h-px w-7 bg-amber-300" />
            Our Legal Services
          </p>

          <h1 className="max-w-2xl font-serif text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Comprehensive Legal Solutions for Individuals &amp; Businesses
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            From corporate law and civil litigation to family matters and
            intellectual property, our experienced legal team provides
            strategic solutions tailored to protect your interests and achieve
            the best possible outcome.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact#contact-form"
              className="inline-flex min-h-12 items-center justify-center gap-5 rounded-sm border border-amber-100/40 bg-gradient-to-r from-amber-200 via-[#f3deb0] to-amber-100 px-7 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-neutral-950 shadow-[0_14px_35px_-18px_rgba(245,190,72,0.8)] transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#services-list"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-amber-400/50 px-7 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-amber-300 transition hover:border-amber-300 hover:bg-amber-300/10"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-10 grid gap-4 text-[0.68rem] font-bold uppercase tracking-wide text-slate-100 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-300" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
          <div className="pointer-events-none absolute -left-5 -top-5 h-24 w-24 border-l border-t border-amber-400/60 sm:-left-7 sm:-top-7" />
          <div className="pointer-events-none absolute -bottom-5 -right-5 h-24 w-24 border-b border-r border-amber-400/60 sm:-bottom-7 sm:-right-7" />

          <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#080a0d] shadow-[0_30px_80px_-35px_rgba(0,0,0,0.95)] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/6]">
            <Image
              src="/images/services/hero.png"
              alt="AG&R Law Firm legal services office"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 52vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />
          </div>
        </div>
      </div>

      <a
        href="#services-list"
        aria-label="Scroll to legal services"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-amber-300 transition hover:text-amber-200 lg:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
