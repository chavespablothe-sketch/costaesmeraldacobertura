import livingImg from "@/assets/property/living.jpg";

const stats = [
  { value: "206m²", label: "Área Privativa" },
  { value: "282m²", label: "Área Total" },
  { value: "16", label: "Apartamentos" },
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
              Os dados básicos
              <br />
              <span className="italic">do imóvel</span>
            </h2>
            <div className="text-muted-foreground font-sans leading-relaxed mb-6 space-y-3">
              <p>
                Apartamento duplex, de cobertura, novo, semi mobiliado, com 2 cozinhas montadas
                Formaplas — a principal equipada com fogão, coifa, micro-ondas e lava-louças Spicy.
              </p>
              <p>
                São 282m² de área total, sendo 206m² de área privativa. Três dormitórios (3 suítes*),
                lavabo, estar social, churrasqueira e varanda na cobertura, com jacuzzi e pergolado.
                Terraço todo telado, para segurança de crianças e pets.
              </p>
              <p>
                Exclusividade: prédio com apenas 16 apartamentos. Apenas dois aptos por andar.
                Duas vagas de garagem livres para carros grandes + hobby box.
              </p>
              <p className="text-sm italic">
                Construção em regime de condomínio, acabamento de alto padrão, entregue em início de 2015.
              </p>
            </div>

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
              alt="Estar social e acesso para o Ático"
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
