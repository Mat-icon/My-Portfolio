"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const routeColors = {
  "/": "#8FFF86", // green
  "/about-me": "#4d81ee", // blue
  "/projects": "#e14f62", // red
  "/contact": "#91d1f8", // light blue
  "/experiments": "#E1B84F",
};

const NavItem = ({ number, label, isActive, color }) => (
  <div
    className={`flex items-center space-x-4 p-4 transition-all ${
      isActive ? "" : "text-white hover:text-[#9d9d9d]"
    }`}
    style={{ color: isActive ? color : undefined }}
  >
    <span className="text-lg tracking-tighter">{number}</span>
    <span className="text-4xl fonts">{label}</span>
  </div>
);

const FullScreenNav = ({ isOpen, toggleNav }) => {
  const pathname = usePathname();

  const getActiveColor = (route) => routeColors[route] ?? "#8FFF86";

  return (
    <div
      className={`absolute inset-0 bg-[#0f0f0f]/95 h-full py-6 flex flex-col justify-between transform transition-transform ${
        isOpen ? "-translate-y-20" : "-translate-y-full"
      } z-10 md:hidden`}
      style={{ transition: "transform 1s ease-in-out" }}
    >
      {/* Navigation links */}
      <div className="flex flex-col space-y-3">
        <Link href="/" onClick={toggleNav}>
          <NavItem
            number="01"
            label="home/"
            isActive={pathname === "/"}
            color={getActiveColor("/")}
          />
        </Link>

        <Link href="/about-me" onClick={toggleNav}>
          <NavItem
            number="02"
            label="about/"
            isActive={pathname === "/about-me"}
            color={getActiveColor("/about-me")}
          />
        </Link>

        <Link href="/projects" onClick={toggleNav}>
          <NavItem
            number="03"
            label="work/"
            isActive={pathname === "/projects"}
            color={getActiveColor("/projects")}
          />
        </Link>
        <Link href="/experiments" onClick={toggleNav}>
          <NavItem
            number="04"
            label="experiments/"
            isActive={pathname === "/experiments"}
            color={getActiveColor("/experiments")}
          />
        </Link>
        <Link href="/contact" onClick={toggleNav}>
          <NavItem
            number="05"
            label="contact/"
            isActive={pathname === "/contact"}
            color={getActiveColor("/contact")}
          />
        </Link>
      </div>

      {/* Social Links */}
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
