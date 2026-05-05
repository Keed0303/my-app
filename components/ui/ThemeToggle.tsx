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
  }, []);

  if (!mounted) {
    return <div className={`w-8 h-8 ${className}`} />;
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
      className={`w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors duration-150 ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
