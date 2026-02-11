'use client';

import { useState, useEffect } from 'react';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
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

    // Sync state when theme is changed externally (e.g. Gojo easter egg)
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          const dark = htmlElement.classList.contains('dark');
          setIsDark(dark);
        }
      }
    });
    observer.observe(htmlElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  // Return a fixed-size placeholder before mount to prevent layout shift
  if (!mounted) {
    return <div className={`w-14 h-7 rounded-full bg-transparent ${className}`} />;
  }

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    const htmlElement = document.documentElement;

    if (newIsDark) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${
        isDark
          ? 'bg-slate-700/80 border border-slate-600/50'
          : 'bg-sky-200/80 border border-sky-300/50'
      } ${className}`}
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Sliding thumb */}
      <span
        className={`absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${
          isDark
            ? 'left-0.5 bg-slate-900 shadow-md shadow-cyan-500/30'
            : 'left-[calc(100%-1.625rem)] bg-white shadow-md shadow-amber-400/30'
        }`}
      >
        {/* Moon icon (dark mode) */}
        <svg
          className={`absolute w-3.5 h-3.5 transition-all duration-300 ${
            isDark ? 'text-cyan-400 opacity-100 rotate-0 scale-100' : 'text-gray-400 opacity-0 -rotate-90 scale-50'
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        {/* Sun icon (light mode) */}
        <svg
          className={`absolute w-3.5 h-3.5 transition-all duration-300 ${
            !isDark ? 'text-amber-500 opacity-100 rotate-0 scale-100' : 'text-gray-400 opacity-0 rotate-90 scale-50'
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>

      {/* Decorative stars (visible in dark mode) */}
      <span className={`absolute right-2 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <span className="flex gap-0.5">
          <span className="w-1 h-1 rounded-full bg-cyan-400/60"></span>
          <span className="w-0.5 h-0.5 rounded-full bg-purple-400/50 mt-0.5"></span>
        </span>
      </span>

      {/* Decorative rays (visible in light mode) */}
      <span className={`absolute left-1.5 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${!isDark ? 'opacity-100' : 'opacity-0'}`}>
        <span className="flex gap-0.5">
          <span className="w-1 h-1 rounded-full bg-amber-400/70"></span>
          <span className="w-0.5 h-0.5 rounded-full bg-orange-400/60 mt-0.5"></span>
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
