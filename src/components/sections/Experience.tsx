'use client';

import { Experience as ExperienceType, Position } from '@/types';
import { formatExperienceDate, calculateDuration } from '@/data/experience';
import { useLanguage } from '@/contexts/LanguageContext';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  const { t } = useLanguage();
  
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('experience.title')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            {t('experience.subtitle') || 'Mi trayectoria profesional en desarrollo de software'}
          </p>
        </div>

        {/* Timeline de experiencias */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
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
  const { t } = useLanguage();
  const totalDuration = calculateDuration(experience.totalStartDate, experience.totalEndDate);
  const totalStartDate = formatExperienceDate(experience.totalStartDate);
  const totalEndDate = experience.totalEndDate 
    ? formatExperienceDate(experience.totalEndDate) 
    : t('experience.present');

  return (
    <div className="relative">
      {/* Línea del timeline */}
      {!isLast && (
        <div className="absolute left-8 md:left-12 top-20 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />
      )}
      
      {/* Tarjeta de empresa */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
        
        {/* Header de la empresa */}
        <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-start gap-4">
            {/* Logo de la empresa */}
            <div className="relative flex-shrink-0">
              <div className="absolute -left-12 md:-left-16 top-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10" />
              {experience.companyLogo ? (
                <img
                  src={experience.companyLogo}
                  alt={`Logo de ${experience.company}`}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg bg-white p-2"
                />
              ) : (
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                  {experience.company.charAt(0)}
                </div>
              )}
            </div>

            {/* Info de la empresa */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {experience.company}
                    {experience.companyUrl && (
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-lg"
                      >
                        ↗
                      </a>
                    )}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    📍 {experience.location}
                    {experience.workMode && (
                      <span className="ml-2">
                        · {experience.workMode === 'remote' ? t('experience.remote') : 
                           experience.workMode === 'hybrid' ? t('experience.hybrid') : 
                           t('experience.onsite')}
                      </span>
                    )}
                  </p>
                </div>
                
                <div className="flex flex-col md:items-end text-sm">
                  <span className="text-gray-900 dark:text-white font-medium">
                    {totalStartDate} - {totalEndDate}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {totalDuration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Posiciones dentro de la empresa */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {experience.positions.map((position, index) => (
            <PositionCard 
              key={position.id} 
              position={position} 
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface PositionCardProps {
  position: Position;
  isFirst: boolean;
}

function PositionCard({ position, isFirst }: PositionCardProps) {
  const { t } = useLanguage();
  const duration = calculateDuration(position.startDate, position.endDate);
  const startDate = formatExperienceDate(position.startDate);
  const endDate = position.endDate 
    ? formatExperienceDate(position.endDate) 
    : t('experience.present');

  const getEmploymentTypeColor = (type: string) => {
    const colors = {
      'full-time': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      'freelance': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      'part-time': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      'contract': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
      'internship': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    };
    return colors[type as keyof typeof colors] || colors['full-time'];
  };

  const getEmploymentTypeLabel = (type: string) => {
    return t(`experience.employmentType.${type}`) || type;
  };

  return (
    <div className="p-6 md:p-8 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      {/* Header del puesto */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {position.title}
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${getEmploymentTypeColor(position.type)}`}>
              {getEmploymentTypeLabel(position.type)}
            </span>
          </div>
        </div>
        
        <div className="flex flex-col md:items-end text-sm">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            {startDate} - {endDate}
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            {duration}
          </span>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {t(`experience.positions.${position.id}.description`) || position.description}
      </p>

      {/* Proyectos (si existen) */}
      {position.projects && position.projects.length > 0 && (
        <div className="mb-4 space-y-3">
          {position.projects.map((project, projIdx) => {
            const projectKey = (project as any).key || '';
            const projectData = projectKey ? (t(`experience.projects.${projectKey}`) as any) : null;
            
            return (
              <div
                key={projIdx}
                className="pl-4 border-l-2 border-blue-300 dark:border-blue-700 bg-blue-50/30 dark:bg-blue-900/10 rounded-r-lg p-3"
              >
                <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  📋 {t('experience.project')}: {projectData?.name || project.name}
                </h5>
                {(projectData?.period || project.period) && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    📅 {projectData?.period || project.period}
                  </p>
                )}
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  {projectData?.description || project.description}
                </p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-0.5 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Responsabilidades */}
      {position.responsibilities && position.responsibilities.length > 0 && (
        <div className="mb-4">
          <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            {t('experience.responsibilities')}
          </h5>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
            {(t(`experience.positions.${position.id}.responsibilities`) as unknown as string[] || position.responsibilities).map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0">•</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tecnologías */}
      {position.technologies && position.technologies.length > 0 && (
        <div>
          <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            {t('experience.technologies')}
          </h5>
          <div className="flex flex-wrap gap-2">
            {position.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md border border-blue-200 dark:border-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}