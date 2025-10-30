"use client";
import React, { useState, useEffect, useRef, MouseEvent } from "react";
import styles from "./style.module.scss";
import Project from "./components/project";
import { motion } from "framer-motion";
import gsap from "gsap";

interface ProjectType {
  title: string;
  color: string;
  time: string;
  link: string;
  lang: string[];
  description: string;
}

const projects: ProjectType[] = [
    {
    title: "Brabik smarthomes",
    time: "2025",
    lang: ["Next.js", "Zustand", "Three.js","Tailwind.css", "Typescript"],  
    color: "#706D63",
    description:
      "A minimalist e-commerce platform for smart home devices and automation solutions.",
    link: "https://brabik.netlify.app/"
  },
    {
    title: "Noirvik fashion",
    time: "2025",
    lang: ["Next.js", "Tailwind.css", "Node.js"],  
    color: "#706D63",
    description:
      "A minimalist e-commerce fashion store showcasing a curated selection of stylish apparel and accessories.",
    link: "https://noirvik.netlify.app/"
  },
  {
    title: "Bwintech",
    time: "2025",
    lang: ["Next.js", "Tailwind.css", "Node.js"],
    color: "#706D63",
    description:
      "Bwintech is a boutique data consultancy helping businesses make smarter decisions with their data.",
    link: "https://bwintech.com.au/",
  },

  {
    title: "Adelehamza resources",
    time: "2025",
    lang: ["Next.js", "Tailwind.css", "Node.js"],
    link: "https://adelehamzaresources.com/",
    color: "#706D63",
    description:
      "A digital consultancy platform that simplifies Nigeria’s building construction documentation process.",
  },

  {
    title: "Home loan hub app",
    time: "2025",
    lang: ["Next.js", "AI Integration", "Node.js"],
    color: "#706D63",
    description:
      "AI-powered chatbot that helps users check loan eligibility in a conversational, friendly way.",
    link: "https://home-loan-hub.netlify.app/",
  },
   {
    title: "Tap2 member",
    time: "2025",
    lang: ["Svelte 5", "Convex","tailwind", "clerk", "Sveltekit", "typeScript"],  
    color: "#706D63",
    description:
      "A digital membership card platform that allows users to create, manage, and share their membership cards easily.",
    link: "https://tap2member.netlify.app/"
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

interface ModalState {
  active: boolean;
  index: number;
}

export default function Home() {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });
  const { active } = modal;
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);

  const xMoveCursor = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const yMoveCursor = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const xMoveCursorLabel = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const yMoveCursorLabel = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  useEffect(() => {
    if (cursor.current && cursorLabel.current) {
      xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
        duration: 0.5,
        ease: "power3",
      });
      yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
        duration: 0.5,
        ease: "power3",
      });

      xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
        duration: 0.45,
        ease: "power3",
      });
      yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
        duration: 0.45,
        ease: "power3",
      });
    }
  }, []);

  const moveItems = (x: number, y: number) => {
    if (
      xMoveCursor.current &&
      yMoveCursor.current &&
      xMoveCursorLabel.current &&
      yMoveCursorLabel.current
    ) {
      xMoveCursor.current(x);
      yMoveCursor.current(y);
      xMoveCursorLabel.current(x);
      yMoveCursorLabel.current(y);
    }
  };

  const manageModal = (active: boolean, index: number, x: number, y: number) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={(e: MouseEvent) => moveItems(e.clientX, e.clientY)}
      className={`lg:px-[140px] md:px-[100px] poppins px-2 ${styles.projects}`}
    >
      <div className={styles.body}>
        {projects.map((project, idx) => (
          <Project
            date={project.time}
            key={idx}
            lang={project.lang}
            link={project.link}
            index={idx}
            title={project.title}
            description={project.description}
            manageModal={manageModal}
          />
        ))}
      </div>

      {/* Cursor elements only */}
      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      />
      <motion.div
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </main>
  );
}
