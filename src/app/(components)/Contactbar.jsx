"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Link from "next/link";
import "./App.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Contactbar = () => {
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();

  let spanColor;
  if (pathname === "/") {
    spanColor = "bg-[#8FFF86]";
  } else if (pathname === "/About") {
    spanColor = "bg-[#95bdfa]";
  } else if (pathname === "/ProjectsPage") {
    spanColor = "bg-[#fa9595]";
  } else {
    spanColor = "bg-[#8FFF86]";
  }

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

  return (
    <div className="w-full  flex  justify-center my-[8%]">
      <div className="about-me-two bg-[#1111101a] w-11/12 backdrop-blur-md md:w-[75%]">
        <div className="about-me-title px-4 py-2">
          <p className="text-sm tracking-[-1px]">collaboration</p>
          <div className="flex items-center space-x-2 text-[#494949] text-xs">
            <FontAwesomeIcon
              icon={faMinus}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
            <div
              className="w-2.5 h-2.5 border border-[#494949] rounded-sm hover:border-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            ></div>
            <FontAwesomeIcon
              icon={faX}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
          </div>
        </div>
        <div className="w-full h-auto">
          <div className="w-full h-auto md:mt-8 mt-4  py-6 poppin flex flex-col lg:flex-row items-center justify-center lg:space-x-10">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              {/* Circle container */}
              <div
                className={`relative w-full h-full rounded-full  overflow-y-visible ${spanColor} hi`}
              >
                <img
                  src="/images/matthew.png"
                  alt="me"
                  className="absolute top-[-3.6%] left-0 w-full h-full object-cover scale-[1.05] rounded-full"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <p className="text-center tracking-tighter poppins lg:text-left text-3xl lg:text-6xl font-normal">
                Let&#39;s work together on your <br />
                next project .
              </p>
            </div>
          </div>
          <div className="flex flex-col xl:ml-[22%]  mt-0 xl:mt-[1%]  tracking-tighter items-center md:flex-row md:space-x-2 ">
            <Link
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              href="/contact"
              style={{ background: "#101010e1" }}
              className="w-10/12 material-bubble3   hover:border-[#8eff86] md:w-full lg:w-4/12 p-4 lg:px-4 rounded-md border-[#494949]  border text-center lg:text-center text-sm"
            >
              {hovered ? (
                <motion.p
                  className="flex items-center justify-center tracking-[-1px]"
                  variants={container}
                  initial="hidden"
                  animate={hovered ? "visible" : "hidden"}
                >
                  {renderText("let's-get-in-touch →")}
                </motion.p>
              ) : (
                <p className="flex items-center text-white  justify-center tracking-[-1px]">
                  let&#39;s-get-in-touch →
                </p>
              )}
            </Link>

            <Link
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              href="/cv.pdf"
              download
              style={{ background: "#101010e1" }}
              target="_blank"
              className="w-10/12 mt-1 md:mt-0  material-bubble3  hover:border-[#8eff86]  md:w-full lg:w-4/12 p-4 lg:px-4 rounded-md border-[#494949] bg-black border text-center lg:text-center text-sm"
            >
              {hovered ? (
                <motion.p
                  className="flex items-center tracking-[-1px]  justify-center "
                  variants={container}
                  initial="hidden"
                  animate={hovered ? "visible" : "hidden"}
                >
                  {renderText("download cv")}
                </motion.p>
              ) : (
                <p className="flex items-center tracking-[-1px] text-white  justify-center ">
                  <> download cv</>
                </p>
              )}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactbar;
