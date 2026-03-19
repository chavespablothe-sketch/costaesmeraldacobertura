import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import suite1 from "@/assets/property/suite1-new.jpg";
import suitePrincipal from "@/assets/property/suite-principal-new.jpg";
import suite3 from "@/assets/property/suite3-new.jpg";

const suites = [
  {
    title: "Suíte 01",
    desc: "Conforto e praticidade em um ambiente acolhedor.",
    img: suite1,
    alt: "Suíte 01 — quarto principal",
  },
  {
    title: "Suíte 02 — Principal",
    subtitle: "com Hidromassagem",
    desc: "A suíte principal, projetada para o descanso absoluto com banheiro equipado com hidromassagem exclusiva.",
    img: suitePrincipal,
    alt: "Suíte 02 — banheiro com hidromassagem",
  },
  {
    title: "Suíte 03",
    subtitle: "com Hidromassagem",
    desc: "Reversível em estar social + lavabo do Ático. Um espaço inteligente que se adapta ao seu estilo de vida.",
    img: suite3,
    alt: "Suíte 03 — reversível em estar social",
  },
];

const SuitesSection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const lightboxNav = useCallback((dir: number) => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + dir + suites.length) % suites.length;
    });
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); lightboxNav(-1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); lightboxNav(1); }
      else if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, lightboxNav, closeLightbox]);

  return (
    <>
      <section className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto fade-section">
          <div className="text-center mb-16">
            <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
              O Santuário: Primeiro Pavimento
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
              As Três <span className="italic">Suítes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {suites.map((suite, i) => (
              <div key={suite.title} className="group cursor-pointer" onClick={() => setLightboxIndex(i)}>
                <div className="overflow-hidden mb-4">
                  <img
                    src={suite.img}
                    alt={suite.alt}
                    className="w-full h-[300px] object-cover brightness-110 contrast-110 saturate-110 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-1">
                  {suite.title}
                </h3>
                {suite.subtitle && (
                  <p className="text-sm font-sans text-secondary font-medium mb-2">
                    {suite.subtitle}
                  </p>
                )}
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  {suite.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center" onClick={closeLightbox}>
          <button className="absolute top-4 right-4 md:top-6 md:right-6 text-white/60 hover:text-white z-10 p-2" onClick={closeLightbox} aria-label="Fechar">
            <X className="w-7 h-7 md:w-8 md:h-8" />
          </button>
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-10 p-2 md:p-3 rounded-full hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); lightboxNav(-1); }}
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-10 p-2 md:p-3 rounded-full hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); lightboxNav(1); }}
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <div className="w-full h-full flex flex-col items-center justify-center px-12 md:px-20" onClick={(e) => e.stopPropagation()}>
            <img
              src={suites[lightboxIndex].img}
              alt={suites[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain select-none"
              draggable={false}
            />
            <div className="mt-4 text-center">
              <p className="text-white/90 font-serif text-lg">{suites[lightboxIndex].title}</p>
              <p className="text-white/50 font-sans text-sm mt-1">{suites[lightboxIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuitesSection;
