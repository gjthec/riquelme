import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  tags?: string[];
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  tags,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden cursor-pointer group transform transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-2xl border border-white/5"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Overlay mais suave para destacar as cores da nutrição */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-60" />

      <div className="relative h-full flex flex-col justify-end p-8 z-10">
        <span className="text-xs font-bold tracking-[0.3em] text-yellow-400 uppercase mb-1 drop-shadow-lg">
          {subtitle}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white uppercase drop-shadow-md">
          {title}
        </h3>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 border border-yellow-400/30 rounded-full text-[10px] uppercase tracking-widest bg-yellow-400/20 backdrop-blur-md text-yellow-400 font-black shadow-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ActionCards: React.FC = () => {
  const phoneNumber = "553599098492";

  const openWhatsApp = (type: "Presencial" | "On-line") => {
    const message = `Olá, tudo bem? Gostaria de saber mais sobre a *Consulta ${type}* com o Dr. Riquelme Emanuel. Estou no aguardo.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section id="agendamentos" className="py-16 md:py-28 scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
        <Card
          subtitle="Atendimento Físico"
          title="Presencial"
          // Imagem que estava no online (Profissional/Atendimento)
          image="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1200"
          tags={["Aguanil-MG"]}
          onClick={() => openWhatsApp("Presencial")}
        />
        <Card
          subtitle="Atendimento Digital"
          title="On-line"
          // Nova imagem vibrante focada em nutrição colorida
          image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200"
          tags={[]}
          onClick={() => openWhatsApp("On-line")}
        />
      </div>
    </section>
  );
};

export default ActionCards;
