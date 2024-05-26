import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Lorenzo Bocchi",
    year: "2023",
    technologies: ["gsap", "javascript", "css"],
    image: "/images/top.png",
  },
  {
    id: 2,
    title: "Project Two",
    year: "2023",
    technologies: ["react", "node.js", "express"],
    image: "/images/top.png",
  },
  {
    id: 3,
    title: "Project Three",
    year: "2023",
    technologies: ["sass", "next.js", "html"],
    image: "/images/top.png",
  },
];

const Projects = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="title text-center text-3xl md:text-6xl mb-7 poppins">
        <h1>
          Projects{" "}
          <span style={{ color: "rgba(0, 255, 149, 0.76)" }}>highlight</span>
        </h1>
      </div>
      <div className="w-full flex flex-col items-center space-y-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="md:pl-5 project-glass w-11/12 md:w-3/4 lg:w-2/3 rounded-md flex flex-col md:flex-row-reverse items-center bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg hover:bg-opacity-20 transition duration-300"
          >
            <div className="relative w-10/12 h-72 md:w-96 md:h-auto overflow-hidden rounded-sm">
              <Image
                src={project.image}
                alt={`${project.title} image`}
               width={500}
               height={600}
              
              />
            </div>
            <div className="flex flex-col w-full md:w-2/3 p-4">
              <div className="flex items-center space-x-4">
                <span className="text-xl text-gray-400 font-extrabold">{`0${project.id}`}</span>
                <h1 className="text-2xl md:text-4xl  poppins">{project.title}</h1>
              </div>
              <div className="flex flex-wrap space-x-4 mt-4 font-sans">
                {project.technologies.map((tech, index) => (
                  <div
                    key={`${project.id}-${tech}-${index}`}
                    className="rounded-2xl text-xs w-auto text-center border border-slate-600 text-gray-600 p-2"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="year text-gray-700 mt-2">{project.year}</div>
            </div>
          </div>
        ))}
        <div className="project-btn mt-10">
          <button className="hover:bg-lime-900 w-44 p-4 bg-black border border-gray-400 rounded-md hover:border-lime-500 flex items-center justify-center">
            all-projects <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
