
import React from 'react';
import { AdminProfile } from '@/services/api';
import { BookCheck, Target, Award } from 'lucide-react';

interface AboutSectionProps {
  admin: AdminProfile;
}

const AboutSection: React.FC<AboutSectionProps> = ({ admin }) => {
  // Map of icon names to components
  const iconComponents: Record<string, React.ReactNode> = {
    'rocket': <svg className="w-10 h-10 text-skillify-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
    'target': <Target className="w-10 h-10 text-skillify-purple" />,
    'award': <Award className="w-10 h-10 text-skillify-purple" />,
    'book-check': <BookCheck className="w-10 h-10 text-skillify-purple" />
  };

  return (
    <section className="py-20 bg-skillify-lightbg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Sobre a {admin.name}</h2>
          <p className="text-gray-300">
            Nossa missão é transformar o aprendizado profissional através de tecnologia avançada e metodologias inovadoras,
            fornecendo trilhas de conhecimento personalizadas para cada aluno.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {admin.highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="bg-skillify-darkbg p-6 rounded-xl shadow-lg border border-skillify-purple/20 hover:border-skillify-purple/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {iconComponents[highlight.icon] || 
                    <div className="w-10 h-10 bg-skillify-purple rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">{index + 1}</span>
                    </div>
                  }
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-400">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
