import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ProjectHighlight from "./ProjectHighlight";
import Header from "./Header";
import Contactbar from "./Contactbar";
import FullNav from "./FullNav";
import LuminousBeam from './LuminousBeam';
import Footer from "./Footer";


const HeroBody = ({ isOpen, toggleNav, currentRoute }) => {
  const [isProjectVisible, setIsProjectVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === projectRef.current) {
            setIsProjectVisible(entry.isIntersecting);
          }
          if (entry.target === contactRef.current) {
            setIsContactVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.05,
      }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
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
          animation: scrollWords 410s linear infinite;
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
            #8FFF8633 5%,
            #8FFF86cc 15%,
            #8FFF86 50%,
            #8FFF86cc 85%,
            #8FFF8633 95%,
            transparent 100%
          );
         box-shadow: 
  0 0 10px #8FFF86cc,
  0 0 80px #8FFF8699,
  0 0 80px #8FFF8666,
  0 0 0px #8FFF8633;
            
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

      <div className="relative flex flex-col">
        {/* Background Animation */}
        <div className="fixed top-[10%]"></div>
        <div className="fixed top-[-15%] inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
          <div className="relative flex gap-8 object-heavy text-[400px] md:text-[600px] space-x-8 font-extrabold  text-[#00000044]  whitespace-nowrap animate-scroll">
            <p>code</p>
            <p>beautiful interfaces</p>
            <p>code</p>
            <p>design</p>
            <p>creative logic</p>
            <p>design</p>
            <p>code</p>
            <p>beautiful interfaces</p>
            <p>code</p>
            <p>design</p>
            <p>creative logic</p>
            <p>design</p>
          </div>
        </div>

        {/* FullNav - Must be here at the top level */}
        <FullNav isOpen={isOpen} toggleNav={toggleNav} currentRoute={currentRoute} />

        <Header />

        {/* Vertical Luminous Beam */}
        <div className="mx-auto my-4 flex justify-center">
          <LuminousBeam height="h-[60px]" color="8fff86"/>
        </div>

        <div>
          <div>
            <ProjectHighlight />
          </div>
        </div>

        <Contactbar currentRoute={currentRoute} />
        <Footer currentRoute={currentRoute} />
      </div>
    </>
  );
};

export default HeroBody;