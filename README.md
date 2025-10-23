# 🚀 Portafolio Web - Diego

Un portafolio web moderno y responsive construido con Next.js 16, TypeScript y Tailwind CSS, diseñado para mostrar proyectos, habilidades y experiencia profesional.

## ✨ Características

- 🎨 **Diseño Moderno**: Interface limpia y profesional con modo oscuro/claro
- 📱 **Totalmente Responsive**: Optimizado para todos los dispositivos
- ⚡ **Rendimiento Optimizado**: Construcción con Next.js 16 y App Router
- 🛡️ **Type Safety**: Desarrollado completamente en TypeScript
- 🎯 **SEO Optimizado**: Metadatos y estructuras optimizadas para motores de búsqueda
- 🧩 **Componentes Modulares**: Arquitectura de componentes reutilizables
- 💅 **Styled con Tailwind**: Sistema de diseño consistente y escalable

## 🛠️ Tecnologías

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fuentes**: [Geist Font Family](https://vercel.com/font)
- **Linting**: [ESLint](https://eslint.org/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Estructura del Proyecto

```
portafolio-web/
├── public/              # Archivos estáticos
├── src/
│   ├── app/            # App Router de Next.js
│   │   ├── globals.css # Estilos globales
│   │   ├── layout.tsx  # Layout principal
│   │   └── page.tsx    # Página principal
│   ├── components/     # Componentes reutilizables
│   ├── lib/           # Utilidades y configuraciones
│   ├── types/         # Definiciones de tipos TypeScript
│   └── data/          # Datos del portafolio
├── eslint.config.mjs  # Configuración ESLint
├── next.config.ts     # Configuración Next.js
├── tailwind.config.js # Configuración Tailwind
└── tsconfig.json      # Configuración TypeScript
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18.17 o superior
- npm, yarn, pnpm o bun

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/devdiegodv/portafolio-web.git
   cd portafolio-web
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abre tu navegador**
   
   Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 📝 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 🎨 Personalización

### Datos del Portafolio

Los datos del portafolio se encuentran en `src/data/` y pueden ser editados fácilmente:

- `personal.ts` - Información personal y de contacto
- `projects.ts` - Lista de proyectos
- `skills.ts` - Habilidades técnicas
- `experience.ts` - Experiencia laboral

### Estilos

El proyecto utiliza Tailwind CSS para el styling. Los estilos globales se encuentran en `src/app/globals.css`.

### Componentes

Todos los componentes están en `src/components/` y son modulares y reutilizables.

## 🚀 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com/)
2. La configuración se detecta automáticamente
3. El deploy se realiza automáticamente en cada push

### Otros Proveedores

```bash
# Construir para producción
npm run build

# Los archivos estáticos estarán en la carpeta .next/
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Diego** - [@devdiegodv](https://github.com/devdiegodv)

## 🙏 Agradecimientos

- [Next.js Team](https://nextjs.org/) por el increíble framework
- [Vercel](https://vercel.com/) por el hosting y las fuentes Geist
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de diseño

---

⭐ ¡Dale una estrella si este proyecto te ayudó!
