'use client';

import { useIsClient } from '@/lib/utils';
import { ReactNode, memo } from 'react';

/**
 * Props del componente NoSSR
 */
export interface NoSSRProps {
  /** Contenido que se renderizará solo en el cliente */
  children: ReactNode;
  /** 
   * Contenido de respaldo que se muestra durante la hidratación del servidor
   * @default null
   */
  fallback?: ReactNode;
  /** 
   * Clase CSS opcional para el contenedor
   * @default undefined
   */
  className?: string;
}

/**
 * **NoSSR (No Server-Side Rendering)**
 * 
 * ## ¿Qué significa NoSSR?
 * 
 * NoSSR significa "No Server-Side Rendering" (Sin Renderizado del Lado del Servidor).
 * Este componente previene que el contenido se renderice durante la fase de SSR,
 * ejecutándose únicamente en el cliente (navegador).
 * 
 * ## ¿Por qué es necesario?
 * 
 * 1. **Prevención de Hydration Mismatch**: Evita errores cuando el HTML generado 
 *    en el servidor difiere del HTML generado en el cliente
 * 
 * 2. **APIs específicas del navegador**: Para componentes que usan:
 *    - `window`, `document`, `localStorage`, `sessionStorage`
 *    - APIs de geolocalización, notificaciones, etc.
 *    - Librerías que requieren el DOM del navegador
 * 
 * 3. **Contenido dinámico**: Para elementos que cambian según el estado del cliente:
 *    - Temas (dark/light mode)
 *    - Configuraciones de usuario
 *    - Datos que dependen del navegador
 * 
 * ## Cuándo usar NoSSR:
 * 
 * - ✅ Componentes que usan `window` o `document`
 * - ✅ Librerías de terceros que no soportan SSR
 * - ✅ Contenido que varía entre servidor y cliente
 * - ✅ Componentes interactivos que requieren JavaScript
 * 
 * ## Cuándo NO usar NoSSR:
 * 
 * - ❌ Contenido estático que debe ser SEO-friendly
 * - ❌ Elementos críticos para la primera carga
 * - ❌ Componentes que no usan APIs del navegador
 * 
 * @example
 * ```tsx
 * // Uso básico
 * <NoSSR>
 *   <ComponenteQueUsaWindow />
 * </NoSSR>
 * 
 * // Con fallback
 * <NoSSR fallback={<div>Cargando...</div>}>
 *   <ComponenteInteractivo />
 * </NoSSR>
 * 
 * // Con clase CSS
 * <NoSSR className="min-h-[200px]" fallback={<Skeleton />}>
 *   <GraficoComplejo />
 * </NoSSR>
 * ```
 * 
 * @param children - El contenido que se renderizará solo en el cliente
 * @param fallback - Contenido mostrado durante la hidratación (opcional)
 * @param className - Clase CSS para el contenedor (opcional)
 * @returns Componente que renderiza children solo en el cliente
 */
export const NoSSR = memo<NoSSRProps>(({ 
  children, 
  fallback = null, 
  className 
}) => {
  const isClient = useIsClient();

  // Durante SSR o antes de la hidratación, mostrar fallback
  if (!isClient) {
    return fallback ? (
      <div className={className} suppressHydrationWarning>
        {fallback}
      </div>
    ) : null;
  }

  // En el cliente, renderizar el contenido real
  return (
    <div className={className} suppressHydrationWarning>
      {children}
    </div>
  );
});

// Nombre para debugging
NoSSR.displayName = 'NoSSR';

export default NoSSR;