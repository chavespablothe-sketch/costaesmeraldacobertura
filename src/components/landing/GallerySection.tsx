import { useState } from "react";
import { X } from "lucide-react";

import interior1 from "@/assets/property/interior1.jpg";
import interior2 from "@/assets/property/interior2.jpg";
import staircase from "@/assets/property/staircase.jpg";
import kitchen from "@/assets/property/kitchen.jpg";
import bedroom from "@/assets/property/bedroom.jpg";
import bathroom from "@/assets/property/bathroom.jpg";
import terrace from "@/assets/property/terrace.jpg";
import balcony from "@/assets/property/balcony.jpg";
import view from "@/assets/property/view.jpg";
import gallery1 from "@/assets/property/gallery1.jpg";
import gallery2 from "@/assets/property/gallery2.jpg";
import gallery3 from "@/assets/property/gallery3.jpg";
import gallery4 from "@/assets/property/gallery4.jpg";
import gallery5 from "@/assets/property/gallery5.jpg";
import gallery6 from "@/assets/property/gallery6.jpg";
import jacuzzi from "@/assets/property/jacuzzi.jpg";
import salao1 from "@/assets/property/salao1.jpg";
import salao2 from "@/assets/property/salao2.jpg";

const images = [
  { src: interior1, alt: "Vista da sala de estar", span: "col-span-2 row-span-2" },
  { src: staircase, alt: "Estar social e acesso para o Ático", span: "" },
  { src: kitchen, alt: "Cozinha 01 — Formaplas + Eletrodomésticos", span: "" },
  { src: gallery2, alt: "Cozinha — detalhe", span: "" },
  { src: bedroom, alt: "Suíte 01", span: "" },
  { src: bathroom, alt: "Suíte 02, com hidromassagem", span: "" },
  { src: gallery3, alt: "Suíte 03, reversível em estar social", span: "" },
  { src: gallery4, alt: "Suíte 03 — banheiro com hidromassagem", span: "" },
  { src: gallery5, alt: "Cozinha 02 e Churrasqueira do Ático", span: "col-span-2" },
  { src: gallery6, alt: "Churrasqueira do Ático — Formaplas", span: "" },
  { src: jacuzzi, alt: "Jacuzzi instalada — Ático", span: "" },
  { src: terrace, alt: "Varanda privativa do Ático", span: "" },
  { src: balcony, alt: "Varanda privativa do Ático", span: "" },
  { src: view, alt: "Vista panorâmica — varanda do Ático", span: "col-span-2" },
  { src: interior2, alt: "Vista da sala de estar", span: "" },
  { src: gallery1, alt: "Vista da sala de estar", span: "" },
  { src: salao1, alt: "Salão de Festas", span: "" },
  { src: salao2, alt: "Salão de Festas", span: "" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto fade-section">
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
            Galeria
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
            Cada ângulo, uma <span className="italic">inspiração</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden cursor-pointer group ${img.span}`}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full min-h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={() => setSelected(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="text-center">
            <img
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-white/70 font-sans text-sm mt-4">{images[selected].alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
