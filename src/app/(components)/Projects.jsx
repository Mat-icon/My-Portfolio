import React from "react";
import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className=" w-full project-body absolute top-full flex flex-col  items-center pt-24">
      <div className="title text-center text-6xl">
        <h1>
          Projects{" "}
          <span style={{ color: "rgba(0, 255, 149, 0.76" }}>highlights</span>
        </h1>
      </div>
      <div className="w-full absolute left-52  top-52 space-y-4">
        <div className="project-glass rounded-md flex items-center pl-4">
          <div className="">
            <div className="flex space-x-8">
              <span className=" text-xl text-gray-400 font-extrabold">01</span>
              <div className="flex flex-col">
              <h1 className=" text-4xl font-serif">Heartfelt Academy</h1>
              <div className="flex space-x-4 mt-4 font-sans" >
                <div className=" rounded-2xl text-sm w-20 text-center  border border-slate-600 text-gray-600 p-2">sass</div>
                <div className=" rounded-2xl text-sm w-20 text-center  border border-slate-600 text-gray-600 p-2">next.js</div>
                <div className=" rounded-2xl text-sm w-20 text-center border border-slate-600 text-gray-600 p-2">html</div>
              </div>
              </div>
             
            </div>
          </div>
        </div>
        <div className="project-glass rounded-md flex items-center pl-4">
        <div className="">
            <div className="flex space-x-8">
              <span className=" text-xl text-gray-400 font-extrabold">02</span>
              <div className="flex flex-col">
              <h1 className=" text-4xl font-serif">Heartfelt Academy</h1>
              <div className="flex space-x-4 mt-4 font-sans" >
                <div className=" rounded-2xl text-sm w-20 text-center  border border-slate-600 text-gray-600 p-2">gsap</div>
                <div className=" rounded-2xl text-sm w-24 text-center  border border-slate-600 text-gray-600 p-2">javascript</div>
                <div className=" rounded-2xl text-sm w-20 text-center border border-slate-600 text-gray-600 p-2">html</div>
              </div>
              </div>
             
            </div>
          </div>
        </div>
        <div className="project-glass rounded-md flex items-center pl-4">
        <div className="">
            <div className="flex space-x-8">
              <span className=" text-xl text-gray-400 font-extrabold">03</span>
              <div className="flex flex-col">
              <h1 className=" text-4xl font-serif">Heartfelt Academy</h1>
              <div className="flex space-x-4 mt-4 font-sans" >
                <div className=" rounded-2xl text-sm w-20 text-center  border border-slate-600 text-gray-600 p-2">sass</div>
                <div className=" rounded-2xl text-sm w-20 text-center  border border-slate-600 text-gray-600 p-2">next.js</div>
                <div className=" rounded-2xl text-sm w-20 text-center border border-slate-600 text-gray-600 p-2">html</div>
              </div>
              </div>
             
            </div>
          </div>
        </div>
        <div className="project-btn w-9/12 flex justify-center">
          <button className=" w-44 p-4 border border-slate-200 rounded-md hover:border-lime-500">
            all-projects <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Projects;
