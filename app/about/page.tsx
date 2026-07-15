// app/about/page.tsx
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { OurStorySection } from "@/components/sections/about/OurStorySection";
import { WhyChooseUsSection } from "@/components/sections/about/WhyChooseUsSection";
import { FounderMessageSection } from "@/components/sections/about/FounderMessageSection";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <div className="relative">
          <Navigation />
          <AboutHero />
          <OurStorySection/>
          <WhyChooseUsSection/>
          <FounderMessageSection/>
        </div>
      </main>
      <Footer />
    </div>
  );
}