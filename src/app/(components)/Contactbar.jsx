"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Link from "next/link";

const Contactbar = () => {
  return (
    <div className="w-full  flex  justify-center   relative top-32">
      <div className="about-me">
        <div className="about-me-title p-4">
          <p className="text-sm">collaboration</p>
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
          <div className="w-24 h-24 md:w-36 md:h-28 rounded-full relative overflow-hidden md:p-6 bg-green-400 hi">
            <img
              src="/images/bg.png"
              alt="me"
              className="mb-8 lg:mb-0 object-cover absolute -rotate-12 top-0 left-0 w-full h-full"
            />
          </div>
          <div className="flex flex-col space-y-6">
            <p className="text-center lg:text-left text-2xl lg:text-6xl font-normal">
              Let&#39;s work together on your next project
            </p>
            <div className="flex flex-col items-center md:flex-row md:space-x-2 ">
              <Link
                href="/contact"
                className="w-full material-bubble4 md:w-full lg:w-4/12 p-4 lg:px-4 rounded-md border-default-text bg-black border text-center lg:text-center text-sm"
              >
                let&#39;s-get-in-touch
              </Link>
              <Link
                href="/cv.pdf"
                download
                target="_blank"
                className="w-full mt-2 md:mt-0 material-bubble4 md:w-full lg:w-4/12 p-4 lg:px-4 rounded-md border-default-text bg-black border text-center lg:text-center text-sm"
              >
                Download CV
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
