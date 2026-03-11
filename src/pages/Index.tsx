import { useScrollFade } from "@/hooks/useScrollFade";
import HeroSection from "@/components/landing/HeroSection";
import MasterpieceSection from "@/components/landing/MasterpieceSection";
import OverviewSection from "@/components/landing/OverviewSection";
import LocationSection from "@/components/landing/LocationSection";
import FirstFloorSection from "@/components/landing/FirstFloorSection";
import SuitesSection from "@/components/landing/SuitesSection";
import AticoSection from "@/components/landing/AticoSection";
import GallerySection from "@/components/landing/GallerySection";
import FloorplanSection from "@/components/landing/FloorplanSection";
import MarketSection from "@/components/landing/MarketSection";
import ContactSection from "@/components/landing/ContactSection";

const Index = () => {
  useScrollFade();

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <MasterpieceSection />
      <OverviewSection />
      <LocationSection />
      <FirstFloorSection />
      <SuitesSection />
      <AticoSection />
      <GallerySection />
      <FloorplanSection />
      <MarketSection />
      <ContactSection />
    </main>
  );
};

export default Index;
