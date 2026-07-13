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
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeadingVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const fadeRevealContainerVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: 1,
      },
    },
  };

  const fadeRevealWordVariants = {
    hidden: {
      opacity: 0,
      y: 5,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

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
    <div ref={headerRef} className="relative  justify-center  flex text-center items-center">
      <div 
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: '100%', height: '120%', position: 'absolute', top: '-10%', left: 0, overflow: 'visible' }}
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <SymbolScene page="home" mousePosition={mousePosition} isHovering={isHovering} />
        </Canvas>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full pointer-events-none">
        <span 
          className="text-xs md:text-[12px] mb-5 fonts md:mb-4 text-[#9D9D9D] uppercase tracking-wider"
       
        >
          Home
        </span>
        
        <div className="w-[98%] text-[45px] leading-[1] tracking-[-3px] md:tracking-[-6px] poppins md:text-7xl lg:text-[88px] lg:w-9/12">
          <motion.h1
            ref={headingRef}
            variants={fadeRevealContainerVariants}
            initial="hidden"
            animate={isHeadingVisible ? "visible" : "hidden"}
            className="text-center mx-auto"
          >
            {"Hi".split("").map((char, i) => (
              <motion.span key={`hi-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">{char}</motion.span>
            ))}
            <motion.span variants={fadeRevealWordVariants} className="inline-block font-serif text-white">,</motion.span>
            <motion.span variants={fadeRevealWordVariants} className="inline-block text-white">&nbsp;</motion.span>

            {"I".split("").map((char, i) => (
              <motion.span key={`i-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">{char}</motion.span>
            ))}
            <motion.span variants={fadeRevealWordVariants} className="inline-block font-serif text-white">&apos;</motion.span>
            {"m".split("").map((char, i) => (
              <motion.span key={`m-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">{char}</motion.span>
            ))}
            <motion.span variants={fadeRevealWordVariants} className="inline-block text-white">&nbsp;</motion.span>

            {"Matthew".split("").map((char, i) => (
              <motion.span key={`matthew-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">{char}</motion.span>
            ))}
            <motion.span variants={fadeRevealWordVariants} className="inline-block font-serif text-white">,</motion.span>
            <motion.span variants={fadeRevealWordVariants} className="inline-block text-white">&nbsp;</motion.span>

            <br className="lg:hidden block" />

            {"a".split("").map((char, i) => (
              <motion.span key={`a-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">{char}</motion.span>
            ))}
            <motion.span variants={fadeRevealWordVariants} className="inline-block text-white">&nbsp;</motion.span>

            <br className="hidden xl:block" />

            {"creative".split("").map((char, i) => (
              <motion.span key={`creative-${i}`} variants={fadeRevealWordVariants} className="inline-block all-text">{char}</motion.span>
            ))}
            <br className="lg:hidden block" />
            <motion.span variants={fadeRevealWordVariants} className="inline-block all-text">&nbsp;</motion.span>
    
            {"developer".split("").map((char, i) => (
              <motion.span key={`dev-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">{char}</motion.span>
            ))}
          </motion.h1>
        </div>
        
        <p className="w-10/12 md:w-10/12 lg:w-5/12 2xl:w-6/12  text-[16px] text-center max-w-2xl text-[#9D9D9D] mt-6 our-text">
         I bring value to web development projects by merging <br/> technical expertise with creativity and aesthetics.
        </p>
      </div>
    </div>
  );
};

export default Header;