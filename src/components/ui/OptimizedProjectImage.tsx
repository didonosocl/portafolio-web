'use client';

import React, { useState } from 'react';

interface OptimizedProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  featured?: boolean;
}

/**
 * Componente optimizado para imágenes de proyectos
 * Maneja la carga, errores y optimización de imágenes
 */
export const OptimizedProjectImage: React.FC<OptimizedProjectImageProps> = ({
  src,
  alt,
  className = '',
  featured = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const baseClasses = `
    w-full transition-all duration-300 group-hover:scale-105
    ${featured ? 'h-64' : 'h-48'}
    ${isLoading ? 'opacity-0' : 'opacity-100'}
  `.trim();

  return (
    <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-100 dark:bg-gray-800">
      {/* Loading skeleton */}
      {isLoading && (
        <div className={`${featured ? 'h-64' : 'h-48'} w-full bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg flex items-center justify-center`}>
          <div className="text-gray-400 dark:text-gray-600">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}

      {/* Imagen principal */}
      <img
        src={hasError ? '/images/placeholder-project.png' : src}
        alt={alt}
        className={`${baseClasses} ${hasError ? 'object-contain' : 'object-contain'} ${className}`}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
      />

      {/* Overlay para mejor contraste con badges */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default OptimizedProjectImage;