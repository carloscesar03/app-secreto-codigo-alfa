import React from 'react';
import { ScanFace, MessageCircle, UserCheck, Shield, Award } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-brand-dark">
        <Icon className="w-6 h-6" />
      </div>
    </div>
    <div>
      <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-slate-900 mb-12">
          O QUE VOCÊ VAI DESBLOQUEAR DENTRO DO <br/>
          <span className="text-brand-accent">APP SECRETO CÓDIGO ALFA:</span>
        </h2>

        <div className="grid gap-4 md:grid-cols-1">
          <FeatureItem 
            icon={ScanFace}
            title="Scanner de Interesse Feminino em 60 Segundos"
            desc="Identifique se ela já está aberta para você — ou se precisa mudar abordagem — e pare de agir no escuro."
          />
          <FeatureItem 
            icon={MessageCircle}
            title="Biblioteca de Frases de Alta Tensão"
            desc="Frases curtas que geram curiosidade imediata e quebram o padrão de conversa comum."
          />
          <FeatureItem 
            icon={UserCheck}
            title="Protocolo de Postura Alfa Silenciosa"
            desc="Ajustes físicos invisíveis que aumentam sua presença e reduzem sinais de insegurança."
          />
          <FeatureItem 
            icon={Shield}
            title="Respostas de Contra-Ataque Social"
            desc="O que dizer quando ela testa, ignora ou responde frio — sem perder valor."
          />
          <FeatureItem 
            icon={Award}
            title="Modo Competição Ativado"
            desc="Posicionamento psicológico para se destacar mesmo perto de homens mais bonitos ou populares."
          />
        </div>
      </div>
    </section>
  );
};