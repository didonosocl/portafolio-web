import { Project } from '@/types';

/**
 * Lista de proyectos del portafolio
 * Actualiza estos datos con tus proyectos reales
 */
export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Plataforma E-commerce',
    description: 'Plataforma completa de comercio electrónico con panel de administración, carrito de compras, pagos integrados y gestión de inventario.',
    longDescription: `
      Una plataforma de comercio electrónico completa construida con Next.js 14, TypeScript y Tailwind CSS. 
      Incluye un panel de administración completo, sistema de autenticación, integración con Stripe para pagos, 
      gestión de productos e inventario, y un sistema de notificaciones en tiempo real.
      
      El proyecto implementa las mejores prácticas de desarrollo incluyendo Server-Side Rendering, 
      optimización de imágenes, SEO avanzado y una arquitectura escalable preparada para el crecimiento.
    `,
    image: '/images/projects/ecommerce-platform.jpg',
    images: [
      '/images/projects/ecommerce-1.jpg',
      '/images/projects/ecommerce-2.jpg',
      '/images/projects/ecommerce-3.jpg'
    ],
    technologies: [
      'Next.js 14',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Stripe',
      'NextAuth.js',
      'Vercel'
    ],
    category: 'web-app',
    status: 'completed',
    featured: true,
    dateCompleted: '2024-01-15',
    duration: '3 meses',
    links: [
      {
        type: 'github',
        url: 'https://github.com/devdiegodv/ecommerce-platform',
        label: 'Código'
      },
      {
        type: 'live',
        url: 'https://ecommerce-demo.diego.dev',
        label: 'Demo'
      }
    ],
    team: [
      {
        name: 'Diego',
        role: 'Full Stack Developer',
        github: 'devdiegodv'
      }
    ],
    challenges: [
      'Implementar un sistema de pagos seguro y confiable',
      'Optimizar el rendimiento para manejar gran volumen de productos',
      'Crear una interfaz de administración intuitiva y completa',
      'Implementar notificaciones en tiempo real para pedidos'
    ],
    learnings: [
      'Integración avanzada con APIs de pago (Stripe)',
      'Optimización de consultas de base de datos con Prisma',
      'Implementación de SSR y SSG para mejor SEO',
      'Manejo de estado global complejo con Zustand'
    ]
  },
  
  {
    id: 'task-management-app',
    title: 'App Gestión de Tareas',
    description: 'Aplicación web para gestión de tareas y proyectos con colaboración en tiempo real, tableros Kanban y analytics.',
    longDescription: `
      Una aplicación completa de gestión de tareas inspirada en herramientas como Trello y Asana. 
      Permite crear equipos, asignar tareas, establecer deadlines, y colaborar en tiempo real.
      
      La aplicación incluye tableros Kanban personalizables, sistema de comentarios, 
      notificaciones push, analytics de productividad y integración con calendarios externos.
    `,
    image: '/images/projects/task-management.jpg',
    technologies: [
      'React 18',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'Material-UI',
      'JWT'
    ],
    category: 'web-app',
    status: 'completed',
    featured: true,
    dateCompleted: '2023-11-20',
    duration: '4 meses',
    links: [
      {
        type: 'github',
        url: 'https://github.com/devdiegodv/task-management',
        label: 'Código'
      },
      {
        type: 'live',
        url: 'https://tasks.diego.dev',
        label: 'Demo'
      }
    ],
    challenges: [
      'Sincronización en tiempo real entre múltiples usuarios',
      'Diseño de base de datos eficiente para proyectos complejos',
      'Implementación de drag & drop intuitivo',
      'Sistema de permisos y roles granular'
    ]
  },

  {
    id: 'weather-app',
    title: 'Aplicación del Clima',
    description: 'App del clima con pronóstico extendido, mapas interactivos, alertas meteorológicas y geolocalización.',
    image: '/images/projects/weather-app.jpg',
    technologies: [
      'React Native',
      'TypeScript',
      'Expo',
      'OpenWeatherMap API',
      'React Navigation',
      'AsyncStorage'
    ],
    category: 'mobile-app',
    status: 'completed',
    featured: false,
    dateCompleted: '2023-09-10',
    duration: '2 meses',
    links: [
      {
        type: 'github',
        url: 'https://github.com/devdiegodv/weather-app'
      },
      {
        type: 'demo',
        url: 'https://expo.dev/@devdiegodv/weather-app'
      }
    ]
  },

  {
    id: 'portfolio-v2',
    title: 'Portafolio Personal v2',
    description: 'Mi portafolio personal anterior construido con Gatsby, GraphQL y Styled Components. Incluye blog integrado.',
    image: '/images/projects/portfolio-v2.jpg',
    technologies: [
      'Gatsby',
      'GraphQL',
      'Styled Components',
      'MDX',
      'Netlify CMS',
      'Framer Motion'
    ],
    category: 'web-app',
    status: 'archived',
    featured: false,
    dateCompleted: '2023-06-01',
    duration: '1 mes',
    links: [
      {
        type: 'github',
        url: 'https://github.com/devdiegodv/portfolio-v2'
      },
      {
        type: 'live',
        url: 'https://v2.diego.dev'
      }
    ]
  },

  {
    id: 'api-rest-blog',
    title: 'API REST para Blog',
    description: 'API REST completa para sistema de blog con autenticación JWT, CRUD posts, comentarios y sistema de roles.',
    image: '/images/projects/api-blog.jpg',
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      'bcrypt',
      'Jest',
      'Swagger'
    ],
    category: 'api',
    status: 'completed',
    featured: false,
    dateCompleted: '2023-04-15',
    duration: '3 semanas',
    links: [
      {
        type: 'github',
        url: 'https://github.com/devdiegodv/blog-api'
      },
      {
        type: 'documentation',
        url: 'https://blog-api.diego.dev/docs'
      }
    ]
  },

  {
    id: 'design-system',
    title: 'Sistema de Diseño UI',
    description: 'Librería de componentes React reutilizables con Storybook, testing automatizado y documentación completa.',
    image: '/images/projects/design-system.jpg',
    technologies: [
      'React',
      'TypeScript',
      'Storybook',
      'Styled System',
      'Jest',
      'React Testing Library',
      'Chromatic'
    ],
    category: 'library',
    status: 'in-progress',
    featured: false,
    dateCompleted: '2024-01-01',
    duration: 'Ongoing',
    links: [
      {
        type: 'github',
        url: 'https://github.com/devdiegodv/design-system'
      },
      {
        type: 'demo',
        url: 'https://design-system.diego.dev'
      }
    ]
  },

  {
    id: 'crypto-tracker',
    title: 'Crypto Portfolio Tracker',
    description: 'Aplicación para rastrear portafolio de criptomonedas con gráficos en tiempo real, alertas de precio y análisis.',
    image: '/images/projects/crypto-tracker.jpg',
    technologies: [
      'Next.js',
      'TypeScript',
      'Chart.js',
      'CoinGecko API',
      'Tailwind CSS',
      'Supabase'
    ],
    category: 'web-app',
    status: 'in-progress',
    featured: false,
    dateCompleted: '2024-02-01',
    duration: '2 meses',
    links: [
      {
        type: 'github',
        url: 'https://github.com/devdiegodv/crypto-tracker'
      }
    ]
  }
];

/**
 * Obtener proyectos destacados
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

/**
 * Obtener proyectos por categoría
 */
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

/**
 * Obtener proyecto por ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};