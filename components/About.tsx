import React from "react";

const About: React.FC = () => {
  // Imagem rica em cores e detalhes nutricionais (Frutas e vegetais vibrantes)
  const nutritionJourneyImage =
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200";

  return (
    <section className="py-32 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 space-y-12">
          <div className="space-y-6">
            <span className="text-yellow-400 font-bold tracking-[0.4em] text-xs uppercase block mb-2">
              Trajetória e Propósito
            </span>
            <h3 className="text-4xl md:text-5xl font-serif italic text-white leading-tight">
              Unindo ciência e empatia para transformar sua saúde.
            </h3>
          </div>

          <div className="space-y-8 text-gray-400 font-light leading-relaxed text-lg text-justify">
            <p>
              Minha história com a nutrição começou pela busca constante do
              equilíbrio entre{" "}
              <span className="text-white font-medium">
                performance e bem-estar
              </span>
              . Como
              <span className="text-white font-medium">
                {" "}
                Nutricionista Pós-graduando em Nutrição Esportiva e Estética
              </span>
              , dedico meus dias a estudar o impacto real dos nutrientes na vida
              de quem busca sua melhor versão.
            </p>
            <p>
              Acredito que cada corpo é único. Por isso, meu método foca na{" "}
              <span className="text-white">bioindividualidade</span>: não existe
              uma fórmula mágica, mas sim a estratégia correta para o seu
              metabolismo. Minha missão é te guiar por esse caminho, mostrando
              que comer bem é um ato de liberdade e autocuidado.
            </p>

            <div className="pt-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-[1px] bg-yellow-400"></div>
                <span className="font-serif italic text-2xl">
                  Riquelme Emanuel
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 ml-2">
                  Nutricionista Clínico
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src={nutritionJourneyImage}
              alt="Nutrição Vibrante e Saudável"
              className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-105"
            />
            {/* Overlay transparente para não tirar as cores */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity"></div>

            {/* Overlay de autoridade */}
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/60 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl">
              <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-400 font-bold mb-1">
                Ciência Aplicada
              </p>
              <p className="text-xs text-white/90 leading-relaxed italic">
                "Transformando a complexidade da bioquímica nutricional em
                resultados práticos para o seu dia a dia."
              </p>
            </div>
          </div>

          {/* Elementos Decorativos */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-yellow-400/5 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
