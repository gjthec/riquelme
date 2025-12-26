import React from "react";

const Step = ({
  icon,
  text,
  subtext,
}: {
  icon: React.ReactNode;
  text: string;
  subtext?: string;
}) => (
  <div className="flex flex-col items-center text-center space-y-8 w-full md:flex-1 group">
    <div className="relative">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-brand-cream/20 flex items-center justify-center p-6 bg-brand-medium/30 backdrop-blur-md z-10 relative group-hover:border-brand-cream/60 transition-all duration-700">
        <div className="w-8 h-8 text-brand-cream/60 group-hover:text-brand-cream transition-colors duration-500">
          {icon}
        </div>
      </div>
      <div className="absolute inset-0 bg-brand-cream/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
    <div className="space-y-3 max-w-[150px] md:max-w-none px-2">
      <p className="text-[10px] md:text-[11px] font-prompt font-light uppercase tracking-[0.15em] leading-tight text-brand-offwhite group-hover:text-brand-cream transition-colors">
        {text}
      </p>
      {subtext && (
        <p className="text-[9px] text-brand-taupe uppercase leading-tight font-prompt font-thin tracking-[0.2em]">
          {subtext}
        </p>
      )}
    </div>
  </div>
);

const Arrow = () => (
  <div className="flex items-center justify-center py-6 md:py-0 md:pt-6">
    <div className="w-[1px] h-6 bg-brand-cream/10 md:w-12 md:h-[1px] rotate-0"></div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 bg-brand-dark border-y border-white/5">
      <div className="text-center mb-28">
        <h2 className="text-3xl md:text-5xl font-prompt uppercase tracking-[0.3em] text-brand-cream font-extralight">
          Metodologia
        </h2>
        <div className="w-12 h-[1px] bg-brand-cream/20 mx-auto mt-8"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-2 max-w-6xl mx-auto px-6">
        <Step
          text="Pré-anamnese"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.8}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          }
        />
        <Arrow />
        <Step
          text="Consulta Individual"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.8}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          }
        />
        <Arrow />
        <Step
          text="Entrega do Plano"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.8}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          }
        />
        <Arrow />
        <Step
          text="Assessoria"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.8}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          }
        />
        <Arrow />
        <Step
          text="Duração 30 dias"
          subtext="após entrega"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.8}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
      </div>
    </section>
  );
};

export default HowItWorks;
