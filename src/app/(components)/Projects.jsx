import Link from "next/link";
import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Noirvik Fashion",
    year: "2026",
    technologies: ["nextjs", "tailwind", "node.js"],
    image: "/images/noirvik.png",
    link: "https://noirvik.com/",
  },
  {
    id: 2,
    title: "Paypaxe",
    year: "2026",
    technologies: ["nextjs", "tailwind", "node.js", "convex"],
    image: "/images/paypaxe.png",
    link: "https://paypaxe.com/",
  },
  {
    id: 3,
    title: "AMG Beauty World",
    year: "2026",
    technologies: ["nextjs", "tailwind", "node.js", "shopify"],
    image: "/images/amgbeauty.png",
    link: "https://www.amgbeautyworld.com/",
  },
  {
    id: 4,
    title: "OpenLaw Live",
    year: "2026",
    technologies: ["nextjs", "tailwind", "node.js", "AI"],
    image: "/images/openlaw.png",
    link: "https://openlaw.live/",
  },
  {
    id: 5,
    title: "BwinTech",
    year: "2025",
    technologies: ["nextjs", "tailwind", "node.js"],
    image: "/images/lyrics.png",
    link: "https://bwintech.com.au/",
  },
  {
    id: 6,
    title: "Home Loan Hub App",
    year: "2025",
    technologies: ["nextjs", "AI", "node.js"],
    image: "/images/lyrics.png",
    link: "https://home-loan-hub.netlify.app/",
  },
  {
    id: 7,
    title: "Adelehamza Resources",
    year: "2025",
    technologies: ["nextjs", "tailwind", "node.js"],
    image: "/images/lyrics.png",
    link: "https://adelehamzaresources.com/",
  },
  {
    id: 8,
    title: "TelgaChain",
    year: "2023",
    technologies: ["node.js", "react", "css"],
    image: "/images/telg.png",
    link: "https://tegalchain.org/",
  },
  {
    id: 9,
    title: "Heartfelt Academy",
    year: "2022",
    technologies: ["sass", "react.js"],
    image: "/images/heartflet.png",
    link: "https://heartfeltacademy.netlify.app/",
  },
  {
    id: 10,
    title: "Music App",
    year: "2022",
    technologies: ["css", "react.js", "rapidAPI"],
    image: "/images/lyrics.png",
    link: "https://web-rex-lyrics.netlify.app/",
  },
  {
    id: 11,
    title: "Cartlo",
    year: "2023",
    technologies: ["node.js", "next.js", "css", "ant design"],
    image: "/images/cartlo.png",
    link: "https://cartclo.com/",
  },
  {
    id: 12,
    title: "Biacademy",
    year: "2023",
    technologies: ["node.js", "next.js", "css"],
    image: "/images/biacademy.png",
    link: "https://biacademy.info/",
  },
  {
    id: 13,
    title: "Poise Academy",
    year: "2023",
    technologies: ["react", "css", "email.js"],
    image: "/images/poise body.png",
    link: "https://pgcsf.org/",
  },
  {
    id: 14,
    title: "Cloud Mall",
    year: "2023",
    technologies: ["node.js", "next.js", "tailwind"],
    image: "/images/mall.png",
    link: "https://cloudmall.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="light" />
      <div className="w-full flex flex-col items-center space-y-8 mt-20 poppins">
        {projects.map((project) => (
          <Link
            className="project-glass rounded-md shadow-lg max-w-5xl mx-auto text-white p-2 hover:bg-transparent transition"
            key={project.id}
            href={project.link}
            target="_blank"
          >
            <div className="flex flex-col md:flex-row">
              {/* Project Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={800}
                  height={600}
                  className="project-img rounded-sm object-cover"
                  priority
                />
              </div>

              {/* Project Details */}
              <div className="p-4 md:w-1/2 mt-5">
                <h2 className="text-3xl mb-2 font-medium">{project.title}</h2>
                {/* ✅ use project.year instead of hardcoded 2023 */}
                <p className="text-sm text-gray-600 mb-4">{project.year}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="border border-gray-700 px-4 py-2 rounded-3xl text-sm bg-black/20"
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
  );
};

export default Projects;
