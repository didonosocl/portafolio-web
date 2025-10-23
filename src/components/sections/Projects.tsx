'use client';

import React, { useState } from 'react';
import { Container, Section } from '@/components/ui/Container';
import { Card, Badge, Button } from '@/components/ui/Button';
import { Project, ProjectCategory } from '@/types';

interface ProjectsProps {
  projects: Project[];
}

/**
 * Sección de Proyectos
 * Muestra los proyectos del portafolio con filtros y detalles
 */
export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Obtener categorías únicas
  const categories: (ProjectCategory | 'all')[] = [
    'all',
    ...Array.from(new Set(projects.map(p => p.category)))
  ];

  const categoryLabels: Record<ProjectCategory | 'all', string> = {
    all: 'Todos',
    'web-app': 'Web Apps',
    'mobile-app': 'Apps Móviles',
    'desktop-app': 'Apps Desktop',
    'api': 'APIs',
    'library': 'Librerías',
    'tool': 'Herramientas',
    'design': 'Diseño',
    'other': 'Otros'
  };

  // Filtrar proyectos
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  // Proyectos destacados
  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  const getStatusBadge = (status: Project['status']) => {
    const variants = {
      'completed': 'success' as const,
      'in-progress': 'warning' as const,
      'planned': 'info' as const,
      'archived': 'secondary' as const
    };
    
    const labels = {
      'completed': 'Completado',
      'in-progress': 'En progreso',
      'planned': 'Planeado',
      'archived': 'Archivado'
    };

    return (
      <Badge variant={variants[status]}>
        {labels[status]}
      </Badge>
    );
  };

  const ProjectCard: React.FC<{ project: Project; featured?: boolean }> = ({ 
    project, 
    featured = false 
  }) => (
    <Card 
      className={`group cursor-pointer ${featured ? 'lg:col-span-2' : ''}`}
      hover
      onClick={() => setSelectedProject(project)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full object-cover transition-transform duration-300 
                    group-hover:scale-105 ${featured ? 'h-64' : 'h-48'}`}
        />
        <div className="absolute top-4 right-4">
          {getStatusBadge(project.status)}
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white 
                       group-hover:text-blue-600 dark:group-hover:text-blue-400 
                       transition-colors">
            {project.title}
          </h3>
          <Badge variant="secondary" size="sm">
            {categoryLabels[project.category]}
          </Badge>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, featured ? 6 : 4).map((tech) => (
            <Badge key={tech} variant="primary" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > (featured ? 6 : 4) && (
            <Badge variant="secondary" size="sm">
              +{project.technologies.length - (featured ? 6 : 4)}
            </Badge>
          )}
        </div>

        {/* Project Links */}
        <div className="flex gap-2 pt-2">
          {project.links.map((link) => (
            <Button
              key={link.type}
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                window.open(link.url, '_blank');
              }}
            >
              {link.type === 'github' && '📂'}
              {link.type === 'live' && '🌐'}
              {link.type === 'demo' && '▶️'}
              {link.label || link.type}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );

  return (
    <Section id="projects">
      <Container>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mis Proyectos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Una selección de mis trabajos más destacados
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {categoryLabels[category]}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Proyectos Destacados
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            {featuredProjects.length > 0 && (
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Otros Proyectos
              </h3>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              No se encontraron proyectos en esta categoría.
            </p>
          </div>
        )}

      </Container>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
             onClick={() => setSelectedProject(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl max-h-[90vh] 
                        overflow-y-auto p-6" 
               onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </Button>
            </div>
            
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                {selectedProject.longDescription || selectedProject.description}
              </p>
              
              {selectedProject.challenges && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Desafíos:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <Badge key={tech} variant="primary">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3 pt-4">
                {selectedProject.links.map((link) => (
                  <Button
                    key={link.type}
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    {link.label || link.type}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Projects;