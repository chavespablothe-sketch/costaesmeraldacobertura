import bedroom from "@/assets/property/bedroom.jpg";
import bathroom from "@/assets/property/bathroom.jpg";
import suite3Room from "@/assets/property/suite3-room.png";
const suites = [
  {
    title: "Suíte 01",
    desc: "A suíte principal, projetada para o descanso absoluto com vista privilegiada.",
    img: bedroom,
    alt: "Suíte 01 — quarto principal",
  },
  {
    title: "Suíte 02",
    subtitle: "com Hidromassagem",
    desc: "Conforto elevado ao máximo com banheiro equipado com hidromassagem exclusiva.",
    img: bathroom,
    alt: "Suíte 02 — banheiro com hidromassagem",
  },
  {
    title: "Suíte 03",
    subtitle: "com Hidromassagem",
    desc: "Reversível em estar social + lavabo do Ático. Um espaço inteligente que se adapta ao seu estilo de vida.",
    img: suite3Room,
    alt: "Suíte 03 — reversível em estar social",
  },
];

const SuitesSection = () => {
  return (
    <section className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto fade-section">
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
            O Santuário: Primeiro Pavimento
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
            As Três <span className="italic">Suítes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {suites.map((suite) => (
            <div key={suite.title} className="group">
              <div className="overflow-hidden mb-4">
                <img
                  src={suite.img}
                  alt={suite.alt}
                  className="w-full h-[300px] object-cover brightness-110 contrast-110 saturate-110 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-1">
                {suite.title}
              </h3>
              {suite.subtitle && (
                <p className="text-sm font-sans text-secondary font-medium mb-2">
                  {suite.subtitle}
                </p>
              )}
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                {suite.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuitesSection;
