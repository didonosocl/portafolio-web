'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    // Cargar idioma guardado del localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Traducciones
const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      greeting: '¡Hola! Soy',
      title: 'Experienced Analyst & Full Stack Developer',
      description: 'Analista experimentado y desarrollador Full Stack con más de 4 años de experiencia en desarrollo de software, sistemas informáticos y soluciones de inteligencia artificial. Especializado en Python, React, Django, y tecnologías de videoanalítica. Experiencia sólida en INDRA y Deliryum desarrollando sistemas críticos y soluciones innovadoras con IA.',
      downloadCV: 'Descargar CV',
      contactMe: 'Contáctame'
    },
    about: {
      title: 'Sobre Mí',
      description: 'Analista experimentado y desarrollador Full Stack con más de 4 años de experiencia en desarrollo de software, sistemas informáticos y soluciones de inteligencia artificial. Especializado en Python, React, Django, y tecnologías de videanalítica. Experiencia sólida en INDRA y Deliryum desarrollando sistemas críticos y soluciones innovadoras con IA.',
      subtitle: 'Mi trayectoria profesional en desarrollo de software',
      highlights: 'Lo que me destaca:',
      highlightsList: [
        'Experiencia en INDRA con sistemas críticos y plataformas de emergencias',
        'Desarrollo de sistemas de IA y videoanalítica con YOLO, PyTorch, TensorFlow',
        'Gestión y liderazgo de equipos técnicos en Deliryum',
        'Especialista en Python, Django, React, Angular y tecnologías full stack',
        'Resolución de incidencias críticas y mejora continua de infraestructura TI',
        'Implementación de Clean Architecture y patrones de diseño empresariales'
      ],
      yearsExperience: 'Años de experiencia',
      projectsCompleted: 'Proyectos completados'
    },
    experience: {
      title: 'Experiencia Profesional',
      subtitle: 'Mi trayectoria profesional en desarrollo de software',
      current: 'Actualidad',
      present: 'Presente',
      duration: {
        year: 'año',
        years: 'años',
        month: 'mes',
        months: 'meses'
      },
      remote: 'En remoto',
      hybrid: 'Híbrido',
      onsite: 'Presencial',
      responsibilities: 'Responsabilidades:',
      technologies: 'Tecnologías:',
      project: 'Proyecto:',
      employmentType: {
        'full-time': 'Jornada completa',
        'part-time': 'Medio tiempo',
        contract: 'Contrato',
        freelance: 'Freelance',
        internship: 'Prácticas'
      },
      positions: {
        'indra-experienced-analyst': {
          description: 'Soporte y mantenimiento de sistemas informáticos en múltiples proyectos estratégicos, participando en migraciones de bases de datos, creación de módulos y resolución de incidencias con mejora continua de infraestructura TI.',
          responsibilities: [
            'Soporte y mantenimiento de sistemas informáticos en proyectos críticos',
            'Migración de bases de datos ORACLE a PostgreSQL',
            'Creación de módulos y funcionalidades nuevas',
            'Resolución de incidencias y tickets de soporte',
            'Mejora continua de infraestructura TI y aplicativos',
            'Uso de Clean Architecture y patrones de diseño Mediator'
          ]
        },
        'indra-junior-engineer': {
          description: 'Soporte y mantenimiento de sistemas informáticos en diversas áreas (full stack), abarcando múltiples proyectos estratégicos con atención a requerimientos y resolución de incidencias.',
          responsibilities: [
            'Soporte y mantenimiento de sistemas full stack en múltiples proyectos',
            'Atención de requerimientos y resolución de tickets',
            'Resolución de incidencias relacionadas con aplicativos del cliente',
            'Mejora continua de infraestructura TI'
          ]
        },
        'deliryum-software-developer': {
          description: 'Desarrollo de sistemas de detección de objetos mediante videanalítica utilizando tecnologías como YOLO, Darknet, PyTorch y TensorFlow. Gestión y liderazgo de equipo de trabajo.',
          responsibilities: [
            'Desarrollo de sistemas de detección de objetos con videanalítica',
            'Implementación con tecnologías YOLO, Darknet, PyTorch y TensorFlow',
            'Gestión y liderazgo de equipo de trabajo',
            'Seguimiento de tareas para completar objetivos',
            'Desarrollo de aplicaciones con escalabilidad mediante Docker',
            'Construcción de APIs con librerías como Axios y Fetch'
          ]
        },
        'deliryum-junior-programmer': {
          description: 'Desarrollo de modelos de inteligencia artificial y Deep Learning, etiquetar y clasificar objetos en grandes volúmenes de imágenes utilizando herramientas de anotación.',
          responsibilities: [
            'Etiquetado y clasificación de objetos en grandes volúmenes de imágenes',
            'Entrenamiento y optimización de modelos de Deep Learning',
            'Implementación en Azure Cloud con cuadernos de Google Colab',
            'Desarrollo de módulos para definir proyectos con polígonos en áreas restringidas',
            'Uso de OpenCV para control de accesos en imágenes y videos'
          ]
        },
        'deliryum-intern': {
          description: 'Diseño de interfaces y páginas web, participación en la creación de diversas APIs, tanto consumiendo como desarrollando APIs mediante consultas a bases de datos.',
          responsibilities: [
            'Diseño de interfaces y páginas web responsive',
            'Creación y consumo de APIs REST',
            'Desarrollo de consultas a bases de datos',
            'Participación en proyectos de desarrollo full stack',
            'Implementación de mejores prácticas de desarrollo web'
          ]
        }
      },
      projects: {
        'pmgd-netbilling': {
          name: 'PMGD - NetBilling',
          period: 'octubre 2025 - Actualidad',
          description: 'Migración de base de datos de proyecto GeneradorKMZ. De ORACLE a PostgreSQL.'
        },
        'enel': {
          name: 'ENEL',
          period: 'mayo 2025 - Actualidad',
          description: 'Soporte y mantenimiento de sistema informático, proyecto Plataforma Gestión de Emergencias PGE, participando en la creación de módulo \'IEH\', resolución de incidencias y mejora continua de la infraestructura TI / aplicativo. Uso de Clean Architecture y patrón de diseño Mediator'
        },
        'codelco': {
          name: 'Codelco',
          period: 'enero 2025 - Actualidad',
          description: 'Soporte y mantenimiento de sistema informático, proyecto SIC3PRO, participando en la creación de módulo \'PIE\', resolución de incidencias y mejora continua de la infraestructura TI / aplicativo.'
        },
        'cen': {
          name: 'Coordinador Eléctrico Nacional - CEN',
          period: 'agosto 2023 - diciembre 2024',
          description: 'Soporte y mantenimiento de sistemas informáticos en diversas áreas (full stack), abarcando proyectos como Sistema de Correspondencia, Operación Real, Plataforma de Gestión de Proyectos (PGP), Neomante y Estados Operativos. Atención de requerimientos, resolución de tickets incidencias y mejora continua de la infraestructura TI.'
        }
      }
    },
    skills: {
      title: 'Habilidades Técnicas',
      subtitle: 'Tecnologías y herramientas con las que trabajo'
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Algunos de los proyectos en los que he trabajado',
      all: 'Todos',
      viewCode: 'Ver Código',
      viewDemo: 'Ver Demo',
      viewLive: 'Ver Sitio',
      categories: {
        'web-app': 'Aplicaciones Web',
        'spa': 'Single Page Apps',
        'desktop-app': 'Apps de Escritorio',
        'api': 'APIs',
        'tool': 'Herramientas',
        'design': 'Diseño',
        'other': 'Otros'
      }
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
      name: 'Nombre',
      email: 'Email',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado correctamente!',
      error: 'Error al enviar el mensaje',
      info: {
        title: 'Información de Contacto',
        email: 'Email',
        phone: 'Teléfono',
        location: 'Ubicación',
        social: 'Sígueme en redes',
        responseTime: 'Tiempo de respuesta',
        responseMessage: 'Usualmente respondo en 24 horas'
      },
      form: {
        title: 'Envíame un mensaje',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'tu@email.com',
        company: 'Empresa (opcional)',
        companyPlaceholder: 'Tu empresa',
        phone: 'Teléfono (opcional)',
        phonePlaceholder: '+34 123 456 789',
        subjectPlaceholder: 'Sobre qué quieres hablar?',
        messagePlaceholder: 'Cuéntame sobre tu proyecto, idea o simplemente salúdame...'
      }
    },
    footer: {
      rights: 'Todos los derechos reservados'
    }
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi! I\'m',
      title: 'Experienced Analyst & Full Stack Developer',
      description: 'Experienced Analyst and Full Stack Developer with over 4 years of experience in software development, computer systems, and artificial intelligence solutions. Specialized in Python, React, Django, and video analytics technologies. Solid experience at INDRA and Deliryum developing critical systems and innovative AI solutions.',
      downloadCV: 'Download CV',
      contactMe: 'Contact Me'
    },
    about: {
      title: 'About Me',
      description: 'Experienced Analyst and Full Stack Developer with over 4 years of experience in software development, computer systems, and artificial intelligence solutions. Specialized in Python, React, Django, and video analytics technologies. Solid experience at INDRA and Deliryum developing critical systems and innovative AI solutions.',
      subtitle: 'My professional career in software development',
      highlights: 'What sets me apart:',
      highlightsList: [
        'Experience at INDRA with critical systems and emergency platforms',
        'Development of AI and video analytics systems with YOLO, PyTorch, TensorFlow',
        'Technical team management and leadership at Deliryum',
        'Specialist in Python, Django, React, Angular and full stack technologies',
        'Resolution of critical incidents and continuous improvement of IT infrastructure',
        'Implementation of Clean Architecture and enterprise design patterns'
      ],
      yearsExperience: 'Years of experience',
      projectsCompleted: 'Projects completed'
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'My professional career in software development',
      current: 'Current',
      present: 'Present',
      duration: {
        year: 'year',
        years: 'years',
        month: 'month',
        months: 'months'
      },
      remote: 'Remote',
      hybrid: 'Hybrid',
      onsite: 'On-site',
      responsibilities: 'Responsibilities:',
      technologies: 'Technologies:',
      project: 'Project:',
      employmentType: {
        'full-time': 'Full-time',
        'part-time': 'Part-time',
        contract: 'Contract',
        freelance: 'Freelance',
        internship: 'Internship'
      },
      positions: {
        'indra-experienced-analyst': {
          description: 'Support and maintenance of computer systems across multiple strategic projects, participating in database migrations, module creation, and incident resolution with continuous IT infrastructure improvement.',
          responsibilities: [
            'Support and maintenance of computer systems in critical projects',
            'Migration of ORACLE databases to PostgreSQL',
            'Creation of new modules and functionalities',
            'Resolution of incidents and support tickets',
            'Continuous improvement of IT infrastructure and applications',
            'Use of Clean Architecture and Mediator design patterns'
          ]
        },
        'indra-junior-engineer': {
          description: 'Support and maintenance of computer systems in various areas (full stack), covering multiple strategic projects with requirements handling and incident resolution.',
          responsibilities: [
            'Full stack systems support and maintenance across multiple projects',
            'Requirements handling and ticket resolution',
            'Resolution of incidents related to client applications',
            'Continuous improvement of IT infrastructure'
          ]
        },
        'deliryum-software-developer': {
          description: 'Development of object detection systems using video analytics with technologies such as YOLO, Darknet, PyTorch and TensorFlow. Team management and leadership.',
          responsibilities: [
            'Development of object detection systems with video analytics',
            'Implementation with YOLO, Darknet, PyTorch and TensorFlow technologies',
            'Team management and leadership',
            'Task tracking to complete objectives',
            'Development of scalable applications using Docker',
            'API construction with libraries like Axios and Fetch'
          ]
        },
        'deliryum-junior-programmer': {
          description: 'Development of artificial intelligence and Deep Learning models, labeling and classifying objects in large volumes of images using annotation tools.',
          responsibilities: [
            'Labeling and classification of objects in large volumes of images',
            'Training and optimization of Deep Learning models',
            'Implementation on Azure Cloud with Google Colab notebooks',
            'Development of modules to define projects with polygons in restricted areas',
            'Use of OpenCV for access control in images and videos'
          ]
        },
        'deliryum-intern': {
          description: 'Design of interfaces and web pages, participation in the creation of various APIs, both consuming and developing APIs through database queries.',
          responsibilities: [
            'Design of responsive interfaces and web pages',
            'Creation and consumption of REST APIs',
            'Development of database queries',
            'Participation in full stack development projects',
            'Implementation of web development best practices'
          ]
        }
      },
      projects: {
        'pmgd-netbilling': {
          name: 'PMGD - NetBilling',
          period: 'October 2025 - Present',
          description: 'Database migration for GeneradorKMZ project. From ORACLE to PostgreSQL.'
        },
        'enel': {
          name: 'ENEL',
          period: 'May 2025 - Present',
          description: 'Support and maintenance of computer system, Emergency Management Platform project (PGE), participating in the creation of \'IEH\' module, incident resolution and continuous improvement of IT infrastructure / application. Use of Clean Architecture and Mediator design pattern'
        },
        'codelco': {
          name: 'Codelco',
          period: 'January 2025 - Present',
          description: 'Support and maintenance of computer system, SIC3PRO project, participating in the creation of \'PIE\' module, incident resolution and continuous improvement of IT infrastructure / application.'
        },
        'cen': {
          name: 'National Electric Coordinator - CEN',
          period: 'August 2023 - December 2024',
          description: 'Support and maintenance of computer systems in various areas (full stack), covering projects such as Correspondence System, Real Operation, Project Management Platform (PGP), Neomante and Operational States. Requirements handling, incident ticket resolution and continuous improvement of IT infrastructure.'
        }
      }
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies and tools I work with'
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Some of the projects I\'ve worked on',
      all: 'All',
      viewCode: 'View Code',
      viewDemo: 'View Demo',
      viewLive: 'View Site',
      categories: {
        'web-app': 'Web Applications',
        'spa': 'Single Page Apps',
        'desktop-app': 'Desktop Apps',
        'api': 'APIs',
        'tool': 'Tools',
        'design': 'Design',
        'other': 'Other'
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a project in mind? Let\'s talk!',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending message',
      info: {
        title: 'Contact Information',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        social: 'Follow me on social media',
        responseTime: 'Response Time',
        responseMessage: 'I usually respond within 24 hours'
      },
      form: {
        title: 'Send me a message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        company: 'Company (optional)',
        companyPlaceholder: 'Your company',
        phone: 'Phone (optional)',
        phonePlaceholder: '+1 123 456 789',
        subjectPlaceholder: 'What do you want to talk about?',
        messagePlaceholder: 'Tell me about your project, idea or just say hi...'
      }
    },
    footer: {
      rights: 'All rights reserved'
    }
  }
};
