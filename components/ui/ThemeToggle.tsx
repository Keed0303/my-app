'use client';

import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const htmlElement = document.documentElement;

    if (savedTheme === 'light') {
      setIsDark(false);
      htmlElement.classList.remove('dark');
    } else {
      setIsDark(true);
      if (!htmlElement.classList.contains('dark')) {
        htmlElement.classList.add('dark');
      }
    }
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    const htmlElement = document.documentElement;

    console.log('Toggling theme to:', newTheme ? 'dark' : 'light');
    console.log('HTML classes before:', htmlElement.className);

    if (newTheme) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    console.log('HTML classes after:', htmlElement.className);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 left-8 z-[9999] group cursor-pointer"
      aria-label="Toggle theme"
      style={{ pointerEvents: 'auto' }}
    >
      <div className="relative w-16 h-16">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow blur-sm"></div>

        {/* Button container */}
        <div className="relative w-full h-full bg-gradient-to-br from-white/90 to-slate-100/90 dark:from-[#0a0e27]/90 dark:to-[#1a3a52]/90 backdrop-blur-lg rounded-full border-2 border-teal-400/50 dark:border-cyan-400/30 hover:border-teal-500 dark:hover:border-cyan-400 transition-all duration-300 flex items-center justify-center shadow-lg shadow-teal-400/30 dark:shadow-cyan-500/20 hover:shadow-teal-400/50 dark:hover:shadow-cyan-500/40 hover:scale-110">

          {/* Sun/Moon Icon Container */}
          <div className="relative w-8 h-8">
            {/* Moon Icon (Dark Mode) */}
            <svg
              className={`absolute inset-0 w-full h-full transition-all duration-500 ${
                isDark
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 -rotate-90 scale-50'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                className="text-cyan-400"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>

            {/* Sun Icon (Light Mode) */}
            <svg
              className={`absolute inset-0 w-full h-full transition-all duration-500 ${
                !isDark
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 rotate-90 scale-50'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                className="text-orange-400"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>

          {/* Orbiting particles */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-3 left-3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-100"></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
