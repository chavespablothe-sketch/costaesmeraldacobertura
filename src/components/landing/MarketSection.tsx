import { Shield, MapPin, Gem, Building } from "lucide-react";

const points = [
  { icon: Building, title: "Exclusividade", desc: "Apenas 16 unidades no empreendimento, com somente 2 por andar." },
  { icon: MapPin, title: "Localização Premium", desc: "Agronômica, a 100m da Beira-mar Norte — um dos endereços mais valorizados de Florianópolis." },
  { icon: Gem, title: "Acabamento Superior", desc: "Marcenaria Formaplas, eletrodomésticos Spicy e materiais selecionados em cada detalhe." },
  { icon: Shield, title: "Oportunidade Consistente", desc: "Uma oportunidade sólida e bem posicionada dentro do mercado atual." },
];

const MarketSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto fade-section">
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-widest uppercase text-primary-foreground/60 mb-4">
            Mercado
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
            Uma oportunidade consistente
            <br />
            <span className="italic">dentro do mercado atual</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((p) => (
            <div key={p.title} className="text-center md:text-left">
              <p.icon className="w-8 h-8 text-secondary mx-auto md:mx-0 mb-4" />
              <h3 className="text-lg font-serif mb-2">{p.title}</h3>
              <p className="text-sm font-sans text-primary-foreground/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
