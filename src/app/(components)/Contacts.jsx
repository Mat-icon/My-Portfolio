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

import { FaArrowRight, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AnimatedLetters from "./AnimatedLetters";

import Link from "next/link";
import ContactForm from "./ContactForm";
import Contactbar from "./Contactbar";

const NavItem = ({ number, label, isActive }) => (
  <div
    className={`flex items-center space-x-4 p-4 ${
      isActive ? "text-yellow-400" : "hover:text-yellow-500"
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
      className="absolute top-4 right-4 text-2xl text-center xi4  cursor-pointer"
      onClick={toggleNav}
    >
      x
    </div>

    <Link href="/">
      <NavItem number="01" label="home/" />
    </Link>
    <Link href="/About">
      <NavItem number="02" label="about/" />
    </Link>
    <Link href="/ProjectsPage">
      {" "}
      <NavItem number="03" label="work/" />
    </Link>
    <Link href="/contact">
      <NavItem number="04" label="contact/" isActive />
    </Link>
  </div>
);

export default function Contacts() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    " ",
    "d",
    "r",
    "o",
    "p",
    " ",
    "a",
    " ",
    "l",
    "i",
    "n",
    "e",
  ];

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
    <div className="flex flex-col test text-white border border-gray-500 relative z-40 rounded overflow-hidden selection:bg-yellow-400 selection:text-white">
      {/* Header */}
      <header
        className="flex justify-between items-center p-2 border-b border-gray-500 "
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
            <span className="text-lg text-yellow-500">&lt;ameh&gt;</span>
          </span>
        </div>
        <div className="flex items-center space-x-2 ">
          <VscChromeMinimize
            className="text-sm text-gray-400 hover:text-white"
            style={{ transition: "ease-in 0.5s" }}
          />
          <div
            className="w-2.5 h-2.5 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
            style={{ transition: "ease-in 0.5s" }}
          ></div>
          <VscChromeClose
            className="text-sm text-gray-400 hover:text-white"
            style={{ transition: "ease-in 0.5s" }}
          />
        </div>
      </header>

      <FullScreenNav isOpen={isNavOpen} toggleNav={toggleNav} />

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="nav-color hidden md:flex md:flex-col md:items-center md:justify-center md:space-y-6 md:border-r md:border-gray-500 md:p-3 ">
          <div className="icon-container">
            <Link href="/">
              <FiHome className="text-base hover:text-yellow-500 cursor-pointer" />
            </Link>
            <span className="badge">home</span>
          </div>
          <div className="icon-container">
            <Link href="/ProjectsPage">
              <FiCode className="text-base hover:text-yellow-500 cursor-pointer" />
            </Link>
            <span className="badge">projects</span>
          </div>
          <div className="icon-container">
            <Link href="/About">
              <FiUser className="text-base hover:text-yellow-500 cursor-pointer" />
            </Link>
            <span className="badge">about</span>
          </div>
          <div className="icon-container">
            <FiMail className="text-base hover:text-yellow-500 cursor-pointer" />
            <span className="badge">contact</span>
          </div>
        </aside>

        {/* Content */}
        <div className="test4 test5 flex flex-col">
          <main className="w-full header">
            <div className="relative z-10 flex flex-col text-center items-center mt-32 ">
              {" "}
              <div className="words-container">
                <div className="word flex">
                  <p>&lt;contact&gt;</p>
                  <p>&lt;me&gt;</p>
                </div>
              </div>
              <span className="text-xs poppins text-gray-500 uppercase tracking-wider">
                Contact
              </span>
              <h1 className=" text-5xl w-[93%] md:text-7xl lg:text-[100px] font-normal  mt-4 md:w-full lg:w-10/12 poppins g">
                Let&#39;s book a virtual
                <br /> space or
                <span className=" text-yellow-500">
                  {" "}
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                  />
                </span>
              </h1>
              <p className=" w-11/12 md:w-10/12 lg:w-5/12 2xl:w-6/12 md:text-[14px] text-[13px] max-w-2xl text-gray-400 mt-8 our-text">
                Whether you have a project you want to work on together or just
                want to have a chat, you are in the right place: Let&#39;s get
                in touch
              </p>
            </div>
          </main>
          <ContactForm />
          <Contactbar />
        </div>
      </div>

      {/* Footer */}
      <footer
        className="flex justify-between items-center pl-2 py-2 pr-3 h-12 border-t border-gray-500 text-gray-600"
        style={{ background: "#0000001f" }}
      >
        <div className="w-[12%] md:w-[2.5%] h-full bg-yellow-300 rounded-sm flex items-center justify-center space-x-2">
          <div className="w-2.5 h-2.5 bg-[#101010e1] rounded-full"></div>
        </div>
        <Link
          href="/contact"
          style={{ background: "#101010e1" }}
          className="material-bubble hidden md:block w-3/5 md:w-4/12 lg:w-[15%] poppin p-2 lg:px-4 rounded-[4px] border border-gray-600 text-center text-sm  items-center justify-center"
        >
          <p className="flex items-center justify-center">
            Let&apos;s-get-in-touch
            <FaArrowRight className="ml-2" />
          </p>
        </Link>
        <div className="flex space-x-16">
          <span className="hidden md:block poppin text-[15px] leading-[24px] text-[#979595cc]">
            Based in Nigeria
          </span>
          <div className="hidden md:block text-[15px] poppin text-[#979595cc] local ">
            Local time <span className="time font-[600]">{currentTime}</span>
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
