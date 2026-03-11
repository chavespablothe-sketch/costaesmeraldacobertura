import { Trees, ShoppingBag, Landmark, UtensilsCrossed } from "lucide-react";
import locationMapImg from "@/assets/property/location-map.png";

const highlights = [
  {
    icon: Trees,
    title: "Natureza e Lazer",
    desc: "Apenas 100 metros da Avenida Beira-mar Norte, com vista livre.",
  },
  {
    icon: ShoppingBag,
    title: "Conveniência Premium",
    desc: "3 minutos (ou 7 min de caminhada) do Beiramar Shopping; 10 minutos do Villa Romana.",
  },
  {
    icon: Landmark,
    title: "Vizinhança Ilustre",
    desc: "A duas quadras da Casa d'Agronômica (Residência do Governador).",
  },
  {
    icon: UtensilsCrossed,
    title: "Gastronomia",
    desc: "Em frente à Família Lorenzi Pães Artesanais, a melhor panificadora da cidade.",
  },
];

const LocationSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto fade-section">
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-widest uppercase text-primary-foreground/50 mb-4">
            Localização
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
            O Epicentro do <span className="italic">Estilo de Vida</span>
          </h2>
          <p className="text-base font-sans text-primary-foreground/60 mt-4">
            Residencial Costa Esmeralda, Bairro Agronômica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((h) => (
            <div key={h.title} className="text-center group">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full border border-secondary/40 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                <h.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-serif mb-2">{h.title}</h3>
              <p className="text-sm font-sans text-primary-foreground/60 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-6">
              No Centro do <span className="italic">Que Importa</span>
            </h3>
            <div className="space-y-4 text-sm font-sans text-primary-foreground/70 leading-relaxed">
              <p><strong className="text-secondary">Raio 1 (Epicentro):</strong> Em frente à Família Lorenzi Pães Artesanais.</p>
              <p><strong className="text-secondary">Raio 2 (Passos de Distância):</strong> A 100 metros da imponente Avenida Beira-mar Norte e a duas quadras da Casa d'Agronômica (Residência do Governador).</p>
              <p><strong className="text-secondary">Raio 3 (Conveniência e Cultura):</strong> A apenas 3 minutos (ou 7 min de caminhada) do Beiramar Shopping.</p>
              <p><strong className="text-secondary">Raio 4 (Conexões Amplas):</strong> A 10 minutos do Shopping Villa Romana e Universidades (UFSC/UDESC); a menos de 20 minutos da Lagoa da Conceição.</p>
            </div>
          </div>
          <div>
            <img
              src={locationMapImg}
              alt="Localização do Residencial Costa Esmeralda na Agronômica"
              className="w-full h-[350px] object-cover brightness-105 contrast-105 opacity-80"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
