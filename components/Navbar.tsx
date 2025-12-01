import React, { useState } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-md my-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                MKT
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-8 lg:space-x-10">
                {[
                  { id: 'home', label: 'Home', number: '01' },
                  { id: 'experience', label: 'Experience', number: '02' },
                  { id: 'project', label: 'Projects', number: '03' },
                  { id: 'contact', label: 'Contact', number: '04' }
                ].map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`group flex items-center gap-2 px-3 py-2 text-base lg:text-lg font-medium transition-all duration-300 relative ${
                      activeSection === section.id
                        ? 'text-blue-400'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className={`text-sm font-bold transition-colors duration-300 ${
                      activeSection === section.id
                        ? 'text-blue-400'
                        : 'text-blue-500/50 group-hover:text-blue-400'
                    }`}>
                      {section.number}
                    </span>
                    <span className="relative">
                      {section.label}
                      {/* Underline animation */}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                        activeSection === section.id
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}></span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white p-2">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar