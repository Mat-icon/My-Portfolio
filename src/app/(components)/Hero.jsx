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
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import HeroBody from "./HeroBody";

// const NavItem = ({ number, label, isActive }) => (
//   <div
//     className={`flex items-center space-x-4 p-4 ${
//       isActive ? "text-green-400" : "hover:text-green-600"
//     }`}
//   >
//     <span className="text-2xl tracking-tighter  text-gray-500">{number}</span>
//     <span className="text-4xl tracking-tighter">{label}</span>
//   </div>
// );

// const FullScreenNav = ({ isOpen, toggleNav }) => (
//   <div
//     className={`fixed top-0 left-0 w-full h-full bg-black flex flex-col  justify-center space-y-8 transform transition-transform ${
//       isOpen ? "translate-y-0" : "-translate-y-full"
//     } z-20 md:hidden`}
//     style={{ transition: "1s" }}
//   >
//     <div
//       className="absolute top-4 right-4 text-2xl  cursor-pointer  text-center"
//       onClick={toggleNav}
//     >
//       x
//     </div>

//     <Link href="/">
//       <NavItem number="01" label="home/" isActive />
//     </Link>
//     <Link href="/About">
//       <NavItem number="02" label="about/" />
//     </Link>
//     <Link href="/ProjectsPage">
//       {" "}
//       <NavItem number="03" label="work/" />
//     </Link>
//     <Link href="/contact">
//       <NavItem number="04" label="contact/" />
//     </Link>
//   </div>
// );

export default function Home() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [isNavOpen, setIsNavOpen] = useState(false);

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
    <div className="flex flex-col test text-white border border-gray-500 relative z-40 rounded overflow-hidden selection:bg-lime-400 selection:text-white">
      {/* Header */}
 <header
  className="flex justify-between items-center p-2 border-b border-gray-500"
  style={{ background: "#0000001f" }}
>
  {/* Left Icon </> */}
  <div className="flex items-center rotate-90 gap-[2px]">
    <span className="w-2 h-2 border-t-2 border-l-2 border-[#8fff86] rotate-[-45deg]" />
    <span className="w-1 h-4 bg-white rotate-[40deg]" />
    <span className="w-2 h-2 border-t-2 border-r-2 border-[#8fff86] rotate-[45deg]" />
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
        <FiX
          className="text-lg cursor-pointer"
          onClick={toggleNav}
        />
      ) : (
        <FiMenu
          className="text-lg cursor-pointer"
          onClick={toggleNav}
        />
      )}
    </div>
</header>

   
      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside
          className="hidden md:flex md:flex-col md:items-center  md:justify-center md:space-y-6 md:border-r md:border-gray-500 md:p-3"
          style={{ background: "#0000001f" }}
        >
          <div className="icon-container">
            <Link href="/">
              <FiHome className="text-base hover:text-green-300 cursor-pointer" />
            </Link>
            <span className="badge">home</span>
          </div>
          <div className="icon-container">
            <Link href="/ProjectsPage">
              <FiCode className="text-base hover:text-green-300 cursor-pointer" />
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
      <footer className="flex md:bg-[#0000001f] bg-black/90 h-[48px] w-full z-[99999] absolute bottom-0 justify-between items-center pl-2 py-2 pr-3  border-t border-gray-500 text-gray-600">
        <div className="w-[12%] md:w-[2.5%] h-full rounded-sm bg-[#8fff86] flex items-center justify-center space-x-2">
          <div className="w-2.5 h-2.5 bg-[#101010e1] rounded-full"></div>
        </div>
        <Link
          href="/contact"
          style={{ background: "#10101080" }}
          className="bg-[#10101080] material-bubble3 hidden md:block w-3/5 md:w-4/12 lg:w-[15%] poppin p-2 lg:px-4 rounded-[4px] border border-gray-600 text-center text-sm  items-center justify-center"
        >
          <p className="flex items-center justify-center tracking-tighter">
            Let&apos;s-get-in-touch
            <FaArrowRight className="ml-2" />
          </p>
        </Link>
        <div className="flex space-x-16 items-center">
          <span className="hidden md:block tracking-tighter text-[15px] leading-[24px] text-[#979595cc]">
            Based in Nigeria
          </span>
          <div className="hidden md:block text-[15px] tracking-tighter  text-[#979595cc] ">
            Localtime — <span className="time font-[600]">{currentTime}</span>
          </div>
        </div>
        <div className="flex space-x-4 items-center ">
          <Link href="https://www.linkedin.com/in/rex-technologies-759965238/">
            <FaLinkedin
              className="text-lg hover:text-white cursor-pointer  hover:scale-105"
              style={{ transition: "ease-in 0.5s" }}
            />
          </Link>
          <FiInstagram
            className="text-lg hover:text-white cursor-pointer hover:scale-105"
            style={{ transition: "ease-in 0.5s" }}
          />
          <FaFacebook
            className="text-lg hover:text-white cursor-pointer hover:scale-105"
            style={{ transition: "ease-in 0.5s" }}
          />
          <Link href="https://github.com/Mat-icon?tab=repositories">
            {" "}
            <FiGithub
              className="text-lg hover:text-white cursor-pointer hover:scale-105"
              style={{ transition: "ease-in 0.5s" }}
            />
          </Link>

          <FaXTwitter
            className="text-lg hover:text-white cursor-pointer hover:scale-105"
            style={{ transition: "ease-in 0.5s" }}
          />
        </div>
      </footer>
    </div>
  );
}
