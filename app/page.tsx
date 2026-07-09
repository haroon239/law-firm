import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { PracticeAreasBar } from "@/components/sections/PracticeAreasBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { TeamSection } from "@/components/sections/TeamSection";
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main>
        <div className="relative">
          <Navigation />
          <HeroSlider />
          <PracticeAreasBar />
          <AboutSection/>
          <TeamSection/>
        </div>
      </main>

      <Footer />
    </div>
  );
}