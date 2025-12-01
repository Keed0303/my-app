import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Hero = () => {

  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'project', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* H Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Manuel Kyd Thomas O. Nagpala
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-300 font-light">
                Web and App Developer
              </p>
              <p className="text-gray-300 text-lg max-w-xl">
                Crafting innovative digital experiences with modern technologies and creative solutions.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <button
                  onClick={() => scrollToSection('project')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border border-blue-400 rounded-full font-medium hover:bg-blue-500/10 transition-all duration-300"
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right Side - Hero Image with Floating Logos */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Hero Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/50">
                  <Image
                    src="/hero-image.png"
                    alt="Manuel Kyd Thomas O. Nagpala"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Programming Language Logos */}
                <div className="floating-logo logo-1">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-black">JS</span>
                  </div>
                </div>
                <div className="floating-logo logo-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">TS</span>
                  </div>
                </div>
                <div className="floating-logo logo-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-400 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-black">R</span>
                  </div>
                </div>
                <div className="floating-logo logo-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">N</span>
                  </div>
                </div>
                <div className="floating-logo logo-5">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">H5</span>
                  </div>
                </div>
                <div className="floating-logo logo-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">C3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Hero