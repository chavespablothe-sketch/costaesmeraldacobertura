import { Building2, Maximize, Sun, Bed, LayoutGrid, PartyPopper, Car, ShieldCheck } from "lucide-react";

const features = [
  { icon: Building2, title: "Cobertura Duplex", desc: "Dois pavimentos com ambientes integrados e acabamento de alto padrão." },
  { icon: Maximize, title: "282m² Totais", desc: "206m² de área privativa distribuídos em dois pavimentos generosos." },
  { icon: PartyPopper, title: "Ático Completo", desc: "Churrasqueira, cozinha gourmet, jacuzzi e varanda com vista panorâmica." },
  { icon: Sun, title: "Vista para o Mar", desc: "Vista livre para o mar e a Avenida Beira-mar Norte." },
  { icon: Bed, title: "3 Suítes*", desc: "Suítes amplas, incluindo suíte com hidromassagem." },
  { icon: LayoutGrid, title: "2 Cozinhas Formaplas", desc: "Cozinha principal equipada com eletrodomésticos Spicy + cozinha no ático." },
  { icon: Car, title: "2 Vagas + Hobby Box", desc: "Vagas livres para carros grandes, mais hobby box privativo." },
  { icon: ShieldCheck, title: "Terraço Telado", desc: "Segurança para crianças e pets com terraço todo telado." },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-luxury-warm">
      <div className="max-w-7xl mx-auto fade-section">
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
            Diferenciais
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
            O que torna esta cobertura <span className="italic">única</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-8 bg-card border border-border hover:border-secondary transition-colors"
            >
              <f.icon className="w-8 h-8 text-secondary mb-6 group-hover:text-foreground transition-colors" />
              <h3 className="text-xl font-serif mb-3 text-foreground">{f.title}</h3>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground font-sans mt-10 italic">
          *O living no ático é reversível para uma terceira suíte, com banheiro com hidromassagem.
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
