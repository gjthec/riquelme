import React, { useState } from "react";

const Hero: React.FC = () => {
  const fallbackImage =
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2000";
  const [imgSrc, setImgSrc] = useState("riquelme.png");
  const [retryCount, setRetryCount] = useState(0);

  const handleImageError = () => {
    const paths = [
      "./riquelme.png",
      "/riquelme.png",
      "public/riquelme.png",
      "/public/riquelme.png",
    ];
    if (retryCount < paths.length) {
      setImgSrc(paths[retryCount]);
      setRetryCount(retryCount + 1);
    } else {
      setImgSrc(fallbackImage);
    }
  };

  const scrollToBooking = () => {
    const section = document.getElementById("agendamentos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-end pb-32 overflow-hidden bg-black">
      {/* Background Image - Posicionamento estratégico para Desktop */}
      <img
        src={imgSrc}
        alt="Dr. Riquelme Emanuel"
        onError={handleImageError}
        className="absolute w-full h-[105%] -top-[5%] lg:h-[125%] lg:-top-[25%] object-cover object-top z-0 transition-opacity duration-1000 left-0"
        style={{ filter: "brightness(0.55) contrast(1.1)" }}
      />

      {/* Overlays de Profundidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-10" />

      {/* Conteúdo Central */}
      <div className="relative z-20 text-center space-y-8 px-6 max-w-5xl">
        <div className="space-y-4">
          <h2 className="text-yellow-400 text-xs md:text-sm font-bold tracking-[0.6em] uppercase animate-pulse">
            Ciência Nutricional & Alta Performance
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif italic text-white leading-none tracking-tighter">
            Riquelme
            <br />
            <span
              className="font-sans font-black not-italic text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}
            >
              EMANUEL
            </span>
          </h1>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          <p className="text-sm md:text-base font-light tracking-[0.15em] text-gray-400 uppercase max-w-xl mx-auto leading-relaxed">
            Metodologia exclusiva focada em{" "}
            <span className="text-white font-medium">bioindividualidade</span> e
            resultados de alto impacto.
          </p>

          <button
            onClick={scrollToBooking}
            className="group relative px-10 py-5 bg-yellow-400 text-black font-black uppercase tracking-widest text-xs transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(250,204,21,0.25)]"
          >
            Começar Minha Transformação
            <span className="absolute -bottom-1 -right-1 w-full h-full border border-yellow-400/50 -z-10 group-hover:bottom-0 group-hover:right-0 transition-all"></span>
          </button>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
          Descobrir
        </span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-yellow-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
