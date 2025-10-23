import { useState, useEffect } from 'react';

/**
 * Utility function para combinar clases CSS
 * Normaliza espacios y elimina clases duplicadas
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Hook personalizado para prevenir hydration mismatch
 * Útil para componentes que necesitan acceso a APIs del cliente
 */
export function useNoSSR() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

/**
 * Hook para detectar si estamos en el cliente
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}