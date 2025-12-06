"use client";
import Index from "./(components)/index";

interface ProjectType {
  title: string;
  subtitle: string;
  link: string;
  tags: string[];
  image: string;
  description: string;
  github: string;
  documentation: string;
}

const projects: ProjectType[] = [
  {
    title: "Telgachain",
    subtitle: "Blockchain technology for everyone",
    image: "/images/brabik.png",
    tags: ["React.JS", "Node.JS", "CSS"],
    description:
      "A digital membership card platform that allows users to create, manage, and share their membership cards easily.",
    link: "https://tegalchain.org/",
    github: "https://github.com/yourusername/telgachain",
    documentation: "https://docs.tegalchain.org/",
  },
  {
    title: "Nuxt Social Share",
    subtitle: "Simple social sharing for your Nuxt Sites",
    image: "/images/ee.png",
    tags: ["Nuxt", "Vue.js", "TypeScript", "Open-source"],
    description:
      "A Nuxt module providing a customizable social share button component with support for multiple platforms. Features include customizable styles, share counts, and easy integration.",
    link: "https://tegalchain.org/",
    github: "https://github.com/yourusername/nuxt-social-share",
    documentation: "https://docs.nuxt-social-share.com/",
  },
  {
    title: "React Dashboard",
    subtitle: "Modern analytics dashboard",
    image: "brabik.png",
    tags: ["React.JS", "TypeScript", "Tailwind"],
    description:
      "A fully responsive analytics dashboard with real-time data visualization, customizable widgets, and dark mode support.",
    link: "https://example.com/",
    github: "https://github.com/yourusername/react-dashboard",
    documentation: "https://docs.react-dashboard.com/",
  },
];



export default function Home() {
  return (
    <main className={`lg:px-[120px] my-16 md:px-[100px] px-4 poppins`}>
      <div className="space-y-4">
        {projects.map((project, idx) => (
          <Index
            key={idx}
            index={idx}
            title={project.title}
            subtitle={project.subtitle}
            image={project.image}
            description={project.description}
            tags={project.tags}
            github={project.github}
            documentation={project.documentation}
          />
        ))}
      </div>
    </main>
  );
}