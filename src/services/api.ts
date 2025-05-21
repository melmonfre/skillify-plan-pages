
// Types for our API
export interface CoursePackage {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export interface AdminProfile {
  id: string;
  name: string;
  logo: string;
  tagline: string;
  description: string;
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
}

// Mock data - in a real app, this would come from an API
const MOCK_ADMIN: AdminProfile = {
  id: "1",
  name: "EduPlatform",
  logo: "/lovable-uploads/1c5657c5-debd-4c42-b123-9601611d2dc1.png",
  tagline: "Transforme seu Aprendizado Profissional",
  description: "Plataforma inteligente de aprendizado com trilhas personalizadas, mentoria em tempo real e análise de progresso detalhada.",
  highlights: [
    {
      icon: "rocket",
      title: "Aprendizado Acelerado",
      description: "Metodologia de aprendizado acelerado com conteúdos práticos e aplicáveis imediatamente."
    },
    {
      icon: "target",
      title: "Mentoria Personalizada",
      description: "Acompanhamento personalizado com mentores experientes no mercado."
    },
    {
      icon: "award",
      title: "Certificação Reconhecida",
      description: "Certificados reconhecidos pelo mercado de trabalho que validam suas habilidades."
    }
  ]
};

const MOCK_PACKAGES: CoursePackage[] = [
  {
    id: "1",
    name: "Plano Iniciante",
    description: "Ideal para quem está começando na área e deseja desenvolver habilidades básicas.",
    price: 29.90,
    features: [
      "Acesso a 5 cursos básicos",
      "Certificado de conclusão",
      "Suporte por e-mail"
    ]
  },
  {
    id: "2",
    name: "Plano Profissional",
    description: "Perfeito para profissionais que desejam se especializar e aprimorar suas habilidades.",
    price: 59.90,
    features: [
      "Acesso a 20 cursos avançados",
      "Certificado de especialização",
      "Suporte prioritário",
      "1 mentoria mensal"
    ],
    popular: true
  },
  {
    id: "3",
    name: "Plano Master",
    description: "Para profissionais que buscam dominar a área com conteúdo exclusivo e suporte completo.",
    price: 99.90,
    features: [
      "Acesso a todos os cursos",
      "Certificado premium reconhecido",
      "Suporte 24/7",
      "4 mentorias mensais",
      "Acesso a workshops exclusivos"
    ]
  }
];

const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Carlos Silva",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "Desenvolvedor Web",
    content: "Os cursos da Skillify transformaram completamente minha carreira. Em apenas 3 meses consegui uma promoção!",
    rating: 5
  },
  {
    id: "2",
    name: "Ana Rodrigues",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    role: "UX Designer",
    content: "A mentoria personalizada foi fundamental para me ajudar a aplicar os conhecimentos na prática.",
    rating: 5
  },
  {
    id: "3",
    name: "Pedro Costa",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    role: "Product Manager",
    content: "Conteúdo prático e mentores excelentes. Recomendo para quem quer evoluir rapidamente na carreira.",
    rating: 4
  }
];

// API functions
export const getAdminProfile = async (): Promise<AdminProfile> => {
  // In a real scenario, this would fetch from an API
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_ADMIN), 300);
  });
};

export const getCoursePackages = async (): Promise<CoursePackage[]> => {
  // In a real scenario, this would fetch from an API
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PACKAGES), 300);
  });
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  // In a real scenario, this would fetch from an API
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_TESTIMONIALS), 300);
  });
};
