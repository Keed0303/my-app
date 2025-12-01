import { experienceData } from '@/data/Experience.data'
import React from 'react'

const Experience = () => {
  return (
    <>
      {/* Experience Section */}
      <section className="relative z-10 py-20 bg-[#0a0e27]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Experience
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {experienceData.map((job, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
                data-aos-duration="800"
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-300">{job.position}</h3>
                    <p className="text-purple-400">{job.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{job.duration}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      {resp}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience