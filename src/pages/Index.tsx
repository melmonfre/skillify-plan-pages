
import { useState, useEffect } from 'react';
import { getAdminProfile, getCoursePackages, getTestimonials, AdminProfile, CoursePackage, Testimonial } from '@/services/api';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PackagesSection from '@/components/PackagesSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  const [admin, setAdmin] = useState<AdminProfile | null>(null);
  const [packages, setPackages] = useState<CoursePackage[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [adminData, packagesData, testimonialsData] = await Promise.all([
          getAdminProfile(),
          getCoursePackages(),
          getTestimonials()
        ]);
        
        setAdmin(adminData);
        setPackages(packagesData);
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-skillify-darkbg">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-skillify-purple border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-white">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!admin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-skillify-darkbg">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Erro ao carregar dados</h2>
          <p className="text-gray-400">Não foi possível carregar as informações da plataforma.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-skillify-darkbg">
      <HeroSection admin={admin} />
      <AboutSection admin={admin} />
      <PackagesSection packages={packages} />
      <BenefitsSection />
      {testimonials.length > 0 && <TestimonialsSection testimonials={testimonials} />}
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
