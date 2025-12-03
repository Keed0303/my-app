'use client';

import { projectData } from '@/data/Project.data';
import { useState, useEffect } from 'react'
import AOS from 'aos';

const Project = () => {
  const [activeCategory, setActiveCategory] = useState<'Mobile App' | 'Website' | 'Desktop' | 'Other Projects'>('Mobile App');
  const categories = ['Mobile App', 'Website', 'Desktop', 'Other Projects'] as const;

  const filteredProjects = projectData.filter(project => project.category === activeCategory);

  // Refresh AOS when category changes
  useEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

  return (
    <>
     {/* Projects Section */}
      <section id="project" className="relative z-10 py-20 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Portfolio Title */}
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-5xl md:text-6xl font-bold text-center mb-12 tracking-wider text-slate-900 dark:text-white"
          >
            PORTFOLIO
          </h1>

          {/* Category Navigation */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-base md:text-lg font-medium transition-all duration-300 pb-2 ${
                  activeCategory === category
                    ? 'text-teal-600 dark:text-cyan-400 border-b-2 border-teal-600 dark:border-cyan-400'
                    : 'text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={`${activeCategory}-${index}`}
                  className="bg-gradient-to-br from-teal-50 dark:from-blue-500/10 to-purple-50 dark:to-purple-500/10 border border-teal-200 dark:border-blue-500/30 rounded-xl p-6 hover:border-teal-400 dark:hover:border-blue-400 hover:shadow-lg hover:shadow-teal-300/30 dark:hover:shadow-blue-500/20 transition-all duration-300 group h-full"
                >
                  <div className="h-40 bg-gradient-to-br from-teal-500 dark:from-blue-600 to-purple-500 dark:to-purple-600 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                    {project.image ? (
                      <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                        <defs>
                          <pattern id={`project-image-${index}`} x="0" y="0" width="1" height="1" patternContentUnits="objectBoundingBox">
                            <image
                              href={project.image}
                              x="0"
                              y="0"
                              width="1"
                              height="1"
                              preserveAspectRatio="xMidYMid slice"
                            />
                          </pattern>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill={`url(#project-image-${index})`} />
                      </svg>
                    ) : (
                      <span className="text-4xl">📱</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-teal-700 dark:text-blue-300 group-hover:text-teal-600 dark:group-hover:text-blue-200">{project.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-teal-100 dark:bg-blue-500/20 text-teal-700 dark:text-blue-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.accessibility === true && (
                    <div className="flex gap-3">
                      <button className="text-sm text-teal-600 dark:text-blue-400 hover:text-teal-700 dark:hover:text-blue-300 transition-colors">
                        View Demo →
                      </button>

                      <a href=''  className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                        GitHub →
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-slate-500 dark:text-gray-400 py-20">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Project