import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Problem } from './components/Problem';
import { Testimonials } from './components/Testimonials';
import { TargetAudience } from './components/TargetAudience';
import { ProductPromise } from './components/ProductPromise';
import { Bonuses } from './components/Bonuses';
import { PricingStack } from './components/PricingStack';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden font-sans">
      <Hero />
      <Features />
      <Problem />
      <Testimonials />
      <TargetAudience />
      <ProductPromise />
      <Bonuses />
      <PricingStack />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      
      {/* Footer Simple */}
      <footer className="bg-slate-950 py-8 text-center text-slate-600 text-xs">
        <div className="max-w-4xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Código Alfa. Todos os direitos reservados.</p>
          <p className="mt-2">Este site não faz parte do site do Facebook ou Facebook Inc.</p>
        </div>
      </footer>
    </main>
  );
};

export default App;