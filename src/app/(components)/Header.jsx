'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import SymbolScene from "./SymbolScene";

const Header = () => {
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
    <div ref={headerRef} className="relative h-[55vh] xl:h-[62vh] justify-center  flex text-center items-center">
      <div 
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: '100%', height: '90%', position: 'absolute', top: 0, left: 0, overflow: 'visible' }}
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <SymbolScene page="home" accentColor="#8fff86" mousePosition={mousePosition} isHovering={isHovering} />
        </Canvas>
      </div>

      <div className="absolute z-10 bottom-0 flex flex-col items-center w-full pointer-events-none">
        <span 
          className="text-xs md:text-[12px] mb-5 fonts md:mb-4 text-[#9D9D9D] uppercase tracking-wider"
       
        >
          Home
        </span>
        
        <div className="w-[98%] text-[45px] leading-[1] tracking-[-3px] md:tracking-[-6px] poppins md:text-7xl lg:text-[88px] lg:w-9/12">
          <h1 className="text-center mx-auto">
       
              Hi<span className="font-serif">, </span>
          
              I<span className="font-serif">&apos;</span>m{" "}
          
              Matthew<span className="font-serif">,</span>{" "}
        
               <br className="lg:hidden block" />
              a{" "}
            <br className="hidden xl:block" />
            <span 
              className="all-text"
            >
              creative{" "}
            </span>
            
              developer
           
          </h1>
        </div>
        
        <p className="w-10/12 md:w-10/12 lg:w-5/12 2xl:w-6/12  text-[16px] text-center max-w-2xl text-[#9D9D9D] mt-6 our-text">
         I bring value to web development projects by merging <br/> technical expertise with creativity and aesthetics.
        </p>
      </div>
    </div>
  );
};

export default Header;