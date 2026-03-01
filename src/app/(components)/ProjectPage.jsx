
"use client";

import React, { useState, useEffect, useRef } from "react";
import PagesContactBar from "./PagesContactBar";
import Footer from "./Footer";
import { Canvas } from "@react-three/fiber";
import SymbolScene from "./SymbolScene";
import LuminousBeam from "./LuminousBeam";
import PageTestimonials from "./PagesTestimonial";
import Services from "../(components)/Programs/Service";

export default function Project() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const headerRef = useRef(null);
  const canvasRef = useRef(null);

  const handleMouseMove = (e) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div ref={headerRef}>
      <div
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "100%",
          height: "90%",
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "visible",
        }}
        className="z-[5]"
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <SymbolScene page="projects" accentColor="#e14f62" mousePosition={mousePosition} isHovering={isHovering} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="flex flex-col relative  rounded overflow-hidden">
        <main className="w-full header">
          <div className="relative z-10 flex flex-col text-center items-center mt-32 ">
            <span className="text-xs md:text-[12px] fonts  mb-4 md:mb-4 text-[#9d9d9d] uppercase tracking-wider">
              Work
            </span>
            <h1 className=" w-[94%] text-[#fff] text-5xl tracking-tighter md:text-7xl lg:text-[92px] lg:w-9/12 poppins">
              A collection<br className='block md:hidden'/> of <br  className="hidden md:block"/>
              my best
              <span className=" text-[#e14f62]"> projects.</span>
            </h1>
            <p className="w-11/12 md:w-10/12 text-[#9d9d9d] lg:w-5/12 2xl:w-6/12  text-[16px] text-center max-w-2xl mt-6  our-text">
              With many years in web development, I acquired extensive
              experience working on projects across multiple industries
              <br className='md:block hidden'/> and technologies. Let me show you my best creations.
            </p>
            <div className="mx-auto my-4 flex justify-center">
              <LuminousBeam height="h-[70px]" color="4d81ee" />
            </div>
          </div>
        </main>

        <style>{`
                  @keyframes scrollWords {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-50%);
                    }
                  }
                  .animate-scroll {
                    animation: scrollWords 610s linear infinite;
                  }
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
                      #e14f6233 5%,
                      #e14f62cc 15%,
                      #e14f62 50%,
                      #e14f62cc 85%,
                      #e14f6233 95%,
                      transparent 100%
                    );
                   box-shadow: 
            0 0 10px #e14f62cc,
            0 0 80px #e14f6299,
            0 0 80px #e14f6266,
            0 0 0px #e14f6233;
                      
                      
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

                
        <div className="fixed top-[-15%] inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center ">
          <div className="relative flex gap-8 object-heavy text-[400px] md:text-[600px] space-x-8 font-extrabold  text-[#00000044]  whitespace-nowrap animate-scroll">
            <p>code</p>
            <p>beautiful interfaces</p>
            <p>code</p>
            <p>design</p>
            <p>creative logic</p>
            <p>design</p>
            {/* Duplicate for seamless loop */}
            <p>code</p>
            <p>beautiful interfaces</p>
            <p>code</p>
            <p>design</p>
            <p>creative logic</p>
            <p>design</p>
          </div>
        </div>
        <Services />
        <PageTestimonials />
        <PagesContactBar />
        <Footer />
      </div>
    </div>
  );
}
