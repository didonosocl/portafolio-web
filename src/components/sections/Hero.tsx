'use client';

import React from 'react';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { PersonalInfo } from '@/types';
import NoSSR from '@/components/ui/NoSSR';

interface HeroProps {
  personalInfo: PersonalInfo;
}

/**
 * Sección Hero/Banner principal
 * Presenta la información principal del portafolio
 */
export const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Section 
      id="home" 
      className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              
              {/* Greeting */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <span className="text-2xl">👋</span>
                <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                  ¡Hola! Soy
                </span>
              </div>

              {/* Main Title */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  {personalInfo.name}
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400 mt-2">
                  {personalInfo.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                {personalInfo.description}
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">{personalInfo.location}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('#contact')}
                  leftIcon={
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                >
                  Contáctame
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('#projects')}
                  leftIcon={
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M19 11H5m14-7l-7 9-7-9" />
                    </svg>
                  }
                >
                  Ver Proyectos
                </Button>

                {personalInfo.resume && (
                  <Button 
                    variant="ghost" 
                    size="lg"
                    onClick={() => window.open(personalInfo.resume, '_blank')}
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    }
                  >
                    Descargar CV
                  </Button>
                )}
              </div>

              {/* Social Links */}
              <NoSSR fallback={<div className="h-16" />}>
                <div className="flex items-center gap-4 pt-6">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Sígueme:
                  </span>
                  <div className="flex gap-3">
                    {personalInfo.socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200 hover:scale-110"
                        aria-label={link.name}
                      >
                        <div className="w-5 h-5" dangerouslySetInnerHTML={{ __html: link.icon }} />
                      </a>
                    ))}
                  </div>
                </div>
              </NoSSR>
            </div>
          </div>

          {/* Avatar/Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 scale-110 animate-pulse" />
              
              {/* Avatar container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating elements - Wrapped in NoSSR to prevent hydration issues */}
              <NoSSR>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-80" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-300 opacity-80" />
              </NoSSR>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default Hero;