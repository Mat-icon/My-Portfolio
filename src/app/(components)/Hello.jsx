import React from "react";
import {
  faMinus,
  faWindowMaximize,
  faX,
  faLaptop,
  faAmbulance,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHome,
  faLaptopCode,
  faMessage,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaWhatsapp} from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Projects from "./Projects";

const Hello = () => {
  return (
    <div className="w-full flex justify-center">
      <div className=" nav w-11/12 head  z-10 p-4 mt-4">
        <div className=" flex justify-evenly  space-x-96">
          <div className=" -translate-x-20 ml-3 font-light text-lg logo font-serif">
            M
          </div>
          <div className="font-medium text-xl">
            matthew&lt;<span className=" text-lime-500">ameh</span>&gt;
          </div>
          <div className="flex space-x-8 text-gray-500 text-sm translate-x-9">
            <FontAwesomeIcon
              icon={faMinus}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
            <div
              className=" w-3 h-3 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            ></div>
            <FontAwesomeIcon
              icon={faX}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
          </div>
        </div>
      </div>

      <div className="glass w-11/12 h-4/5 bg-opacity-30 backdrop-blur-lg  shadow-lg absolute z-10">
        <div className=" w-14 h-full sticky top-0 flex flex-col z-10 justify-center navbar">
          <div className="icon-container">
            <FontAwesomeIcon icon={faHome} className="icon" />
            <span className="badge">home</span>
          </div>
          <div className="icon-container">
          <FontAwesomeIcon icon={faUserAlt} className="icon" />
          <span className="badge">about</span>
          </div>
          <div className="icon-container">
          <FontAwesomeIcon icon={faLaptopCode} className="icon" />
          <span className="badge">work</span>
          </div>
          <div className="icon-container">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span className="badge">contact</span>
          </div>
        </div>
        <div className="content m-32 text-center">
          <span className="text-gray-500 text-lg">Home</span>
          <h1 className="text-8xl font-medium mb-8 text-white font-serif mt-8">
            Hi, I'm Matthew, a <br />
            <span style={{ color: "rgba(0, 255, 149, 0.76" }}>
              creative
            </span>{" "}
            developer.
          </h1>
          <p className="text-gray-400 text-lg">
            I bring value to web development projects by merging <br />{" "}
            technical expertise with creativity and aesthetics.
          </p>
         
        </div>
        <Projects />
       
        <div className="words-container">
          <div className="word">
            <p>&lt;h1&gt;</p>
            <p>&lt;br&gt;</p>
            <p>&lt;div&gt;</p>
          </div>
        </div>
      </div>
      <div className="lower-container w-11/12 p-3 h-11 absolute z-20 bottom-7 ">
          <div className="flex justify-between text-gray-500 font-extrabold ">
            <span className="w-3 h-3 rounded-full bg-lime-300"></span>
            <p>Based In Nigeria</p>
            <p>LocalTime - 16:30<sub>pm</sub></p>
            <div className="social-links flex ">
              <FaSquareXTwitter className=" text-2xl text-gray-500 mr-4 hover:text-white"/>
              <FaWhatsapp className=" text-2xl text-gray-500 mr-4 hover:text-white"/>
              <FaInstagramSquare className=" text-2xl text-gray-500 mr-4 hover:text-white"/>
              <FaLinkedin className=" text-2xl text-gray-500 mr-4 hover:text-white"/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hello;
