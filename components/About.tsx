import React from "react";

const About: React.FC = () => {
  const nutritionJourneyImage =
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200";

  return (
    <section className="py-32 border-t border-white/5 bg-brand-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1 space-y-14">
          <div className="space-y-6">
            <span className="text-brand-cream font-medium tracking-[0.4em] text-[10px] uppercase block mb-2 opacity-80">
              Trajetória e Propósito
            </span>
            <h3 className="text-4xl md:text-5xl font-serif italic text-brand-offwhite leading-tight font-extralight">
              Transformando ciência em resultado.
            </h3>
          </div>

          <div className="space-y-8 text-brand-taupe font-extralight leading-relaxed text-base text-justify tracking-wide">
            <p>
              Minha trajetória é movida por um único propósito:{" "}
              <span className="text-brand-offwhite font-light">
                transformar ciência em resultado
              </span>
              . Como especialista em Nutrição Esportiva e Estética, traduzo o
              rigor dos estudos em estratégias reais para que você alcance seus
              objetivos.
            </p>
            <p>
              Acredito que cada corpo é único. Por isso, meu método foca na{" "}
              <span className="text-brand-offwhite font-light">
                individualidade
              </span>
              : não existe uma fórmula mágica, mas sim a estratégia correta para
              o seu metabolismo. Minha missão é te guiar por esse caminho,
              mostrando que o equilíbrio nutricional é o pilar para sua
              evolução.
            </p>

            <div className="pt-8">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-6 text-brand-offwhite mb-3">
                  <div className="w-16 h-[1px] bg-brand-cream/40"></div>
                  <span className="font-serif italic text-3xl font-thin tracking-tight opacity-90">
                    Riquelme Emanuel
                  </span>
                </div>
                <div className="ml-24 flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-brand-cream font-light">
                    Nutricionista Esportivo e Estético
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-brand-taupe font-thin opacity-70">
                    CRN 35559
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="aspect-[4/5] relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl group">
            <img
              src={nutritionJourneyImage}
              alt="Performance e Nutrição"
              className="w-full h-full object-cover transition-all duration-[2000ms] transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-dark/30 opacity-40 group-hover:opacity-10 transition-opacity"></div>

            {/* Tag flutuante slim */}
            <div className="absolute bottom-8 left-8 right-8 p-8 bg-brand-dark/90 backdrop-blur-xl border border-white/10 rounded-2xl">
              <p className="text-[9px] uppercase tracking-[0.4em] text-brand-cream font-light mb-3">
                Especialidade
              </p>
              <p className="text-[13px] text-brand-offwhite/80 leading-relaxed italic font-thin tracking-wider">
                "Traduzindo o rigor dos estudos científicos em estratégias reais
                para sua melhor versão."
              </p>
            </div>
          </div>

          <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-cream/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
