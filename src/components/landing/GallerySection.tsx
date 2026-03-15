import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import view from "@/assets/property/view.jpg";
import interior1 from "@/assets/property/interior1.jpg";
import living from "@/assets/property/living.jpg";
import livingView from "@/assets/property/living-view.png";
import gallery1 from "@/assets/property/gallery1.jpg";
import gallery2 from "@/assets/property/gallery2.jpg";
import gallery5 from "@/assets/property/gallery5.jpg";
import jacuzzi from "@/assets/property/jacuzzi.jpg";
import salao1 from "@/assets/property/salao1.jpg";
import salao2 from "@/assets/property/salao2.jpg";

const images = [
  { src: view, alt: "Vista panorâmica — varanda do Ático" },
  { src: livingView, alt: "Sala de estar com vista" },
  { src: interior1, alt: "Estar social com vista para o mar" },
  { src: gallery2, alt: "Cozinha — detalhe" },
  { src: gallery5, alt: "Cozinha e Churrasqueira do Ático" },
  { src: jacuzzi, alt: "Jacuzzi instalada — Ático" },
  { src: gallery1, alt: "Vista da sala de estar" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = useCallback((dir: number) => {
    setSelected((prev) => {
      if (prev === null) return null;
      return (prev + dir + images.length) % images.length;
    });
  }, []);

  const close = useCallback(() => setSelected(null), []);

  // Keyboard navigation
  useEffect(() => {
    if (selected === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigate(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigate(1);
      } else if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected, navigate, close]);

  // Touch/swipe support for mobile
  useEffect(() => {
    if (selected === null) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        navigate(diff > 0 ? 1 : -1);
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [selected, navigate]);

  return (
    <section className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-luxury-warm">
      <div className="max-w-7xl mx-auto fade-section">
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
            Galeria
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
            Cada ângulo, uma <span className="italic">inspiração</span>
          </h2>
        </div>

        {/* Modern grid: hero image + smaller grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
          {/* First large image */}
          <div
            className="cursor-pointer group overflow-hidden col-span-2 md:col-span-1 md:row-span-2"
            onClick={() => setSelected(0)}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full min-h-[250px] md:min-h-[600px] object-cover brightness-110 contrast-110 saturate-110 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          {/* Second and third */}
          {images.slice(1, 3).map((img, i) => (
            <div
              key={i + 1}
              className="cursor-pointer group overflow-hidden"
              onClick={() => setSelected(i + 1)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[160px] md:h-[290px] object-cover brightness-110 contrast-110 saturate-110 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Remaining grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
          {images.slice(3).map((img, i) => (
            <div
              key={i + 3}
              className="cursor-pointer group overflow-hidden"
              onClick={() => setSelected(i + 3)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[140px] md:h-[250px] object-cover brightness-110 contrast-110 saturate-110 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/60 hover:text-white z-10 p-2"
            onClick={close}
            aria-label="Fechar"
          >
            <X className="w-7 h-7 md:w-8 md:h-8" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-10 p-2 md:p-3 rounded-full hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Next */}
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-10 p-2 md:p-3 rounded-full hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Image */}
          <div className="w-full h-full flex flex-col items-center justify-center px-12 md:px-20" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain select-none"
              draggable={false}
            />
            <div className="mt-4 text-center">
              <p className="text-white/70 font-sans text-sm">
                {images[selected].alt}
              </p>
              <p className="text-white/30 font-sans text-xs mt-1">
                {selected + 1} / {images.length} — Use ← → para navegar
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
