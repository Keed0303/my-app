'use client';

import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const GeometricBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDarkRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect initial theme
    isDarkRef.current = document.documentElement.classList.contains('dark');

    // Watch for theme changes via MutationObserver
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          isDarkRef.current = document.documentElement.classList.contains('dark');
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCanvasSize();
        initPoints();
      }, 250);
    };
    window.addEventListener('resize', handleResize);

    // Configuration
    const pointCount = isMobile ? 40 : 80;
    const connectionDistance = isMobile ? 120 : 180;
    const maxConnections = 4;
    const baseSpeed = 0.3;

    // Color sets for dark and light modes
    const darkLineColors = [
      'rgba(255, 255, 255, ',
      'rgba(200, 200, 200, ',
      'rgba(180, 180, 180, ',
      'rgba(220, 220, 220, ',
    ];

    const lightLineColors = [
      'rgba(30, 41, 59, ',
      'rgba(51, 65, 85, ',
      'rgba(71, 85, 105, ',
      'rgba(100, 116, 139, ',
    ];

    let points: Point[] = [];

    const initPoints = () => {
      points = [];
      for (let i = 0; i < pointCount; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * baseSpeed * 2,
          vy: (Math.random() - 0.5) * baseSpeed * 2,
        });
      }
    };
    initPoints();

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      const dark = isDarkRef.current;
      const lineColors = dark ? darkLineColors : lightLineColors;
      const clearColor = dark ? 'rgba(0, 0, 0, 0.1)' : 'rgba(248, 250, 252, 0.15)';

      ctx.fillStyle = clearColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // Update points
      points.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > canvas.width) {
          point.vx *= -1;
          point.x = Math.max(0, Math.min(canvas.width, point.x));
        }
        if (point.y < 0 || point.y > canvas.height) {
          point.vy *= -1;
          point.y = Math.max(0, Math.min(canvas.height, point.y));
        }

        point.vx += (Math.random() - 0.5) * 0.01;
        point.vy += (Math.random() - 0.5) * 0.01;

        const speed = Math.sqrt(point.vx * point.vx + point.vy * point.vy);
        if (speed > baseSpeed * 2) {
          point.vx = (point.vx / speed) * baseSpeed * 2;
          point.vy = (point.vy / speed) * baseSpeed * 2;
        }
      });

      // Draw connections
      for (let i = 0; i < points.length; i++) {
        let connectionCount = 0;
        for (let j = i + 1; j < points.length; j++) {
          if (connectionCount >= maxConnections) break;

          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            connectionCount++;
            const opacity = (1 - distance / connectionDistance) * 0.3;
            const colorIndex = (i + j) % lineColors.length;

            const glowIntensity = (Math.sin(time * 2 + i * 0.5) + 1) * 0.5;
            const finalOpacity = opacity * (0.2 + glowIntensity * 0.3);

            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `${lineColors[colorIndex]}${finalOpacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw points (nodes)
      points.forEach((point, i) => {
        const pulseSize = 1.5 + Math.sin(time * 3 + i * 0.3) * 0.5;
        const colorIndex = i % lineColors.length;
        const opacity = 0.4 + Math.sin(time * 2 + i * 0.5) * 0.2;

        ctx.beginPath();
        ctx.arc(point.x, point.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `${lineColors[colorIndex]}${opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 transition-none bg-white dark:bg-black"
      />
      {/* Animated glow effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Blue glow - floating top left */}
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-30 animate-glow-float-1"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
            top: '10%',
            left: '10%',
          }}
        />
        {/* Violet glow - floating bottom right */}
        <div
          className="absolute w-[280px] h-[280px] rounded-full opacity-30 animate-glow-float-2"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
            bottom: '15%',
            right: '5%',
          }}
        />
        {/* Purple glow - floating center */}
        <div
          className="absolute w-[250px] h-[250px] rounded-full opacity-10 dark:opacity-25 animate-glow-float-3 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)',
            top: '45%',
            left: '55%',
          }}
        />
        {/* Blue glow - floating bottom left */}
        <div
          className="absolute w-[220px] h-[220px] rounded-full opacity-10 dark:opacity-25 animate-glow-float-4 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.5) 0%, transparent 70%)',
            top: '65%',
            left: '20%',
          }}
        />
        {/* Violet glow - floating top right */}
        <div
          className="absolute w-[200px] h-[200px] rounded-full opacity-10 dark:opacity-25 animate-glow-float-5 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.5) 0%, transparent 70%)',
            top: '25%',
            right: '25%',
          }}
        />
      </div>
    </>
  );
};

export default GeometricBackground;
