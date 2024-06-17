import Link from "next/link";
import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Poise Academy",
    year: "2023",
    technologies: ["react", "css", "email.js"],
    image: "/images/poise body.png",
    link: "https://pgcsf.org/",
  },
  {
    id: 2,
    title: "TelgaChain",
    year: "2023",
    technologies: ["node.js", "react", "css"],
    image: "/images/telg.png",
    link: "https://tegalchain.org/",
  },

  {
    id: 3,
    title: "Heartfelt Academy",
    year: "2023",
    technologies: ["sass", "react.js"],
    image: "/images/heartflet.png",
    link: "https://heartfeltacademy.netlify.app/",
  },
  {
    id: 4,
    title: "Music App",
    year: "2023",
    technologies: ["css", "react.js", "rapidAPI"],
    image: "/images/lyrics.png",
    link: "https://web-rex-lyrics.netlify.app/",
  },
  {
    id: 5,
    title: "Cartlo",
    year: "2023",
    technologies: ["node.js", "next.js", "css", "ant design"],
    image: "/images/cartlo.png",
    link: "https://cartclo.com/",
  },
  {
    id: 6,
    title: "Biacademy",
    year: "2023",
    technologies: ["node.js", "next.js", "css"],
    image: "/images/biacademy.png",
    link: "https://biacademy.info/",
  },
];

const Projects = () => {
  return (
    <>
      <div
        className="w-full flex flex-col items-center 
    "
      >
        <div className="light"></div>
        <div className="w-full flex flex-col items-center space-y-4  mt-30 poppins">
          {projects.map((project) => (
            <Link
              className="project-glass rounded-md  shadow-lg max-w-5xl mx-auto text-white p-2 hover:bg-transparent"
              key={project.id}
              href={project.link}
              target="_blank"
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <Image
                    src={project.image}
                    alt="Project Image"
                    width={800} // Set appropriate width
                    height={600} // Set appropriate height to maintain the aspect ratio
                    layout="responsive"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,..."
                    loading="eager"
                    className="project-img rounded-sm"
                  />
                </div>
                <div className="p-4 md:w-1/2 mt-5">
                  <h2 className="text-3xl mb-2 font-medium">{project.title}</h2>
                  <p className="text-sm text-gray-600 mb-4 fonts">2023</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="border border-gray-700 px-4 py-2 rounded-3xl text-sm"
                        style={{ background: "#00000037" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
