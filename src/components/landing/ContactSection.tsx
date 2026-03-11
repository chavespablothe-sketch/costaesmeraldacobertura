import { MessageCircle, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-luxury-charcoal text-white">
      <div className="max-w-3xl mx-auto text-center fade-section">
        <p className="text-sm font-sans tracking-widest uppercase text-white/50 mb-4">
          Contato
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
          Agende uma <span className="italic">visita</span>
        </h2>
        <p className="text-lg font-sans text-white/70 mb-12 max-w-lg mx-auto">
          Entre em contato para conhecer esta cobertura pessoalmente.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5548984238877?text=Olá! Tenho interesse na cobertura duplex do Costa Esmeralda."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-sans text-sm tracking-widest uppercase hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="tel:+5548984238877"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-sans text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Ligar Agora
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs font-sans text-white/30 uppercase tracking-widest">
            Costa Esmeralda · Agronômica, Florianópolis
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
