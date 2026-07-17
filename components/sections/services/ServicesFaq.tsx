import Link from "next/link";
import { ArrowRight, Plus, Scale } from "lucide-react";

const faqs = [
  {
    question: "How do I schedule a legal consultation?",
    answer:
      "You can schedule a confidential consultation through our contact form or call our office directly. Our team will confirm a suitable time and let you know what information to prepare.",
  },
  {
    question: "What legal services do you provide?",
    answer:
      "We advise on corporate law, family law, criminal defense, civil litigation, real estate, immigration, intellectual property, and ongoing business legal matters.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. Secure telephone and video consultations are available for clients who cannot visit our office or who prefer to meet remotely.",
  },
  {
    question: "How much does the initial consultation cost?",
    answer:
      "Consultation fees depend on the practice area and complexity of the matter. We explain any applicable fee clearly before confirming your appointment.",
  },
  {
    question: "How long does a legal case usually take?",
    answer:
      "Timeframes vary based on complexity, the parties involved, and the court or authority handling the matter. After an initial review, we provide a realistic estimate and regular updates.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Yes. We treat client information with strict confidentiality and follow professional and legal obligations designed to protect your privacy.",
  },
  {
    question: "What documents should I bring to my consultation?",
    answer:
      "Bring relevant agreements, notices, identification, correspondence, court papers, and a short timeline of important events. Our team will advise if anything additional is required.",
  },
  {
    question: "Can your firm represent international clients?",
    answer:
      "Yes. We support international individuals and businesses where the matter falls within our jurisdiction and can arrange remote communication throughout the engagement.",
  },
];

export function ServicesFaq() {
  return (
    <section className="relative overflow-hidden bg-[#0c0b08] py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.07),transparent_35%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:px-8 xl:gap-20">
        <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-amber-300">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Have Questions? We Have Answers.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Find answers to common legal questions. If you need advice tailored
            to your situation, our experienced team is ready to assist.
          </p>

          <div className="relative mt-9 overflow-hidden rounded-3xl border border-amber-300/25 bg-[#111827] p-6 sm:p-8">
            <Scale className="pointer-events-none absolute -bottom-6 -right-4 h-32 w-32 text-amber-300/[0.035]" />
            <h3 className="font-serif text-3xl font-bold text-white">
              Need More Help?
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Contact our legal team for personalized guidance and a
              confidential consultation.
            </p>
            <Link
              href="/contact#contact-form"
              className="relative mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-200 via-[#f6d875] to-[#c99b3d] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.11em] text-neutral-950 transition hover:brightness-110"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="min-w-0 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition open:border-amber-300/35 open:shadow-[0_20px_45px_-30px_rgba(212,175,55,0.4)]"
              open={index === 0}
            >
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-base font-semibold text-white marker:content-none sm:min-h-24 sm:px-7 sm:text-lg [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-300/20 text-amber-300 transition group-open:rotate-45 group-open:bg-amber-300 group-open:text-neutral-950">
                  <Plus className="h-5 w-5" />
                </span>
              </summary>
              <div className="border-t border-white/10 px-5 py-5 sm:px-7 sm:py-6">
                <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
