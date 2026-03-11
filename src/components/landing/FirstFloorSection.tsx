import luzNatural from "@/assets/property/luz-natural.png";
import livingViewImg from "@/assets/property/living-view.png";
import kitchen from "@/assets/property/kitchen.jpg";

const FirstFloorSection = () => {
  return (
    <section className="bg-background">
      {/* Luz Natural e Fluidez */}
      <div className="py-20 md:py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto fade-section">
          <div className="border border-border p-6 md:p-12">
            <img

              alt="Vista da sala de estar com luz natural e vista para o mar"
              className="w-full h-[350px] md:h-[500px] object-cover brightness-110 contrast-110 saturate-110 mb-8"
              loading="lazy" src="/lovable-uploads/857734f9-027f-4df3-a65b-c25ecf8c90dc.png" />
            
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
                Luz Natural e Fluidez <span className="italic">Espacial</span>
              </h2>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                O primeiro pavimento foi desenhado para maximizar a iluminação e a ventilação cruzada.
                Um living integrado que convida o horizonte da Agronômica para dentro da sua sala de estar todos os dias.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Primeiro Pavimento */}
      <div className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto fade-section">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-sans tracking-widest uppercase text-primary-foreground/50 mb-4">
                O Santuário
              </p>
              <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-6">
                Primeiro Pavimento: O Encontro da Luz <span className="italic">com o Espaço</span>
              </h2>
              <div className="inline-block border border-secondary/50 px-5 py-3 mb-6">
                <p className="text-sm font-sans text-secondary">
                  282 m² de Área Total<br />206 m² de Área Privativa
                </p>
              </div>
              <p className="text-sm font-sans text-primary-foreground/70 leading-relaxed">
                Um estar social banhado por luz natural, projetado para o conforto diário.
                O piso inferior concentra a vida familiar, garantindo isolamento acústico
                e tranquilidade, contemplando lavabo, área de serviço e o corredor de acesso às suítes.
              </p>
            </div>
            <div>
              <img
                src={livingViewImg}
                alt="Estar social banhado por luz natural com vista para o mar"
                className="w-full h-[400px] md:h-[500px] object-cover brightness-110 contrast-110 saturate-110"
                loading="lazy" />
              
            </div>
          </div>
        </div>
      </div>

      {/* Excelência Culinária */}
      <div className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto fade-section">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <img
                src={kitchen}
                alt="Cozinha com armários Formaplas e eletrodomésticos Spicy"
                className="w-full h-[400px] md:h-[500px] object-cover brightness-110 contrast-110 saturate-110"
                loading="lazy" />
              
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm font-sans tracking-widest uppercase text-primary-foreground/50 mb-4">
                O Santuário: Primeiro Pavimento
              </p>
              <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-6">
                Excelência Culinária <span className="italic">e Estar</span>
              </h2>
              <p className="text-base font-sans text-primary-foreground/70 leading-relaxed mb-8">
                Um living banhado por luz natural que flui perfeitamente para uma cozinha de altíssimo padrão.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-serif text-secondary mb-2">Movelaria:</h4>
                  <p className="text-xs font-sans text-primary-foreground/60 leading-relaxed">
                    Armários personalizados Formaplas.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-serif text-secondary mb-2">Eletrodomésticos:</h4>
                  <p className="text-xs font-sans text-primary-foreground/60 leading-relaxed">
                    Linha premium Spicy (fogão, coifa, micro-ondas e lava-louças).
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-serif text-secondary mb-2">Ambiente:</h4>
                  <p className="text-xs font-sans text-primary-foreground/60 leading-relaxed">
                    Área de serviço integrada e lavabo impecável.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FirstFloorSection;