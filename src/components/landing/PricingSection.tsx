import { MessageCircle } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-background">
      <div className="max-w-3xl mx-auto fade-section">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
            Oportunidade
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
            Uma oportunidade na{" "}
            <span className="italic">Beira-Mar Norte</span>
          </h2>
        </div>

        {/* Pricing card */}
        <div className="border border-border bg-card p-10 md:p-16 text-center">
          <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-3">
            Preço total do imóvel
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground tracking-tight">
            R$ 2.690.000<span className="text-2xl md:text-3xl text-muted-foreground">,00</span>
          </p>

          {/* Divider */}
          <div className="h-[1px] bg-border my-10 md:my-12 max-w-xs mx-auto" />

          {/* Market context */}
          <div className="text-sm md:text-base font-sans text-muted-foreground leading-relaxed space-y-4 text-left max-w-2xl mx-auto">
            <p>
              Considerando o valor médio do metro quadrado em Florianópolis
              — atualmente na faixa de R$&nbsp;12&nbsp;mil a R$&nbsp;13&nbsp;mil,
              segundo dados do índice FipeZap — e levando em conta que regiões
              nobres como Agronômica e Beira-Mar Norte frequentemente superam
              essa média, o valor apresentado posiciona o imóvel como uma
              oportunidade relevante de mercado.
            </p>
            <p>
              Em imóveis de padrão semelhante e localização comparável, os
              valores por metro quadrado costumam ultrapassar a média da cidade,
              especialmente em unidades próximas à orla e com boa metragem.
              Nesse contexto, o apartamento se destaca como uma alternativa
              interessante para quem busca localização privilegiada,
              qualidade construtiva e potencial de valorização.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="https://wa.me/5548984238877?text=Olá! Tenho interesse na cobertura duplex do Costa Esmeralda e gostaria de agendar uma visita."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar visita ou solicitar mais informações
            </a>
            <p className="text-xs font-sans text-muted-foreground mt-4 tracking-wide">
              Atendimento direto com o corretor responsável pelo imóvel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
