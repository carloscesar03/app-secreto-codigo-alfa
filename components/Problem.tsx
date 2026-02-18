import React from 'react';

export const Problem: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold leading-tight">
            O homem comum entra numa conversa <span className="text-brand-accent">querendo agradar.</span>
          </h2>
          <p className="text-xl font-medium text-gray-400 border-l-4 border-brand-accent pl-4">
            E é aí que ele perde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-lg text-gray-300">
            <p>Ele fala demais.</p>
            <p>Ri demais.</p>
            <p>Explica demais.</p>
            <p className="font-bold text-white mt-4">E quando percebe… já virou só “mais um”.</p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <p className="text-gray-300 italic mb-4">
              Enquanto isso, o cara que quase não fala…<br/>
              O que parece tranquilo…<br/>
              O que não precisa provar nada…
            </p>
            <p className="text-brand-accent font-bold text-xl uppercase tracking-wide">
              Esse é o que ela observa.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Você não precisa ser o mais bonito. Nem o mais rico. Nem o mais engraçado.
          </h3>
          <p className="text-center text-gray-400 text-lg mb-8">
            Mas precisa parar de transmitir <span className="text-white font-semibold">insegurança invisível</span>.
          </p>
          
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 text-center shadow-xl">
            <p className="text-lg mb-4">O problema nunca foi falta de oportunidade.<br/>Foi falta de leitura e posicionamento.</p>
            <p className="text-brand-accent font-black text-2xl mb-2">O APP SECRETO CÓDIGO ALFA EXISTE PRA ISSO:</p>
            <p className="text-white text-xl">Te dar as respostas certas na hora exata — Antes que você estrague tudo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};