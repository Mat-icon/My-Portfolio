import React from "react";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "TelgaChain",
    year: "2023",
    technologies: ["gsap", "javascript", "css"],
    image: "/images/top.jpg",
    link : "/"
  },
  {
    id: 2,
    title: "Poise Academy",
    year: "2023",
    technologies: ["react", "node.js", "express", 'gsap'],
    image: "/images/top.jpg",
    link : "/"
  },
  {
    id: 3,
    title: "Heartfelt Academy",
    year: "2023",
    technologies: ["sass", "next.js", "html"],
    image: "/images/top.jpg",
    link : "/"
  },
  {
    id: 4,
    title: "Music App",
    year: "2023",
    technologies: ["sass", "next.js", "html"],
    image: "/images/top.jpg",
    link : "/"
  },
];

const Projects = () => {
  return (
    <>
    
      <div
        className="w-full flex flex-col items-center 
    "
      ><div className="light"></div>
        <div className="w-full flex flex-col items-center space-y-4  mt-40">
          {projects.map((project) => (
            
            <div
              key={project.id}
              
              className="md:pl-5 project-glass p-2 h-96 md:h-60 w-11/12 md:w-10/12 lg:w-9/12 rounded-md flex flex-col md:flex-row-reverse items-center  transition duration-300"
            ><a href={project.link}>
              <div className=" w-full  md:w-96 md:h-auto ">
                <Image
                  src={project.image}
                  alt={`${project.title} image`}
                  width={500}
                  height={500}
                  className=" rounded-lg h-4/5 lg:w-4/5"
                />
              </div></a>
              <div className="flex flex-col w-full md:w-2/3 p-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600 font-bold">{`0${project.id}`}</span>
                  <h1 className="text-2xl md:text-4xl  poppins">
                    {project.title}
                  </h1>
                </div>
                <div className="w-full md:w-8/12 lg:w-8/12 xl:w-10/12 flex  space-x-4 mt-4 poppins">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={`${project.id}-${tech}-${index}`}
                      style={{ background: "#0000004b" }}
                      className="rounded-2xl text-xs w-20 md:w-20 text-center border border-slate-600 text-gray-600 p-2"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="year text-gray-700 mt-2">{project.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
