import { useState } from "react";
import { X } from "lucide-react";
import floorplan1 from "@/assets/property/floorplan1.png";
import floorplan2 from "@/assets/property/floorplan2.png";

const FloorplanSection = () => {
  const [zoomed, setZoomed] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-luxury-warm">
      <div className="max-w-7xl mx-auto fade-section">
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
            Plantas
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
            Planta e distribuição dos <span className="italic">ambientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {[
            {
              src: floorplan1,
              label: "Primeiro Pavimento",
              desc: "Sala de estar, cozinha e área de serviço, lavabo, duas suítes.",
              detail: "Vista para o mar (Av. Beira-mar Norte)"
            },
            {
              src: floorplan2,
              label: "Segundo Pavimento — Ático",
              desc: "Varanda externa, churrasqueira e cozinha, lavabo, banheiro com banheira, estar reversível em 3ª suíte.",
              detail: "Vista para o mar (Av. Beira-mar Norte)"
            },
          ].map((fp) => (
            <div key={fp.label} className="group">
              <div
                className="overflow-hidden bg-card border border-border cursor-pointer"
                onClick={() => setZoomed(fp.src)}
              >
                <img
                  src={fp.src}
                  alt={fp.label}
                  className="w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-serif mt-4 text-foreground">{fp.label}</h3>
              <p className="text-sm font-sans text-muted-foreground">{fp.desc}</p>
              <p className="text-xs font-sans text-secondary mt-1 italic">{fp.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {zoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setZoomed(null)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white" onClick={() => setZoomed(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={zoomed} alt="Planta" className="max-w-full max-h-[90vh] object-contain" />
        </div>
      )}
    </section>
  );
};

export default FloorplanSection;
