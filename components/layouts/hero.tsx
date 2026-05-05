'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center border-b border-border-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left — Text */}
          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Full-Stack Developer / Philippines
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-text-primary">
              I build web and mobile products that ship fast and scale.
            </h1>

            <p className="text-base text-text-secondary leading-relaxed max-w-xl">
              From concept to deployment — performance-obsessed, user-focused engineering for startups and businesses that need to move quickly.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 bg-accent text-white font-medium text-sm transition-colors duration-150 hover:opacity-90"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border-primary text-text-primary font-medium text-sm transition-colors duration-150 hover:border-accent hover:text-accent"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="hidden lg:block">
            <div className="relative w-56 h-56 xl:w-64 xl:h-64">
              <Image
                src="/hero-image.png"
                alt="Manuel Kyd Thomas O. Nagpala"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 224px, 256px"
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
