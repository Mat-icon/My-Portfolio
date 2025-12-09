"use client";

import { useState, useEffect, useRef } from "react";
import {
  FiMenu,
  FiInstagram,
  FiGithub,
  FiHome,
  FiUser,
  FiMail,
  FiX,
} from "react-icons/fi";
import { VscChromeMinimize, VscChromeClose } from "react-icons/vsc";

import { FaArrowRight, FaLinkedin, FaPlay, FaPause } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { SlMusicToneAlt } from "react-icons/sl";
import { AiOutlineLaptop } from "react-icons/ai";
import { CiLaptop, CiSearch } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Contacts from "./Contacts";
import { motion, AnimatePresence } from "framer-motion";
import FullNav from "./FullNav";
import { PiLightning } from "react-icons/pi";

const ROUTE_COLORS = {
  "/": "#8fff86", // Home - Green
  "/projects": "#fa9595", // Projects - Pink/Red
  "/about-me": "#86d4ff", // About - Blue
  "/contact": "#91d1f8", // Contact - Yellow/Orange
};

// Darker shades for backgrounds
const ROUTE_BG_COLORS = {
  "/": "#508A4C", // Home - Dark Green
  "/projects": "#8A4C4C", // Projects - Dark Red
  "/about-me": "#4C6B8A", // About - Dark Blue
  "/contact": "#466375", // Contact - Dark Yellow/Orange
};




