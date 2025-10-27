"use client";

import Link from "next/link";

const NavItem = ({ number, label, isActive }) => (
  <div
    className={`flex items-center space-x-4 p-4 ${
      isActive ? "text-green-400" : "hover:text-green-600"
    }`}
  >
    <span className="text-2xl tracking-tighter text-gray-500">{number}</span>
    <span className="text-4xl tracking-tighter">{label}</span>
  </div>
);

const FullScreenNav = ({ isOpen, toggleNav }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full bg-black flex flex-col justify-center space-y-8 transform transition-transform ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } z-20 md:hidden`}
      style={{ transition: "1s" }}
    >
      {/* Close button */}
      <div
        className="absolute top-4 right-4 text-2xl cursor-pointer text-center"
        onClick={toggleNav}
      >
        ×
      </div>

      {/* Navigation links */}
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
  );
};

export default FullScreenNav;
