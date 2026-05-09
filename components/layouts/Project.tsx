'use client';

import { projectData } from '@/data/Project.data';
import { useState } from 'react';
import Image from 'next/image';

const Project = () => {
  const [activeCategory, setActiveCategory] = useState<'Mobile App' | 'Website' | 'Desktop' | 'Other Projects'>('Mobile App');
  const categories = ['Mobile App', 'Website', 'Desktop', 'Other Projects'] as const;

  const filteredProjects = projectData.filter(project => project.category === activeCategory);

  return (
    <section id="project" className="py-24 border-t border-border-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-text-primary mb-8">Projects</h2>

        {/* Category filter */}
        <div className="flex gap-6 mb-12 border-b border-border-primary">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`pb-3 text-sm font-medium transition-colors duration-150 ${
                activeCategory === category
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={`${activeCategory}-${index}`}
                className="border border-border-primary p-8 space-y-4"
              >
                {/* Image */}
                {project.image && (
                  <div className="relative w-full h-48 overflow-hidden border border-border-primary">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}

                {/* Result */}
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {project.result}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2 py-1 border border-border-primary text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Status bar */}
                {project.status && (
                  <div className="pt-4 border-t border-border-primary space-y-2">
                    <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                      {project.status.type === 'completed' && 'Completed'}
                      {project.status.type === 'in-progress' && 'In Progress'}
                      {project.status.type === 'coming-soon' && 'Coming Soon'}
                    </p>
                    {project.status.progress !== undefined && (
                      <div className="w-full h-1 bg-border-primary overflow-hidden">
                        <div
                          className="h-full bg-accent transition-all duration-300"
                          style={{ width: `${project.status.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="text-sm text-accent hover:underline transition-colors duration-150">
                      Live Demo
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a href={project.sourceUrl} className="text-sm text-accent hover:underline transition-colors duration-150">
                      Source
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-text-muted py-20">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
