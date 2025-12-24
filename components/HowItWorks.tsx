
import React from 'react';

const Step = ({ icon, text, subtext }: { icon: React.ReactNode, text: string, subtext?: string }) => (
  <div className="flex flex-col items-center text-center space-y-4 w-full md:flex-1">
    <div className="relative">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/80 flex items-center justify-center p-5 bg-black z-10 relative group-hover:border-yellow-400 transition-colors duration-300">
        {icon}
      </div>
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="space-y-2 max-w-[160px] md:max-w-none">
      <p className="text-[12px] md:text-sm font-bold uppercase tracking-tight leading-tight text-white">
        {text}
      </p>
      {subtext && (
        <p className="text-[10px] md:text-xs text-gray-400 uppercase leading-tight font-light">
          {subtext}
        </p>
      )}
    </div>
  </div>
);

const Arrow = () => (
  <div className="flex items-center justify-center py-4 md:py-0 md:pt-8">
    <span className="text-yellow-400 text-3xl md:text-2xl font-black tracking-tighter rotate-90 md:rotate-0">
      ≫
    </span>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-yellow-400">
          COMO FUNCIONA?
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full opacity-50"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-2 max-w-6xl mx-auto px-4">
        <Step 
          text="Preenchimento da Pré-anamnese" 
          icon={
            <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          } 
        />
        <Arrow />
        <Step 
          text="Consulta + Avaliação Física completa" 
          icon={
            <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          } 
        />
        <Arrow />
        <Step 
          text="Entrega da dieta" 
          icon={
            <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          } 
        />
        <Arrow />
        <Step 
          text="Feedbacks e assessoria" 
          icon={
            <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          } 
        />
        <Arrow />
        <Step 
          text="Duração por 30 dias" 
          subtext="após o recebimento da dieta"
          icon={
            <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          } 
        />
      </div>
    </section>
  );
};

export default HowItWorks;
