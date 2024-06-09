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

import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Projects from "../(components)/Projects";
import AnimatedLetters from "./AnimatedLetters";
import Contactbar from "./Contactbar";
import Link from "next/link";

const NavItem = ({ number, label, isActive }) => (
  <div
    className={`flex  items-center space-x-4 p-4 ${
      isActive ? "text-red-400" : "hover:text-red-500"
    }`}
  >
    <span className="text-3xl text-gray-500">{number}</span>
    <span className="text-5xl">{label}</span>
  </div>
);

const FullScreenNav = ({ isOpen, toggleNav }) => (
  <div
    className={`fixed top-0 left-0 w-full h-full bg-black flex flex-col  justify-center space-y-10 transform transition-transform ${
      isOpen ? "translate-y-0" : "-translate-y-full"
    } z-20 md:hidden`}
    style={{ transition: "1s" }}
  >
    <FiX
      className="absolute top-4 right-4 text-3xl  cursor-pointer"
      onClick={toggleNav}
    />
    
    <Link href='/'><NavItem number="01" label="home/"  /></Link>
     <Link href='/About'><NavItem number="02" label="about/" /></Link>
    <Link href='/ProjectsPage'> <NavItem number="03" label="work/" isActive/></Link>
     <Link href='/contact'><NavItem number="04" label="contact/" /></Link>
  </div>
);

export default function Project() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
   
    " ",
    "m",
    "y",
    " ",
    "b",
    "e",
    "s",
    "t",
    " ",
  ];

  const collection =[
    " ",
    "c",
    "o",
    "l",
    "l",
    "e",
    "t",
    "i",
    "o",
    "n",
  ]


  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className=" flex flex-col test text-white border border-gray-500 relative z-40 rounded overflow-hidden selection:bg-red-500 selection:text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-2 border-b border-gray-500" style={{background:"#0000001f"}}>
        <div className="flex items-center">
          <FiMenu
            className="text-lg md:text-2xl cursor-pointer  md:hidden"
            onClick={toggleNav}
          />
        </div>
        <div className="flex items-center">
          <span className="text-lg font-medium text-center fonts">
            matthew<span className="text-lg text-red-500 ">&lt;ameh&gt;</span>
             
          </span>
        </div>
        <div className="flex items-center space-x-2 ">
          <VscChromeMinimize className="text-sm text-gray-400 hover:text-white"  style={{ transition: "ease-in 0.5s" }}/>
          <div
              className="w-2.5 h-2.5 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            ></div>
          <VscChromeClose className="text-sm text-gray-400 hover:text-white"  style={{ transition: "ease-in 0.5s" }}/>
        </div>
      </header>

      <FullScreenNav isOpen={isNavOpen} toggleNav={toggleNav} />

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="nav-color hidden md:flex md:flex-col md:items-center md:justify-center md:space-y-6 md:border-r md:border-gray-500 md:p-3 ">
          <div className="icon-container">
            <Link href='/'><FiHome className="text-base hover:text-red-500 cursor-pointer" /></Link>
            <span className="badge">home</span>
          </div>
          <div className="icon-container">
            <FiCode className="text-base hover:text-red-500 cursor-pointer" />
            <span className="badge">projects</span>
          </div>
          <div className="icon-container">
            <Link href='/About'><FiUser className="text-base hover:text-red-500 cursor-pointer" /></Link>
            <span className="badge">about</span>
          </div>
          <div className="icon-container">
          <Link href='/contact'><FiMail className="text-base hover:text-red-500 cursor-pointer" /></Link>
            <span className="badge">contact</span>
          </div>
        </aside>

        {/* Content */}
        <div className="test3 flex flex-col">
          <main className="w-full header">
            <div className="relative z-10 flex flex-col text-center items-center mt-32 ">
              {" "}
              <div className="words-container">
                <div className="word flex">
                  <p>&lt;h5&gt;</p>
                  <p>&lt;br&gt;</p>
                  
                </div>
              </div>
              <span className="text-xs poppins text-gray-500 uppercase tracking-wider">
                Work
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal  mt-4 lg:w-10/12 poppins g">
                A <AnimatedLetters strArray={collection} letterClass={letterClass} idx={10}/> of <br/>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
                <span className=" text-red-400"> projects </span>
              </h1>
              <p className=" w-11/12 md:w-10/12 lg:w-6/12 2xl:w-5/12 text-sm max-w-2xl text-gray-400 mt-8 our-text">
                With many years in web development, I acquired extensive
                experience working on projects across multiple industries and
                technologies. Let me show you my best creations.
              </p>
            </div>
          </main>
          <Projects />
          <Contactbar/>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-between items-center p-2 px-3 h-48  border-t border-gray-500 text-gray-600" style={{background:"#0000001f"}}>
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
        </div>
        <span className="hidden md:block text-sm ">Based in Nigeria</span>
        <div className="hidden md:block text-sm local ">
          Local time <span className="time">{currentTime}</span>
        </div>
        <div className="flex space-x-4 items-center ">
          <FaLinkedin
            className="text-lg hover:text-white cursor-pointer  hover:scale-105"
            style={{ transition: "ease-in 0.5s" }}
          />
          <FiInstagram
            className="text-lg hover:text-white cursor-pointer hover:scale-105"
            style={{ transition: "ease-in 0.5s" }}
          />
          <FaFacebook
            className="text-lg hover:text-white cursor-pointer hover:scale-105"
            style={{ transition: "ease-in 0.5s" }}
          />
          <FiGithub
            className="text-lg hover:text-white cursor-pointer hover:scale-105"
            style={{ transition: "ease-in 0.5s" }}
          />
          <FaXTwitter
            className="text-lg hover:text-white cursor-pointer hover:scale-105"
            style={{ transition: "ease-in 0.5s" }}
          />
        </div>
      </footer>
    </div>
  );
}
