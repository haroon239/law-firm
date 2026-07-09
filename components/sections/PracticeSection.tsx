import { practiceAreas } from "@/data/siteContent";

export function PracticeSection() {
  return (
    <section id="practice" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
          Practice areas
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
          Legal support tailored to the moments that matter most.
        </h2>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {practiceAreas.map((area) => (
          <article key={area.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">{area.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
