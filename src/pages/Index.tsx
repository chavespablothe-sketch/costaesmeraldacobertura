import { useScrollFade } from "@/hooks/useScrollFade";
import HeroSection from "@/components/landing/HeroSection";
import OverviewSection from "@/components/landing/OverviewSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import GallerySection from "@/components/landing/GallerySection";
import FloorplanSection from "@/components/landing/FloorplanSection";
import LifestyleSection from "@/components/landing/LifestyleSection";
import MarketSection from "@/components/landing/MarketSection";
import ContactSection from "@/components/landing/ContactSection";

const Index = () => {
  useScrollFade();

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <OverviewSection />
      <FeaturesSection />
      <GallerySection />
      <FloorplanSection />
      <LifestyleSection />
      <MarketSection />
      <ContactSection />
    </main>
  );
};

export default Index;
