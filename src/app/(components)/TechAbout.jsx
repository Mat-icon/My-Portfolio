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
  const cardRef = useRef(null);
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="w-screen flex flex-col justify-center items-center mt-36">
      <div>
        <h1 className="text-4xl md:text-[58px] text-white  tracking-tighter md:leading-[60px] text-center poppins">
          Some of the techs <br className="block md:hidden"/>i like to<br className="hidden md:block"/>{" "}
          <span className={`text-[${spanColor}]`}>work with</span>
        </h1>
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
