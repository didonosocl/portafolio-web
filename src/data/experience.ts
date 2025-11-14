import { Experience, Position } from '@/types';

/**
 * Experiencia profesional agrupada por empresa
 * Actualiza estos datos con tu experiencia real del CV
 */
export const experiences: Experience[] = [
  {
    id: 'indra',
    company: 'INDRA',
    companyLogo: '/images/companies/indra-logo.png',
    companyUrl: 'https://www.indracompany.com',
    location: 'Santiago, Chile',
    workMode: 'remote',
    totalStartDate: '2023-08-01',
    totalEndDate: undefined, // Sigue trabajando
    positions: [
      {
        id: 'indra-experienced-analyst',
        title: 'Experienced Analyst',
        type: 'full-time',
        startDate: '2025-01-01',
        endDate: undefined,
        description: 'Soporte y mantenimiento de sistemas informáticos en múltiples proyectos estratégicos, participando en migraciones de bases de datos, creación de módulos y resolución de incidencias con mejora continua de infraestructura TI.',
        responsibilities: [
          'Soporte y mantenimiento de sistemas informáticos en proyectos críticos',
          'Migración de bases de datos ORACLE a PostgreSQL',
          'Creación de módulos y funcionalidades nuevas',
          'Resolución de incidencias y tickets de soporte',
          'Mejora continua de infraestructura TI y aplicativos',
          'Uso de Clean Architecture y patrones de diseño Mediator'
        ],
        technologies: ['ASP .NET CORE 4.6.1', 'ASP .NET CORE 9', 'Angular 15', 'PostgreSQL', 'PHP', 'JavaScript', 'CSS', 'HTML'],
        projects: [
          {
            key: 'pmgd-netbilling',
            name: 'PMGD - NetBilling',
            period: 'octubre 2025 - Actualidad',
            description: 'Migración de base de datos de proyecto GeneradorKMZ. De ORACLE a PostgreSQL.',
            technologies: ['ASP .NET CORE 4.6.1', 'PostgreSQL']
          },
          {
            key: 'enel',
            name: 'ENEL',
            period: 'mayo 2025 - Actualidad',
            description: 'Soporte y mantenimiento de sistema informático, proyecto Plataforma Gestión de Emergencias PGE, participando en la creación de módulo \'IEH\', resolución de incidencias y mejora continua de la infraestructura TI / aplicativo. Uso de Clean Architecture y patrón de diseño Mediator',
            technologies: ['ASP .NET CORE 9', 'Angular 15', 'CSS', 'HTML']
          },
          {
            key: 'codelco',
            name: 'Codelco',
            period: 'enero 2025 - Actualidad',
            description: 'Soporte y mantenimiento de sistema informático, proyecto SIC3PRO, participando en la creación de módulo \'PIE\', resolución de incidencias y mejora continua de la infraestructura TI / aplicativo.',
            technologies: ['PHP', 'JavaScript', 'CSS', 'HTML']
          }
        ]
      },
      {
        id: 'indra-junior-engineer',
        title: 'Junior Systems Engineer',
        type: 'full-time',
        startDate: '2023-08-01',
        endDate: '2024-12-31',
        description: 'Soporte y mantenimiento de sistemas informáticos en diversas áreas (full stack), abarcando múltiples proyectos estratégicos con atención a requerimientos y resolución de incidencias.',
        responsibilities: [
          'Soporte y mantenimiento de sistemas full stack en múltiples proyectos',
          'Atención de requerimientos y resolución de tickets',
          'Resolución de incidencias relacionadas con aplicativos del cliente',
          'Mejora continua de infraestructura TI'
        ],
        technologies: ['Python', 'Django', 'Flask', 'Docker', 'Git', 'MongoDB', 'MySQL', 'Nginx', 'CSS', 'HTML', 'JavaScript'],
        projects: [
          {
            key: 'cen',
            name: 'Coordinador Eléctrico Nacional - CEN',
            period: 'agosto 2023 - diciembre 2024',
            description: 'Soporte y mantenimiento de sistemas informáticos en diversas áreas (full stack), abarcando proyectos como Sistema de Correspondencia, Operación Real, Plataforma de Gestión de Proyectos (PGP), Neomante y Estados Operativos. Atención de requerimientos, resolución de tickets incidencias y mejora continua de la infraestructura TI.',
            technologies: ['Python', 'Django', 'Flask', 'Docker', 'Git', 'MongoDB', 'MySQL', 'Nginx', 'CSS', 'HTML', 'JavaScript']
          }
        ]
      }
    ]
  },
  {
    id: 'deliryum',
    company: 'Deliryum.AI',
    companyLogo: '/images/companies/deliryum-logo.jpg',
    location: 'Santiago, Chile',
    workMode: 'hybrid',
    totalStartDate: '2021-10-01',
    totalEndDate: '2023-07-31',
    positions: [
      {
        id: 'deliryum-software-developer',
        title: 'Desarrollador de software',
        type: 'full-time',
        startDate: '2023-02-01',
        endDate: '2023-07-31',
        description: `Desarrollo de sistemas de detección de objetos mediante videanalítica utilizando tecnologías como YOLO, Darknet, PyTorch y TensorFlow. Gestión y liderazgo de equipo de trabajo.`,
        responsibilities: [
          'Desarrollo de sistemas de detección de objetos con videanalítica',
          'Implementación con tecnologías YOLO, Darknet, PyTorch y TensorFlow',
          'Gestión y liderazgo de equipo de trabajo',
          'Seguimiento de tareas para completar objetivos',
          'Desarrollo de aplicaciones con escalabilidad mediante Docker',
          'Construcción de APIs con librerías como Axios y Fetch'
        ],
        technologies: ['Python', 'React JS', 'Azure Cloud', 'YoloV5', 'YOLO', 'Darknet', 'PyTorch', 'TensorFlow', 'Docker', 'FastAPI', 'Django']
      },
      {
        id: 'deliryum-junior-programmer',
        title: 'Programador junior',
        type: 'full-time',
        startDate: '2022-02-01',
        endDate: '2023-02-28',
        description: `Desarrollo de modelos de inteligencia artificial y Deep Learning, etiquetar y clasificar objetos en grandes volúmenes de imágenes utilizando herramientas de anotación.`,
        responsibilities: [
          'Etiquetado y clasificación de objetos en grandes volúmenes de imágenes',
          'Entrenamiento y optimización de modelos de Deep Learning',
          'Implementación en Azure Cloud con cuadernos de Google Colab',
          'Desarrollo de módulos para definir proyectos con polígonos en áreas restringidas',
          'Uso de OpenCV para control de accesos en imágenes y videos'
        ],
        technologies: ['OpenCV', 'Labelme', 'Roboflow', 'Azure Cloud', 'Google Colab', 'Python', 'Deep Learning', 'Computer Vision']
      },
      {
        id: 'deliryum-intern',
        title: 'Practicante',
        type: 'internship',
        startDate: '2021-10-01',
        endDate: '2022-01-31',
        description: `Diseño de interfaces y páginas web, participación en la creación de diversas APIs, tanto consumiendo como desarrollando APIs mediante consultas a bases de datos.`,
        responsibilities: [
          'Diseño de interfaces y páginas web responsive',
          'Creación y consumo de APIs REST',
          'Desarrollo de consultas a bases de datos',
          'Participación en proyectos de desarrollo full stack',
          'Implementación de mejores prácticas de desarrollo web'
        ],
        technologies: ['HTML', 'CSS', 'Bootstrap', 'React JS', 'Vue', 'Flask', 'Django', 'JavaScript', 'APIs REST']
      }
    ]
  }
];

/**
 * Utilidad para formatear fechas de experiencia
 */
export const formatExperienceDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('es-ES', { 
    month: 'short', 
    year: 'numeric' 
  });
};

/**
 * Utilidad para calcular duración de experiencia
 */
export const calculateDuration = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                 (end.getMonth() - start.getMonth());
  
  if (months < 12) {
    return `${months} mes${months !== 1 ? 'es' : ''}`;
  }
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (remainingMonths === 0) {
    return `${years} año${years !== 1 ? 's' : ''}`;
  }
  
  return `${years} año${years !== 1 ? 's' : ''} ${remainingMonths} mes${remainingMonths !== 1 ? 'es' : ''}`;
};