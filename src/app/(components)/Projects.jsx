import React from "react";


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
        <div className="w-full flex flex-col items-center space-y-4  mt-30 poppins">
          {projects.map((project) => (
            
            <div className="project-glass rounded-md  shadow-lg max-w-5xl mx-auto text-white p-2" key={project.id}>
            <div className="flex flex-col md:flex-row">
                <img src={project.image} alt="Project Image" className="w-full md:w-1/2 h-auto project-img rounded-md" />
                <div className="p-4 md:w-1/2">
                    <h2 className="text-3xl mb-2 font-medium">{project.title}</h2>
                    <p className="text-sm text-gray-600 mb-4 fonts">2023</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className=" border border-gray-700 bg-black px-4 py-2 rounded-3xl text-sm">webflow</span>
                        <span className=" border border-gray-700 bg-black px-4 py-2 rounded-3xl text-sm">css</span>
                        <span className=" border border-gray-700 bg-black px-4 py-2 rounded-3xl text-sm">javascript</span>
                    
                    </div>
                    
                </div>
            </div>
        </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
