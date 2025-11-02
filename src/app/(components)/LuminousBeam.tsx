import React from 'react';

const LuminousBeam = ({ 
  height = '400px', 
  color = '#00ffc8',
  thickness = '2px',
  glowIntensity = 1,
  animationDuration = '3s'
}) => {
  return (
    <>
      <style>{`
        @keyframes beamFlow {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            filter: brightness(1);
          }
          50% {
            opacity: 0.85;
            filter: brightness(1.2);
          }
        }

        .luminous-beam-container {
          position: relative;
          width: ${thickness};
          height: ${height};
          overflow: hidden;
        }

        .luminous-beam {
          position: absolute;
          width: 100%;
          height: 200%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            ${color}33 2.5%,
            ${color}cc 7.5%,
            ${color} 25%,
            ${color}cc 42.5%,
            ${color}33 47.5%,
            transparent 50%,
            transparent 100%
          );
          box-shadow: 
            0 0 ${10 * glowIntensity}px ${color}cc,
            0 0 ${20 * glowIntensity}px ${color}99,
            0 0 ${40 * glowIntensity}px ${color}66,
            0 0 ${80 * glowIntensity}px ${color}33;
          animation: 
            beamFlow ${animationDuration} linear infinite,
            pulse 2s ease-in-out infinite;
        }

        .luminous-beam::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 100%;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
        }

        .static-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            ${color}1a 20%,
            ${color}33 50%,
            ${color}1a 80%,
            transparent 100%
          );
          box-shadow: 
            0 0 ${5 * glowIntensity}px ${color}4d,
            0 0 ${10 * glowIntensity}px ${color}33;
        }
      `}</style>
      
      <div className="luminous-beam-container">
        <div className="static-glow" />
        <div className="luminous-beam" />
      </div>
    </>
  );
};

export default LuminousBeam;