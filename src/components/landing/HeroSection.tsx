import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/property/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Cobertura Duplex Costa Esmeralda — vista panorâmica para o mar"
        className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-105"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm md:text-base font-sans tracking-[0.3em] uppercase text-white/70 mb-6">
            Residencial Costa Esmeralda · Agronômica, Florianópolis
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-white leading-tight mb-2">
            A Joia da Agronômica:
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8">
            <span className="italic font-normal">Exclusividade e Vista Definitiva</span>
          </h1>

          <div className="w-16 h-[3px] bg-secondary mx-auto mb-8" />

          <p className="text-lg md:text-xl text-white/80 font-sans font-light max-w-2xl mx-auto mb-12">
            Uma cobertura duplex onde o luxo encontra a inteligência financeira.
          </p>

          <a
            href="#contato"
            className="inline-flex items-center px-10 py-4 bg-secondary text-secondary-foreground font-sans text-sm tracking-[0.2em] uppercase hover:bg-secondary/90 transition-colors"
          >
            Falar com Corretor
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
};

export default HeroSection;
