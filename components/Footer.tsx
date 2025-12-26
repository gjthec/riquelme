import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-white/5 text-center space-y-10 bg-brand-dark">
      <div className="flex justify-center gap-12 text-[10px] uppercase tracking-[0.4em] text-brand-taupe font-thin">
        <a
          href="https://instagram.com/emanuelcamposnutri"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-cream transition-colors duration-500"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/553599098492"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-cream transition-colors duration-500"
        >
          WhatsApp
        </a>
      </div>

      <div className="space-y-6">
        <div className="h-[1px] w-8 bg-brand-cream/20 mx-auto mb-6"></div>

        {/* Logo SVG em escala reduzida para o rodapé */}
        <div className="flex justify-center w-full max-w-[140px] md:max-w-[180px] mx-auto">
          <img
            src="logo.svg"
            alt="Logo Riquelme Emanuel"
            className="w-full h-auto object-contain brightness-0 invert opacity-80 transition-opacity hover:opacity-100 duration-500"
            onError={(e) => {
              // Fallback elegante caso o SVG não carregue
              e.currentTarget.style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const title = document.createElement("p");
                title.className =
                  "text-[12px] text-brand-cream uppercase tracking-[0.5em] font-thin opacity-90 font-prompt";
                title.innerText = "Riquelme Emanuel";
                parent.appendChild(title);
              }
            }}
          />
        </div>

        <div className="flex flex-col gap-1.5 pt-2">
          <p className="text-[9px] text-brand-taupe uppercase tracking-[0.3em] font-prompt font-extralight">
            Nutricionista Esportivo e Estético
          </p>
          <p className="text-[8px] text-brand-taupe/40 uppercase tracking-[0.25em] font-prompt font-thin">
            CRN 35559
          </p>
        </div>
      </div>

      <p className="text-[8px] text-brand-light uppercase tracking-[0.4em] pt-8 opacity-30 font-thin">
        &copy; {new Date().getFullYear()} • Nutrição inteligente para quem busca
        evolução real
      </p>
    </footer>
  );
};

export default Footer;
