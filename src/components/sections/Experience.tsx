'use client';

import { Experience as ExperienceType } from '@/types';
import { formatExperienceDate, calculateDuration } from '@/data/experience';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experiencia Profesional
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Mi trayectoria profesional en desarrollo de software
          </p>
        </div>

        {/* Timeline de experiencias */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: ExperienceType;
  isLast: boolean;
}

function ExperienceCard({ experience, isLast }: ExperienceCardProps) {
  const duration = calculateDuration(experience.startDate, experience.endDate);
  const startDate = formatExperienceDate(experience.startDate);
  const endDate = experience.endDate 
    ? formatExperienceDate(experience.endDate) 
    : 'Presente';

  // Mapeo de tipos de empleo a colores
  const getEmploymentTypeColor = (type: string) => {
    const colors = {
      'full-time': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'freelance': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'part-time': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      'contract': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      'internship': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    };
    return colors[type as keyof typeof colors] || colors['full-time'];
  };

  const getEmploymentTypeLabel = (type: string) => {
    const labels = {
      'full-time': 'Tiempo Completo',
      'freelance': 'Freelance',
      'part-time': 'Medio Tiempo',
      'contract': 'Contrato',
      'internship': 'Prácticas'
    };
    return labels[type as keyof typeof labels] || type;
  };

  return (
    <div className="relative">
      {/* Línea del timeline */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
      )}
      
      {/* Tarjeta de experiencia */}
      <div className="relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 ml-0 md:ml-16">
        {/* Punto del timeline */}
        <div className="absolute -left-3 md:-left-19 top-8 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800" />
        
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          {/* Avatar/Logo de la empresa */}
          <div className="flex-shrink-0">
            {experience.companyLogo ? (
              <img
                src={experience.companyLogo}
                alt={`Logo de ${experience.company}`}
                className="w-12 h-12 rounded-lg object-cover"
              />
            ) : (
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                {experience.company.charAt(0)}
              </div>
            )}
          </div>

          {/* Contenido principal */}
          <div className="flex-1 min-w-0">
            {/* Header con título y fechas */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {experience.position}
                </h3>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                  <span>{experience.company}</span>
                  {experience.companyUrl && (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      ↗
                    </a>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col md:items-end mt-2 md:mt-0">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {startDate} - {endDate}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {duration}
                </div>
              </div>
            </div>

            {/* Tipo de empleo y ubicación */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getEmploymentTypeColor(experience.type)}`}>
                {getEmploymentTypeLabel(experience.type)}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                📍 {experience.location}
              </span>
            </div>

            {/* Descripción */}
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {experience.description}
            </p>

            {/* Responsabilidades */}
            {experience.responsibilities && experience.responsibilities.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Responsabilidades:
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1.5">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Logros */}
            {experience.achievements && experience.achievements.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Logros destacados:
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1.5">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tecnologías */}
            {experience.technologies && experience.technologies.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Tecnologías utilizadas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}