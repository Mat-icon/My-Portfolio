"use client";
import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import { FaCss3, FaDocker, FaGithub, FaReact, FaSass } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb, SiRedux } from "react-icons/si";
import {
  RiNextjsFill,
  RiSvelteFill,
  RiFirebaseFill,
  RiNodejsFill,
} from "react-icons/ri";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Tech = () => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  // 🔹 Define which "light" background and color to use
  const lightClass = pathname === "/" ? "light4" : "light2";
  const spanColor = pathname === "/" ? "#8FFF86" : "#95bdfa";

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
        <h1 className="text-4xl tracking-tight md:text-6xl md:leading-[55px] text-center poppins">
          Some of the techs i<br /> like to{" "}
          <span className={`text-[${spanColor}]`}>work with</span>
        </h1>
      </div>

      {/* 🔹 Dynamic light background */}
      <div className={lightClass} />

      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariant}
        className="tech glossy-25 backdrop-blur-md md:w-4/5 w-11/12"
      >
        <div className="about-me-title px-4 py-2">
          <p className="text-sm tracking-[-1px]">Languages & Frameworks</p>
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
            { icon: <RiNextjsFill />, label: "Next.JS" },
            { icon: <FaCss3 />, label: "CSS3" },
            { icon: <FaSass />, label: "Sass" },
            { icon: <FaDocker />, label: "Docker" },
            { icon: <RiNodejsFill />, label: "Node.JS" },
            { icon: <SiMongodb />, label: "Mongo.DB" },
            { icon: <SiRedux />, label: "Redux" },
            { icon: <FaGithub />, label: "Git" },
            { icon: <BiLogoPostgresql />, label: "PostGres" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="text-4xl md:text-6xl text-gray-200 flex items-center flex-col"
            >
              {icon}
              <span className="text-sm text-gray-300 md:text-base mt-2 tracking-tighter">
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className={lightClass} />
    </div>
  );
};

export default Tech;
