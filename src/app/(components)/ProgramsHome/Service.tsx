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
    title: "BwinTech",
    time: "2025",
    lang: ["nextjs", "tailwind", "node.js"],
    color: "#706D63",
    description:
      "Bwintech is a boutique data consultancy helping businesses make smarter decisions with their data.",
    link: "https://bwintech.com.au/",
  },
  {
    title: "Home Loan Hub App",
    time: "2025",
    lang: ["nextjs", "AI", "node.js"],
    color: "#706D63",
    description:
      "AI-powered chatbot that helps users check loan eligibility in a conversational, friendly way.",
    link: "https://home-loan-hub.netlify.app/",
  },
  {
    title: "Adelehamza Resources",
    time: "2025",
    lang: ["nextjs", "tailwind", "node.js"],
    link: "https://adelehamzaresources.com/",
    color: "#706D63",
    description:
      "A digital consultancy platform that simplifies Nigeria’s building construction documentation process.",
  },
  {
    title: "Delve Learn",
    lang: ["tailwindcss", "next.js", "php"],
    color: "#706D63",
    time: "2024",
    link: " https://delve.fun/",
    description:
      "Learning platform with interactive courses and resources for skill development.",
  },
  {
    title: "Devlinks",
    lang: ["css", "next.js", "tailwindcss", "firebase"],
    color: "#000000",
    time: "2024",
    link: "https://mathewlinktree.netlify.app/",
    description:
      "A personalized link-sharing tool to connect all your social media and portfolio links.",
  },
  {
    title: "Homework AI",
    lang: ["tailwindcss", "next.js"],
    color: "whitesmoke",
    time: "2024",
    link: "https://aiforhomework.com/",
    description:
      "AI-powered solution that helps students with step-by-step homework guidance.",
  },
  {
    title: "HSR Ministry",
    lang: ["tailwindcss", "next.js", "sass", "firebase"],
    color: "#333",
    time: "2024",
    link: "https://hsr.netlify.app/",
    description:
      "Ministry website with events, services, database, and bulk SMS for updates.",
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
      className={`lg:px-[200px] md:px-[100px] poppins px-4 ${styles.projects}`}
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
