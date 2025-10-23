import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler
  reactCompiler: true,
  
  // Configuraciones de performance
  poweredByHeader: false,
  compress: true,
  
  // Optimizaciones de imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      // Agrega aquí los dominios de tus imágenes
    ],
  },
  
  // Configuración de headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ['@headlessui/react', '@heroicons/react'],
  },

  // Configuración del panel de desarrollo
  devIndicators: {
    position: 'bottom-right',  // Posición del panel (top-left, top-right, bottom-left, bottom-right)
  }
};

export default nextConfig;
