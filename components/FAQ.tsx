import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-slate-800 group-hover:text-brand-accent transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-600 text-sm leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-black text-center text-slate-900 mb-8 uppercase">Perguntas Frequentes</h2>
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <FAQItem 
            question="Preciso ter experiência?"
            answer="Não. O app guia você passo a passo."
          />
          <FAQItem 
            question="Funciona para qualquer idade?"
            answer="Sim. Os princípios são comportamentais."
          />
          <FAQItem 
            question="Quanto tempo leva para aplicar?"
            answer="Você pode usar no mesmo dia."
          />
          <FAQItem 
            question="Isso é manipulação?"
            answer="Não. É ajuste de postura, comunicação e leitura social."
          />
          <FAQItem 
            question="Tem garantia?"
            answer="Sim. 7 dias de garantia incondicional."
          />
        </div>
      </div>
    </section>
  );
};