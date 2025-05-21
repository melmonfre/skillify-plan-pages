
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { CoursePackage } from '@/services/api';
import { cn } from '@/lib/utils';

interface PackageCardProps {
  packageData: CoursePackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageData }) => {
  const { name, description, price, features, popular } = packageData;
  
  return (
    <div className={cn(
      "relative bg-skillify-darkbg rounded-2xl shadow-lg border overflow-hidden transition-all duration-300",
      popular 
        ? "border-skillify-purple scale-105 z-10" 
        : "border-gray-800 hover:border-skillify-purple/50"
    )}>
      {popular && (
        <div className="absolute top-0 right-0 bg-skillify-purple text-white py-1 px-4 rounded-bl-lg text-sm font-medium">
          Mais Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 mb-6 h-16">{description}</p>
        
        <div className="mb-6">
          <span className="text-3xl font-bold text-white">R$ {price.toFixed(2)}</span>
          <span className="text-gray-400 ml-1">/mês</span>
        </div>
        
        <Button 
          className={cn(
            "w-full mb-6",
            popular 
              ? "bg-skillify-purple hover:bg-skillify-darkpurple" 
              : "bg-gray-700 hover:bg-skillify-purple"
          )}
        >
          Assinar Agora
        </Button>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-skillify-lightpurple mr-2 mt-0.5" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackageCard;
