import livingViewImg from "@/assets/property/living-view.png";

const stats = [
  { value: "16", desc: "Unidades no total.\nA exclusividade de não ser apenas mais um." },
  { value: "02", desc: "Apartamentos por andar.\nPrivacidade absoluta." },
  { value: "02", desc: "Vagas de garagem amplas (livres)\n+ Hobby Box privativo." },
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-foreground leading-tight">
              A Raridade da
              <br />
              <span className="italic">Baixa Densidade</span>
            </h2>

            <div className="space-y-8 mt-10">
              {stats.map((s) => (
                <div key={s.value + s.desc} className="flex items-start gap-6">
                  <span className="text-5xl md:text-6xl font-serif text-secondary font-semibold leading-none min-w-[80px]">
                    {s.value}
                  </span>
                  <p className="text-sm md:text-base font-sans text-muted-foreground leading-relaxed whitespace-pre-line pt-2">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-border">
              <p className="text-sm font-sans text-muted-foreground italic">
                Edifício de alto padrão em regime de condomínio fechado, entregue no início de 2015.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={livingViewImg}
              alt="Fachada do Residencial Costa Esmeralda"
              className="w-full h-[500px] md:h-[600px] object-cover brightness-110 contrast-110 saturate-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
