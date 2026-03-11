import viewImg from "@/assets/property/view.jpg";

const LifestyleSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto fade-section">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <img
              src={viewImg}
              alt="Vista do ático da cobertura"
              className="w-full h-[450px] md:h-[550px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
              Lifestyle
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-8">
              Viver no <span className="italic">alto</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
              <p>
                Imagine receber amigos no terraço do ático enquanto o sol se põe sobre a Baía Norte.
                A churrasqueira, a jacuzzi e o espaço gourmet criam o cenário perfeito para momentos inesquecíveis.
              </p>
              <p>
                No pavimento inferior, a vida íntima acontece com total privacidade. Suítes amplas com
                closet, banheiros com acabamento premium e uma atmosfera de tranquilidade absoluta.
              </p>
              <p>
                A apenas 100 metros da Beira-mar Norte e próxima ao Beiramar Shopping, a localização
                une conveniência e qualidade de vida em um dos bairros mais desejados de Florianópolis.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {["Luz Natural", "Privacidade", "Terraço Gourmet", "Jacuzzi", "Vista Mar"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-xs font-sans tracking-wider uppercase border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
