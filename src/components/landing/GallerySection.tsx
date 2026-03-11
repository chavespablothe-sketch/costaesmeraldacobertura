import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import interior1 from "@/assets/property/interior1.jpg";
import interior2 from "@/assets/property/interior2.jpg";
import view from "@/assets/property/view.jpg";
import gallery1 from "@/assets/property/gallery1.jpg";
import gallery2 from "@/assets/property/gallery2.jpg";
import gallery5 from "@/assets/property/gallery5.jpg";
import gallery6 from "@/assets/property/gallery6.jpg";
import jacuzzi from "@/assets/property/jacuzzi.jpg";
import salao1 from "@/assets/property/salao1.jpg";
import salao2 from "@/assets/property/salao2.jpg";
import balcony from "@/assets/property/balcony.jpg";
import terrace from "@/assets/property/terrace.jpg";

const images = [
  { src: view, alt: "Vista panorâmica — varanda do Ático" },
  { src: interior1, alt: "Estar social com vista para o mar" },
  { src: gallery2, alt: "Cozinha — detalhe" },
  { src: gallery5, alt: "Cozinha e Churrasqueira do Ático" },
  { src: gallery6, alt: "Churrasqueira do Ático — Formaplas" },
  { src: jacuzzi, alt: "Jacuzzi instalada — Ático" },
  { src: terrace, alt: "Varanda privativa do Ático" },
  { src: balcony, alt: "Varanda privativa — outro ângulo" },
  { src: interior2, alt: "Estar social" },
  { src: gallery1, alt: "Vista da sala de estar" },
  { src: salao1, alt: "Salão de Festas" },
  { src: salao2, alt: "Salão de Festas — outro ângulo" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selected === null) return;
    setSelected((selected + dir + images.length) % images.length);
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-luxury-warm">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* First large image */}
          <div
            className="cursor-pointer group overflow-hidden md:row-span-2"
            onClick={() => setSelected(0)}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full min-h-[400px] md:min-h-[600px] object-cover brightness-110 contrast-110 saturate-110 transition-transform duration-700 group-hover:scale-105"
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
                className="w-full h-[290px] object-cover brightness-110 contrast-110 saturate-110 transition-transform duration-700 group-hover:scale-105"
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
                className="w-full h-[200px] md:h-[250px] object-cover brightness-110 contrast-110 saturate-110 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox with navigation */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
            onClick={() => setSelected(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="text-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-white/60 font-sans text-sm mt-4">
              {images[selected].alt}
              <span className="ml-3 text-white/30">{selected + 1} / {images.length}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
