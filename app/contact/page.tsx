import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us | AG&R Law Firm",
  description:
    "Contact AG&R Law Firm to schedule a confidential legal consultation with our experienced attorneys.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <main>
        <div className="relative">
          <Navigation />
          <ContactHero />
          <ContactFormSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
