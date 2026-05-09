import Image from 'next/image';

const AboutMe = () => {
<<<<<<< HEAD
  const techGroups = [
    { label: 'Primary', items: ['React', 'TypeScript', 'Next.js', 'Laravel', 'PHP'] },
    { label: 'Mobile', items: ['React Native', 'Expo', 'Ionic'] },
    { label: 'Other', items: ['Angular', 'Firebase', 'SQL', 'Node.js', 'Tailwind CSS', 'Git'] },
  ];

=======
>>>>>>> aaa29e0a73c6e87246ccd9c52b454728fe1f7f7d
  return (
    <section id="about" className="py-24 border-t border-border-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-text-primary mb-12">About</h2>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
          {/* Image */}
          <div className="relative aspect-[3/4] w-full max-w-[280px] border border-border-primary">
            <Image
              src="/gradpic.jpg"
              alt="Graduation Photo"
              fill
              className="object-cover"
            />
          </div>

<<<<<<< HEAD
          {/* Bio + Tech */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-text-secondary leading-relaxed">
                Developer based in the Philippines with 3 years of professional experience. Most of that time was spent at FILWEB ASIA building internal tools with Yii2, Ionic, and Angular. More recently I&apos;ve been working with React, Next.js, and Laravel on membership and gym management platforms.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I learn best by building. Most of my skill growth has come from shipping real projects under real deadlines — figuring out what I don&apos;t know and closing the gap as I go.
              </p>
            </div>

            <div className="pt-4 border-t border-border-primary space-y-3">
              {techGroups.map((group) => (
                <div key={group.label}>
                  <p className="font-mono text-xs uppercase tracking-wider text-text-muted mb-1">{group.label}</p>
                  <p className="font-mono text-sm text-text-secondary">
                    {group.items.join(', ')}
                  </p>
                </div>
              ))}
            </div>
=======
          {/* Bio */}
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              Self-motivated problem solver with experience in software development and architecture. Adept at self-learning, with a strong foundation in communication, collaboration, and creating detailed technical documentation.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My journey in software development has equipped me with the skills to tackle complex challenges and deliver high-quality products that exceed expectations.
            </p>
>>>>>>> aaa29e0a73c6e87246ccd9c52b454728fe1f7f7d
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
