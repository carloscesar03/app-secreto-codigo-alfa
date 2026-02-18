import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';

export const PricingStack: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Anchor */}
        <div className="text-center mb-12 space-y-4">
          <h3 className="text-2xl font-bold text-slate-800">Faça as contas…</h3>
          <p className="text-lg text-slate-600">
            Se você fosse contratar um coach de sedução, gastaria facilmente <span className="font-bold text-red-500 line-through">R$1.500 a R$5.000</span>.
            <br />
            E ainda assim, dependeria da sua memória e improviso.
          </p>
        </div>

        {/* Offer Card */}
        <div className="bg-slate-50 rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden relative">
          <div className="bg-brand-dark text-white p-6 text-center">
            <h2 className="text-2xl font-black uppercase tracking-wider">Recapitulando Tudo</h2>
          </div>
          
          <div className="p-8">
            <img 
              src="https://i.postimg.cc/R0SBJJGb/Mockup-App-Secreto-Codigo-Alfa-(1).png" 
              alt="Mockup App Secreto Código Alfa" 
              className="w-full md:w-4/5 mx-auto mb-8 block"
            />

            <ul className="space-y-3 mb-8">
              {[
                "App Secreto Código Alfa",
                "Scanner de Interesse em 60s",
                "Biblioteca de Frases de Alta Tensão",
                "Protocolo de Postura Alfa",
                "Respostas de Contra-Ataque Social",
                "BÔNUS: Guia Anti-Ansiedade Social",
                "BÔNUS: Script de Reengajamento",
                "BÔNUS: Checklist Pré-Encontro"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="text-center pt-6 border-t border-slate-200 mb-8">
              <p className="text-slate-500 text-sm mb-2">Acesso imediato por apenas</p>
              <div className="flex items-center justify-center gap-1">
                <span className="text-xl font-medium text-slate-400">R$</span>
                <span className="text-6xl font-black text-brand-dark tracking-tighter">27</span>
              </div>
            </div>

            <Button fullWidth pulse className="text-xl" href="https://pay.wiapy.com/I2kF_4oluZ">
              QUERO ATIVAR O CÓDIGO ALFA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};