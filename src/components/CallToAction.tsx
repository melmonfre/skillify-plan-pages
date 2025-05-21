
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-skillify-purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Pronto para Transformar seu Aprendizado Profissional?
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Escolha seu plano e comece agora mesmo a jornada de evolução na sua carreira!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg"
            className="bg-white text-skillify-purple hover:bg-gray-100 text-lg px-8"
            onClick={() => {
              const packageSection = document.getElementById('packages');
              if (packageSection) {
                packageSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Ver Planos
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/20 text-lg px-8"
          >
            Falar com um Consultor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
