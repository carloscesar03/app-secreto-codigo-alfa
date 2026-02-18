import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="bg-slate-50 py-12 px-4 border-b border-slate-200">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
        <div className="flex-shrink-0">
          <ShieldCheck className="w-20 h-20 text-brand-dark" strokeWidth={1.5} />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Garantia Incondicional de 7 Dias</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Se você não sentir diferença na sua postura e resultados na primeira semana, nós devolvemos 100% do seu dinheiro. Sem perguntas, sem letras miúdas. O risco é todo nosso.
          </p>
        </div>
      </div>
    </section>
  );
};