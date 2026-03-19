import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const suites = [
  {
    title: "Suíte 01",
    desc: "Conforto e praticidade em um ambiente acolhedor.",
    img: "/lovable-uploads/suite-01-v2.jpg",
    alt: "Suíte 01 — quarto",
  },
  {
    title: "Suíte 02 — Principal",
    subtitle: "com Hidromassagem",
    desc: "Projetada para o descanso absoluto com banheiro equipado com hidromassagem exclusiva.",
    img: "/lovable-uploads/suite-principal-v2.jpg",
    alt: "Suíte 02 — banheiro com hidromassagem",
  },
  {
    title: "Suíte 03",
    subtitle: "com Hidromassagem",
    desc: "Reversível em estar social + lavabo do Ático. Espaço inteligente que se adapta ao seu estilo de vida.",
    img: "/lovable-uploads/suite-03-v2.jpg",
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
      <section className="relative py-28 md:py-40 px-6 md:px-16 lg:px-24 bg-primary overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`,
        }} />

        <div className="relative max-w-7xl mx-auto fade-section">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-[11px] font-sans tracking-[0.3em] uppercase text-primary-foreground/40 mb-5">
              O Santuário · Primeiro Pavimento
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-primary-foreground leading-tight">
              As Três <span className="italic text-secondary">Suítes</span>
            </h2>
            <div className="w-16 h-[1px] bg-secondary/40 mx-auto mt-8" />
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {suites.map((suite, i) => (
              <div
                key={suite.title}
                className="group cursor-pointer"
                onClick={() => setLightboxIndex(i)}
              >
                {/* Image container */}
                <div className="relative overflow-hidden mb-6 border border-primary-foreground/10">
                  <img
                    src={suite.img}
                    alt={suite.alt}
                    className="w-full h-[340px] md:h-[380px] object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                    <span className="text-white/0 group-hover:text-white/80 text-xs font-sans tracking-[0.25em] uppercase transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      Ver em detalhe
                    </span>
                  </div>
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full border border-primary-foreground/20 bg-primary/60 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-primary-foreground/60 font-serif text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-serif text-primary-foreground mb-1 group-hover:text-secondary transition-colors duration-300">
                  {suite.title}
                </h3>
                {suite.subtitle && (
                  <p className="text-xs font-sans tracking-[0.2em] uppercase text-secondary/70 font-medium mb-3">
                    {suite.subtitle}
                  </p>
                )}
                <p className="text-sm font-sans text-primary-foreground/50 leading-relaxed">
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
