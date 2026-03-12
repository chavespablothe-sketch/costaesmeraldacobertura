import staircase from "@/assets/property/staircase.jpg";
import terraceDeck from "@/assets/property/terrace-deck.jpg";
import jacuzziDeck from "@/assets/property/jacuzzi-deck.jpg";
import gourmetSpace from "@/assets/property/gourmet-space.png";

const AticoSection = () => {
  return (
    <section className="bg-background">
      {/* Ascensão ao Ático */}
      <div className="py-24 md:py-36 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto fade-section">
          <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[350px]">
            <div className="overflow-hidden">
              <img
                src={staircase}
                alt="Escadaria de acesso ao Ático"
                className="w-full h-full min-h-[320px] max-h-[420px] object-cover object-center brightness-110 contrast-105 saturate-110"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center px-8 md:px-16 py-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 italic">
                Ascensão ao Ático
              </h2>
              <div className="w-16 h-[2px] bg-secondary mb-6" />
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                Deixando a rotina no primeiro piso, os degraus conduzem ao verdadeiro
                ápice do Costa Esmeralda: um andar inteiro dedicado à celebração da vida.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* A Joia da Coroa — integrated section */}
      <div className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto fade-section">
          <div className="text-center mb-20">
            <p
              className="text-xs font-sans tracking-[0.35em] uppercase mb-5"
              style={{ color: "#C6A36A" }}
            >
              Segundo Pavimento
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
              A Joia da Coroa: <span className="italic">O Ático</span>
            </h2>
            <p className="text-base font-sans text-primary-foreground/60 mt-4 max-w-2xl mx-auto">
              Um espaço definido pela sua imaginação — onde o entretenimento social
              encontra a vista panorâmica e a infraestrutura gourmet completa.
            </p>
          </div>

          {/* Oásis Social — full width hero card */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-0 items-stretch border border-primary-foreground/10">
              <div className="overflow-hidden">
                <img
                  src={gallery5}
                  alt="Cozinha do Ático com churrasqueira e vista"
                  className="w-full h-full min-h-[350px] object-cover brightness-110 contrast-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center p-10 md:p-14">
                <h3
                  className="text-2xl md:text-3xl font-serif mb-4"
                  style={{ color: "#C6A36A" }}
                >
                  Oásis Social
                </h3>
                <div className="w-12 h-[1px] mb-6" style={{ backgroundColor: "rgba(198, 163, 106, 0.4)" }} />
                <p className="text-sm font-sans text-primary-foreground/70 leading-relaxed">
                  O Ático atua como uma expansiva sala de estar e entretenimento,
                  perfeitamente integrada à varanda externa com jacuzzi, lavabo e à segunda
                  cozinha/churrasqueira — também equipada com móveis Formaplas.
                </p>
              </div>
            </div>
          </div>

          {/* Gourmet integration */}
          <div className="grid md:grid-cols-2 gap-0 items-stretch border border-primary-foreground/10">
            <div className="flex flex-col justify-center p-10 md:p-14 order-2 md:order-1">
              <h3
                className="text-2xl md:text-3xl font-serif mb-4"
                style={{ color: "#C6A36A" }}
              >
                Espaço Gourmet <span className="italic">Privativo</span>
              </h3>
              <div className="w-12 h-[1px] mb-6" style={{ backgroundColor: "rgba(198, 163, 106, 0.4)" }} />
              <p className="text-sm font-sans text-primary-foreground/70 leading-relaxed mb-6">
                O segundo pavimento conta com sua própria infraestrutura completa.
                Uma segunda cozinha com móveis Formaplas e uma churrasqueira
                perfeitamente posicionada.
              </p>
              <p className="text-sm font-sans text-primary-foreground/50 leading-relaxed">
                Receba convidados, promova encontros e celebre momentos memoráveis
                com total independência do pavimento inferior.
              </p>
            </div>
            <div className="overflow-hidden order-1 md:order-2">
              <img
                src={gourmetSpace}
                alt="Espaço gourmet do Ático com churrasqueira e vista panorâmica"
                className="w-full h-full min-h-[350px] object-cover brightness-110 contrast-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AticoSection;
