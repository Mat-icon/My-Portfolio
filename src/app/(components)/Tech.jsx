import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import { FaCss3, FaDocker, FaHtml5, FaJava, FaPhp, FaReact, FaSass } from "react-icons/fa";

const Tech = () => {
  return (
    <div className=" w-screen flex flex-col justify-center items-center mt-36 ">
      <div>
        <h1 className="text-5xl md:text-6xl text-center poppins">
          Some of the techs I like to
          <br />
          <span className="text-blue-500"> work with</span>
        </h1>
      </div>
      <div className="light2"></div>
      <div className="tech">
        <div className="about-me-title p-3">
          <p className="text-sm font-semibold">techs</p>
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
        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
            <div className="text-7xl text-gray-200 flex items-center flex-col"> 
                <FaJava/>
                <span className="text-xl">Java</span>
            </div>
            <div className="text-7xl text-gray-200 flex items-center flex-col">
                <FaReact/>
                <span className="text-xl">React</span>
            </div>
            <div className=" text-7xl text-gray-200 flex items-center flex-col">
                <FaCss3/>
                <span className="text-xl">Css3</span>
            </div>
            <div className=" text-7xl text-gray-200 flex items-center flex-col">
                <FaSass/>
                <span className="text-xl">Sass</span>
            </div>
            <div className=" text-7xl text-gray-200 flex items-center flex-col">
                <FaSass/>
                <span className="text-xl">Sass</span>
            </div>
            <div className=" text-7xl text-gray-200 flex items-center flex-col">
                <FaDocker/>
                <span className="text-xl">Docker</span>
            </div>
            <div className=" text-7xl text-gray-200 flex items-center flex-col">
                <FaHtml5/>
                <span className="text-xl">Html5</span>
            </div>
            <div className=" text-7xl text-gray-200 flex items-center flex-col">
                <FaPhp/>
                <span className="text-xl">Php</span>
            </div>
        </div>
      </div>
      <div className="light2"></div>
    </div>
  );
};

export default Tech;
