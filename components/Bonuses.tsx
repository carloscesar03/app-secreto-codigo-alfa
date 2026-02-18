import React from 'react';
import { Gift, Zap, MessageSquare, ClipboardCheck } from 'lucide-react';

const BonusCard = ({ number, title, subtitle, desc, icon: Icon }: { number: number, title: string, subtitle: string, desc: string, icon: any }) => (
  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 relative overflow-hidden group hover:border-brand-accent/50 transition-colors">
    <div className="absolute top-0 right-0 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
      BÔNUS #{number}
    </div>
    <div className="mb-4 text-brand-gold">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
    <p className="text-brand-accent font-medium text-sm mb-3 uppercase">{subtitle}</p>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export const Bonuses: React.FC = () => {
  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-brand-gold/20 rounded-full mb-4">
            <Gift className="w-8 h-8 text-brand-gold" />
          </div>
          <h2 className="text-3xl font-black text-white">BÔNUS EXCLUSIVOS</h2>
          <p className="text-gray-400 mt-2">Liberados imediatamente após a compra</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <BonusCard 
            number={1}
            title="Guia Anti-Ansiedade Social"
            subtitle="Controle Absoluto"
            desc="Técnica prática de controle de nervosismo antes de abordar. Elimina tremor de voz e pressa excessiva."
            icon={Zap}
          />
          <BonusCard 
            number={2}
            title="Script de Reengajamento"
            subtitle="Pós-Vácuo"
            desc="Modelo pronto para recuperar conversa fria sem parecer carente."
            icon={MessageSquare}
          />
          <BonusCard 
            number={3}
            title="Checklist Pré-Encontro"
            subtitle="Preparação Rápida"
            desc="Checklist rápido para ajustar postura, comunicação e energia antes de sair."
            icon={ClipboardCheck}
          />
        </div>
      </div>
    </section>
  );
};