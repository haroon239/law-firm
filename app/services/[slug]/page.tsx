import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Scale } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { getService, legalServices } from "@/data/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return legalServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return {
    title: `${service.title} | AG&R Law Firm`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return (
    <div className="min-h-screen bg-[#080b12] text-white">
      <Header />
      <main>
        <div className="relative">
          <Navigation />

          <section className="relative isolate flex min-h-[600px] items-end overflow-hidden sm:min-h-[680px]">
            <Image
              src="/images/services/services.png"
              alt="Modern AG&R Law Firm office"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-transparent to-black/30" />

            <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
              <Link href="/services#services-list" className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-amber-200">
                <ArrowLeft className="h-4 w-4" /> Back to all services
              </Link>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                <Scale className="h-4 w-4" /> Legal Practice Area
              </p>
              <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">{service.title}</h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-lg sm:leading-8">{service.shortDescription}</p>
            </div>
          </section>

          <section className="relative bg-[#080b12] py-16 sm:py-20 lg:py-24">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:gap-16 lg:px-8">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">How We Can Help</p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">Experienced counsel. Practical solutions.</h2>
                <p className="mt-6 text-base leading-8 text-slate-300">{service.description}</p>

                <div className="mt-10">
                  <h3 className="font-serif text-2xl font-bold text-white">Our {service.title} Services</h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.services.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-slate-200">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 rounded-2xl border border-amber-300/20 bg-gradient-to-br from-amber-300/10 to-transparent p-6 sm:p-8">
                  <h3 className="font-serif text-2xl font-bold text-white">Why Work With AG&amp;R?</h3>
                  <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-3xl border border-amber-300/25 bg-[#111827] p-6 shadow-2xl sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">Confidential Consultation</p>
                  <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white">Discuss your legal matter with our team.</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-400">Get clear guidance on your options and the next steps for your case.</p>
                  <Link href="/contact#contact-form" className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-200 to-[#c99b3d] px-5 py-3 text-sm font-bold text-neutral-950 transition hover:brightness-110">
                    Book Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <div className="mt-6 border-t border-white/10 pt-6 text-sm text-slate-400">
                    <p className="font-semibold text-white">Call our legal team</p>
                    <a href="tel:+923014440346" className="mt-1 inline-block text-amber-300 hover:text-amber-200">+92 301 4440346</a>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
