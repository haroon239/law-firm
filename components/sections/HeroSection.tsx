export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
      <div className="space-y-6">
        <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800">
          Strategic advocacy for complex matters
        </span>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
          Protecting your future with clear, confident legal guidance.
        </h1>
        <p className="max-w-xl text-lg leading-8 text-slate-600">
          From negotiations to courtroom representation, our law firm delivers
          practical solutions tailored to business, family, and personal legal
          needs.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Book a consultation
          </a>
          <a
            href="#practice"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-amber-700"
          >
            Explore services
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
          Why clients choose us
        </p>
        <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
          <li>• Responsive counsel that keeps you informed at every step.</li>
          <li>• A track record of thoughtful strategy and strong results.</li>
          <li>• Personalized representation built around your priorities.</li>
        </ul>
        <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
          <p className="text-sm text-slate-300">Available 24/7 for urgent matters</p>
          <p className="mt-2 text-2xl font-semibold">(555) 014-2789</p>
        </div>
      </div>
    </section>
  );
}
