"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import { FaCss3, FaDocker, FaGithub, FaReact, FaSass } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb, SiRedux } from "react-icons/si";
import {
  RiNextjsFill,
  RiSvelteFill,
  RiFirebaseFill,
  RiNodejsFill,
} from "react-icons/ri";
import { usePathname } from "next/navigation";

const Tech = () => {
  const pathname = usePathname();

  // 🔹 Define which "light" background and color to use
  const lightClass = pathname === "/" ? "light4" : "light2";
  const spanColor = pathname === "/" ? "text-green-400" : "text-blue-500";

  return (
    <div className="w-screen flex flex-col justify-center items-center mt-36">
      <div>
        <h1 className="text-4xl tracking-tight md:text-[64px] md:leading-[55px] text-center poppins">
          Some of the techs i<br /> like to{" "}
          <span className={`${spanColor}`}>work with</span>
        </h1>
      </div>

      {/* 🔹 Dynamic light background */}
      <div className={lightClass} />

      <div className="tech md:w-4/5 w-11/12">
        <div className="about-me-title p-3">
          <p className="text-sm md:text-base tracking-tighter font-semibold">techs</p>
          <div className="flex space-x-4 text-gray-500 text-xs">
            <FontAwesomeIcon
              icon={faMinus}
              className="hover:text-white cursor-pointer transition ease-in duration-500"
            />
            <div className="w-2.5 h-2.5 border border-gray-500 rounded-sm hover:border-white cursor-pointer transition ease-in duration-500"></div>
            <FontAwesomeIcon
              icon={faX}
              className="hover:text-white cursor-pointer transition ease-in duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
          {[
            { icon: <RiSvelteFill />, label: "Svelte 5" },
            { icon: <FaReact />, label: "React" },
            { icon: <RiFirebaseFill />, label: "Firebase" },
            { icon: <RiNextjsFill />, label: "Next.JS" },
            { icon: <FaCss3 />, label: "CSS3" },
            { icon: <FaSass />, label: "Sass" },
            { icon: <FaDocker />, label: "Docker" },
            { icon: <RiNodejsFill />, label: "Node.JS" },
            { icon: <SiMongodb />, label: "Mongo.DB" },
            { icon: <SiRedux />, label: "Redux" },
            { icon: <FaGithub />, label: "Git" },
            { icon: <BiLogoPostgresql />, label: "PostGres" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="text-4xl md:text-6xl text-gray-200 flex items-center flex-col"
            >
              {icon}
              <span className="text-sm text-gray-300 md:text-base mt-2 tracking-tighter">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={lightClass} />
    </div>
  );
};

export default Tech;
