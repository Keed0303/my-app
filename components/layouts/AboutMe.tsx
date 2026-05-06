import Image from 'next/image';

const AboutMe = () => {
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

          {/* Bio */}
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              Self-motivated problem solver with experience in software development and architecture. Adept at self-learning, with a strong foundation in communication, collaboration, and creating detailed technical documentation.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My journey in software development has equipped me with the skills to tackle complex challenges and deliver high-quality products that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
