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
import Header from "./Header";
import Contactbar from "./Contactbar";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import ProjectHighlight from "./ProjectHighlight";

const NavItem = ({ number, label, isActive }) => (
  <div
    className={`flex items-center space-x-4 p-4 ${
      isActive ? "text-green-400" : "hover:text-green-600"
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
    <div
      className="absolute top-4 right-4 text-2xl  cursor-pointer xi text-center"
      onClick={toggleNav}>x</div>
    

    <Link href="/">
      <NavItem number="01" label="home/" isActive />
    </Link>
    <Link href="/About">
      <NavItem number="02" label="about/" />
    </Link>
    <Link href="/ProjectsPage">
      {" "}
      <NavItem number="03" label="work/" />
    </Link>
    <Link href="/contact">
      <NavItem number="04" label="contact/" />
    </Link>
  </div>
);

export default function Home() {
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
    <div className="flex flex-col test text-white border border-gray-500 relative z-40 rounded overflow-hidden selection:bg-lime-400 selection:text-white">
      {/* Header */}
      <header
        className="flex justify-between items-center p-2 border-b border-gray-500"
        style={{ background: "#0000001f" }}
      >
        <div className="flex items-center">
          <FiMenu
            className="text-lg md:text-2xl cursor-pointer  md:hidden"
            onClick={toggleNav}
          />
        </div>
        <div className="flex items-center">
          <span className="text-lg font-medium text-center fonts">
            matthew
            <span className="text-lg all-text">&lt;ameh&gt;</span>
          </span>
        </div>
        <div className="flex items-center space-x-2 ">
          <VscChromeMinimize className="text-base text-gray-400" />
          <div
            className="w-2.5 h-2.5 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
            style={{ transition: "ease-in 0.5s" }}
          ></div>
          <VscChromeClose className="text-base text-gray-400" />
        </div>
      </header>

      <FullScreenNav isOpen={isNavOpen} toggleNav={toggleNav} />

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside
          className="hidden md:flex md:flex-col md:items-center  md:justify-center md:space-y-6 md:border-r md:border-gray-500 md:p-3"
          style={{ background: "#0000001f" }}
        >
          <div className="icon-container">
            <Link href="/">
              <FiHome className="text-base hover:all-text cursor-pointer" />
            </Link>
            <span className="badge">home</span>
          </div>
          <div className="icon-container">
            <Link href="/ProjectsPage">
              <FiCode className="text-base hover:all-text cursor-pointer" />
            </Link>
            <span className="badge">projects</span>
          </div>
          <div className="icon-container">
            <Link href="/About">
              <FiUser className="text-base hover:all-text cursor-pointer" />
            </Link>
            <span className="badge">about</span>
          </div>
          <div className="icon-container">
            <Link href="/contact">
              <FiMail className="text-base hover:all-text cursor-pointer" />
            </Link>
            <span className="badge">contact</span>
          </div>
        </aside>

        {/* Content */}
        <div className="test2 flex flex-col">
          <Header />
          <ProjectHighlight />
          <Contactbar />
        </div>
      </div>

      {/* Footer */}
      <footer
        className="flex justify-between items-center p-2 px-3 h-12 border-t border-gray-500 text-gray-600"
        style={{ background: "#0000001f" }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
        </div>
        <span className="hidden md:block text-sm">Based in Nigeria</span>
        <div className="hidden md:block text-sm local">
          Local time <span className="time">{currentTime}</span>
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
