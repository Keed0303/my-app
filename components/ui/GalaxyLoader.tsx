// Pre-computed deterministic star positions (avoids Math.random() during render)
const STAR_POSITIONS = Array.from({ length: 20 }, (_, i) => ({
  left: `${((i * 37 + 13) % 97) + 1}%`,
  top: `${((i * 53 + 7) % 97) + 1}%`,
  animationDelay: `${((i * 7) % 20) / 10}s`,
}));

const GalaxyLoader = () => {
  return (
    <div className="galaxy-loader">
      <div className="galaxy-container">
        {/* Center star */}
        <div className="center-star"></div>

        {/* Orbiting planets */}
        <div className="orbit orbit-1">
          <div className="planet planet-1"></div>
        </div>
        <div className="orbit orbit-2">
          <div className="planet planet-2"></div>
        </div>
        <div className="orbit orbit-3">
          <div className="planet planet-3"></div>
        </div>

        {/* Stars background */}
        <div className="stars-container">
          {STAR_POSITIONS.map((pos, i) => (
            <div
              key={i}
              className="star"
              style={pos}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .galaxy-loader {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto;
        }

        .galaxy-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        /* Center star */
        .center-star {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, #ffd700, #ff8c00);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 20px #ffd700, 0 0 40px #ff8c00, 0 0 60px #ffd700;
          animation: pulse 2s ease-in-out infinite;
        }

        /* Orbits */
        .orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(147, 197, 253, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .orbit-1 {
          width: 50px;
          height: 50px;
          animation: rotate 3s linear infinite;
        }

        .orbit-2 {
          width: 80px;
          height: 80px;
          animation: rotate 5s linear infinite reverse;
        }

        .orbit-3 {
          width: 110px;
          height: 110px;
          animation: rotate 7s linear infinite;
        }

        /* Planets */
        .planet {
          position: absolute;
          border-radius: 50%;
          box-shadow: 0 0 10px currentColor;
        }

        .planet-1 {
          top: 0;
          left: 50%;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
          transform: translateX(-50%);
        }

        .planet-2 {
          top: 0;
          left: 50%;
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, #a78bfa, #8b5cf6);
          transform: translateX(-50%);
        }

        .planet-3 {
          top: 0;
          left: 50%;
          width: 10px;
          height: 10px;
          background: linear-gradient(135deg, #f472b6, #ec4899);
          transform: translateX(-50%);
        }

        /* Stars */
        .stars-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 50%;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 1.5s ease-in-out infinite;
        }

        /* Animations */
        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
};

export default GalaxyLoader;
