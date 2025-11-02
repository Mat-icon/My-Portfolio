import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ProjectHighlight from "./ProjectHighlight";
import Header from "./Header";
import Contactbar from "./Contactbar";
import FullNav from "./FullNav";
import LuminousBeam from "./LuminousBeam"; // Import the new component

const HeroBody = ({ isOpen, toggleNav }) => {
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
      `}</style>
      <div className="relative flex flex-col">
        <div className="fixed top-[-15%] inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
          <div className="relative flex gap-8 text-[560px] md:text-[700px] space-x-8 font-extrabold tracking-[-40px] text-[#00000044] font-mono whitespace-nowrap animate-scroll">
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
        <FullNav isOpen={isOpen} toggleNav={toggleNav} />

        <Header />
        
        {/* Replace light4 with LuminousBeam */}
        <div className="mx-auto my-4">
          <LuminousBeam 
            height="70px"
            color="#8fff86"
            thickness="1.5px"
            glowIntensity={1}
            animationDuration="4s"
          />
        </div>

        <div>
          <div>
            <ProjectHighlight />
          </div>
        </div>

        <Contactbar />
      </div>
    </>
  );
};

export default HeroBody;