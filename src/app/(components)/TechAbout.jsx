"use client";
import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import { FaCss3, FaDocker, FaGithub, FaReact, FaSass } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb, SiRedux, SiJavascript, SiNetlify } from "react-icons/si";
import {
  RiNextjsFill,
  RiSvelteFill,
  RiFirebaseFill,
  RiNodejsFill,
  RiVercelFill,
} from "react-icons/ri";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import LuminousBeam from './LuminousBeam';
import { FiFigma } from "react-icons/fi";


const TechAbout = () => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const cardRef = useRef(null);
  const headingRef = useRef(null);
  // 🔹 Define which "light" background and color to use
  const lightClass = pathname === "/" ? "8fff86" : "8FFF86";
  const spanColor = pathname === "/" ? "#8FFF86" : "#4d81ee";

  const containerVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

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

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeadingVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    if (headingRef.current) {
      headingObserver.observe(headingRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
      if (headingRef.current) {
        headingObserver.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <div className="w-screen flex flex-col justify-center items-center mt-36">
      <div>
        <motion.h1 
          ref={headingRef}
          variants={fadeRevealContainerVariants}
          initial="hidden"
          animate={isHeadingVisible ? "visible" : "hidden"}
          className="text-4xl md:text-[58px] text-white tracking-tighter md:leading-[60px] text-center poppins"
        >
          {"Some ".split("").map((char, i) => (
            <motion.span key={`some-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          {"of ".split("").map((char, i) => (
            <motion.span key={`of-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          {"the ".split("").map((char, i) => (
            <motion.span key={`the-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          {"techs".split("").map((char, i) => (
            <motion.span key={`techs-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">
              {char}
            </motion.span>
          ))}
          <br className="block md:hidden" />
          {" i ".split("").map((char, i) => (
            <motion.span key={`i-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          {"like ".split("").map((char, i) => (
            <motion.span key={`like-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          {"to".split("").map((char, i) => (
            <motion.span key={`to-${i}`} variants={fadeRevealWordVariants} className="inline-block text-white">
              {char}
            </motion.span>
          ))}
          <br className="hidden md:block" />
          {" work ".split("").map((char, i) => (
            <motion.span key={`work-${i}`} variants={fadeRevealWordVariants} className="inline-block text-[#4d81ee]">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          {"with".split("").map((char, i) => (
            <motion.span key={`with-${i}`} variants={fadeRevealWordVariants} className="inline-block text-[#4d81ee]">
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* 🔹 Dynamic light background */}
       <LuminousBeam  height="h-[100px]" color={lightClass}/>

      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariant}
        className="tech2 glossy-25  backdrop-blur-sm md:w-4/5 w-11/12"
      >
        <div className="about-me-title2  px-4 py-[10px]">
          <p className="text-sm text-white">techs</p>
          <div className="flex items-center space-x-2 text-[#494949] text-xs">
            <FontAwesomeIcon
              icon={faMinus}
              className="hover:text-white cursor-pointer transition ease-in duration-500"
            />
            <div className="w-2.5 h-2.5 border border-[#494949] rounded-sm hover:border-white cursor-pointer transition ease-in duration-500"></div>
            <FontAwesomeIcon
              icon={faX}
              className="hover:text-white cursor-pointer transition ease-in duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
          {[
            { icon: <RiSvelteFill />, label: "Svelte 5" },
            { icon: <FaReact />, label: "React" },
            { icon: <RiFirebaseFill />, label: "Firebase" },
            { icon: <RiNextjsFill />, label: "Next.js" },
            { icon: <FaCss3 />, label: "CSS3" },
            { icon: <FaSass />, label: "Sass" },
            { icon: <FaDocker />, label: "Docker" },
            { icon: <RiNodejsFill />, label: "Node.js" },
            { icon: <SiMongodb />, label: "Mongo.db" },
            { icon: <SiRedux />, label: "Redux" },
            { icon: <FaGithub />, label: "Git" },
            { icon: <BiLogoPostgresql />, label: "Postgres" },
            { icon: <FiFigma />, label: "Figma" },
             { icon: <SiJavascript />, label: "Javascript" },
               { icon: <RiVercelFill />, label: "Vercel" },  { icon: <SiNetlify />, label: "Netlify" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="text-5xl md:text-5xl text-white flex items-center flex-col"
            >
              {icon}
              <span className="text-sm fonts  mt-2  text-gray-200">
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

        <LuminousBeam  height="h-[100px]" color={lightClass}/>
    </div>
  );
};

export default TechAbout;
