import livingImg from "@/assets/property/living.jpg";

const stats = [
  { value: "208m²", label: "Área Privativa" },
  { value: "282m²", label: "Área Total" },
  { value: "16", label: "Unidades" },
  { value: "2", label: "Por Andar" },
];

const OverviewSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center fade-section">
          <div>
            <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
              Costa Esmeralda
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 text-foreground leading-tight">
              Sofisticação em
              <br />
              <span className="italic">cada detalhe</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-6">
              Situada no coração da Agronômica, a cobertura duplex do Costa Esmeralda oferece uma experiência
              residencial única. Com 208m² de área privativa distribuídos em dois pavimentos, cada ambiente foi
              pensado para proporcionar amplitude, conforto e privacidade.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              A arquitetura contemporânea se une a acabamentos de alto padrão — incluindo marcenaria Formaplas e
              eletrodomésticos Spicy — para criar um espaço que traduz exclusividade em cada detalhe.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-serif text-foreground">{s.value}</p>
                  <p className="text-xs font-sans tracking-wider uppercase text-muted-foreground mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={livingImg}
              alt="Living da cobertura duplex Costa Esmeralda"
              className="w-full h-[500px] md:h-[600px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
