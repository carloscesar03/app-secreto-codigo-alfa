import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-dark text-white pt-16 pb-24 px-4 overflow-hidden border-b border-white/5">
      
      {/* Visual Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-accent mb-8 border border-brand-accent/20 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
          <ShieldAlert className="w-4 h-4" />
          Acesso Restrito: App Secreto
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight drop-shadow-2xl">
          APP SECRETO <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-yellow-400">
            CÓDIGO ALFA
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
          Gere atração no <strong className="text-white border-b-2 border-brand-accent/50 pb-0.5">mesmo dia</strong> usando microcomandos sociais aplicáveis em tempo real.
        </p>
        
        {/* Pain/Benefit Box */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-2xl border border-white/10 backdrop-blur-md max-w-2xl mx-auto mb-10 shadow-xl">
          <p className="text-slate-200 text-sm md:text-base font-medium">
            <span className="text-red-400 font-bold block mb-2 tracking-wide uppercase text-xs">🚫 Sem Personagens. Sem Teoria Chata.</span>
            Apenas execução prática guiada para quem trava na hora H.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <Button fullWidth className="md:w-auto text-xl py-5 px-10 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)]" pulse href="https://pay.wiapy.com/I2kF_4oluZ">
            QUERO DESBLOQUEAR AGORA
          </Button>
          <p className="text-slate-500 text-xs mt-2 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Acesso liberado imediatamente
          </p>
        </div>
      </div>
    </section>
  );
};