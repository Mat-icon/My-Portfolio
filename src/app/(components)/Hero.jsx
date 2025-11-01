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
import { color, motion } from "framer-motion";

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
    <div className="flex flex-col w-[99%] my-2 h-[98vh] overflow-hidden text-white border border-[#494949] relative z-40 rounded  selection:bg-lime-400 selection:text-white">
      {/* Header */}
      <header
        className="flex justify-between filter glossy-25 backdrop-blur-2xl items-center h-10 pr-2 border-b border-[#6462628c] shrink-0"
        
      >
        <div className="flex w-[12%] border-r border-[#494949] md:w-[3.15%] h-full justify-center items-center">
          <div className="rotate-90 gap-[1px] flex items-center">
            <span className="w-2 h-2 border-t-4 border-l-4 border-white rotate-[-45deg]" />
            <span className="w-1 h-3 bg-white rotate-[30deg] rounded-full" />
            <span className="w-2 h-2 border-t-4 border-r-4 border-white rotate-[45deg]" />
          </div>
        </div>
        {/* Center name */}
        <div className="flex text-lg items-center">
          <span className=" tracking-tighter font-medium text-center fonts">
            matthew
           <span className="all-text">&#123;ameh&#125;</span>
          </span>
        </div>

        {/* Desktop controls */}
        <div className="hidden md:flex items-center space-x-2">
          <VscChromeMinimize className="text-base text-[#494949] hover:border-white" />
          <div
            className="w-2.5 h-2.5 border border-[#494949] rounded-sm hover:border-white"
            style={{ transition: "ease-in 0.5s" }}
          ></div>
          <VscChromeClose className="text-base text-[#494949] hover:border-white" />
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
      <div className="flex flex-1 min-h-0 relative">
        {/* Sidebar */}
        <aside
          className="hidden md:flex md:flex-col md:items-center glossy-25 backdrop-blur-2xl md:justify-center md:space-y-4 md:border-r md:border-[#6462628c] md:w-[3.1%] md:absolute md:left-0 md:top-0 md:bottom-0 md:z-10"
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

        {/* Main Content Area with padding for sidebar */}
        <div className="flex-1 md:pl-[3.1%] scrollbar overflow-x-hidden overflow-y-auto">
          <HeroBody isOpen={isNavOpen} toggleNav={toggleNav} />
        </div>
      </div>

      <footer className="flex glossy-25 h-10 w-full justify-between items-center border-t border-[#494949] text-gray-600 relative shrink-0">
        {/* Left section - Green sidebar with search icon */}
        <div className="w-[12%] md:w-[3.1%] h-full bg-[#508A4C] flex items-center justify-center border-r border-[#494949] shrink-0">
          <div className="relative flex items-center justify-center">
            <CiSearch className="text-black text-xl" />
          </div>
        </div>

       <div className="hidden md:flex absolute scale-[1.02] left-[51%] transform -translate-x-1/2 space-x-5 text-sm items-baseline">
  {/* Location Section */}
  <motion.div
    className="tracking-tighter text-[#9D9D9D] cursor-default flex items-baseline"
    initial="rest"
    whileHover="hover"
  >
    <motion.span
      className="inline-block tracking-[-1px] whitespace-nowrap"
      variants={{
        rest: { x: 0 },
        hover: { x: -2 },
      }}
      transition={{ duration: 0.3 }}
    >
      Based in{" "}
      <motion.span
        variants={{
          rest: { color: "#9D9D9D" },
          hover: { color: "#ffffff" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="transition-colors duration-300"
      >
        Nigeria
      </motion.span>
    </motion.span>

    <motion.span
      className="text-[8px] tracking-wide poppins inline-block ml-1"
      variants={{
        rest: { opacity: 0, width: 0 },
        hover: { opacity: 1, width: "auto" },
      }}
      transition={{ duration: 0.3 }}
    >
      NG
    </motion.span>
  </motion.div>

  {/* Local Time Section */}
  <motion.div
    className="tracking-[-1px] text-[#9D9D9D] cursor-default flex items-baseline"
    initial="rest"
    whileHover="hover"
  >
    <motion.span
      className="inline-block whitespace-nowrap"
      variants={{
        rest: { x: 0 },
        hover: { x: -3 },
      }}
      transition={{ duration: 0.3 }}
    >
      Localtime{" "}
      <motion.span
        className="time font-[600] mx-1 whitespace-nowrap"
        variants={{
          rest: { color: "#9D9D9D" },
          hover: { color: "#ffffff" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {currentTime}
      </motion.span>
    </motion.span>

    <motion.span
      className="text-[14px] inline-block"
      variants={{
        rest: { opacity: 0, width: 0 },
        hover: { opacity: 1, width: "auto" },
      }}
      transition={{ duration: 0.3 }}
    >
      {(() => {
        const hour = new Date().getHours();
        return hour >= 6 && hour < 18 ? "☀️" : "🌙";
      })()}
    </motion.span>
  </motion.div>
</div>


        {/* Mobile - Social Icons */}
        <div className="flex md:hidden text-[#9D9D9D] flex-1 justify-end items-center space-x-3 min-w-0 px-2">
          <Link href="https://www.linkedin.com/in/rex-technologies-759965238/">
            <FaLinkedin className="text-base hover:text-white cursor-pointer hover:scale-105 transition-all" />
          </Link>
          <FiInstagram className="text-base hover:text-white cursor-pointer hover:scale-105 transition-all" />
          <Link href="https://github.com/Mat-icon?tab=repositories">
            <FiGithub className="text-base hover:text-white cursor-pointer hover:scale-105 transition-all" />
          </Link>
          <FaXTwitter className="text-base hover:text-white cursor-pointer hover:scale-105 transition-all" />
        </div>

        {/* Right section - Contact button (Desktop only) */}
        <Link
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          href="/contact"
          style={{ background: "#0a0a0afb" }}
          className="hidden material-bubble3 md:block md:w-4/12 lg:w-[14%] py-[4px] lg:px-1 text-[15px] mr-3 rounded-md border-[0.5px] hover:border-[#8eff86] border-[#6462628c] bg-black text-center "
        >
          {hovered ? (
            <motion.p
              className="flex items-center justify-center tracking-[-1px]"
              variants={container}
              initial="hidden"
              animate={hovered ? "visible" : "hidden"}
            >
              {renderText("let's-get-in-touch")}
              <FaArrowRight className="ml-1" />
            </motion.p>
          ) : (
            <p className="flex items-center text-white justify-center tracking-[-1px]">
              let&#39;s-get-in-touch
              <FaArrowRight className="ml-1" />
            </p>
          )}
        </Link>
      </footer>
    </div>
  );
}
