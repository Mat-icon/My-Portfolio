"use client";

import { useState, useEffect } from "react";
import {
  FiMenu,
  FiInstagram,
  FiGithub,
  FiHome,
  FiUser,
  FiCode,
  FiMail,
  FiX,
} from "react-icons/fi";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";

import {
  FaArrowRight,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineLaptop } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import HeroBody from "./HeroBody";
import { motion } from "framer-motion";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [hovered, setHovered] = useState(false);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const renderText = (node, keyPrefix = "") => {
    if (typeof node === "string") {
      return node.split("").map((char, i) => (
        <motion.span
          key={`${keyPrefix}-${i}`}
          variants={letter}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ));
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => renderText(child, `${keyPrefix}-${i}`));
    }

    if (typeof node === "object" && node !== null && "props" in node) {
      const element = node;
      return (
        <element.type key={keyPrefix} {...element.props}>
          {renderText(element.props.children, keyPrefix + "-child")}
        </element.type>
      );
    }

    return node;
  };

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

 return (
  <div className="flex flex-col  test text-white border border-[#6462628c] relative z-40 rounded overflow-hidden selection:bg-lime-400 selection:text-white">
    {/* Header */}
    <header
      className="flex justify-between items-center h-12 pr-2 border-b border-[#6462628c] shrink-0"
      style={{ background: "#101010e1" }}
    >
      <div className="flex w-[12%] md:w-[3.1%] h-full border-r border-[#6462628c] justify-center items-center">
        <div className="rotate-90 gap-[1px] flex items-center">
          <span className="w-2 h-2 border-t-4 border-l-4 border-white rotate-[-45deg]" />
          <span className="w-1 h-3 bg-white rotate-[30deg] rounded-full" />
          <span className="w-2 h-2 border-t-4 border-r-4 border-white rotate-[45deg]" />
        </div>
      </div>

      {/* Center name */}
      <div className="flex items-center">
        <span className="text-lg tracking-tighter font-medium text-center fonts">
          matthew
          <span className="text-lg tracking-tighter all-text">
            &lt;ameh&gt;
          </span>
        </span>
      </div>

      {/* Desktop controls */}
      <div className="hidden md:flex items-center space-x-3">
        <VscChromeMinimize className="text-base text-gray-600" />
        <div
          className="w-2.5 h-2.5 border border-gray-600 rounded-sm hover:border-white cursor-pointer"
          style={{ transition: "ease-in 0.5s" }}
        ></div>
        <VscChromeClose className="text-base text-gray-600" />
      </div>

      {/* Mobile menu icon */}
      <div className="flex md:hidden items-center">
        {isNavOpen ? (
          <FiX className="text-lg cursor-pointer" onClick={toggleNav} />
        ) : (
          <FiMenu className="text-lg cursor-pointer" onClick={toggleNav} />
        )}
      </div>
    </header>

    {/* Main Content */}
    <div className="flex flex-1">
      {/* Sidebar */}
      <aside
        className="hidden md:flex md:flex-col md:items-center md:justify-center md:space-y-6 md:border-r md:border-[#6462628c] md:p-3 md:w-[3.1%]"
        style={{ background: "#0000005e" }}
      >
        <div className="icon-container">
          <Link href="/">
            <FiHome className="text-base hover:text-green-300 cursor-pointer" />
          </Link>
          <span className="badge">home</span>
        </div>
        <div className="icon-container">
          <Link href="/ProjectsPage">
            <AiOutlineLaptop className="text-base hover:text-green-300 cursor-pointer" />
          </Link>
          <span className="badge">projects</span>
        </div>
        <div className="icon-container">
          <Link href="/About">
            <FiUser className="text-base hover:text-green-300 cursor-pointer" />
          </Link>
          <span className="badge">about</span>
        </div>
        <div className="icon-container">
          <Link href="/contact">
            <FiMail className="text-base hover:text-green-300 cursor-pointer" />
          </Link>
          <span className="badge">contact</span>
        </div>
      </aside>
      <HeroBody isOpen={isNavOpen} toggleNav={toggleNav} />
    </div>

    {/* Footer */}
    {/* Footer */}
<footer className="flex bg-[#0000001f] h-12 w-full justify-between items-center border-t border-[#6462628c] text-gray-600 relative shrink-0">
  {/* Left section - Green sidebar with search icon */}
  <div className="w-[12%] md:w-[3.1%] h-full bg-[#8eff8669] flex items-center justify-center border-r border-[#6462628c] shrink-0">
    <div className="relative flex items-center justify-center">
      <CiSearch className="text-white text-2xl" />
    </div>
  </div>

  {/* Absolute Center - Location & Time (Desktop only) */}
  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4 text-sm items-center">
    <motion.div 
      className="tracking-tighter leading-[24px] text-[#b4b4b4] cursor-default"
      initial="rest"
      whileHover="hover"
    >
      <motion.span 
        className="inline-block"
        variants={{
          rest: { x: 0 },
          hover: { x: -3 }
        }}
        transition={{ duration: 0.3 }}
      >
        Based in Nigeria
      </motion.span>
      <motion.span 
        className="text-[8px] tracking-wide poppins inline-block"
        variants={{
          rest: { opacity: 0, x: 0 },
          hover: { opacity: 1, x: 2 }
        }}
        transition={{ duration: 0.3 }}
      >
        NG
      </motion.span>
    </motion.div>
    
    <motion.div 
      className="tracking-tighter text-[#b4b4b4] cursor-default"
      initial="rest"
      whileHover="hover"
      variants={{
        rest: { x: 0 },
        hover: { x: -3 }
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.span className="inline-block">
        Localtime
      </motion.span>
      <span className="time font-[600] mx-1">{currentTime}</span>
      <motion.span 
        className="text-[14px] inline-block"
        variants={{
          rest: { opacity: 0, x: 0 },
          hover: { opacity: 1, x: 3 }
        }}
        transition={{ duration: 0.3 }}
      >
        {(() => {
          const hour = new Date().getHours();
          return hour >= 6 && hour < 18 ? '☀️' : '🌙';
        })()}
      </motion.span>
    </motion.div>
  </div>

  {/* Mobile - Social Icons */}
  <div className="flex md:hidden text-[#c2c0c0da] flex-1 justify-end items-center space-x-3 min-w-0 px-2">
    <Link href="https://www.linkedin.com/in/rex-technologies-759965238/">
      <FaLinkedin
        className="text-base hover:text-white cursor-pointer hover:scale-105 transition-all"
      />
    </Link>
    <FiInstagram
      className="text-base hover:text-white cursor-pointer hover:scale-105 transition-all"
    />
    <Link href="https://github.com/Mat-icon?tab=repositories">
      <FiGithub
        className="text-base hover:text-white cursor-pointer hover:scale-105 transition-all"
      />
    </Link>
    <FaXTwitter
      className="text-base hover:text-white cursor-pointer hover:scale-105 transition-all"
    />
  </div>

  {/* Right section - Contact button (Desktop only) */}
  <Link
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    href="/contact"
    style={{ background: "#101010e1" }}
    className="hidden material-bubble3 md:block md:w-4/12 lg:w-[18%] py-2 lg:px-4 mr-3 rounded-md border-[#6462628c] bg-black border text-center text-sm"
  >
    {hovered ? (
      <motion.p
        className="flex items-center justify-center tracking-tighter"
        variants={container}
        initial="hidden"
        animate={hovered ? "visible" : "hidden"}
      >
        {renderText("let's-get-in-touch")}
        <FaArrowRight className="ml-2" />
      </motion.p>
    ) : (
      <p className="flex items-center text-white justify-center tracking-tighter">
        let&#39;s-get-in-touch
        <FaArrowRight className="ml-2" />
      </p>
    )}
  </Link>
</footer>
  </div>
);
};