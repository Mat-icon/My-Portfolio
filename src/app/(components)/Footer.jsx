"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  // Define colors based on pathname
  const getColors = () => {
    switch (pathname) {
      case "/":
        return {
          accent: "#8FFF86",
          matthewColor: "#FFFFFF",
          amehColor: "#8FFF86",
          footerColor: "#9D9D9D",
        };
      case "/about-me":
        return {
          accent: "#4d81ee",
          matthewColor: "#FFFFFF",
          amehColor: "#4d81ee",
          footerColor: "#000000",
        };
      case "/projects":
        return {
          accent: "#e14f62",
          matthewColor: "#FFFFFF",
          amehColor: "#e14f62",
          footerColor: "#000000",
        };
      case "/contact":
        return {
          accent: "#91d1f8",
          matthewColor: "#FFFFFF",
          amehColor: "#91d1f8",
          footerColor: "#000000",
        };
      default:
        return {
          accent: "#8FFF86",
          matthewColor: "#FFFFFF",
          amehColor: "#8FFF86",
          footerColor: "#9D9D9D",
        };
    }
  };

  const colors = getColors();

  return (
    <footer className="w-full h-[70vh] glossy-25 px-2 xl:px-10 backdrop-blur-sm tracking-tighter mt-4 footer-content">
      <div className="w-full flex flex-col space-y-52 relative top-1/4 items-center">
        {/* Logo + Nav */}
        <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center md:space-x-4 w-11/12">
          <div className="flex items-center space-x-2">
            {/* Accent Arrow */}
            <div className="rotate-90 gap-[1px] flex items-center">
              <span
                className="w-2 h-2 border-t-4 border-l-4 rotate-[-45deg]"
                style={{ borderColor: colors.accent }}
              />
              <span
                className="w-1 h-3 rotate-[30deg] rounded-full"
                style={{ backgroundColor: colors.accent }}
              />
              <span
                className="w-2 h-2 border-t-4 border-r-4 rotate-[45deg]"
                style={{ borderColor: colors.accent }}
              />
            </div>
            {/* Name */}
            <span
              className="text-xl font-normal tracking-[-2px]"
              style={{ color: colors.matthewColor }}
            >
              matthew<span style={{ color: colors.amehColor }}>&#123;ameh&#125;</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex-col flex md:flex-row mt-4 md:mt-0 space-y-3 md:space-y-0 items-center md:text-left text-center md:space-x-6 text-base tracking-[-1px] ">
            <a
              href="/"
               className="hover:text-white"
              style={{
                color: colors.footerColor,
                transition: "ease-in 0.5s",
              }}
            >
              home
            </a>
            <a
              href="/projects"
           className="hover:text-white"
              style={{
                color: colors.footerColor,
                transition: "ease-in 0.5s",
              }}
            >
              projects
            </a>
            <a
              href="/about"
              className="hover:text-white"
              style={{
                color: colors.footerColor,
                transition: "ease-in 0.5s",
              }}
            >
              about
            </a>
            <a
              href="/contact"
               className="hover:text-white"
              style={{
                color: colors.footerColor,
                transition: "ease-in 0.5s",
              }}
            >
              contact
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-11/12 flex flex-col md:flex-row md:justify-between items-center">
          <div
            className="text-center tracking-[-1px] sm:text-sm md:text-base text-sm"
            style={{ color: colors.footerColor }}
          >
            2024 - 2025 Matthew Ameh | Freelance Web Developer
          </div>
          <div
            className="flex space-x-6 tracking-[-1px] sm:text-sm md:text-base text-sm mb-2"
            style={{ color: colors.footerColor }}
          >
            <a
              href="#privacy-policy"
              className="hover:text-white"
              style={{ transition: "ease-in 0.5s" }}
            >
              privacy policy
            </a>
            <a
              href="#cookie-free"
              className="hover:text-white"
              style={{ transition: "ease-in 0.5s" }}
            >
              cookie-free website
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
