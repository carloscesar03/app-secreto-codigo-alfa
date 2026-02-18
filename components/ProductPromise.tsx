import React from 'react';

export const ProductPromise: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-500 uppercase tracking-widest mb-4">Reforço do que está comprando</h2>
          <p className="text-2xl md:text-3xl text-slate-900 font-bold leading-relaxed">
            Você está comprando um <span className="bg-yellow-200 px-2">sistema prático</span> de comportamento e comunicação estratégica aplicável no mesmo dia.
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 text-lg font-bold">
            <span className="text-red-500 line-through decoration-2">Não é teoria.</span>
            <span className="text-green-600">É execução guiada.</span>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-inner text-left">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">O que você pode esperar:</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</span>
              <span className="text-slate-700 font-medium text-lg">Gerar mais respeito imediato em qualquer interação social</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</span>
              <span className="text-slate-700 font-medium text-lg">Reduzir sinais de carência e insegurança em até 72h</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</span>
              <span className="text-slate-700 font-medium text-lg">Criar curiosidade e tensão natural sem precisar forçar nada</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};