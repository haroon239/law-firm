import Image from "next/image";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactSelect } from "./ContactSelect";

const contactDetails = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["3rd Floor, Ali Plaza", "Pakistan"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["+92 301 4440346", "Mon–Fri, 9am–6pm"],
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["info@lawfirm.com", "Replies within 24 hours"],
  },
  {
    icon: Clock3,
    title: "Office Hours",
    lines: ["Monday–Friday", "9:00 AM–6:00 PM"],
  },
];

const inputClasses =
  "min-h-12 w-full min-w-0 rounded-lg border border-white/10 bg-white/[0.035] px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400/70 focus:bg-white/[0.055] focus:ring-2 focus:ring-amber-400/10";

export function ContactFormSection() {
  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-[#080b12] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-amber-400/5 blur-[120px]" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-amber-400/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map(({ icon: Icon, title, lines }) => (
            <article
              key={title}
              className="rounded-2xl border border-amber-300/40 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-5 shadow-[0_18px_45px_-30px_rgba(245,190,72,0.7)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/10">
                <Icon className="h-5 w-5 text-amber-300" />
              </div>
              <h2 className="font-serif text-lg font-bold text-white">
                {title}
              </h2>
              <div className="mt-2 text-sm leading-6 text-slate-400">
                {lines.map((line) => (
                  <p key={line} className="break-words">
                    {line}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid min-w-0 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-amber-300/20 sm:min-h-[460px] lg:min-h-[600px]">
            <Image
              src="/images/contactus/office.png"
              alt="AG&R Law Firm private consultation office"
              fill
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

            <div className="absolute bottom-5 right-5 flex h-24 w-24 rotate-[-5deg] flex-col items-center justify-center rounded-full border-4 border-amber-100/60 bg-gradient-to-br from-amber-100 via-amber-300 to-[#c79a3c] text-center text-neutral-950 shadow-2xl sm:bottom-7 sm:right-7 sm:h-28 sm:w-28">
              <strong className="font-serif text-2xl leading-none sm:text-3xl">
                15+
              </strong>
              <span className="mt-1 text-[0.58rem] font-extrabold uppercase leading-tight sm:text-[0.65rem]">
                Years of
                <br />
                Excellence
              </span>
            </div>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.065] to-white/[0.025] p-5 shadow-2xl sm:p-7 lg:p-8">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                Request a Consultation
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
                Tell Us How We Can Help
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Share a few details about your legal matter. Our team will
                contact you to arrange a confidential consultation.
              </p>
            </div>

            <form className="grid min-w-0 gap-4 sm:grid-cols-2">
              <label className="min-w-0">
                <span className="sr-only">Full name</span>
                <input
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Full Name"
                  className={inputClasses}
                  required
                />
              </label>

              <label className="min-w-0">
                <span className="sr-only">Email address</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email Address"
                  className={inputClasses}
                  required
                />
              </label>

              <label className="min-w-0">
                <span className="sr-only">Phone number</span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Phone Number"
                  className={inputClasses}
                />
              </label>

              <label className="min-w-0">
                <span className="sr-only">Subject</span>
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className={inputClasses}
                />
              </label>

              <ContactSelect
                name="service"
                placeholder="Service Required"
                required
                options={[
                  { value: "corporate", label: "Corporate Law" },
                  { value: "family", label: "Family Law" },
                  { value: "property", label: "Property Law" },
                  { value: "litigation", label: "Civil Litigation" },
                  { value: "other", label: "Other Legal Matter" },
                ]}
              />

              <ContactSelect
                name="contactTime"
                placeholder="Preferred Contact Time"
                options={[
                  { value: "morning", label: "Morning" },
                  { value: "afternoon", label: "Afternoon" },
                  { value: "evening", label: "Evening" },
                ]}
              />

              <label className="min-w-0 sm:col-span-2">
                <span className="sr-only">Your message</span>
                <textarea
                  name="message"
                  placeholder="Tell us briefly about your legal matter"
                  rows={6}
                  className={`${inputClasses} resize-y py-3`}
                  required
                />
              </label>

              <label className="flex min-w-0 items-start gap-3 text-xs leading-5 text-slate-400 sm:col-span-2">
                <input
                  type="checkbox"
                  name="privacyAccepted"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-amber-400"
                />
                <span>
                  I agree to the privacy policy and understand that submitting
                  this form does not create an attorney-client relationship.
                </span>
              </label>

              <button
                type="submit"
                className="min-h-12 rounded-full border border-amber-100/30 bg-gradient-to-r from-[#b98224] via-[#ffe48a] to-[#c69131] px-6 py-3 text-sm font-extrabold text-neutral-950 shadow-[0_14px_35px_-12px_rgba(245,190,72,0.9)] transition hover:-translate-y-0.5 hover:brightness-110 sm:col-span-2"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
