'use client';

import { navigationItems } from '@/data/NavItem.data';
import { useState, useEffect } from 'react'
import ThemeToggle from '@/components/ui/ThemeToggle';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
    setActiveSection(sectionId); // Update active section
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 my-4 transition-all duration-300">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isMenuOpen ? 'lg:opacity-100 opacity-0 pointer-events-none lg:pointer-events-auto' : 'opacity-100'
        }`}>
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('home')}
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-violet-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              >
                MKT
              </button>
            </div>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <span key={item.id} className="flex items-center">
                  {/* Insert theme toggle before Contact */}
                  {item.id === 'contact' && (
                    <ThemeToggle className="mx-3" />
                  )}
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Burger Menu Button - Only visible on mobile/tablet */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-[2rem] right-4 sm:right-6 z-[60] flex flex-col items-end gap-1.5 p-2 group"
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-7 bg-gradient-to-r from-blue-400 to-violet-500 transform transition-all duration-300 ${
          isMenuOpen ? 'rotate-45 translate-y-2' : ''
        }`}></span>
        <span className={`block h-0.5 w-5 bg-gradient-to-r from-blue-400 to-violet-500 transition-all duration-300 ${
          isMenuOpen ? 'opacity-0' : 'opacity-100'
        }`}></span>
        <span className={`block h-0.5 w-7 bg-gradient-to-r from-blue-400 to-violet-500 transform transition-all duration-300 ${
          isMenuOpen ? '-rotate-45 -translate-y-2' : ''
        }`}></span>
      </button>

      {/* Full Screen Menu with Ripple Effect - Only on mobile/tablet */}
      <div
        className={`lg:hidden fixed inset-0 bg-white dark:bg-black z-40 overflow-y-auto ${
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
        <div className="flex flex-col md:flex-row min-h-full">
          {/* Left Side - Contact Info */}
          <div className={`w-full md:w-1/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center transition-all duration-500 delay-200 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="space-y-8">
              <h3 className="text-slate-400 dark:text-gray-500 text-sm font-semibold tracking-wider uppercase">Contact Info</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-slate-900 dark:text-white font-bold mb-2 text-lg">Location | PH</p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">Barangay Banadero, Bamboo Grove Phase 6b Block 4 Lot 39</p>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-bold mb-2 text-lg">Phone Number</p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm">+63947800275</p>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-bold mb-2 text-lg">Email</p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm">kydnagpala.dev@gmail.com</p>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-slate-900 dark:text-white font-bold mb-4 text-lg">Visit Us At:</p>
                <a href='https://www.linkedin.com/in/monagpala/' className="w-12 h-12 rounded-lg bg-slate-900/10 hover:bg-slate-900/20 dark:bg-white/10 dark:hover:bg-white/20 transition-all duration-300 flex items-center justify-center group">
                  <svg className="w-5 h-5 text-slate-700 group-hover:text-slate-900 dark:text-white dark:group-hover:text-gray-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              {/* Theme Toggle in mobile menu */}
              <div className="pt-4">
                <p className="text-slate-400 dark:text-gray-500 text-sm font-semibold tracking-wider uppercase mb-3">Theme</p>
                <ThemeToggle />
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
                  className={`group flex items-center gap-6 w-full py-6 px-4 text-left transition-all duration-300 hover:bg-slate-900/5 dark:hover:bg-white/5 ${
                    isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${400 + index * 100}ms` : '0ms'
                  }}
                >
                  <span className="text-3xl md:text-4xl font-bold text-slate-300 group-hover:text-slate-900 dark:text-gray-600 dark:group-hover:text-white transition-all duration-300">
                    {section.number}
                  </span>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 group-hover:text-slate-600 dark:text-white dark:group-hover:text-gray-300 transition-all duration-300">
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
