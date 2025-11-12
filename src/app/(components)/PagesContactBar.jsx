"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Link from "next/link";
import "./App.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PagesContactbar = ({ currentRoute }) => {
  const [hoveredBtn1, setHoveredBtn1] = useState(false);
  const [hoveredBtn2, setHoveredBtn2] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  let accentColor;
  if (currentRoute === "/") {
    accentColor = "#8FFF86";
  } else if (currentRoute === "/about") {
    accentColor = "#86d4ff";
  } else if (currentRoute === "/projects") {
    accentColor = "#fa9595";
  } else if (currentRoute === "/contact") {
    accentColor = "#ffd886";
  } else {
    accentColor = "#8FFF86";
  }

  const containerVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const renderText = (text, keyPrefix = "") =>
    text.split("").map((char, i) => (
      <motion.span
        key={`${keyPrefix}-${i}`}
        variants={letter}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0]?.isIntersecting),
      { threshold: 0.5 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => cardRef.current && observer.unobserve(cardRef.current);
  }, []);

  return (
    <div className="w-full flex justify-center  my-[8%]">
      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariant}
        className="testes  w-11/12 glossy-20  backdrop-blur-md md:w-[75%]"
        
      >
        <div className="about-me-title3  px-4 py-2 flex justify-between">
          <p className="text-sm tracking-[-1px] text-black">collaboration</p>
          <div className="flex items-center space-x-2 text-[#494949] text-xs">
            <FontAwesomeIcon icon={faMinus} className="hover:text-white transition" />
            <div className="w-2.5 h-2.5 border border-[#494949] rounded-sm hover:border-white cursor-pointer transition"></div>
            <FontAwesomeIcon icon={faX} className="hover:text-white transition" />
          </div>
        </div>

        <div className="w-full h-auto ">
          <div className="w-full md:mt-8 mt-4 py-6 poppin flex flex-col lg:flex-row items-center justify-center lg:space-x-10">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <div 
                className="relative w-full h-full rounded-full overflow-y-visible"
                style={{ backgroundColor: accentColor }}
              >
                <img
                  src="/images/matthew.png"
                  alt="me"
                  className="absolute top-[-3.6%] left-0 w-full h-full object-cover scale-[1.05] rounded-full"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <p className="text-center text-black tracking-tighter poppins lg:text-left text-3xl lg:text-6xl font-normal">
                Let&#39;s work together on your <br />
                next project.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col xl:ml-[22%] mt-0 xl:mt-[1%] tracking-tighter items-center md:flex-row md:space-x-2">
            {/* Button 1 */}
            <Link
              onMouseEnter={() => setHoveredBtn1(true)}
              onMouseLeave={() => setHoveredBtn1(false)}
              href="/contact"
              style={{ background: "#494949" }}
              className="w-10/12 material-bubble3 md:w-full lg:w-3/12 p-4 lg:px-4 rounded-md border-[#000] border text-center text-sm"
              onMouseOver={(e) => e.currentTarget.style.borderColor = accentColor}
              onMouseOut={(e) => e.currentTarget.style.borderColor = "#000"}
            >
              {hoveredBtn1 ? (
                <motion.p
                  className="flex items-center justify-center tracking-[-1px]"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {renderText("let's-get-in-touch →", "btn1")}
                </motion.p>
              ) : (
                <p className="flex items-center text-[#000] justify-center tracking-[-1px]">
                  let&#39;s-get-in-touch →
                </p>
              )}
            </Link>

            {/* Button 2 */}
            <Link
              onMouseEnter={() => setHoveredBtn2(true)}
              onMouseLeave={() => setHoveredBtn2(false)}
              href="/cv.pdf"
              download
              style={{ background: "#494949" }}
              target="_blank"
              className="w-10/12 mt-1 md:mt-0 material-bubble3 md:w-full lg:w-3/12 p-4 lg:px-4 rounded-md border-[#494949]  border text-center text-sm"
              onMouseOver={(e) => e.currentTarget.style.borderColor = accentColor}
              onMouseOut={(e) => e.currentTarget.style.borderColor = "#000"}
            >
              {hoveredBtn2 ? (
                <motion.p
                  className="flex items-center justify-center tracking-[-1px]"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {renderText("download cv", "btn2")}
                </motion.p>
              ) : (
                <p className="flex items-center tracking-[-1px] text-[#000] justify-center">
                  download cv
                </p>
              )}
            </Link>
          </div>
        </div>
      </motion.div>
     
    </div>
  );
};

export default PagesContactbar;