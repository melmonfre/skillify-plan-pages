
import React from 'react';
import { Button } from '@/components/ui/button';
import { AdminProfile } from '@/services/api';

interface HeroSectionProps {
  admin: AdminProfile;
}

const HeroSection: React.FC<HeroSectionProps> = ({ admin }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-skillify-darkbg opacity-90 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex justify-center mb-6">
          {admin.logo && (
            <div className="flex items-center gap-3">
              <img 
                src={admin.logo} 
                alt={`${admin.name} logo`} 
                className="h-10 w-auto"
              />
              <span className="text-skillify-lightpurple text-xl font-semibold">{admin.name}</span>
            </div>
          )}
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl mx-auto">
          {admin.tagline}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {admin.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-skillify-purple hover:bg-skillify-darkpurple text-white px-8 py-6 text-lg"
            onClick={() => {
              const packageSection = document.getElementById('packages');
              if (packageSection) {
                packageSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Conheça os planos
          </Button>
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-skillify-darkbg px-8 py-6 text-lg"
          >
            Saiba mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
