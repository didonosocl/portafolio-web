import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ProjectsClient from '@/components/sections/ProjectsClient';
import Contact from '@/components/sections/Contact';
import { personalInfo, navigation, aboutInfo } from '@/data/personal';
import { projects } from '@/data/projects';

/**
 * Página principal del portafolio personal
 * 
 * Esta es la página de inicio que integra todas las secciones principales del sitio web.
 * Utiliza Next.js 13+ con App Router y está completamente optimizada para SEO.
 * 
 * Estructura de la página:
 * - Header: Navegación principal con enlaces a las secciones
 * - Hero: Sección de presentación personal con información destacada
 * - About: Información detallada sobre el desarrollador
 * - Projects: Galería de proyectos desarrollados (renderizada en cliente)
 * - Skills: Grid de habilidades técnicas (hardcodeadas temporalmente)
 * - Experience: Experiencia profesional (placeholder con datos de ejemplo)
 * - Contact: Formulario y información de contacto
 * - Footer: Información de copyright y créditos
 * 
 * @returns {JSX.Element} Componente de la página principal
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 
        HEADER NAVIGATION
        Componente de navegación principal que permanece fijo en la parte superior.
        Recibe la configuración de navegación y el logo desde los datos personales.
      */}
      <Header 
        navigation={navigation}
        logo={{ text: personalInfo.name }}
      />

      {/* 
        HERO SECTION
        Sección principal de presentación que aparece al cargar la página.
        Contiene el nombre, título profesional y llamada a la acción principal.
        Los datos se cargan desde @/data/personal.ts
      */}
      <Hero personalInfo={personalInfo} />

      {/* 
        ABOUT SECTION
        Sección informativa sobre el desarrollador que incluye:
        - Descripción personal y profesional
        - Puntos destacados de la experiencia
        - Imagen de perfil (opcional)
        Los datos se cargan desde aboutInfo en @/data/personal.ts
      */}
      <About 
        description={aboutInfo.description}
        highlights={aboutInfo.highlights}
        image={aboutInfo.image}
      />

      {/* 
        PROJECTS SECTION
        Galería de proyectos desarrollados renderizada del lado del cliente.
        Utiliza ProjectsClient para manejar interacciones y animaciones.
        Los datos se cargan desde @/data/projects.ts
      */}
      <ProjectsClient projects={projects} />

      {/* 
        SKILLS SECTION - TEMPORAL
        Grid responsive de habilidades técnicas con diseño de tarjetas.
        
        TODO: Migrar a un componente separado y cargar datos desde @/data/skills.ts
        TODO: Añadir iconos específicos para cada tecnología
        TODO: Implementar niveles de competencia o años de experiencia
        
        Layout responsivo:
        - Móvil: 2 columnas
        - Tablet: 4 columnas  
        - Desktop: 6 columnas
      */}
      <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título de la sección con línea decorativa */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Habilidades Técnicas
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>
          
          {/* Grid de habilidades - Datos hardcodeados temporalmente */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 
              'PostgreSQL', 'Tailwind CSS', 'Docker', 'Git'
            ].map((skill) => (
              <div key={skill} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm text-center">
                {/* Icono temporal - TODO: Reemplazar por iconos específicos */}
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-medium text-gray-900 dark:text-white">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        EXPERIENCE SECTION - TEMPORAL
        Sección de experiencia profesional con formato de timeline.
        
        TODO: Migrar a un componente separado (Experience.tsx)
        TODO: Cargar datos desde @/data/experience.ts
        TODO: Implementar timeline completo para múltiples experiencias
        TODO: Añadir logos de empresas
        
        Actualmente muestra solo una experiencia de ejemplo (Freelance).
        Diseño responsive con tarjeta destacada y avatar inicial.
      */}
      <section id="experience" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experiencia Profesional
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>
          
          {/* Container de experiencias - Actualmente solo una */}
          <div className="max-w-4xl mx-auto">
            {/* Tarjeta de experiencia individual */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                {/* Avatar/Logo de la empresa - Temporal con inicial */}
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  D
                </div>
                
                {/* Contenido de la experiencia */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Desarrollador Full Stack
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Freelance • 2021 - Presente
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Desarrollo de aplicaciones web completas utilizando tecnologías modernas como 
                    React, Next.js, TypeScript y Node.js. Experiencia trabajando con clientes 
                    internacionales y proyectos de diferentes escalas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        CONTACT SECTION
        Formulario de contacto y información de redes sociales.
        Incluye validación del lado del cliente y manejo de envío.
        Los datos se cargan desde personalInfo en @/data/personal.ts
      */}
      <Contact personalInfo={personalInfo} />

      {/* 
        FOOTER
        Pie de página simple con información de copyright y créditos.
        Utiliza el nombre desde personalInfo para mantener consistencia.
        
        TODO: Considerar añadir enlaces a redes sociales o navegación adicional
      */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 {personalInfo.name}. Hecho con ❤️ usando Next.js y Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
