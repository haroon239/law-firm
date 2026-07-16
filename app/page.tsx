import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { PracticeAreasBar } from "@/components/sections/PracticeAreasBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { TeamSection } from "@/components/sections/TeamSection";
import {ProcessSection} from "@/components/sections/ProcessSection";
import { StatsCounter } from "@/components/sections/StatsCounter";
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main>
        <div className="relative">
          <Navigation />
          <HeroSlider />
          <AboutSection/>
          <PracticeAreasBar />
          <TeamSection/>
          <StatsCounter/>
          <ProcessSection/>
        </div>
        
      </main>

      <Footer />
    </div>
  );
}