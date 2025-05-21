
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { CoursePackage } from '@/services/api';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Sample course images to use
const courseImages = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=80"
];

interface PackageCardProps {
  packageData: CoursePackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageData }) => {
  const { id, name, description, price, features, popular } = packageData;
  
  // Use the package ID to select an image (or fallback to a default)
  const imageIndex = parseInt(id, 10) - 1;
  const courseImage = courseImages[imageIndex % courseImages.length];
  
  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 bg-skillify-darkbg border",
      popular 
        ? "border-skillify-purple scale-105 z-10" 
        : "border-gray-800 hover:border-skillify-purple/50"
    )}>
      {popular && (
        <div className="absolute top-0 right-0 bg-skillify-purple text-white py-1 px-4 rounded-bl-lg text-sm font-medium z-10">
          Mais Popular
        </div>
      )}
      
      <div className="relative h-40 overflow-hidden">
        <img 
          src={courseImage} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-skillify-darkbg to-transparent"></div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">{name}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="mb-6">
          <span className="text-3xl font-bold text-white">R$ {price.toFixed(2)}</span>
          <span className="text-gray-400 ml-1">/mês</span>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-skillify-lightpurple mr-2 mt-0.5" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          className={cn(
            "w-full",
            popular 
              ? "bg-skillify-purple hover:bg-skillify-darkpurple" 
              : "bg-gray-700 hover:bg-skillify-purple"
          )}
        >
          Assinar Agora
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
