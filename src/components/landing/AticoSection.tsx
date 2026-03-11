import staircase from "@/assets/property/staircase.jpg";
import gallery5 from "@/assets/property/gallery5.jpg";
import terrace from "@/assets/property/terrace.jpg";
import bedroom from "@/assets/property/bedroom.jpg";

const AticoSection = () => {
  return (
    <section className="bg-background">
      {/* Ascensão ao Ático */}
      <div className="py-20 md:py-32 px-6 md:px-16 lg:px-24">
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

      {/* A Joia da Coroa */}
      <div className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto fade-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
              A Joia da Coroa: <span className="italic">O Ático</span>
            </h2>
            <p className="text-base font-sans text-primary-foreground/60 mt-4">
              Um Espaço Definido pela Sua Imaginação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="border border-primary-foreground/10 p-6">
              <h3 className="text-2xl font-serif text-center mb-3">Oásis Social</h3>
              <p className="text-sm font-sans text-primary-foreground/60 text-center leading-relaxed mb-6">
                O Ático pode atuar como uma expansiva sala de estar e entretenimento,
                perfeitamente integrada à varanda externa, lavabo e à segunda cozinha/churrasqueira
                (também equipada com móveis Formaplas).
              </p>
              <img
                src={gallery5}
                alt="Cozinha do Ático com churrasqueira e vista"
                className="w-full h-[280px] object-cover brightness-110 contrast-105"
                loading="lazy"
              />
            </div>

            <div className="border border-primary-foreground/10 p-6">
              <h3 className="text-2xl font-serif text-center mb-3">A 3ª Suíte</h3>
              <p className="text-sm font-sans text-primary-foreground/60 text-center leading-relaxed mb-6">
                Alternativamente, o espaço é inteligentemente reversível para uma terceira
                suíte máster, completa com hidromassagem exclusiva.
              </p>
              <img
                src={bedroom}
                alt="Terceira suíte reversível com banheiro e hidromassagem"
                className="w-full h-[280px] object-cover brightness-110 contrast-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Espaço Gourmet */}
      <div className="py-0">
        <div className="fade-section">
            <img
             src={terrace}
             alt="Espaço gourmet do Ático com churrasqueira e vista panorâmica"
            className="w-full h-[400px] md:h-[550px] object-cover brightness-110 contrast-105"
            loading="lazy"
          />
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                O Espaço Gourmet <span className="italic">Privativo</span>
              </h2>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                O segundo pavimento conta com sua própria infraestrutura completa.
                Uma segunda cozinha com móveis Formaplas e uma churrasqueira perfeitamente posicionada.
                Receba convidados, promova encontros e celebre momentos memoráveis com total independência do pavimento inferior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AticoSection;
