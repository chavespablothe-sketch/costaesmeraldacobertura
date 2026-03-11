import viewImg from "@/assets/property/view.jpg";

const locationPerks = [
  "Vista livre para o mar, a 100m da Av. Beira-mar Norte",
  "Agronômica — um dos bairros mais nobres e valorizados da cidade",
  "A menos de 20 minutos do centrinho da Lagoa da Conceição",
  "A 3 min do Beiramar Shopping (carro), ou 7 min de caminhada",
  "A duas quadras da Residência do Governador — Casa d'Agronômica",
  "A 10 min do Shopping Villa Romana, UFSC e UDESC",
  "Em frente à Família Lorenzi Pães Artesanais",
];

const LifestyleSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto fade-section">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <img
              src={viewImg}
              alt="Vista panorâmica — varanda privativa do Ático"
              className="w-full h-[450px] md:h-[550px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
              A localização perfeita
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-8">
              Viver no <span className="italic">alto</span>
            </h2>

            <ul className="space-y-3 text-muted-foreground font-sans leading-relaxed mb-8">
              {locationPerks.map((perk) => (
                <li key={perk} className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              {["Vista pro Mar", "Jacuzzi", "Churrasqueira", "Pergolado", "Terraço Telado"].map((tag) => (
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
