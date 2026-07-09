import { results } from "@/data/siteContent";

export function ResultsSection() {
  return (
    <section id="results" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
      <div className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Trusted results
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Decisive representation with a client-first approach.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {results.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center">
                <p className="text-3xl font-semibold">{item.value}</p>
                <p className="mt-2 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
