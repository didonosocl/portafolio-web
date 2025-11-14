import { Project } from '@/types';

/**
 * Lista de proyectos del portafolio
 * Actualiza estos datos con tus proyectos reales
 */
export const projects: Project[] = [
  {
    id: 'portafolio-personal',
    title: 'Portafolio Web Personal',
    description: 'Portafolio profesional moderno desarrollado con Next.js 16, React 19 y Tailwind CSS v4, con sistema de temas y optimización SEO.',
    longDescription: `
      Sitio web portafolio personal de una sola página (SPA) desarrollado con las últimas tecnologías web.
      Construido con Next.js 16 usando App Router, React 19 y Tailwind CSS v4 para un rendimiento óptimo
      y experiencia de usuario superior.
      
      Características principales: arquitectura de componentes modular y reutilizable, sistema completo
      de temas (claro/oscuro/sistema) con persistencia en localStorage, diseño responsive optimizado para
      todos los dispositivos, navegación fluida entre secciones con scroll suave, optimización de imágenes
      automática con Next.js Image, y componente NoSSR para prevenir problemas de hidratación.
      
      Implementa mejores prácticas de desarrollo: TypeScript para type safety completo, componentes
      documentados con JSDoc, estructura de archivos clara y escalable, CSS modular con Tailwind v4
      usando directivas @import y @variant, y optimización SEO con metadata dinámica. Incluye secciones
      para presentación personal, habilidades técnicas con 18 tecnologías e íconos SVG oficiales,
      experiencia laboral, proyectos destacados y formulario de contacto.
    `,
    image: '/images/projects/portafolio-web.png',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Node.js',
      'Turbopack',
      'PostCSS',
      'ESLint',
      'Git'
    ],
    category: 'spa',
    status: 'completed',
    featured: true,
    dateCompleted: '2025-11-14',
    duration: '2 semanas',
    links: [
      {
        type: 'github',
        url: 'https://github.com/devdiegodv/portafolio-web',
        label: 'Ver Código'
      },
      {
        type: 'live',
        url: 'https://diegodv.dev',
        label: 'Ver Sitio'
      }
    ],
  },

  {
    id: 'task-management-app',
    title: 'Gestor de Notas Personal',
    description: 'Aplicación web robusta para gestionar y organizar notas personales con autenticación segura, sistema de auditoría completo y contacto profesional integrado.',
    longDescription: `
      Aplicación web profesional para gestión de notas personales desarrollada con arquitectura MVC. 
      Permite a los usuarios crear cuentas seguras con autenticación avanzada y administrar sus notas 
      de forma privada y organizada.
      
      Características principales: registro/login seguro con validación de contraseñas, gestión completa 
      de notas (CRUD) con búsqueda y filtrado avanzado, sistema de paginación eficiente, interfaz 
      responsive adaptable a todos los dispositivos, sistema de contacto profesional con envío de correos, 
      y auditoría completa con logs segmentados (intentos de sesión, actividad de notas, errores).
      
      Implementa medidas de seguridad siguiendo mejores prácticas: encriptación con bcryptjs, 
      protección contra XSS/CSRF, validación exhaustiva de entradas, sesiones seguras con timeouts 
      configurables, y registro detallado de actividades con información geográfica para detección 
      de accesos sospechosos.
    `,
    image: '/images/projects/gestor-de-notas.png',
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Passport.js',
      'bcryptjs',
      'Handlebars',
      'Bootstrap 5',
      'FontAwesome',
      'Nodemailer',
      'express-validator'
    ],
    category: 'web-app',
    status: 'completed',
    featured: true,
    dateCompleted: '2025-11-13',
    duration: '4 meses',
    links: [
      {
        type: 'github',
        url: 'https://github.com/didonosocl/gestor-de-notas',
        label: 'Ver Código'
      },
      {
        type: 'live',
        url: 'https://gestor-de-notas-nc1y.onrender.com/',
        label: 'Demo en Vivo'
      }
    ],
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
        url: 'https://github.com/didonoso/blog-api'
      },
      {
        type: 'documentation',
        url: 'https://blog-api.diego.dev/docs'
      }
    ]
  },
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