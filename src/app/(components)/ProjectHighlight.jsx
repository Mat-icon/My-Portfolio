import Link from "next/link";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Heartfelt Academy",
    year: "2023",
    technologies: ["sass", "next.js", "html"],
    image: "/images/top.jpg",
    link: "/",
  },
  {
    id: 2,
    title: "Music App",
    year: "2023",
    technologies: ["sass", "next.js", "html"],
    image: "/images/top.jpg",
    link: "/",
  },
];

const AllProjects = () => {
  return (
    <>
      <div
        className="w-full flex flex-col items-center mt-10
      "
      >
        <div className="w-full flex flex-col items-center space-y-4  mt-30 poppins">
          {projects.map((project) => (
            <div
              className="project-glass rounded-md  shadow-lg max-w-5xl mx-auto text-white p-2"
              key={project.id}
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={project.image}
                  alt="Project Image"
                  className="w-full md:w-1/2 h-auto project-img rounded-md"
                />
                <div className="p-4 md:w-1/2">
                  <h2 className="text-3xl mb-2 font-medium">{project.title}</h2>
                  <p className="text-sm text-gray-600 mb-4 fonts">2023</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className=" border border-gray-700 bg-black px-4 py-2 rounded-3xl text-sm">
                      webflow
                    </span>
                    <span className=" border border-gray-700 bg-black px-4 py-2 rounded-3xl text-sm">
                      css
                    </span>
                    <span className=" border border-gray-700 bg-black px-4 py-2 rounded-3xl text-sm">
                      javascript
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))} <Link
            href='/ProjectsPage'
            style={{ background: "#101010d3" }}
            className="material-bubble3 w-3/5 md:w-4/12 lg:w-3/12 p-4 lg:px-4 rounded-md   border border-gray-600 text-center lg:text-center text-sm flex items-center  justify-center"
          >
           all-projects
          </Link>
        </div>
       
      </div>
    </>
  );
};

const ProjectHighlight = () => {
  return (
    <>
    
    <div className="flex flex-col items-center"> <div className="light4"></div>
      <h1 className="text-4xl md:text-6xl text-center poppins">
        Project <span className="all-text">higlights</span>
      </h1>
      <AllProjects />
     
    </div></>
  );
};

export default ProjectHighlight;
