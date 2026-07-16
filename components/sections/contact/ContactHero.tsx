import Image from "next/image";
import Link from "next/link";

export function ContactHero() {
  return (
    <section className="relative isolate flex min-h-[620px] w-full items-center overflow-hidden bg-neutral-950 sm:min-h-[680px] lg:min-h-[calc(100svh-7rem)]">
      <Image
        src="/images/contactus/hero.png"
        alt="Elegant AG&R Law Firm consultation office"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[64%_center] sm:object-[58%_center] lg:object-center"
      />

      <div className="absolute inset-0 bg-black/55 sm:bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/10 sm:from-black/90 sm:via-black/55 lg:via-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25" />

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] lg:block">
        <div className="absolute -right-20 top-[30%] h-px w-72 -rotate-45 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
        <div className="absolute -right-6 top-[44%] h-px w-80 -rotate-45 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent" />
        <div className="absolute -right-16 top-[58%] h-px w-72 -rotate-45 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
        <div className="absolute bottom-10 right-8 h-20 w-20 border-b border-r border-amber-400/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="max-w-xl">
          {/* <p className="mb-5 inline-flex rounded-md border border-amber-200/30 bg-gradient-to-b from-amber-200 to-[#c99b3d] px-4 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-neutral-950 shadow-[0_8px_24px_rgba(202,155,61,0.22)] sm:text-xs">
            Contact Us
          </p> */}

          <h1 className="max-w-lg font-serif text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Get Expert Legal Guidance
          </h1>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            Contact our experienced legal team for clear advice, trusted
            representation, and a confidential consultation tailored to your
            needs.
          </p>

          <Link
            href="#contact-form"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-gradient-to-r from-amber-200 via-amber-300 to-[#c99b3d] px-6 py-3 text-sm font-bold text-neutral-950 shadow-[0_12px_30px_-12px_rgba(245,190,72,0.8)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
    </section>
  );
}
