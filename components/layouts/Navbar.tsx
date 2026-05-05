'use client';

import { navigationItems } from '@/data/NavItem.data';
import { useState, useEffect } from 'react';
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
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-sm border-b border-border-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="font-mono text-lg font-bold text-text-primary hover:text-accent transition-colors duration-150"
            >
              MKT.
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-medium transition-colors duration-150 ${
                    activeSection === item.id
                      ? 'text-accent'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile burger */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-5 right-4 z-[60] p-2"
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-text-primary transition-all duration-150 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block h-0.5 w-6 bg-text-primary mt-1.5 transition-all duration-150 ${isMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-6 bg-text-primary mt-1.5 transition-all duration-150 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-bg-primary flex flex-col items-center justify-center gap-8">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl font-bold text-text-primary hover:text-accent transition-colors duration-150"
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
        </div>
      )}
    </>
  );
};

export default Navbar;
