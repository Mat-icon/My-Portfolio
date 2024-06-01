"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const Contactbar = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center lg:items-start relative top-32">
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
        <div className="w-full h-4/5 about-me-text p-6 poppins flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
          <div className="w-44 h-32  rounded-full relative overflow-hidden">
            <img
              src="/images/top.jpg"
              alt="me"
              className=" mb-8 lg:mb-0 object-cover absolute top-0 left-0 w-full h-full"
            />
          </div>
          <div className="flex flex-col space-y-6">
            <p className="text-center lg:text-left text-2xl lg:text-6xl font-normal">
              Let&#39;s work together on your next project
            </p>
            <button className="w-full md:w-full lg:w-4/12  p-4 lg:px-4 rounded-md border-default-text bg-black border text-center lg:text-center text-sm">
              let's-get-in-touch
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactbar;
