import { experienceData } from '@/data/Experience.data';

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-border-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-text-primary mb-12">Experience</h2>

        <div className="divide-y divide-border-primary">
          {experienceData.map((job, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 first:pt-0 last:pb-0">
              {/* Metadata column */}
              <div className="space-y-1">
                <p className="font-mono text-xs text-text-muted">{job.duration}</p>
                <p className="text-sm font-medium text-text-secondary">{job.company}</p>
              </div>

              {/* Content column */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-text-primary">{job.position}</h3>

                {/* Responsibilities */}
                <ul className="space-y-2 border-l-2 border-border-secondary pl-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm text-text-secondary leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <p className="font-mono text-xs text-text-muted">
                  {job.tech.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
