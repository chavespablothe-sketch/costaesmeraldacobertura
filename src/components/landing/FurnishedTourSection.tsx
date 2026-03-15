import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Primeiro Pavimento
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

// Segundo Pavimento — Ático
import furnishedAticoCopa from "@/assets/property/furnished-atico-copa.jpg";
import furnishedAticoLiving from "@/assets/property/furnished-atico-living.jpg";
import furnishedAticoTerraco from "@/assets/property/furnished-atico-terraco.jpg";
import furnishedAticoTerraco2 from "@/assets/property/furnished-atico-terraco2.jpg";
import furnishedAticoJacuzzi from "@/assets/property/furnished-atico-jacuzzi.jpg";
import furnishedAticoJacuzzi2 from "@/assets/property/furnished-atico-jacuzzi2.jpg";
import furnishedAticoBanheiro1 from "@/assets/property/furnished-atico-banheiro1.jpg";
import furnishedAticoBanheiro2 from "@/assets/property/furnished-atico-banheiro2.jpg";
import furnishedAticoGourmet2 from "@/assets/property/furnished-atico-gourmet2.jpg";
import furnishedAticoAmbiente from "@/assets/property/furnished-atico-ambiente.jpg";
import furnishedEspacoGourmet from "@/assets/property/furnished-espaco-gourmet.jpg";
import furnishedHomeTheater from "@/assets/property/furnished-home-theater.jpg";

type Slide = {
  src: string;
  label: string;
  sub: string;
  floor: "1º Pavimento" | "2º Pavimento — Ático";
};

const slides: Slide[] = [
  // --- 1º PAVIMENTO ---
  { src: furnishedEntrada, label: "Hall de Entrada", sub: "Primeiro contato com a sofisticação dos acabamentos", floor: "1º Pavimento" },
  { src: furnishedSala1, label: "Sala de Estar", sub: "Amplo living com pé-direito generoso e escada ao ático", floor: "1º Pavimento" },
  { src: furnishedSala2, label: "Living & Jantar", sub: "Luz natural abundante e integração total", floor: "1º Pavimento" },
  { src: furnishedSala3, label: "Estar Social", sub: "Ambientes integrados com acesso ao pavimento superior", floor: "1º Pavimento" },
  { src: furnishedSala4, label: "Sala de Jantar", sub: "Marcenaria planejada em harmonia com a cozinha", floor: "1º Pavimento" },
  { src: furnishedSala5, label: "Circulação", sub: "Transição elegante entre living e cozinha", floor: "1º Pavimento" },
  { src: furnishedCozinha1, label: "Cozinha Gourmet", sub: "Bancada em granito, pendentes e móveis planejados", floor: "1º Pavimento" },
  { src: furnishedCozinha2, label: "Cozinha", sub: "Eletrodomésticos embutidos e acabamento premium", floor: "1º Pavimento" },
  { src: furnishedHall, label: "Hall e Lavabo", sub: "Espelho de corpo inteiro e acesso ao lavabo", floor: "1º Pavimento" },
  { src: furnishedLavabo, label: "Lavabo", sub: "Granito e louças de alto padrão", floor: "1º Pavimento" },
  { src: furnishedQuartoPrincipal2, label: "Suíte Principal", sub: "Iluminação natural, cortinas e cabeceira estofada", floor: "1º Pavimento" },
  { src: furnishedQuartoPrincipal3, label: "Suíte Principal", sub: "Painel em madeira, TV e armário espelhado", floor: "1º Pavimento" },
  { src: furnishedQuartoPrincipal1, label: "Suíte Principal", sub: "Banheiro integrado com divisória em vidro", floor: "1º Pavimento" },
  { src: furnishedBanheiroPrincipal, label: "Banheiro da Suíte", sub: "Banheira, bancada em granito e spots embutidos", floor: "1º Pavimento" },
  { src: furnishedQuartoInfantil1, label: "Dormitório", sub: "Espaço versátil com marcenaria sob medida", floor: "1º Pavimento" },
  { src: furnishedQuartoInfantil2, label: "Dormitório", sub: "Piso em madeira e ventilação cruzada", floor: "1º Pavimento" },
  { src: furnishedQuartoInfantil3, label: "Dormitório", sub: "Integração funcional entre os quartos", floor: "1º Pavimento" },

  // --- 2º PAVIMENTO — ÁTICO ---
  { src: furnishedAticoLiving, label: "Living do Ático", sub: "Copa, estar e home theater integrados", floor: "2º Pavimento — Ático" },
  { src: furnishedAticoAmbiente, label: "Estar e Copa", sub: "Bancada com banquetas e vista para o terraço", floor: "2º Pavimento — Ático" },
  { src: furnishedHomeTheater, label: "Home Theater", sub: "Projetor, tela retrátil e ar-condicionado", floor: "2º Pavimento — Ático" },
  { src: furnishedEspacoGourmet, label: "Espaço Gourmet", sub: "Bancada, cristaleira e cervejeira integrados", floor: "2º Pavimento — Ático" },
  { src: furnishedAticoGourmet2, label: "Espaço Gourmet", sub: "Segunda cozinha completa com vista panorâmica", floor: "2º Pavimento — Ático" },
  { src: furnishedAticoCopa, label: "Copa do Ático", sub: "Integração com o terraço e luz natural plena", floor: "2º Pavimento — Ático" },
  { src: furnishedAticoTerraco, label: "Terraço Panorâmico", sub: "Pergolado em madeira, deck e mesa de jantar", floor: "2º Pavimento — Ático" },
  { src: furnishedAticoTerraco2, label: "Terraço", sub: "Deck em madeira e jardim com pedras", floor: "2º Pavimento — Ático" },
  { src: furnishedAticoJacuzzi, label: "Jacuzzi Privativa", sub: "Hidromassagem com deck em madeira e paisagismo", floor: "2º Pavimento — Ático" },
  { src: furnishedAticoJacuzzi2, label: "Terraço com Jacuzzi", sub: "Espreguiçadeira e vista para a Beira-Mar", floor: "2º Pavimento — Ático" },
  { src: furnishedAticoBanheiro1, label: "Banheiro do Ático", sub: "Espelho amplo, bancada em granito e box em vidro", floor: "2º Pavimento — Ático" },
  { src: furnishedAticoBanheiro2, label: "Banheiro do Ático", sub: "Banheira de hidromassagem e nichos em madeira", floor: "2º Pavimento — Ático" },
];

const FurnishedTourSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
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

  const currentSlide = slides[selectedIndex];
  const isAtico = currentSlide?.floor === "2º Pavimento — Ático";

  return (
    <section className="py-24 md:py-36 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 fade-section">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-sans tracking-widest uppercase text-primary-foreground/50 mb-4">
            Tour pelos Ambientes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Marcenaria planejada, <span className="italic">bom gosto</span> em cada detalhe
          </h2>
          <p className="mt-4 text-primary-foreground/60 font-sans max-w-2xl mx-auto">
            Todos os ambientes contam com móveis planejados de primeira categoria 
            e acabamentos selecionados com requinte — do living à jacuzzi do ático.
          </p>
        </div>
      </div>

      {/* Floor indicator */}
      <div className="flex justify-center mb-6">
        <div
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-sans tracking-widest uppercase transition-all duration-500 border ${
            isAtico
              ? "border-secondary/40 text-secondary"
              : "border-primary-foreground/20 text-primary-foreground/60"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full transition-colors duration-500 ${
              isAtico ? "bg-secondary" : "bg-primary-foreground/40"
            }`}
          />
          {currentSlide?.floor}
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
                    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 right-6 md:right-8">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-white/40 font-sans text-[10px] tracking-widest uppercase">
                          {slide.floor}
                        </span>
                      </div>
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

      {/* Progress bar */}
      <div className="max-w-md mx-auto mt-8 px-6">
        <div className="h-[2px] bg-primary-foreground/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-foreground/40 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${((selectedIndex + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Counter */}
      <p className="text-center text-primary-foreground/40 font-sans text-sm mt-4">
        {selectedIndex + 1} / {slides.length}
      </p>
    </section>
  );
};

export default FurnishedTourSection;
