'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { getTechIcon } from '@/lib/techIcons';
import { useLanguage } from '@/contexts/LanguageContext';

interface SkillsProps {
  skills: string[];
}

/**
 * Componente Skills con carrusel infinito animado
 * - Movimiento automático de derecha a izquierda
 * - Pausa al hacer hover
 * - Efecto de zoom en la card al pasar el mouse
 * - Doble fila para efecto continuo sin cortes
 */
export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <Container>
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('skills.subtitle')}
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>
      </Container>

      {/* Carrusel infinito */}
      <div className="relative">
        {/* Gradientes en los bordes para efecto de fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />

        {/* Contenedor del carrusel con animación */}
        <div className="flex gap-6 animate-scroll-infinite">
          {/* Primera fila de skills */}
          {skills.map((skill, index) => (
            <SkillCard key={`skill-1-${index}`} skill={skill} />
          ))}
          {/* Duplicado para carrusel infinito */}
          {skills.map((skill, index) => (
            <SkillCard key={`skill-2-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Tarjeta individual de skill con efecto hover
 */
interface SkillCardProps {
  skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const IconComponent = getTechIcon(skill);

  return (
    <div className="flex-shrink-0 w-40 group cursor-pointer">
      <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-xl group-hover:bg-blue-50 dark:group-hover:bg-gray-600 border border-gray-200 dark:border-gray-600">
        {/* Icono */}
        <div className="w-16 h-16 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
          <div dangerouslySetInnerHTML={{ __html: IconComponent }} />
        </div>
        
        {/* Nombre de la tecnología */}
        <div className="text-center">
          <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {skill}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
