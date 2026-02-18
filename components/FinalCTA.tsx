import React from 'react';
import { Button } from './Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="bg-brand-dark py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Recapitulando:</h2>
          <p className="text-xl text-gray-300">
            Não é sobre virar outra pessoa.<br/>
            É sobre parar de <span className="text-white font-bold decoration-brand-accent underline decoration-2">sabotar sua própria presença</span>.
          </p>
        </div>

        <div className="bg-slate-800/50 p-8 rounded-xl border border-white/10">
          <p className="text-lg text-white font-medium mb-6">
            Agora você decide:<br/>
            <span className="text-gray-400">Continuar sendo ignorado…</span><br/>
            <span className="text-brand-accent font-bold">Ou aprender a se posicionar.</span>
          </p>
          
          <p className="text-2xl font-black text-white mb-8 uppercase tracking-widest">Agora ou nunca.</p>
          
          <Button fullWidth pulse variant="primary" className="text-xl shadow-brand-accent/40" href="https://pay.wiapy.com/I2kF_4oluZ">
            COMEÇAR MINHA TRANSFORMAÇÃO AGORA
          </Button>
        </div>
        
        <p className="text-xs text-gray-500 mt-8">
          Acesso seguro e imediato.
        </p>
      </div>
    </section>
  );
};