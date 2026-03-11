import { MapPin, ChevronDown } from "lucide-react";
import heroImg from "@/assets/property/hero.jpg";

const highlights = [
  "Cobertura Duplex",
  "Vista pro Mar",
  "3 Suítes*",
  "282m² Totais",
  "Ático com Churrasqueira",
];

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Cobertura Duplex Costa Esmeralda — vista panorâmica para o mar"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-16 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4 text-primary-foreground/80">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-sans tracking-widest uppercase">
            Agronômica, Florianópolis
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-white leading-tight mb-4">
          Oportunidade em Floripa,
          <br />
          <span className="italic font-normal">com linda vista pro mar.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 font-sans font-light max-w-xl mb-8">
          E com o charme de uma cobertura duplex.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {highlights.map((h) => (
            <span
              key={h}
              className="px-4 py-2 text-xs md:text-sm font-sans tracking-wide uppercase border border-white/30 text-white/90 rounded-sm backdrop-blur-sm"
            >
              {h}
            </span>
          ))}
        </div>

        <a
          href="#contato"
          className="inline-flex items-center self-start px-8 py-4 bg-secondary text-secondary-foreground font-sans text-sm tracking-widest uppercase hover:bg-secondary/90 transition-colors"
        >
          Falar com Corretor
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;
