const skillCategories = [
  {
    label: 'Languages',
    skills: [
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'PHP', level: 80 },
      { name: 'SQL', level: 75 },
      { name: 'CSS / SCSS', level: 85 },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'React Native', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Laravel', level: 75 },
      { name: 'Angular', level: 65 },
      { name: 'Ionic', level: 65 },
    ],
  },
  {
    label: 'Tools & Platforms',
    skills: [
      { name: 'Firebase', level: 80 },
      { name: 'Git', level: 85 },
      { name: 'Node.js', level: 70 },
      { name: 'Yii2', level: 75 },
    ],
  },
];

const BLOCKS = 10;

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-border-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-text-primary mb-12">Skills</h2>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.label}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-accent">&lt;/&gt;</span>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
                  {category.label}
                </p>
                <div className="flex-1 h-px bg-border-primary" />
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                {category.skills.map((skill) => {
                  const filled = Math.round((skill.level / 100) * BLOCKS);
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-baseline justify-between">
                        <span className="font-bold text-text-primary text-sm">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-text-muted tabular-nums">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: BLOCKS }).map((_, i) => (
                          <div
                            key={i}
                            className={`flex-1 h-6 transition-colors duration-150 ${
                              i < filled ? 'bg-accent' : 'bg-border-primary'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
