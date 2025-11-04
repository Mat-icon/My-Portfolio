import React from "react";

const LuminousBeam = ({
    height = '',
    color = ''
}) => {
  return (
    <>
      <style>{`
       
        
         @keyframes pulse {
          0%, 100% {
            opacity: 1;
            filter: brightness(1);
            transform: scale(3);
          }
          50% {
            opacity: 0.85;
            filter: brightness(1.2);
             transform: scale(3);
          }
        }

        @keyframes beamFlow {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(150%);
          }
        }

        .luminous-vertical-beam {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
           transparent 0%,
            #${color}33 5%,
             #${color}cc 15%,
           #${color} 50%,
             #${color}cc 85%,
             #${color}8633 95%,
            transparent 100%
          );
         box-shadow: 
  0 0 10px #${color}cc,
  0 0 80px #${color}99,
  0 0 80px  #${color}66,
  0 0 0px  #${color}33;
            
          animation: pulse 0.5s ease-in-out infinite, beamFlow 3s linear infinite;
          will-change: transform;
          
          transition: height 0.8s ease-out;
        }

        .vertical-static-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 20%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.1) 80%,
            transparent 100%
          );

          box-shadow: 
            0 0 8px rgba(143, 255, 134, 0.3),
            0 0 15px rgba(143, 255, 134, 0.2);
        }
      `}</style>
      <div className={`relative w-[2.7px] ${height} overflow-hidden rounded-[200%]`}>
        <div className="vertical-static-glow " />
        <div className="luminous-vertical-beam" />
      </div>
    </>
  );
};

export default LuminousBeam;
