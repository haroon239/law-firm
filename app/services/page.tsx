import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { WhyChooseServices } from "@/components/sections/services/WhyChooseServices";
import { ServicesFaq } from "@/components/sections/services/ServicesFaq";

export const metadata: Metadata = {
  title: "Legal Services | AG&R Law Firm",
  description:
    "Explore comprehensive legal services for individuals, families, and businesses from AG&R Law Firm.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <main>
        <div className="relative">
          <Navigation />
          <ServicesHero />
          <ServicesGrid />
          <WhyChooseServices />
          <ServicesFaq />
        </div>
      </main>
      <Footer />
    </div>
  );
}
