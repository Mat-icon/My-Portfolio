"use client";

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const NavItem = ({ number, label, isActive }) => (
  <div
    className={`flex items-center space-x-4 p-4 ${
      isActive ? "text-[#8ff866]" : "hover:text-green-600"
    }`}
  >
    <span className="text-lg tracking-tighter text-[#9d9d9d]">{number}</span>
    <span className="text-4xl poppins">{label}</span>
  </div>
);

const FullScreenNav = ({ isOpen, toggleNav }) => {
  return (
    <div
      className={`absolute inset-0 bg-[#0f0f0f]/70 h-[90dvh] py-6 flex flex-col justify-between space-y-3 transform transition-transform ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } z-50 md:hidden`}
      style={{ transition: "transform 1s ease-in-out" }}
    >
      {/* Navigation links */}
      <div className="flex flex-col space-y-3">
        <Link href="/" onClick={toggleNav}>
          <NavItem number="01" label="home/" isActive />
        </Link>

        <Link href="/About" onClick={toggleNav}>
          <NavItem number="02" label="about/" />
        </Link>

        <Link href="/ProjectsPage" onClick={toggleNav}>
          <NavItem number="03" label="work/" />
        </Link>

        <Link href="/contact" onClick={toggleNav}>
          <NavItem number="04" label="contact/" />
        </Link>
      </div>

      {/* Social Links at Bottom */}
      <div className="flex text-[#fff] justify-evenly items-center space-x-6 mt-auto pb-6">
        <Link href="https://www.linkedin.com/in/rex-technologies-759965238/">
          <FaLinkedin className="text-xl hover:text-white cursor-pointer hover:scale-105 transition-all" />
        </Link>

        <FiInstagram className="text-xl hover:text-white cursor-pointer hover:scale-105 transition-all" />

        <Link href="https://github.com/Mat-icon?tab=repositories">
          <FiGithub className="text-xl hover:text-white cursor-pointer hover:scale-105 transition-all" />
        </Link>

        <FaXTwitter className="text-xl hover:text-white cursor-pointer hover:scale-105 transition-all" />
      </div>
    </div>
  );
};

export default FullScreenNav;
