'use client';

import { navigationItems } from '@/data/NavItem.data';
import { useState } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };



  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 my-4 transition-opacity duration-300">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0a0e27]/80 backdrop-blur-md rounded-lg transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                MKT
              </span>
            </div>
            {/* Placeholder for button spacing */}
            <div className="w-12 h-12"></div>
          </div>
        </div>
      </nav>

      {/* Burger Menu Button - Always visible, positioned separately */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-[2rem] right-4 sm:right-6 lg:right-8 z-[60] flex flex-col items-end gap-1.5 p-2 group"
        aria-label="Toggle menu"
        style={{ marginRight: 'calc((100% - min(1280px, 100%)) / 2)' }}
      >
        <span className={`block h-0.5 w-8 bg-gradient-to-r from-orange-400 to-orange-500 transform transition-all duration-300 ${
          isMenuOpen ? 'rotate-45 translate-y-2 bg-white' : ''
        }`}></span>
        <span className={`block h-0.5 w-6 bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-300 ${
          isMenuOpen ? 'opacity-0' : 'opacity-100'
        }`}></span>
        <span className={`block h-0.5 w-8 bg-gradient-to-r from-orange-400 to-orange-500 transform transition-all duration-300 ${
          isMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : ''
        }`}></span>
      </button>

      {/* Full Screen Menu with Ripple Effect */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-[#0a0e27] via-[#0f1942] to-[#1a1f4d] z-40 ${
          isMenuOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-0 pointer-events-none'
        }`}
        style={{
          transformOrigin: 'top right',
          clipPath: isMenuOpen
            ? 'circle(150% at calc(100% - 60px) 60px)'
            : 'circle(0% at calc(100% - 60px) 60px)',
          transition: isMenuOpen
            ? 'clip-path 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-out'
            : 'opacity 0.2s ease-out, clip-path 0s 0.2s'
        }}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Contact Info */}
          <div className={`w-full md:w-1/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-800/50 transition-all duration-500 delay-200 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="space-y-8">
              <h3 className="text-gray-400 text-sm font-semibold tracking-wider">Contact Info</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-white font-semibold mb-2 text-lg">Location | PH</p>
                  <p className="text-gray-400 text-sm leading-relaxed">Barangay Banadero, Bamboo Grove Phase 6b Block 4 Lot 39</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2 text-lg">Phone Number</p>
                  <p className="text-gray-400 text-sm">+63947800275</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2 text-lg">Email</p>
                  <p className="text-gray-400 text-sm">kydnagpala.dev@gmail.com</p>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-white font-semibold mb-4 text-lg">Visit Us At:</p>
                <a href='https://www.linkedin.com/in/monagpala/' className="w-12 h-12 rounded-lg bg-gray-800/50 hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Navigation Items */}
          <div className={`flex-1 flex items-center justify-center p-8 md:p-12 lg:p-16 transition-all duration-500 delay-300 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <nav className="w-full max-w-2xl">
              {navigationItems.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`group flex items-center gap-6 w-full py-6 text-left transition-all duration-300 border-b border-gray-800/50 hover:border-blue-400/50 ${
                    isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${400 + index * 100}ms` : '0ms'
                  }}
                >
                  <span className="text-3xl md:text-4xl font-bold text-gray-700 group-hover:text-blue-400 transition-colors duration-300">
                    {section.number}
                  </span>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {section.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar