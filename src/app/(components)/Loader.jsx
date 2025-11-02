import React, { useState, useEffect } from "react";

const Loader = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Start transition after 1.5 seconds
    const timer = setTimeout(() => {
      setIsTransitioning(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[100dvh] flex justify-center items-center">
      <div className="gradient-effect w-full h-full overflow-hidden">
        <div 
          className={`circle circle1 transition-all duration-[1500ms] ease-out ${
            !isTransitioning && 'translate-to-center-1'
          }`}
        />
        <div 
          className={`circle circle2 transition-all duration-[1500ms] ease-out ${
            !isTransitioning && 'translate-to-center-2'
          }`}
        />
      </div>

      <div className="w-11/12 md:w-[40%] backdrop-blur-md border border-[#646464ad] bg-[#1111101a] rounded-[4px] h-11 relative z-10 flex items-center">
        <div className="w-[15%] md:w-[10%] flex items-center justify-center rotate-90 gap-[1px]">
          <span className="w-2 h-2 border-t-4 border-l-4 border-white rotate-[-45deg]" />
          <span className="w-1 h-3 bg-white rotate-[30deg] rounded-full" />
          <span className="w-2 h-2 border-t-4 border-r-4 border-white rotate-[45deg]" />
        </div>
        <div className="w-[1px] bg-[#646464ad] h-full"></div>
        <div className="w-[70%] md:w-[80%] flex tracking-tighter items-center justify-center">
          <span className="text-base tracking-[-1px] font-medium text-center fonts">
            matthew
            <span className="text-base all-text">&#123;ameh&#125;</span>
          </span>
        </div>
        <div className="w-[1px] bg-[#646464ad] h-full"></div>
        <header className="w-[15%] md:w-[10%] h-12 flex justify-center items-center relative z-10">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute w-3 h-3 bg-[#8FFF86] rounded-full animate-pulse-scale"></div>
            <div className="absolute w-3 h-3 bg-[#8FFF86] rounded-full animate-pulse-scale-delay"></div>
          </div>
        </header>
      </div>

      <style jsx>{`
        @keyframes pulseScale {
          0%, 100% {
            transform: scale(0.8);
            opacity: 1;
          }
          50% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        .animate-pulse-scale {
          animation: pulseScale 1.5s ease-in-out infinite;
        }

        .animate-pulse-scale-delay {
          animation: pulseScale 1.5s ease-in-out infinite;
          animation-delay: 0.75s;
        }

        .translate-to-center-1 {
          transform: translate(calc(50vw + 200px), calc(50vh + 200px));
        }

        .translate-to-center-2 {
          transform: translate(calc(50vw - 250px), calc(50vh - 250px));
        }

        @media (max-width: 768px) {
          .translate-to-center-1 {
            transform: translate(calc(50vw + 150px), calc(50vh + 150px));
          }

          .translate-to-center-2 {
            transform: translate(calc(50vw - 175px), calc(50vh - 175px));
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;