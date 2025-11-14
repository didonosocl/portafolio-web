import { Skill } from '@/types';

/**
 * Lista de habilidades técnicas
 * Organizada por categorías para mejor visualización
 */
export const skills: Skill[] = [
  // Frontend Technologies
  {
    name: 'React',
    category: 'frontend',
    level: 'advanced',
    experience: '3+ años',
    description: 'Desarrollo de SPAs complejas, hooks personalizados, Context API, y optimización de rendimiento.'
  },
  {
    name: 'Next.js',
    category: 'frontend',
    level: 'advanced',
    experience: '2+ años',
    description: 'SSR, SSG, API Routes, App Router, y optimización SEO.'
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    level: 'advanced',
    experience: '2+ años',
    description: 'Tipado estático, interfaces complejas, generics, y arquitecturas type-safe.'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 'expert',
    experience: '4+ años',
    description: 'Dominio completo del lenguaje, async/await, módulos ES6, y patrones avanzados.'
  },
  {
    name: 'HTML5',
    category: 'frontend',
    level: 'expert',
    experience: '4+ años',
    description: 'Semántica moderna, accesibilidad web, y SEO técnico.'
  },
  {
    name: 'CSS3',
    category: 'frontend',
    level: 'advanced',
    experience: '4+ años',
    description: 'Flexbox, Grid, animaciones, responsive design, y metodologías BEM.'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'advanced',
    experience: '2+ años',
    description: 'Utility-first CSS, componentes personalizados, y configuración avanzada.'
  },
  {
    name: 'Sass/SCSS',
    category: 'frontend',
    level: 'intermediate',
    experience: '2 años',
    description: 'Preprocesamiento CSS, mixins, variables, y arquitectura de estilos escalable.'
  },

  // Backend Technologies  
  {
    name: 'Node.js',
    category: 'backend',
    level: 'advanced',
    experience: '3+ años',
    description: 'APIs REST, microservicios, streams, y optimización de rendimiento.'
  },
  {
    name: 'Express.js',
    category: 'backend',
    level: 'advanced',
    experience: '3+ años',
    description: 'Middleware personalizado, routing avanzado, y arquitectura de APIs escalables.'
  },
  {
    name: 'Python',
    category: 'backend',
    level: 'intermediate',
    experience: '1+ año',
    description: 'FastAPI, Django, automatización, y scripts de procesamiento de datos.'
  },
  {
    name: 'GraphQL',
    category: 'backend',
    level: 'intermediate',
    experience: '1+ año',
    description: 'Apollo Server, resolvers, subscriptions, y optimización de queries.'
  },

  // Databases
  {
    name: 'PostgreSQL',
    category: 'database',
    level: 'advanced',
    experience: '2+ años',
    description: 'Diseño de esquemas, queries complejas, índices, y optimización de rendimiento.'
  },
  {
    name: 'MongoDB',
    category: 'database',
    level: 'advanced',
    experience: '2+ años',
    description: 'Modelado de documentos, agregaciones, índices, y replicación.'
  },
  {
    name: 'Prisma',
    category: 'database',
    level: 'advanced',
    experience: '1+ año',
    description: 'ORM type-safe, migraciones, y generación de esquemas automática.'
  },
  {
    name: 'Redis',
    category: 'database',
    level: 'intermediate',
    experience: '1 año',
    description: 'Caché, sesiones, pub/sub, y almacenamiento en memoria.'
  },

  // DevOps & Tools
  {
    name: 'Docker',
    category: 'devops',
    level: 'intermediate',
    experience: '1+ año',
    description: 'Containerización, Docker Compose, y optimización de imágenes.'
  },
  {
    name: 'Git',
    category: 'devops',
    level: 'advanced',
    experience: '4+ años',
    description: 'Control de versiones, branching strategies, y colaboración en equipo.'
  },
  {
    name: 'GitHub Actions',
    category: 'devops',
    level: 'intermediate',
    experience: '1+ año',
    description: 'CI/CD, automatización de deployments, y testing automatizado.'
  },
  {
    name: 'Vercel',
    category: 'devops',
    level: 'advanced',
    experience: '2+ años',
    description: 'Deployments automáticos, serverless functions, y edge computing.'
  },
  {
    name: 'AWS',
    category: 'devops',
    level: 'beginner',
    experience: '6 meses',
    description: 'S3, Lambda, EC2, y servicios básicos de cloud computing.'
  },

  // Design & UI/UX
  {
    name: 'Figma',
    category: 'design',
    level: 'intermediate',
    experience: '2+ años',
    description: 'Prototipado, sistemas de diseño, y colaboración con diseñadores.'
  },
  {
    name: 'Adobe XD',
    category: 'design',
    level: 'beginner',
    experience: '6 meses',
    description: 'Wireframing, mockups, y diseño de interfaces básicas.'
  },

  // Development Tools
  {
    name: 'VS Code',
    category: 'tools',
    level: 'expert',
    experience: '4+ años',
    description: 'Configuración avanzada, extensiones personalizadas, y debugging eficiente.'
  },
  {
    name: 'ESLint',
    category: 'tools',
    level: 'advanced',
    experience: '3+ años',
    description: 'Configuración de reglas, plugins personalizados, y integración con CI/CD.'
  },
  {
    name: 'Prettier',
    category: 'tools',
    level: 'advanced',
    experience: '3+ años',
    description: 'Formateo automático de código y configuración de equipos.'
  },
  {
    name: 'Jest',
    category: 'tools',
    level: 'intermediate',
    experience: '1+ año',
    description: 'Testing unitario, mocks, y cobertura de código.'
  },
  {
    name: 'Storybook',
    category: 'tools',
    level: 'intermediate',
    experience: '1 año',
    description: 'Desarrollo de componentes aislados y documentación interactiva.'
  },

  // Soft Skills
  {
    name: 'Trabajo en Equipo',
    category: 'soft-skills',
    level: 'advanced',
    experience: '4+ años',
    description: 'Colaboración efectiva, comunicación clara, y liderazgo de proyectos.'
  },
  {
    name: 'Resolución de Problemas',
    category: 'soft-skills',
    level: 'advanced',
    experience: '4+ años',
    description: 'Análisis crítico, debugging complejo, y optimización de soluciones.'
  },
  {
    name: 'Metodologías Ágiles',
    category: 'soft-skills',
    level: 'intermediate',
    experience: '2+ años',
    description: 'Scrum, Kanban, sprints, y planificación iterativa.'
  },
  {
    name: 'Mentoring',
    category: 'soft-skills',
    level: 'intermediate',
    experience: '1+ año',
    description: 'Guía a desarrolladores junior y transferencia de conocimientos.'
  }
];

