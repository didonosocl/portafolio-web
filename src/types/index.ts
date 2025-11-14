// ====================
// TIPOS PRINCIPALES
// ====================

/**
 * Información personal del portafolio
 */
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone?: string;
  location: string;
  avatar: string;
  resume?: string;
  socialLinks: SocialLink[];
}

/**
 * Enlaces sociales
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username?: string;
}

/**
 * Proyecto del portafolio
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  links: ProjectLink[];
  dateCompleted: string;
  duration?: string;
  team?: TeamMember[];
  learnings?: string[];
}

/**
 * Categorías de proyectos
 */
export type ProjectCategory = 
  | 'web-app' 
  | 'spa'
  | 'desktop-app' 
  | 'api' 
  | 'tool' 
  | 'design' 
  | 'other';

/**
 * Estado del proyecto
 */
export type ProjectStatus = 
  | 'completed' 
  | 'in-progress' 
  | 'planned' 
  | 'archived';

/**
 * Enlaces del proyecto
 */
export interface ProjectLink {
  type: 'github' | 'live' | 'demo' | 'video' | 'design' | 'documentation';
  url: string;
  label?: string;
}

/**
 * Miembros del equipo
 */
export interface TeamMember {
  name: string;
  role: string;
  linkedin?: string;
  github?: string;
}

/**
 * Habilidad técnica
 */
export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string;
  experience: string; // ej: "2 años", "3+ años"
  description?: string;
}

/**
 * Categorías de habilidades
 */
export type SkillCategory = 
  | 'frontend' 
  | 'backend' 
  | 'database' 
  | 'devops' 
  | 'mobile' 
  | 'design' 
  | 'tools' 
  | 'soft-skills';

/**
 * Nivel de habilidad
 */
export type SkillLevel = 
  | 'beginner' 
  | 'intermediate' 
  | 'advanced' 
  | 'expert';

/**
 * Experiencia laboral
 */
export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  type: EmploymentType;
  startDate: string;
  endDate?: string; // undefined si es trabajo actual
  description: string;
  responsibilities: string[];
  technologies: string[];
  companyUrl?: string;
  companyLogo?: string;
}

/**
 * Tipo de empleo
 */
export type EmploymentType = 
  | 'full-time' 
  | 'part-time' 
  | 'contract' 
  | 'freelance' 
  | 'internship';

/**
 * Educación
 */
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
  description?: string;
  achievements?: string[];
  location: string;
  institutionUrl?: string;
}

/**
 * Certificación
 */
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  dateIssued: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  badge?: string;
  skills: string[];
}

/**
 * Testimonio
 */
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
  relationship: 'colleague' | 'client' | 'manager' | 'mentor' | 'other';
  linkedinUrl?: string;
}

/**
 * Configuración del blog (si se implementa)
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  featured: boolean;
  image?: string;
  readingTime: number; // en minutos
  author: string;
}

// ====================
// TIPOS DE COMPONENTES
// ====================

/**
 * Props base para componentes de sección
 */
export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Props para componentes de navegación
 */
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}

/**
 * Props para modales
 */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Props para formularios
 */
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  required?: boolean;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
  options?: { value: string; label: string }[];
}

// ====================
// TIPOS DE UTILIDAD
// ====================

/**
 * Estado de carga
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Tema de la aplicación
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * Configuración SEO
 */
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  image: string;
  twitterHandle?: string;
  language: string;
}

/**
 * Configuración de analytics
 */
export interface AnalyticsConfig {
  googleAnalyticsId?: string;
  facebookPixelId?: string;
  hotjarId?: string;
}

/**
 * Respuesta de API genérica
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

/**
 * Datos de contacto del formulario
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
}