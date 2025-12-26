
import React from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  tags?: string[];
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, subtitle, image, tags, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden cursor-pointer group transform transition-all duration-500 hover:scale-[1.01] active:scale-95 shadow-2xl border border-white/5"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/30 to-transparent transition-opacity duration-500 group-hover:opacity-70" />
      
      <div className="relative h-full flex flex-col justify-end p-8 z-10">
        <span className="text-[10px] font-medium tracking-[0.4em] text-brand-cream uppercase mb-2 drop-shadow-lg">{subtitle}</span>
        <h3 className="text-3xl md:text-4xl font-extralight tracking-tighter mb-4 text-brand-offwhite uppercase drop-shadow-md">{title}</h3>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-1.5 border border-brand-cream/30 rounded-full text-[9px] uppercase tracking-widest bg-brand-dark/40 backdrop-blur-md text-brand-cream font-medium"
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

  const openWhatsApp = (type: 'Presencial' | 'On-line') => {
    const message = `Olá Dr. Riquelme, gostaria de saber mais sobre a *Consulta ${type}*. Estou no aguardo.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="agendamentos" className="py-20 md:py-32 scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
        <Card 
          subtitle="Atendimento Físico"
          title="Presencial"
          image="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1200"
          tags={['Aguanil-MG']}
          onClick={() => openWhatsApp('Presencial')}
        />
        <Card 
          subtitle="Atendimento Digital"
          title="On-line"
          image="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1200"
          tags={[]}
          onClick={() => openWhatsApp('On-line')}
        />
      </div>
    </section>
  );
};

export default ActionCards;