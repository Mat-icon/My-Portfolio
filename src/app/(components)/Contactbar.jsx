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
  if(pathname === "/"){
    spanColor = "bg-[#8FFF86]"
  }else if(pathname === "/About"){
    spanColor = "bg-[#95bdfa]"
  }
  else if(pathname === "/ProjectsPage"){
    spanColor = "bg-[#fa9595]"
  }else{
     spanColor = "bg-[#8FFF86]"
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
    <div className="w-full  flex  justify-center   relative top-32">
      <div className="about-me w-11/12 backdrop-blur-md md:w-[80%]">
        <div className="about-me-title p-2">
          <p className="text-base tracking-tighter">collaboration</p>
          <div className="flex space-x-4 text-gray-500 text-xs">
            <FontAwesomeIcon
              icon={faMinus}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
            <div
              className="w-2.5 h-2.5 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            ></div>
            <FontAwesomeIcon
              icon={faX}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
          </div>
        </div>
        <div className="w-full h-auto md:mt-8 mt-4  p-6 poppin flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
          <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full relative overflow-hidden ${spanColor} hi `}>
            <img
              src="/images/matthew.png"
              alt="me"
              className="mb-8 lg:mb-0 object-cover absolute  top-0 left-0 w-full h-full"
            />
          </div>
          <div className="flex flex-col space-y-6">
            <p className="text-center tracking-tighter poppins lg:text-left text-3xl lg:text-6xl font-normal">
              Let&#39;s work together on your <br />
              next project .
            </p>
            <div className="flex flex-col tracking-tighter items-center md:flex-row md:space-x-2 ">
              <Link
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                href="/contact"
                className="w-full material-bubble4 md:w-full lg:w-4/12 p-4 lg:px-4 rounded-md border-[#6462628c] bg-black border text-center lg:text-center text-sm"
              >
                {hovered ? (
                  <motion.p
                    className="flex items-center  justify-center tracking-tighter"
                    variants={container}
                    initial="hidden"
                    animate={hovered ? "visible" : "hidden"}
                  >
                    {renderText("let's-get-in-touch")}
                  </motion.p>
                ) : (
                  <p className="flex items-center text-white  justify-center tracking-tighter">
                    <> let&#39;s-get-in-touch</>
                  </p>
                )}
              </Link>

              {/* <Link
                href="/cv.pdf"
                download
                target="_blank"
                className="w-full mt-2 md:mt-0  material-bubble4 md:w-full lg:w-4/12 p-4 lg:px-4 rounded-md border-[#6462628c] bg-black border text-center lg:text-center text-sm"
              >
                download cv
              </Link> */}

              <Link
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                href="/cv.pdf"
                download
                target="_blank"
                className="w-full mt-2 md:mt-0  material-bubble4 md:w-full lg:w-4/12 p-4 lg:px-4 rounded-md border-[#6462628c] bg-black border text-center lg:text-center text-sm"
              >
                {hovered ? (
                  <motion.p
                    className="flex items-center  justify-center tracking-tighter"
                    variants={container}
                    initial="hidden"
                    animate={hovered ? "visible" : "hidden"}
                  >
                    {renderText("download cv")}
                  </motion.p>
                ) : (
                  <p className="flex items-center text-white  justify-center tracking-tighter">
                    <> download cv</>
                  </p>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactbar;
