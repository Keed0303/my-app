'use client';

import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorBorderRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkIfMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isSmallScreen = window.innerWidth < 768;

      return isTouchDevice || isMobileUserAgent || isSmallScreen;
    };

    // Initial check
    const isMobile = checkIfMobile();
    setShouldRender(!isMobile);

    if (isMobile) {
      return;
    }

    // Mark as mounted first
    setIsMounted(true);

    // Handle window resize to toggle cursor on viewport changes
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      setShouldRender(!isNowMobile);
      if (!isNowMobile && !isMounted) {
        setIsMounted(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Small delay to ensure refs are set
    const timer = setTimeout(() => {
      const cursorDot = cursorDotRef.current;
      const cursorBorder = cursorBorderRef.current;
      if (!cursorDot || !cursorBorder) return;

      let mouseX = 0;
      let mouseY = 0;
      let borderX = 0;
      let borderY = 0;
      let animationFrameId: number;

      // Update mouse position instantly for the dot
      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Move the small dot instantly
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      };

      // Smooth follow animation for the border circle
      const animateBorder = () => {
        // Lerp (linear interpolation) for smooth following
        const speed = 0.15; // Lower = more delay, smoother follow
        borderX += (mouseX - borderX) * speed;
        borderY += (mouseY - borderY) * speed;

        cursorBorder.style.transform = `translate(${borderX}px, ${borderY}px)`;
        animationFrameId = requestAnimationFrame(animateBorder);
      };

      // Handle mouse enter/leave to show/hide cursor
      const handleMouseEnter = () => setIsVisible(true);
      const handleMouseLeave = () => setIsVisible(false);

      // Handle hover states
      const handleMouseDown = () => {
        cursorBorder.style.transform = `translate(${borderX}px, ${borderY}px) scale(0.8)`;
      };

      const handleMouseUp = () => {
        cursorBorder.style.transform = `translate(${borderX}px, ${borderY}px) scale(1)`;
      };

      // Add event listeners
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);

      // Start border animation
      animateBorder();

      // Cleanup function for the timer
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }, 50);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Don't render on mobile/touch devices
  if (!shouldRender) return null;

  // Don't render until mounted to prevent flash on load
  if (!isMounted) return null;

  return (
    <>
      {/* Inner solid circle (mini dot) */}
      <div
        ref={cursorDotRef}
        className={`custom-cursor-dot ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          position: 'fixed',
          top: '-8px',
          left: '-8px',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: '#60a5fa',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'opacity 0.3s ease',
          boxShadow: '0 0 10px rgba(96, 165, 250, 0.8)',
        }}
      />

      {/* Outer border circle (delayed follower) */}
      <div
        ref={cursorBorderRef}
        className={`custom-cursor-border ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          position: 'fixed',
          top: '-30px',
          left: '-30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: '2px solid rgba(147, 197, 253, 0.8)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'opacity 0.3s ease, transform 0.1s ease',
          boxShadow: '0 0 20px rgba(147, 197, 253, 0.6), inset 0 0 20px rgba(147, 197, 253, 0.2)',
        }}
      />
    </>
  );
};

export default CustomCursor;
