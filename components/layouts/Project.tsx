import { projectData } from '@/data/Project'
import React from 'react'

const Project = () => {
  return (
    <>
     {/* Projects Section */}
      <section id="project" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group h-full"
              >
                <div className="h-40 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-300 group-hover:text-blue-200">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    View Demo →
                  </button>
                  <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                    GitHub →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Project