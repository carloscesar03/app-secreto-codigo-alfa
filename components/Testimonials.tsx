import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  time: string;
  text: string;
  highlight: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, time, text, highlight }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-slate-900 text-sm">{name}</p>
          <p className="text-xs text-slate-500">{time}</p>
        </div>
      </div>
      <div className="flex text-brand-gold">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
    </div>
    
    <div className="mb-4 flex-grow">
      <p className="text-slate-600 text-sm leading-relaxed">
        "{text}"
      </p>
    </div>

    <div className="pt-4 border-t border-slate-50">
      <div className="flex items-center gap-2 text-xs font-semibold text-green-600 bg-green-50 w-fit px-2 py-1 rounded-full">
        <CheckCircle2 className="w-3 h-3" />
        {highlight}
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Ricardo M.",
      time: "há 2 dias",
      text: "Eu sempre travava quando uma mulher bonita me olhava. Baixei o app anteontem, e hoje usei uma das frases de 'Alta Tensão' na fila do café. A reação dela foi imediata, ela riu e puxou assunto. Nunca tinha conseguido isso tão rápido.",
      highlight: "Destravou conversa"
    },
    {
      name: "Gustavo S.",
      time: "há 5 dias",
      text: "O que mais me chocou foi o Protocolo de Postura. Eu nem abri a boca, só mudei o jeito de ficar parado no bar, e percebi que as pessoas pararam de esbarrar em mim e começaram a me notar. É bizarro como funciona.",
      highlight: "Mais respeito imediato"
    },
    {
      name: "Felipe A.",
      time: "há 1 semana",
      text: "O Scanner de 60s salvou minha noite. Eu ia chegar numa menina que claramente não tava a fim, o app me mostrou os sinais. Mudei o foco pra outra que tava dando os sinais certos e deu bom. Evitei um fora garantido.",
      highlight: "Evitou rejeição"
    },
    {
      name: "João Paulo",
      time: "há 3 dias",
      text: "Direto ao ponto. Sem enrolação de 'energia masculina' abstrata ou papo de coach. É 'faça isso, diga aquilo'. Era exatamente o guia prático que eu precisava pra parar de pensar demais.",
      highlight: "Sem enrolação"
    }
  ];

  return (
    <section className="bg-slate-50 py-20 px-4 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
            RESULTADOS REAIS DE QUEM JÁ ATIVOU O <span className="text-brand-accent">CÓDIGO</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Homens comuns que pararam de tentar agradar e começaram a se posicionar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <TestimonialCard key={idx} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};