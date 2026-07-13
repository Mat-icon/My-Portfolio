"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Canvas } from "@react-three/fiber";
import SymbolScene from "./SymbolScene";

import ContactForm from "./ContactForm";



export default function Contacts() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const headerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const headingRef = useRef(null);

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
          height: "120%",
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "visible",
        }}
        className="z-[5]"
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <SymbolScene page="contact" mousePosition={mousePosition} isHovering={isHovering} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="flex flex-col relative  rounded overflow-hidden">
        <main className="w-full header">
          <div className="relative z-10 flex flex-col text-center items-center mt-32 ">
            <span className="text-xs md:text-[12px] mb-5 fonts md:mb-4 text-[#9D9D9D] uppercase tracking-wider">
              Contact
            </span>
            <motion.h1
              ref={headingRef}
              variants={fadeRevealContainerVariants}
              initial="hidden"
              animate={isHeadingVisible ? "visible" : "hidden"}
              className="w-[98%] text-[45px] leading-[1] tracking-tighter poppins md:text-7xl lg:text-[88px] lg:w-9/12 text-center mx-auto"
            >
              {"Do".split("").map((char, i) => (
                <motion.span key={`do-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">{char}</motion.span>
              ))}
              <motion.span variants={fadeRevealWordVariants} className="inline-block text-white">&nbsp;</motion.span>
              {"you".split("").map((char, i) => (
                <motion.span key={`you-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">{char}</motion.span>
              ))}
              <motion.span variants={fadeRevealWordVariants} className="inline-block text-white">&nbsp;</motion.span>
              {"want".split("").map((char, i) => (
                <motion.span key={`want-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">{char}</motion.span>
              ))}
              <br className="md:hidden block"/>
              <motion.span variants={fadeRevealWordVariants} className="inline-block text-white">&nbsp;</motion.span>
              {"to".split("").map((char, i) => (
                <motion.span key={`to-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">{char}</motion.span>
              ))}
              <motion.span variants={fadeRevealWordVariants} className="inline-block text-white">&nbsp;</motion.span>
              {"talk".split("").map((char, i) => (
                <motion.span key={`talk-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">{char}</motion.span>
              ))}
              <br className="hidden md:block"/>
              <motion.span variants={fadeRevealWordVariants} className="inline-block text-white">&nbsp;</motion.span>
              {"about".split("").map((char, i) => (
                <motion.span key={`about-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">{char}</motion.span>
              ))}
              <br className="md:hidden block"/>
              <motion.span variants={fadeRevealWordVariants} className="inline-block text-white">&nbsp;</motion.span>
              {"a".split("").map((char, i) => (
                <motion.span key={`a-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">{char}</motion.span>
              ))}
              <motion.span variants={fadeRevealWordVariants} className="inline-block text-[#91d1f8]">&nbsp;</motion.span>
              {"project".split("").map((char, i) => (
                <motion.span key={`project-${i}`} variants={fadeRevealWordVariants} className="inline-block text-[#91d1f8]">{char}</motion.span>
              ))}
              <motion.span variants={fadeRevealWordVariants} className="inline-block text-white">&nbsp;</motion.span>
              {"?".split("").map((char, i) => (
                <motion.span key={`q-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">{char}</motion.span>
              ))}
            </motion.h1>
            <p className="w-10/12 md:w-10/12 lg:w-5/12 2xl:w-6/12  text-[16px] text-center max-w-2xl text-[#9D9D9D] mt-6 our-text">
              Whether you have a project you want to work on together or just
              want
              to have a chat, you are in the right place:<br /> Let&#39;s get in touch
            </p>
        
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
                      #91d1f833 5%,
                      #91d1f8cc 15%,
                      #91d1f8 50%,
                      #91d1f8cc 85%,
                      #91d1f833 95%,
                      transparent 100%
                    );
                   box-shadow: 
            0 0 10px #91d1f8cc,
            0 0 80px #91d1f899,
            0 0 80px #91d1f866,
            0 0 0px #91d1f833;
                      
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
       <ContactForm />
        <Footer />
      </div>
    </div>
  );
}