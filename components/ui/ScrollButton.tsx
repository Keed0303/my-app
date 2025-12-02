'use client';

import { useEffect, useState } from 'react';

interface ScrollButtonProps {
  isMenuOpen?: boolean;
}

const ScrollButton = ({ isMenuOpen = false }: ScrollButtonProps) => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollTop = window.scrollY;

          // Check if user is near the bottom (within 100px)
          const isBottom = scrollTop + windowHeight >= documentHeight - 100;
          setIsAtBottom(isBottom);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleClick = () => {
    if (isAtBottom) {
      scrollToTop();
    } else {
      scrollToBottom();
    }
  };

  // Don't render the button when menu is open
  if (isMenuOpen) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 group"
      aria-label={isAtBottom ? 'Scroll to top' : 'Scroll to bottom'}
    >
      <div className="flex flex-col items-center gap-3 bg-gradient-to-b from-blue-500/20 to-purple-600/20 backdrop-blur-md border border-blue-400/30 px-3 py-4 rounded-full shadow-lg hover:shadow-blue-500/50 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
        {/* Stacked Arrow Icons */}
        <div className="flex flex-col gap-0">
          <svg
            className={`w-5 h-5 text-blue-300 transition-all duration-500 ${
              isAtBottom ? 'rotate-180' : ''
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
          <svg
            className={`w-5 h-5 text-blue-400 -mt-2 transition-all duration-500 ${
              isAtBottom ? 'rotate-180' : ''
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
          <svg
            className={`w-5 h-5 text-blue-500 -mt-2 transition-all duration-500 ${
              isAtBottom ? 'rotate-180' : ''
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        </div>

        {/* Vertical Text */}
        <div className="flex flex-col items-center">
          {(isAtBottom ? 'SCROLL TO TOP' : 'SCROLL TO BOTTOM').split('').map((char, index) => (
            <span
              key={index}
              className="text-blue-300 text-[10px] font-semibold tracking-wider leading-tight"
              style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      </div>

      {/* Animated glow pulse */}
      <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse" />
    </button>
  );
};

export default ScrollButton;
