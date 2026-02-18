import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const points = [
    "Homens que se sentem invisíveis perto de caras mais confiantes",
    "Quem já perdeu mulher para “idiota seguro demais”",
    "Quem trava na hora de responder",
    "Quem quer parar de competir por aprovação e começar a gerar atração"
  ];

  return (
    <section className="bg-brand-accent py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-10 uppercase tracking-tight">
          Para quem é o Código Alfa?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-1" />
              <p className="text-white font-semibold text-lg">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};