/**
 * Obtener habilidades por categoría
 */
export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

/**
 * Obtener habilidades por nivel
 */
export const getSkillsByLevel = (level: Skill['level']): Skill[] => {
  return skills.filter(skill => skill.level === level);
};

/**
 * Obtener las habilidades principales (más avanzadas)
 */
export const getTopSkills = (): Skill[] => {
  return skills
    .filter(skill => skill.level === 'expert' || skill.level === 'advanced')
    .slice(0, 8);
};

/**
 * Configuración de categorías para la UI
 */
export const skillCategories = {
  frontend: {
    name: 'Frontend',
    icon: '🎨',
    color: 'blue',
    description: 'Tecnologías para interfaces de usuario'
  },
  backend: {
    name: 'Backend',
    icon: '⚙️',
    color: 'green',
    description: 'Desarrollo del lado del servidor'
  },
  database: {
    name: 'Base de Datos',
    icon: '💾',
    color: 'purple',
    description: 'Gestión y almacenamiento de datos'
  },
  devops: {
    name: 'DevOps',
    icon: '🚀',
    color: 'orange',
    description: 'Despliegue y operaciones'
  },
  mobile: {
    name: 'Móvil',
    icon: '📱',
    color: 'pink',
    description: 'Desarrollo de aplicaciones móviles'
  },
  design: {
    name: 'Diseño',
    icon: '🎯',
    color: 'indigo',
    description: 'Herramientas de diseño y UX'
  },
  tools: {
    name: 'Herramientas',
    icon: '🔧',
    color: 'gray',
    description: 'Herramientas de desarrollo'
  },
  'soft-skills': {
    name: 'Habilidades Blandas',
    icon: '🤝',
    color: 'emerald',
    description: 'Habilidades interpersonales y profesionales'
  }
} as const;