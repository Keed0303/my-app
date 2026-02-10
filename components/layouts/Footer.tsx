'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';

const HollowPurpleAnimation = dynamic(
  () => import('@/components/ui/HollowPurpleAnimation'),
  { ssr: false }
);

const Footer = () => {
  const [isDark, setIsDark] = useState(true);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isDarkRef = useRef(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    isDarkRef.current = document.documentElement.classList.contains('dark');
    setIsDark(isDarkRef.current);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          const dark = document.documentElement.classList.contains('dark');
          isDarkRef.current = dark;
          setIsDark(dark);
        }
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const handleGojoClick = useCallback(() => {
    setIsAnimationPlaying(true);
  }, []);

  const handleAnimationComplete = useCallback(() => {
    // Switch to dark mode
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setIsDark(true);
    setIsAnimationPlaying(false);
  }, []);

  const showIcon = mounted && !isDark && !isAnimationPlaying;

  return (
    <>
      <footer className="relative z-10 py-6 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400 dark:text-gray-500 text-sm transition-colors duration-300 inline-flex items-center justify-center w-full gap-2">
            <span>&copy; 2026 Manuel Kyd Thomas O. Nagpala. All rights reserved.</span>
            {showIcon && (
              <button
                onClick={handleGojoClick}
                className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 hover:bg-blue-400 hover:scale-110 transition-all duration-300 gojo-icon-pulse focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
                aria-label="Activate visual effect"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </p>
        </div>
      </footer>

      {isAnimationPlaying && (
        <HollowPurpleAnimation
          isPlaying={isAnimationPlaying}
          onComplete={handleAnimationComplete}
        />
      )}
    </>
  );
};

export default Footer;
