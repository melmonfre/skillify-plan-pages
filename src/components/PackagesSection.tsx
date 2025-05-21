
import React from 'react';
import { CoursePackage } from '@/services/api';
import PackageCard from './PackageCard';

interface PackagesSectionProps {
  packages: CoursePackage[];
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ packages }) => {
  return (
    <section id="packages" className="py-20 bg-skillify-darkbg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Escolha o Plano Ideal para Você</h2>
          <p className="text-gray-300">
            Oferecemos diferentes pacotes para atender às suas necessidades de aprendizado, 
            com acesso a conteúdos exclusivos e suporte personalizado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} packageData={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
