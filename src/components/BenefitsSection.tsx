
import React from 'react';
import { BookOpen, Users, Award, Clock, FileCheck, MessageCircle } from 'lucide-react';

const benefits = [
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Conteúdo Atualizado",
    description: "Materiais sempre atualizados com as últimas tendências e tecnologias do mercado."
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Comunidade Ativa",
    description: "Faça parte de uma comunidade de alunos e profissionais para networking."
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Certificado Reconhecido",
    description: "Certificados com valor no mercado para impulsionar seu currículo."
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Acesso Vitalício",
    description: "Acesso sem prazo de expiração aos cursos que você adquirir."
  },
  {
    icon: <FileCheck className="h-10 w-10" />,
    title: "Projetos Práticos",
    description: "Aprenda na prática com projetos reais e construa seu portfólio."
  },
  {
    icon: <MessageCircle className="h-10 w-10" />,
    title: "Suporte Dedicado",
    description: "Tire suas dúvidas com nossa equipe de suporte especializada."
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-skillify-lightbg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Diferenciais dos Nossos Planos</h2>
          <p className="text-gray-300">
            Todos os nossos planos incluem benefícios exclusivos para garantir
            a melhor experiência de aprendizado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-skillify-darkbg p-6 rounded-xl border border-gray-800 hover:border-skillify-purple/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-skillify-purple">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
