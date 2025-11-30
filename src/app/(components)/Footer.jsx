"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

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
          footerColor: "#9D9D9D",
        };
      case "/projects":
        return {
          accent: "#e14f62",
          matthewColor: "#FFFFFF",
          amehColor: "#e14f62",
          footerColor: "#9D9D9D",
        };
      case "/contact":
        return {
          accent: "#91d1f8",
          matthewColor: "#FFFFFF",
          amehColor: "#91d1f8",
          footerColor: "#9D9D9D",
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
    <footer className="w-full h-auto md:h-[70vh] glossy-25 py-10 md:py-20 px-2 xl:px-10 backdrop-blur-sm tracking-tighter mt-4 footer-content">
      <div className="w-full h-full flex flex-col md:space-y-0 space-y-10 justify-between items-center">

        {/* Top Section */}
        <div className="w-11/12 flex flex-col md:flex-row justify-between items-center">

          {/* Logo */}
          <div className="flex items-center space-x-1">
            <div className="rotate-90 gap-[1px] flex items-center">
              <span
                className="w-2 h-2 border-t-4 border-l-4 rotate-[-45deg]"
                style={{ borderColor: colors.accent }}
              />
              <span
                className="w-1 h-3 bg-white rotate-[30deg] rounded-bl-[5px] rounded-tr-[4px]"
                style={{ backgroundColor: colors.accent }}
              />
              <span
                className="w-2 h-2 border-t-4 border-r-4 rotate-[45deg]"
                style={{ borderColor: colors.accent }}
              />
            </div>

            <span className="text-xl" style={{ color: colors.matthewColor }}>
              matthew
              <span style={{ color: colors.amehColor }}>&lt;ameh&gt;</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col md:flex-row items-center mt-6 md:mt-0 space-y-3 md:space-y-0 md:space-x-6 text-base text-center md:text-left">
            {[
              { href: "/", label: "home" },
              { href: "/projects", label: "work" },
              { href: "/about", label: "about" },
              { href: "/contact", label: "contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition ease-in duration-300"
                style={{ color: colors.footerColor }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="w-11/12 flex flex-col md:flex-row justify-between items-center">
          <div
            className="text-center sm:text-sm md:text-base text-sm"
            style={{ color: colors.footerColor }}
          >
            2024 - 2025 Matthew Ameh | Freelance Web Developer
          </div>

          <div
            className="flex space-x-6 sm:text-sm md:text-base text-sm mt-3 md:mt-0"
            style={{ color: colors.footerColor }}
          >
            <a className="hover:text-white transition ease-in duration-300" href="#privacy-policy">
              privacy policy
            </a>
            <a className="hover:text-white transition ease-in duration-300" href="#cookie-free">
              cookie-free website
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
