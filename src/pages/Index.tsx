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
import PricingSection from "@/components/landing/PricingSection";
import ContactSection from "@/components/landing/ContactSection";

const SectionDivider = ({ variant = "light" }: { variant?: "light" | "dark" }) => (
  <div className={variant === "dark" ? "bg-primary" : "bg-background"}>
    <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
      <div className={`h-[1px] ${variant === "dark" ? "bg-primary-foreground/10" : "bg-border"}`} />
    </div>
  </div>
);

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
      <PricingSection />
      <ContactSection />
    </main>
  );
};

export default Index;
