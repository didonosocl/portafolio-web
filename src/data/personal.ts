import { PersonalInfo, NavigationItem } from '@/types';

/**
 * Información personal del portafolio
 * Actualiza estos datos con tu información real
 */
export const personalInfo: PersonalInfo = {
  name: 'Diego Donoso Vera',
  title: 'Experienced Analyst & Full Stack Developer',
  description: `
    Analista experimentado y desarrollador Full Stack con más de 4 años de experiencia 
    en desarrollo de software, sistemas informáticos y soluciones de inteligencia artificial. 
    Especializado en Python, React, Django, y tecnologías de videanalítica. 
    Experiencia sólida en INDRA y Deliryum desarrollando sistemas críticos y 
    soluciones innovadoras con IA.
  `.replace(/\s+/g, ' ').trim(),
  
  email: 'diegoignaciodonosovera@gmail.com',
  phone: '+56 9 3958 8742',
  location: 'Santiago, Chile',
  avatar: '/images/avatar.jpg', // Agrega tu foto en public/images/
  resume: '/documents/cv-diego.pdf', // Agrega tu CV en public/documents/
  
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/didonosocl',
      username: 'didonosocl',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>`
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/diegodonosovera',
      username: 'didonoso',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>`
    }
  ]
};

/**
 * Navegación principal del sitio
 */
export const navigation: NavigationItem[] = [
  {
    label: 'Inicio',
    href: '#home'
  },
  {
    label: 'Acerca',
    href: '#about'
  },
  {
    label: 'Proyectos',
    href: '#projects'
  },
  {
    label: 'Habilidades',
    href: '#skills'
  },
  {
    label: 'Experiencia',
    href: '#experience'
  },
  {
    label: 'Contacto',
    href: '#contact'
  }
];

/**
 * Información adicional para la sección About
 */
export const aboutInfo = {
  description: `
    Soy un Analista Experimentado y Desarrollador Full Stack con más de 4 años de 
    experiencia en desarrollo de software y sistemas críticos. Actualmente trabajando 
    en INDRA en proyectos de gran escala como Plataforma de Gestión de Emergencias.
    
    Mi experiencia abarca desde desarrollo web completo hasta inteligencia artificial 
    y videanalítica. He trabajado con tecnologías como Python, Django, React, Angular, 
    y herramientas de IA como YOLO, PyTorch y TensorFlow. Me especializo en resolver 
    problemas complejos de infraestructura TI y crear soluciones escalables.
    
    Mi trayectoria en empresas como INDRA y Deliryum me ha permitido liderar equipos, 
    gestionar proyectos críticos y desarrollar desde sistemas de detección por IA hasta 
    plataformas empresariales robustas.
  `.replace(/\s+/g, ' ').trim(),
  
  highlights: [
    'Experiencia en INDRA con sistemas críticos y plataformas de emergencias',
    'Desarrollo de sistemas de IA y videanalítica con YOLO, PyTorch, TensorFlow',
    'Gestión y liderazgo de equipos técnicos en Deliryum',
    'Especialista en Python, Django, React, Angular y tecnologías full stack',
    'Resolución de incidencias críticas y mejora continua de infraestructura TI',
    'Implementación de Clean Architecture y patrones de diseño empresariales'
  ],
  
  image: '/images/about-me.jpg' // Opcional: imagen para la sección about
};

/**
 * Configuración SEO del sitio
 */
export const siteConfig = {
  title: 'Diego - Desarrollador Full Stack',
  description: `
    Portafolio de Diego, desarrollador Full Stack especializado en React, 
    Next.js, TypeScript y Node.js. Más de 3 años creando aplicaciones web 
    modernas y escalables.
  `.replace(/\s+/g, ' ').trim(),
  
  keywords: [
    'desarrollador web',
    'full stack developer',
    'react developer',
    'nextjs developer',
    'typescript developer',
    'javascript developer',
    'frontend developer',
    'backend developer',
    'web developer portfolio',
    'diego developer'
  ],
  
  author: 'Diego',
  siteUrl: 'https://diego-portfolio.com', // Cambia por tu dominio
  image: '/images/og-image.jpg', // Imagen para redes sociales
  language: 'es',
  
  // Analytics (opcional)
  analytics: {
    googleAnalyticsId: 'GA_MEASUREMENT_ID', // Cambia por tu ID
  }
};

/**
 * Constantes de la aplicación
 */
export const APP_CONSTANTS = {
  ANIMATION_DURATION: 300,
  SCROLL_OFFSET: 80,
  BREAKPOINTS: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  }
} as const;