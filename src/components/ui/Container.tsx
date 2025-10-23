import React from 'react';
import { SectionProps as BaseSectionProps } from '@/types';

interface ContainerProps extends BaseSectionProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
}

/**
 * Componente contenedor reutilizable
 * Proporciona un contenedor centrado con ancho máximo responsive
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  maxWidth = 'xl',
  padding = true,
  id,
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md', 
    lg: 'max-w-lg',
    xl: 'max-w-7xl',
    '2xl': 'max-w-7xl',
    full: 'max-w-full'
  };

  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : '';

  return (
    <div 
      id={id}
      className={`
        mx-auto w-full
        ${maxWidthClasses[maxWidth]}
        ${paddingClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'accent';
}

/**
 * Componente de sección reutilizable
 * Proporciona estructura base para las secciones del portafolio
 */
export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'default',
  ...props
}) => {
  const backgroundClasses = {
    default: 'bg-white dark:bg-gray-900',
    muted: 'bg-gray-50 dark:bg-gray-800',
    accent: 'bg-blue-50 dark:bg-blue-900/20'
  };

  return (
    <section 
      className={`
        py-16 md:py-24 
        ${backgroundClasses[background]}
        ${className}
      `}
      {...props}
    >
      {children}
    </section>
  );
};

export default Container;