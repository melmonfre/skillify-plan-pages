
import React from 'react';
import { Testimonial } from '@/services/api';
import { Star } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-skillify-darkbg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">O Que Dizem Nossos Alunos</h2>
          <p className="text-gray-300">
            Veja como nossos cursos e mentorias têm transformado carreiras e vidas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-skillify-lightbg p-6 rounded-xl border border-gray-700 hover:border-skillify-purple/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
