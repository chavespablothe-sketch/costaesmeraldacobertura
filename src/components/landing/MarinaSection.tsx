import { Anchor, Building2, TreePalm, TrendingUp, Ship, Dumbbell } from "lucide-react";
import marinaImg from "@/assets/property/marina-beira-mar.jpg";
import marinaImg2 from "@/assets/property/marina-beira-mar2.jpg";

const highlights = [
  {
    icon: Ship,
    title: "Marina para 600+ Embarcações",
    desc: "O maior complexo náutico do Sul do Brasil, a poucos minutos de caminhada do Costa Esmeralda.",
  },
  {
    icon: Building2,
    title: "110+ Espaços Comerciais",
    desc: "Restaurantes, lojas e serviços premium — conveniência e sofisticação na vizinhança do edifício.",
  },
  {
    icon: TreePalm,
    title: "Parque de 140 mil m²",
    desc: "Praças, quadras e áreas de convivência à beira da baía — o novo quintal dos moradores do Costa Esmeralda.",
  },
  {
    icon: Dumbbell,
    title: "Lazer à Porta de Casa",
    desc: "Academias ao ar livre, espelho d'água e gramados que ampliam o estilo de vida do edifício para além dos muros.",
  },
];

const MarinaSection = () => {
  return (
    <section className="py-24 md:py-36 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 fade-section">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-widest uppercase text-secondary mb-4">
            Valorização Extraordinária
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
            A Nova Marina da{" "}
            <span className="italic">Beira-Mar Norte</span>
          </h2>
          <p className="text-base md:text-lg font-sans text-primary-foreground/60 mt-5 max-w-3xl mx-auto leading-relaxed">
            Uma megaobra de R$&nbsp;350&nbsp;milhões vai transformar a vizinhança do
            Costa&nbsp;Esmeralda no endereço mais desejado de Florianópolis.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative mb-16 overflow-hidden">
          <img
            src={marinaImg}
            alt="Projeto do Parque Urbano Marina na Beira-Mar Norte, Florianópolis"
            className="w-full h-[300px] md:h-[500px] object-cover brightness-105"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6 md:p-10">
            <p className="text-xs md:text-sm font-sans tracking-widest uppercase text-secondary mb-1">
              Início das obras em 2026
            </p>
            <p className="text-lg md:text-2xl font-serif">
              Parque Urbano Marina — 140 mil m² à beira da Baía Norte
            </p>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((h) => (
            <div key={h.title} className="text-center md:text-left group">
              <div className="w-14 h-14 mx-auto md:mx-0 mb-5 rounded-full border border-secondary/40 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                <h.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-serif mb-2">{h.title}</h3>
              <p className="text-sm font-sans text-primary-foreground/60 leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Impact + second image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-7 h-7 text-secondary" />
              <h3 className="text-2xl md:text-3xl font-serif">
                Impacto no <span className="italic">Metro Quadrado</span>
              </h3>
            </div>
            <div className="space-y-4 text-sm md:text-base font-sans text-primary-foreground/70 leading-relaxed">
              <p>
                Megaobras à beira-mar impulsionam a valorização de todo o
                entorno. O Costa&nbsp;Esmeralda está posicionado para capturar
                essa <strong className="text-primary-foreground">valorização expressiva</strong> —
                antes mesmo da conclusão das obras.
              </p>
              <p>
                Restaurantes, marina, parque e comércio premium a poucos passos
                do edifício: quem compra agora garante um estilo de vida que
                só vai se <strong className="text-primary-foreground">valorizar com o tempo</strong>.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img
              src={marinaImg2}
              alt="Vista aérea do projeto da Marina na Beira-Mar Norte com a cidade ao fundo"
              className="w-full h-auto object-cover brightness-105"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4 md:p-6">
              <div className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-secondary" />
                <p className="text-xs md:text-sm font-sans text-primary-foreground/80">
                  Concessão de 35 anos — investimento 100% privado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarinaSection;
