'use client';

const AnimatedGradients = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-0 dark:opacity-100 transition-opacity duration-300">
      {/* Gradient Circle 1 - Moving across screen */}
      <div className="gradient-blob gradient-blob-1"></div>

      {/* Gradient Circle 2 - Moving across screen */}
      <div className="gradient-blob gradient-blob-2"></div>

      {/* Gradient Circle 3 - Moving across screen */}
      <div className="gradient-blob gradient-blob-3"></div>

      {/* Gradient Circle 4 - Moving across screen */}
      <div className="gradient-blob gradient-blob-4"></div>

      {/* Gradient Circle 5 - Moving across screen */}
      <div className="gradient-blob gradient-blob-5"></div>

      <style jsx>{`
        .gradient-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.5;
          will-change: transform;
        }

        .gradient-blob-1 {
          width: 600px;
          height: 600px;
          top: 0;
          left: 0;
          animation: move-around-1 40s ease-in-out infinite, color-shift-1 30s ease-in-out infinite;
        }

        .gradient-blob-2 {
          width: 700px;
          height: 700px;
          top: 0;
          right: 0;
          animation: move-around-2 45s ease-in-out infinite, color-shift-2 35s ease-in-out infinite;
        }

        .gradient-blob-3 {
          width: 550px;
          height: 550px;
          bottom: 0;
          left: 0;
          animation: move-around-3 50s ease-in-out infinite, color-shift-3 40s ease-in-out infinite;
        }

        .gradient-blob-4 {
          width: 650px;
          height: 650px;
          top: 50%;
          left: 50%;
          animation: move-around-4 55s ease-in-out infinite, color-shift-4 38s ease-in-out infinite;
        }

        .gradient-blob-5 {
          width: 500px;
          height: 500px;
          bottom: 0;
          right: 0;
          animation: move-around-5 48s ease-in-out infinite, color-shift-5 33s ease-in-out infinite;
        }

        /* Movement animations - moves across entire screen */
        @keyframes move-around-1 {
          0%, 100% {
            transform: translate(-20%, -20%) scale(1);
            opacity: 0.5;
          }
          25% {
            transform: translate(80vw, 20vh) scale(1.3);
            opacity: 0.6;
          }
          50% {
            transform: translate(60vw, 70vh) scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: translate(20vw, 40vh) scale(1.1);
            opacity: 0.55;
          }
        }

        @keyframes move-around-2 {
          0%, 100% {
            transform: translate(0, -30%) scale(1.1);
            opacity: 0.5;
          }
          25% {
            transform: translate(-70vw, 30vh) scale(0.85);
            opacity: 0.45;
          }
          50% {
            transform: translate(-50vw, 80vh) scale(1.2);
            opacity: 0.6;
          }
          75% {
            transform: translate(-30vw, 50vh) scale(1);
            opacity: 0.5;
          }
        }

        @keyframes move-around-3 {
          0%, 100% {
            transform: translate(-10%, 10%) scale(0.95);
            opacity: 0.48;
          }
          25% {
            transform: translate(50vw, -60vh) scale(1.15);
            opacity: 0.58;
          }
          50% {
            transform: translate(85vw, -40vh) scale(1.05);
            opacity: 0.52;
          }
          75% {
            transform: translate(40vw, -20vh) scale(0.9);
            opacity: 0.45;
          }
        }

        @keyframes move-around-4 {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          25% {
            transform: translate(-80%, 20%) scale(1.25);
            opacity: 0.6;
          }
          50% {
            transform: translate(30%, -70%) scale(0.88);
            opacity: 0.42;
          }
          75% {
            transform: translate(10%, 30%) scale(1.08);
            opacity: 0.53;
          }
        }

        @keyframes move-around-5 {
          0%, 100% {
            transform: translate(20%, 15%) scale(1.05);
            opacity: 0.52;
          }
          25% {
            transform: translate(-60vw, -50vh) scale(0.92);
            opacity: 0.46;
          }
          50% {
            transform: translate(-80vw, -30vh) scale(1.18);
            opacity: 0.58;
          }
          75% {
            transform: translate(-40vw, -60vh) scale(1);
            opacity: 0.5;
          }
        }

        /* Color shift animations - Cyan to Purple transitions with improved harmony */
        @keyframes color-shift-1 {
          0%, 100% {
            background: radial-gradient(circle, #06b6d4 0%, #0891b2 30%, transparent 60%);
          }
          25% {
            background: radial-gradient(circle, #22d3ee 0%, #06b6d4 30%, transparent 60%);
          }
          50% {
            background: radial-gradient(circle, #8b5cf6 0%, #7c3aed 30%, transparent 60%);
          }
          75% {
            background: radial-gradient(circle, #4a90b8 0%, #2d5a7b 30%, transparent 60%);
          }
        }

        @keyframes color-shift-2 {
          0%, 100% {
            background: radial-gradient(circle, #8b5cf6 0%, #7c3aed 30%, transparent 60%);
          }
          25% {
            background: radial-gradient(circle, #a78bfa 0%, #8b5cf6 30%, transparent 60%);
          }
          50% {
            background: radial-gradient(circle, #22d3ee 0%, #06b6d4 30%, transparent 60%);
          }
          75% {
            background: radial-gradient(circle, #64b5f6 0%, #4a90b8 30%, transparent 60%);
          }
        }

        @keyframes color-shift-3 {
          0%, 100% {
            background: radial-gradient(circle, #4a90b8 0%, #2d5a7b 30%, transparent 60%);
          }
          25% {
            background: radial-gradient(circle, #06b6d4 0%, #0891b2 30%, transparent 60%);
          }
          50% {
            background: radial-gradient(circle, #8b5cf6 0%, #7c3aed 30%, transparent 60%);
          }
          75% {
            background: radial-gradient(circle, #22d3ee 0%, #06b6d4 30%, transparent 60%);
          }
        }

        @keyframes color-shift-4 {
          0%, 100% {
            background: radial-gradient(circle, #a78bfa 0%, #8b5cf6 30%, transparent 60%);
          }
          25% {
            background: radial-gradient(circle, #64b5f6 0%, #4a90b8 30%, transparent 60%);
          }
          50% {
            background: radial-gradient(circle, #06b6d4 0%, #0891b2 30%, transparent 60%);
          }
          75% {
            background: radial-gradient(circle, #8b5cf6 0%, #7c3aed 30%, transparent 60%);
          }
        }

        @keyframes color-shift-5 {
          0%, 100% {
            background: radial-gradient(circle, #22d3ee 0%, #06b6d4 30%, transparent 60%);
          }
          25% {
            background: radial-gradient(circle, #4a90b8 0%, #2d5a7b 30%, transparent 60%);
          }
          50% {
            background: radial-gradient(circle, #a78bfa 0%, #8b5cf6 30%, transparent 60%);
          }
          75% {
            background: radial-gradient(circle, #06b6d4 0%, #0891b2 30%, transparent 60%);
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .gradient-blob {
            filter: blur(60px);
          }

          .gradient-blob-1 {
            width: 300px;
            height: 300px;
          }

          .gradient-blob-2 {
            width: 350px;
            height: 350px;
          }

          .gradient-blob-3 {
            width: 280px;
            height: 280px;
          }

          .gradient-blob-4 {
            width: 320px;
            height: 320px;
          }

          .gradient-blob-5 {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedGradients;
