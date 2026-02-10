import { experienceData } from '@/data/Experience.data'

const Experience = () => {
  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white transition-colors duration-300"
          >
            Experience Timeline
          </h2>

          {/* Timeline Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-300 dark:bg-white/20 hidden md:block transition-colors duration-300"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experienceData.map((job, index) => (
                <div
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 dark:bg-white rounded-full border-4 border-white dark:border-black z-20 hidden md:block transition-colors duration-300"></div>

                  {/* Card Container */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="group relative bg-slate-100 dark:bg-white/5 rounded-2xl p-6 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Header with Duration Badge */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                              {job.position}
                            </h3>
                            <p className="text-slate-500 dark:text-gray-400 text-lg font-medium flex items-center gap-2 transition-colors duration-300">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              {job.company}
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-2 bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {job.duration}
                          </span>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-slate-200 dark:bg-white/10 mb-4 transition-colors duration-300"></div>

                        {/* Responsibilities */}
                        <div className="mb-5">
                          <h4 className="text-sm font-semibold text-slate-600 dark:text-gray-300 mb-3 flex items-center gap-2 transition-colors duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="text-slate-500 dark:text-gray-400 flex items-start group/item transition-colors duration-300">
                                <span className="text-slate-400 dark:text-white/50 mr-3 mt-1 group-hover/item:text-slate-600 dark:group-hover/item:text-white transition-colors duration-300">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                  </svg>
                                </span>
                                <span className="leading-relaxed">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-600 dark:text-gray-300 mb-3 flex items-center gap-2 transition-colors duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.tech.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-gray-300 px-3 py-1.5 rounded-full font-medium hover:bg-slate-300 dark:hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience
