const cards = [
  {
    title: "208 m²",
    description:
      "De área privativa inteligentemente distribuída.",
  },
  {
    title: "Duplex",
    description:
      "Dois pavimentos que separam perfeitamente a vida íntima do entretenimento social.",
  },
  {
    title: "3 Suítes",
    description:
      "Projetadas para o máximo conforto, incluindo uma suíte no ático de design reversível.",
  },
];

const MasterpieceSection = () => {
  return (
    <section className="relative py-24 md:py-36 px-6 md:px-16 lg:px-24 overflow-hidden bg-primary">
      {/* Blueprint texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
        }}
      />

      <div className="relative max-w-6xl mx-auto fade-section">
        {/* Section title */}
        <div className="text-center mb-20">
          <p
            className="text-xs font-sans tracking-[0.35em] uppercase mb-5"
            style={{ color: "#C6A36A" }}
          >
            Visão Geral
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground leading-tight">
            Proporções de uma{" "}
            <span className="italic">Obra-Prima</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative p-10 md:p-12 text-center transition-all duration-500 hover:-translate-y-1"
              style={{
                border: "1px solid rgba(198, 163, 106, 0.25)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 40px rgba(198, 163, 106, 0.06), 0 8px 32px rgba(0,0,0,0.15)",
                }}
              />

              <h3
                className="relative text-4xl md:text-5xl font-serif font-medium mb-5"
                style={{ color: "#C6A36A" }}
              >
                {card.title}
              </h3>
              <p className="relative text-sm font-sans text-primary-foreground/60 leading-relaxed max-w-[280px] mx-auto">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterpieceSection;
