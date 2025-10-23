import React from 'react';
import { Container, Section } from '@/components/ui/Container';

interface AboutProps {
  description: string;
  highlights?: string[];
  image?: string;
}

/**
 * Sección Acerca de mí
 * Información detallada sobre el desarrollador
 */
export const About: React.FC<AboutProps> = ({ 
  description, 
  highlights = [],
  image 
}) => {
  return (
    <Section id="about" background="muted">
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Acerca de mí
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
              </div>

              {highlights.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Lo que me destaca:
                  </h3>
                  <ul className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stats or additional info could go here */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    3+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Años de experiencia
                  </div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    20+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Proyectos completados
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              {image ? (
                <div className="relative">
                  <img
                    src={image}
                    alt="About me"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-full h-full 
                                border-2 border-blue-600 rounded-2xl -z-10" />
                </div>
              ) : (
                /* Placeholder with icon */
                <div className="w-full aspect-square bg-gradient-to-br 
                              from-blue-100 to-purple-100 dark:from-blue-900 
                              dark:to-purple-900 rounded-2xl flex items-center 
                              justify-center shadow-2xl">
                  <svg className="w-24 h-24 text-blue-600 dark:text-blue-400" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;