export default function ContactMe() {
  const [currentTime, setCurrentTime] = useState(
         new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
  );
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const scrollContainerRef = useRef(null);
  const [currentRoute, setCurrentRoute] = useState("/contact");
  const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState("Lofi Beats");
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const accentColor = ROUTE_COLORS[currentRoute];
  const bgColor = ROUTE_BG_COLORS[currentRoute];

  useEffect(() => {
    // When pathname changes, show loader
    setIsLoading(true);

    // Small timeout to simulate load time or wait for render
    const timeout = setTimeout(() => setIsLoading(false), 3700);

    return () => clearTimeout(timeout);
  }, [pathname]);

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
  const toggleMusicPlayer = () => setIsMusicPlayerOpen(!isMusicPlayerOpen);
  const togglePlayPause = () => setIsPlaying(!isPlaying);

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

  // Lenis Smooth Scroll Setup
  useEffect(() => {
    let lenis;

    const initLenis = async () => {
      const Lenis = (await import("@studio-freight/lenis")).default;

      lenis = new Lenis({
        wrapper: scrollContainerRef.current,
        content: scrollContainerRef.current,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div
      className="flex flex-col w-[95.5%] md:w-[99%] my-2 h-[98dvh] overflow-hidden text-white border border-[#494949] relative z-40 rounded"
      style={{
        "--selection-bg": accentColor,
      }}
    >
      <style jsx>{`
        div {
          selection-background-color: ${accentColor};
          selection-color: white;
        }
        ::selection {
          background-color: ${accentColor};
          color: white;
        }
      `}</style>

      {/* Header */}
      <header className="flex justify-between relative z-30 filter glossy-25 backdrop-blur-xl items-center h-10 pr-2 border-b bac border-[#494949] shrink-0">
            <div className="flex w-[12%] border-r border-[#494949] md:w-[3.0%] h-full justify-center items-center group overflow-hidden">
          <div className="rotate-90 scale-[0.65] -space-x-[1px] flex items-center  ">
              <span
                className="w-2 h-3 p-[5px] border-t-[4px] border-l-[4px] rounded-sm rotate-[-45deg]"
        
              />
              <span
                className="w-[4px] h-6 bg-white rotate-[14deg]  rounded-md"
       
              />
              <span
                className="w-2 h-3 p-[5px] border-t-[4px] border-r-[4px]  rounded-sm rotate-[45deg]"
              />
            </div>
        </div>

        {/* Center name */}
        <div className="flex text-base items-center">
          <span className=" text-white font-medium text-center fonts">
            matthew
            <span className="text-[#91d1f8]">&lt;ameh&gt;</span>
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
        <aside className="hidden md:flex md:flex-col md:items-center  glossy-25 backdrop-blur-2xl md:justify-center md:space-y-4 md:border-r md:border-[#494949] md:w-[3.0%] md:absolute md:left-0 md:top-0 md:bottom-0 md:z-10">
          <div className="icon-container2">
            <Link href="/">
              <FiHome
                className={`${
                  currentRoute === "/" ? "text-black" : "text-white"
                } text-base cursor-pointer`}
                style={{
                  "--hover-color": accentColor,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = accentColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    currentRoute === "/" ? "white" : "#c5c4c4")
                }
              />
            </Link>
            <span className="badge2">home</span>
          </div>

          <div className="icon-container2">
            <Link href="/about-me">
              <LuUserRound
                className={`${
                  currentRoute === "/about-me" ? "text-black" : "text-white"
                } text-base cursor-pointer`}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = accentColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    currentRoute === "/about-me" ? "white" : "#9D9D9D")
                }
              />
            </Link>
            <span className="badge2">about</span>
          </div>

          <div className="icon-container2">
            <Link href="/projects">
              <CiLaptop
                className={`${
                  currentRoute === "/projects" ? "text-black" : "text-white"
                } text-lg cursor-pointer`}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = accentColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    currentRoute === "/projects" ? "white" : "#9D9D9D")
                }
              />
            </Link>
            <span className="badge2">works</span>
          </div>
<div className="icon-container2">
            <Link href="/experiments">
              <PiLightning 
                className={`${
                    currentRoute === "/experiments" ? "text-black" : "text-white"
                } text-lg cursor-pointer`}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = accentColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    currentRoute === "/experiments" ? "white" : "#9D9D9D")
                }
              />
            </Link>
            <span className="badge2">experiments</span>
          </div>

          <div className="icon-container2">
            <Link href="/contact">
              <FiMail
                className={`${
                  currentRoute === "/contact" ? "text-black" : "text-white"
                } text-base cursor-pointer`}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = accentColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    currentRoute === "/contact" ? "white" : "#9D9D9D")
                }
              />
            </Link>
            <span className="badge2">contact</span>
          </div>
        </aside>

        {/* Main Content Area with padding for sidebar */}
        <div
          ref={scrollContainerRef}
          id="app-wrapper"
          className="flex-1 md:pl-[3.1%] relative  scrollbar3 overflow-x-hidden overflow-y-auto"
        >
         
          <motion.div
       
          >
            
            <Contacts isVisible={isLoading} accentColor={accentColor}/>
          </motion.div>
        </div>
         <FullNav isOpen={isNavOpen} toggleNav={toggleNav} />
      </div>

      {/* Music Player Toaster */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{
          x: isMusicPlayerOpen ? 0 : -300,
          opacity: isMusicPlayerOpen ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-14 left-4 z-50 w-64 glossy-25 backdrop-blur-2xl border border-[#494949]  rounded-[3px] p-4 "
        style={{ backgroundColor: "rgba(10, 10, 10, 0.95)" }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium tracking-tight">Now Playing</h3>
          <button
            onClick={toggleMusicPlayer}
            className="text-[#9D9D9D] hover:text-white transition"
          >
            <FiX size={16} />
          </button>
        </div>

        <div className="flex items-center space-x-3 mb-3">
          <div
            className="w-12 h-12 rounded-[3px] flex items-center justify-center"
            style={{ backgroundColor: bgColor }}
          >
            <SlMusicToneAlt className="text-xl text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium tracking-tight">{currentSong}</p>
            <p className="text-xs text-[#9D9D9D] tracking-tight">Chill Vibes</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <div className="flex-1 h-1 bg-[#494949] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: accentColor }}
              initial={{ width: "0%" }}
              animate={{ width: isPlaying ? "60%" : "0%" }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={togglePlayPause}
            className="w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-105"
            style={{ backgroundColor: accentColor }}
          >
            {isPlaying ? (
              <FaPause className="text-black text-sm" />
            ) : (
              <FaPlay className="text-black text-sm ml-0.5" />
            )}
          </button>
        </div>
      </motion.div>

      <footer className="flex glossy-25 h-10 w-full justify-between items-center border-t border-[#494949] text-gray-600 relative z-20 shrink-0">
        {/* Left section - Dynamic color sidebar with music icon */}
        <div
          className="w-[12%] md:w-[3.0%] h-full flex items-center justify-center border-r border-[#494949] shrink-0 cursor-pointer hover:opacity-80 transition"
          style={{ backgroundColor: bgColor }}
          onClick={toggleMusicPlayer}
        >
          <div className="relative flex items-center justify-center">
            <CiSearch className="text-black text-2xl" />
          </div>
        </div>

       <div className="hidden md:flex absolute left-[51.4%] transform -translate-x-1/2 space-x-5 text-sm items-baseline">
                {/* Location Section */}
                <motion.div
                  className="text-[#9d9d9d] cursor-default flex items-baseline"
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.span
                    className="inline-block  whitespace-nowrap"
                    variants={{
                      rest: { x: 0 },
                      hover: { x: -2 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Based in{" "}
                    <motion.span
                      variants={{
                      rest: { color: "#9d9d9d" },
                        hover: { color: "#fff" },
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="transition-colors duration-300"
                    >
                      Nigeria
                    </motion.span>
                  </motion.span>
      
                  <motion.span
                    className="text-[8px] tracking-wider font-thin fonts inline-block ml-[2px]"
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
                  className=" text-[#9d9d9d] cursor-default flex items-baseline"
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
                    Local time{" "}
                    <motion.span
                      className="time font-[600] mx-1 whitespace-nowrap"
                      variants={{
                        rest: { color: "#9d9d9d" },
                        hover: { color: "#fff" },
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
        <div className="flex  text-[#9D9D9D] flex-1 justify-end items-center space-x-3 min-w-0 px-2">
          <Link href="https://www.linkedin.com/in/rex-technologies-759965238/">
            <FaLinkedin className="text-base hover:text-white cursor-pointer hover:scale-105 transition-all" />
          </Link>
          <FiInstagram className="text-base hover:text-white cursor-pointer hover:scale-105 transition-all" />
          <Link href="https://github.com/Mat-icon?tab=repositories">
            <FiGithub className="text-base hover:text-white cursor-pointer hover:scale-105 transition-all" />
          </Link>
          <FaXTwitter className="text-base hover:text-white cursor-pointer hover:scale-105 transition-all" />
        </div>

        {/* Right section - Contact button (Desktop only)
        <Link
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          href="/contact"
          style={{ background: "#1D242A" }}
          className="hidden material-bubble2 md:block md:w-4/12 lg:w-[14%] py-[4px] lg:px-1 text-[14px] mr-3 rounded-md border-[0.5px] border-[#101010] bg-[#0f0f0f] text-center"
          onMouseOver={(e) => (e.currentTarget.style.borderColor = accentColor)}
          onMouseOut={(e) => (e.currentTarget.style.borderColor = "#101010")}
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
        </Link> */}
      </footer>
    </div>
  );
}
