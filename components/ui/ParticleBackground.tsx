'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check if device is mobile for reduced particles
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Throttle resize events
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(setCanvasSize, 250);
    };
    window.addEventListener('resize', handleResize);

    // Particle colors (blues, purples, and whites)
    const colors = [
      'rgba(96, 165, 250, ', // blue-400
      'rgba(147, 197, 253, ', // blue-300
      'rgba(167, 139, 250, ', // purple-400
      'rgba(196, 181, 253, ', // purple-300
      'rgba(255, 255, 255, ', // white
    ];

    // Create particles - reduced count for better performance
    const particles: Particle[] = [];
    const particleCount = isMobile ? 30 : 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationFrameId: number;
    let frameCount = 0;

    // Animation loop with performance optimizations
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Pulsing opacity effect - only update every 3 frames for better performance
        if (frameCount % 3 === 0) {
          particle.opacity += (Math.random() - 0.5) * 0.02;
          particle.opacity = Math.max(0.1, Math.min(0.7, particle.opacity));
        }

        // Simplified rendering - draw only the core with shadow blur for glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = `${particle.color}${particle.opacity})`;
        ctx.fillStyle = `${particle.color}${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Reset shadow
        ctx.shadowBlur = 0;
      });

      frameCount++;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default ParticleBackground;
