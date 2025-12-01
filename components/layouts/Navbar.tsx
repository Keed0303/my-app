'use client';

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

  const navigationItems = [
    { id: 'home', label: 'Home', number: '01' },
    { id: 'experience', label: 'Experience', number: '02' },
    { id: 'project', label: 'Projects', number: '03' },
    { id: 'contact', label: 'Contact', number: '04' }
  ];

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

            {/* Burger Menu Button (Always Visible) */}
            <div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 flex flex-col items-end gap-1.5 p-2 group"
                aria-label="Toggle menu"
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
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-[#0a0e27] via-[#0f1942] to-[#1a1f4d] z-50 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Contact Info */}
          <div className="w-full md:w-1/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-800/50">
            <div className="space-y-8">
              <h3 className="text-gray-400 text-sm font-semibold tracking-wider">Contact Info</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-white font-semibold mb-2 text-lg">Location | PH</p>
                  <p className="text-gray-400 text-sm leading-relaxed">290 Aguirre Ave, Parañaque, 1720 Metro Manila</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2 text-lg">Phone Number</p>
                  <p className="text-gray-400 text-sm">79146542</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2 text-lg">Email</p>
                  <p className="text-gray-400 text-sm">info@guerilla360.com</p>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-white font-semibold mb-4 text-lg">Visit Us At:</p>
                <button className="w-12 h-12 rounded-lg bg-gray-800/50 hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Navigation Items */}
          <div className="flex-1 flex items-center justify-center p-8 md:p-12 lg:p-16">
            <nav className="w-full max-w-2xl">
              {navigationItems.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group flex items-center gap-6 w-full py-6 text-left transition-all duration-300 border-b border-gray-800/50 hover:border-blue-400/50"
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

          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar