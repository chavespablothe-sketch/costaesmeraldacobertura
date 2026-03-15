import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import furnishedEntrada from "@/assets/property/furnished-entrada.jpg";
import furnishedSala1 from "@/assets/property/furnished-sala1.jpg";
import furnishedSala2 from "@/assets/property/furnished-sala2.jpg";
import furnishedSala3 from "@/assets/property/furnished-sala3.jpg";
import furnishedSala4 from "@/assets/property/furnished-sala4.jpg";
import furnishedSala5 from "@/assets/property/furnished-sala5.jpg";
import furnishedCozinha1 from "@/assets/property/furnished-cozinha1.jpg";
import furnishedCozinha2 from "@/assets/property/furnished-cozinha2.jpg";
import furnishedLavabo from "@/assets/property/furnished-lavabo.jpg";
import furnishedHall from "@/assets/property/furnished-hall.jpg";
import furnishedQuartoPrincipal1 from "@/assets/property/furnished-quarto-principal1.jpg";
import furnishedQuartoPrincipal2 from "@/assets/property/furnished-quarto-principal2.jpg";
import furnishedQuartoPrincipal3 from "@/assets/property/furnished-quarto-principal3.jpg";
import furnishedBanheiroPrincipal from "@/assets/property/furnished-banheiro-principal.jpg";
import furnishedQuartoInfantil1 from "@/assets/property/furnished-quarto-infantil1.jpg";
import furnishedQuartoInfantil2 from "@/assets/property/furnished-quarto-infantil2.jpg";
import furnishedQuartoInfantil3 from "@/assets/property/furnished-quarto-infantil3.jpg";
import furnishedHomeTheater from "@/assets/property/furnished-home-theater.jpg";
import furnishedHomeTheaterAmbiente from "@/assets/property/furnished-home-theater-ambiente.jpg";
import furnishedEspacoGourmet from "@/assets/property/furnished-espaco-gourmet.jpg";

const slides = [
  { src: furnishedEntrada, label: "Visão da Entrada", sub: "Integração entre cozinha e living" },
  { src: furnishedSala1, label: "Sala de Estar", sub: "Amplo living com escada para o ático" },
  { src: furnishedSala2, label: "Living & Jantar", sub: "Luz natural e vista panorâmica" },
  { src: furnishedSala3, label: "Estar e Escada", sub: "Acesso ao pavimento superior" },
  { src: furnishedSala4, label: "Sala de Jantar", sub: "Espaço integrado com a cozinha" },
  { src: furnishedSala5, label: "Hall e Cozinha", sub: "Passagem entre os ambientes" },
  { src: furnishedCozinha1, label: "Cozinha Gourmet", sub: "Bancada em madeira e pendentes" },
  { src: furnishedCozinha2, label: "Cozinha", sub: "Equipada com eletrodomésticos embutidos" },
  { src: furnishedHall, label: "Hall de Entrada", sub: "Espelho e acesso ao lavabo" },
  { src: furnishedLavabo, label: "Lavabo", sub: "Acabamento em granito" },
  { src: furnishedQuartoPrincipal2, label: "Suíte Principal", sub: "Ampla com iluminação natural" },
  { src: furnishedQuartoPrincipal3, label: "Suíte Principal", sub: "Painel em madeira e espelhos" },
  { src: furnishedQuartoPrincipal1, label: "Suíte Principal", sub: "Integração com banheiro em vidro" },
  { src: furnishedBanheiroPrincipal, label: "Banheiro da Suíte", sub: "Banheira e acabamento premium" },
  { src: furnishedQuartoInfantil1, label: "Quarto Infantil", sub: "Beliche e berço planejados" },
  { src: furnishedQuartoInfantil2, label: "Quarto Infantil", sub: "Decoração lúdica e funcional" },
  { src: furnishedQuartoInfantil3, label: "Quarto Infantil", sub: "Visão panorâmica do quarto" },
  { src: furnishedHomeTheater, label: "Home Theater", sub: "Sala com projetor e tela grande" },
  { src: furnishedHomeTheaterAmbiente, label: "Ambiente do Ático", sub: "Integração copa e estar" },
  { src: furnishedEspacoGourmet, label: "Espaço Gourmet", sub: "Copa do ático com bancada e adega" },
];

const FurnishedTourSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 md:py-36 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 fade-section">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-sans tracking-widest uppercase text-primary-foreground/50 mb-4">
            Tour pelo Apartamento
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Conheça cada <span className="italic">ambiente</span>
          </h2>
          <p className="mt-4 text-primary-foreground/60 font-sans max-w-xl mx-auto">
            Apartamento mobiliado e pronto para morar. Navegue pelo tour e veja cada detalhe.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div ref={emblaRef} className="overflow-hidden rounded-lg">
          <div className="flex">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] min-w-0"
              >
                <div className="px-2">
                  <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-lg">
                    <img
                      src={slide.src}
                      alt={slide.label}
                      className="w-full h-full object-cover"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                    {/* Gradient overlay for caption */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                      <p className="text-white font-serif text-xl md:text-2xl">{slide.label}</p>
                      <p className="text-white/60 font-sans text-sm mt-1">{slide.sub}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all"
          aria-label="Próxima foto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? "bg-primary-foreground w-6"
                : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
            }`}
            aria-label={`Ir para foto ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="text-center text-primary-foreground/40 font-sans text-sm mt-4">
        {selectedIndex + 1} / {slides.length}
      </p>
    </section>
  );
};

export default FurnishedTourSection;
