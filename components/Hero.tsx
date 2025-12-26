
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const fallbackImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2000";
  const [imgSrc, setImgSrc] = useState('riquelme.png');
  const [retryCount, setRetryCount] = useState(0);

  const handleImageError = () => {
    const paths = ['./riquelme.png', '/riquelme.png', 'public/riquelme.png', '/public/riquelme.png'];
    if (retryCount < paths.length) {
      setImgSrc(paths[retryCount]);
      setRetryCount(retryCount + 1);
    } else {
      setImgSrc(fallbackImage);
    }
  };

  const scrollToBooking = () => {
    const section = document.getElementById('agendamentos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-end pb-32 overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <img 
        src={imgSrc}
        alt="Dr. Riquelme Emanuel"
        onError={handleImageError}
        className="absolute w-full h-[105%] -top-[5%] lg:h-[125%] lg:-top-[25%] object-cover object-top z-0 transition-opacity duration-1000 left-0"
        style={{ filter: 'brightness(0.4) contrast(1.02)' }}
      />
      
      {/* Overlay Gradiente Profundo */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent z-10" />

      {/* Conteúdo Central */}
      <div className="relative z-20 text-center space-y-10 px-6 max-w-5xl">
        <div className="space-y-6 flex flex-col items-center">
          <h2 className="text-brand-cream text-[10px] md:text-[11px] font-thin tracking-[0.5em] uppercase opacity-80">
            Nutrição inteligente para quem busca evolução real
          </h2>
          
          {/* Logo SVG - Substitui o texto RIQUELME EMANUEL */}
          <div className="py-2 flex justify-center w-full max-w-[320px] md:max-w-[450px]">
            <img 
              src="logo.svg" 
              alt="Riquelme Emanuel" 
              className="w-full h-auto object-contain brightness-0 invert opacity-95"
              onError={(e) => {
                // Caso o arquivo logo.svg não exista, exibe um fallback elegante em texto slim
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const title = document.createElement('h1');
                  title.className = "text-5xl md:text-7xl font-thin text-brand-offwhite tracking-[-0.05em] uppercase";
                  title.innerHTML = 'Riquelme <span class="text-brand-cream">Emanuel</span>';
                  parent.appendChild(title);
                }
              }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="h-[1px] w-16 bg-brand-cream/20"></div>
          <p className="text-[11px] md:text-xs font-thin tracking-[0.25em] text-brand-taupe uppercase max-w-xl mx-auto leading-relaxed">
            Metodologia exclusiva focada em <span className="text-brand-cream font-light">individualidade</span> e resultados de alto impacto.
          </p>
          
          <button 
            onClick={scrollToBooking}
            className="group relative px-14 py-5 bg-brand-cream text-brand-dark font-medium uppercase tracking-[0.25em] text-[10px] transition-all hover:bg-brand-offwhite hover:scale-105 active:scale-95 shadow-2xl"
          >
            Agendar Consulta
          </button>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-20">
        <div className="w-[1px] h-10 bg-gradient-to-b from-brand-cream to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;