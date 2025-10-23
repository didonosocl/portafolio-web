import { Experience, EmploymentType } from '@/types';

/**
 * Experiencia profesional
 * Actualiza estos datos con tu experiencia real del CV
 */
export const experiences: Experience[] = [
  {
    id: '1',
    position: 'Experienced Analyst',
    company: 'INDRA',
    companyLogo: '/images/companies/indra-logo.png',
    location: 'Santiago, Chile',
    type: 'full-time' as EmploymentType,
    startDate: '2025-01-01', // Enero 2025 - Actualidad
    endDate: undefined,
    description: `
      Soporte y mantenimiento de sistema informático en proyecto Plataforma Gestión de Emergencias, 
      participando en la creación de módulo 'IEH', resolución de incidencias y mejora continua de la 
      infraestructura TI / aplicativo.
    `.replace(/\s+/g, ' ').trim(),
    
    responsibilities: [
      'Soporte y mantenimiento de sistema informático proyecto Plataforma Gestión de Emergencias',
      'Creación de módulo IEH para mejora de funcionalidades',
      'Resolución de incidencias y tickets de soporte',
      'Mejora continua de infraestructura TI y aplicativos',
      'Uso de Clean Architecture y patrones de diseño empresariales'
    ],
    
    achievements: [
      'Implementación exitosa de módulo IEH',
      'Mejora continua de infraestructura TI',
      'Resolución eficiente de incidencias críticas',
      'Aplicación de Clean Architecture en proyectos'
    ],
    
    technologies: [
      'ASP .NET CORE 3', 'Angular 14', 'CSS', 'HTML'
    ]
  },
  {
    id: '2',
    position: 'Junior Systems Engineer',
    company: 'INDRA',
    companyLogo: '/images/companies/indra-logo.png',
    location: 'Santiago, Chile',
    type: 'full-time' as EmploymentType,
    startDate: '2023-08-01', // Agosto 2023 - Diciembre 2024
    endDate: '2024-12-31',
    description: `
      Soporte y mantenimiento de sistemas informáticos en diversas áreas (full stack), abarcando 
      proyectos como Sistema de Correspondencia, Operación Real, Plataforma de Gestión de Proyectos (PGP), 
      Neomante y Estados Operativos.
    `.replace(/\s+/g, ' ').trim(),
    
    responsibilities: [
      'Soporte y mantenimiento de sistemas full stack',
      'Gestión de proyectos: Sistema de Correspondencia, Operación Real, PGP, Neomante',
      'Atención de requerimientos y resolución de tickets',
      'Resolución de incidencias relacionadas con aplicativos del cliente',
      'Consultas a incidencias, requerimientos y consultas'
    ],
    
    achievements: [
      'Gestión exitosa de múltiples proyectos simultáneos',
      'Mejora en tiempos de resolución de incidencias',
      'Implementación de soluciones escalables',
      'Soporte técnico especializado en sistemas críticos'
    ],
    
    technologies: [
      'Python', 'Django', 'Docker', 'PostgreSQL', 'Flask', 'Linux'
    ]
  },
  {
    id: '3',
    position: 'Desarrollador de Software',
    company: 'Blue Latam',
    companyLogo: '/images/companies/blue-latam-logo.png',
    location: 'Santiago, Chile',
    type: 'full-time' as EmploymentType,
    startDate: '2023-02-01', // Febrero 2023 - Julio 2023
    endDate: '2023-07-31',
    description: `
      Desarrollo de sistemas de detección de objetos mediante videanalítica utilizando tecnologías 
      como YOLO, Darknet, PyTorch y TensorFlow. Gestión y liderazgo de equipo de trabajo.
    `.replace(/\s+/g, ' ').trim(),
    
    responsibilities: [
      'Desarrollo de sistemas de detección de objetos con videanalítica',
      'Implementación con tecnologías YOLO, Darknet, PyTorch y TensorFlow',
      'Gestión y liderazgo de equipo de trabajo',
      'Seguimiento de tareas para completar objetivos',
      'Desarrollo de aplicaciones con escalabilidad mediante Docker',
      'Construcción de APIs con librerías como Axios y Fetch'
    ],
    
    achievements: [
      'Implementación exitosa de sistemas de videanalítica',
      'Liderazgo efectivo de equipo técnico',
      'Desarrollo de soluciones escalables con Docker',
      'Integración exitosa de múltiples tecnologías de IA'
    ],
    
    technologies: [
      'Python', 'React JS', 'Azure Cloud', 'YoloV5', 'Cors', 'Google Colab', 'Miniconda',
      'YOLO', 'Darknet', 'PyTorch', 'TensorFlow', 'Docker', 'FastAPI', 'Django'
    ]
  },
  {
    id: '4',
    position: 'Programador Junior',
    company: 'Blue Latam',
    companyLogo: '/images/companies/blue-latam-logo.png',
    location: 'Santiago, Chile',
    type: 'full-time' as EmploymentType,
    startDate: '2022-02-01', // Febrero 2022 - Febrero 2023
    endDate: '2023-02-28',
    description: `
      Desarrollo de modelos de inteligencia artificial y Deep Learning, etiquetar y clasificar objetos 
      en grandes volúmenes de imágenes utilizando herramientas de anotación.
    `.replace(/\s+/g, ' ').trim(),
    
    responsibilities: [
      'Etiquetado y clasificación de objetos en grandes volúmenes de imágenes',
      'Entrenamiento y optimización de modelos de Deep Learning',
      'Implementación en Azure Cloud con cuadernos de Google Colab',
      'Desarrollo de módulos para definir proyectos con polígonos en áreas restringidas',
      'Uso de OpenCV para control de accesos en imágenes y videos'
    ],
    
    achievements: [
      'Procesamiento exitoso de grandes volúmenes de datos',
      'Optimización de modelos de Deep Learning',
      'Implementación en la nube con Azure',
      'Desarrollo de soluciones de computer vision'
    ],
    
    technologies: [
      'OpenCV', 'Labelme', 'Labeling', 'Roboflow', 'Azure Cloud', 'Google Colab',
      'Python', 'Deep Learning', 'Computer Vision'
    ]
  },
  {
    id: '5',
    position: 'Práctica',
    company: 'Blue Latam',
    companyLogo: '/images/companies/blue-latam-logo.png',
    location: 'Santiago, Chile',
    type: 'internship' as EmploymentType,
    startDate: '2021-10-01', // Octubre 2021 - Enero 2022
    endDate: '2022-01-31',
    description: `
      Diseño de interfaces y páginas web, participación en la creación de diversas APIs, 
      tanto consumiendo como desarrollando APIs mediante consultas a bases de datos.
    `.replace(/\s+/g, ' ').trim(),
    
    responsibilities: [
      'Diseño de interfaces y páginas web responsive',
      'Creación y consumo de APIs REST',
      'Desarrollo de consultas a bases de datos',
      'Participación en proyectos de desarrollo full stack',
      'Implementación de mejores prácticas de desarrollo web'
    ],
    
    achievements: [
      'Desarrollo exitoso de interfaces de usuario',
      'Integración efectiva de APIs con frontend',
      'Aprendizaje acelerado de tecnologías web',
      'Contribución significativa en proyectos del equipo'
    ],
    
    technologies: [
      'HTML', 'CSS', 'Bootstrap', 'React JS', 'Vue', 'VueHfy', 'Flask', 'Django',
      'JavaScript', 'APIs REST', 'Bases de datos'
    ]
  }
  
  // TODO: Añadir más experiencias basadas en el CV real
  // Ejemplo para añadir más experiencias:
  /*
  {
    id: '2',
    position: 'Frontend Developer',
    company: 'Tech Company',
    location: 'Madrid, España',
    type: 'full-time' as EmploymentType,
    startDate: '2020-06-01',
    endDate: '2020-12-31',
    description: 'Descripción del rol...',
    responsibilities: ['...'],
    achievements: ['...'],
    technologies: ['...'],
    companyLogo: '/images/companies/tech-company.png'
  }
  */
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