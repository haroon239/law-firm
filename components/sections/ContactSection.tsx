export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              Schedule a consultation
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Let us help you move forward with confidence.
            </h2>
          </div>
          <a
            href="mailto:hello@meridianreedlaw.com"
            className="rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            hello@meridianreedlaw.com
          </a>
        </div>
      </div>
    </section>
  );
}
