import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef.current) {
      // Create GSAP timeline for spotlight effect
      const tl = gsap.timeline({ repeat: -1 });

      tl.to(circleRef.current, {
        scale: 1.5,
        filter: "blur(150px)",
        duration: 3,
        ease: "power2.inOut",
        force3D: true,
        willChange: "transform, filter"
      })
      .to(circleRef.current, {
        scale: 1,
        filter: "blur(100px)",
        duration: 3,
        ease: "power2.inOut",
        force3D: true,
        willChange: "transform, filter"
      });
    }
  }, []);

  return (
    <div className="w-full h-[100dvh] flex justify-center items-center relative bg-black overflow-hidden">
      {/* Spotlight Circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          ref={circleRef}
          className="w-[700px] h-[700px] rounded-full"
          style={{ 
            filter: "blur(100px)",
         background: 'radial-gradient(circle, #8FFF8666 0%, #8FFF8666 35%, transparent 70%)',
         opacity: 0.4,
          }}
        />
      </div>

      <div className="w-11/12 md:w-[36%] backdrop-blur-md border border-[#646464ad] bg-[#1011105b] rounded-[4px] h-11 relative z-10 flex items-center">
        <div className="w-[15%] md:w-[10%] flex items-center justify-center rotate-90 gap-[1px]">
          <span className="w-2 h-2 border-t-4 border-l-4 border-white rotate-[-45deg]" />
          <span className="w-1 h-3 bg-white rotate-[30deg] rounded-full" />
          <span className="w-2 h-2 border-t-4 border-r-4 border-white rotate-[45deg]" />
        </div>
        <div className="w-[1px] bg-[#646464ad] h-full"></div>
        <div className="w-[70%] md:w-[80%] flex tracking-tighter items-center justify-center">
          <span className="text-base tracking-[-1px] font-medium text-center text-white">
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
      `}</style>
    </div>
  );
};

export default Loader;