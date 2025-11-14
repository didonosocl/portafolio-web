import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ProjectsClient from '@/components/sections/ProjectsClient';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import { personalInfo, navigation, aboutInfo } from '@/data/personal';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experience';
import { getTechIcon } from '@/lib/techIcons';

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
        EXPERIENCE SECTION
        Sección de experiencia profesional con timeline interactivo.
        Renderiza todas las experiencias desde @/data/experience.ts
        Incluye responsabilidades, logros y tecnologías para cada posición.
      */}
      <Experience experiences={experiences} />

      {/* 
        SKILLS SECTION
        Carrusel infinito de habilidades técnicas con animación automática.
        - Movimiento continuo de derecha a izquierda
        - Pausa al hacer hover sobre una tecnología
        - Efecto de zoom en la card al pasar el mouse
        Las tecnologías se cargan como array de strings.
      */}
      <Skills skills={[
        'Python', 'Django', 'React', 'Angular', 
        'PostgreSQL', 'MongoDB', 'Oracle', 'Docker', 
        'Azure', 'PyTorch', 'YOLO', 'OpenCV', 
        'Flask', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Git'
      ]} />

      {/* 
        PROJECTS SECTION
        Galería de proyectos desarrollados renderizada del lado del cliente.
        Utiliza ProjectsClient para manejar interacciones y animaciones.
        Los datos se cargan desde @/data/projects.ts
      */}
      <ProjectsClient projects={projects} />

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
              © 2025 {personalInfo.name}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
