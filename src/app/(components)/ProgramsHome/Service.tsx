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
  image: string;
   bookBorder:string;
  bookBg:string;

  description: string;
}

const projects: ProjectType[] = [
  {
    title: "Noirvik Fashion",
    time: "2026",
    image: "noirvik.png",
    lang: ["Nextjs", "Tailwindcss", "Nodejs"],  
    color: "#706D63",
    bookBg: "bg-[#0a0a0a9a]",
    bookBorder: "border-[white]",
    description: "A minimalist luxury e-commerce fashion store showcasing a curated selection of stylish apparel and accessories.",
    link: "https://noirvik.com/"
  },
  {
    title: "Paypaxe",
    time: "2026",
    image: "paypaxe.png",
    lang: ["Nextjs", "Tailwindcss", "Typescript", "Nodejs"],  
    color: "#1D242A",
    bookBg: "bg-[#0f172a]",
    bookBorder: "border-[#38bdf8]",
    description: "A modern fintech platform focused on automated payroll compliance, digital group savings, and credit building tools.",
    link: "https://paypaxe.com/"
  },
  {
    title: "AMG Beauty World",
    time: "2026",
    image: "amgbeauty.png",
    lang: ["Nextjs", "Tailwindcss", "Stripe","Superbase", "Nodejs"],  
    color: "#652424",
    bookBg: "bg-[#fdf4f5]",
    bookBorder: "border-[#e11d48]",
    description: "A premium e-commerce platform specializing in luxury human hair extensions, frontal wigs, and beauty accessories.",
    link: "https://www.amgbeautyworld.com/"
  },
  {
    title: "OpenLaw Live",
    time: "2026",
    image: "openlaw.png",
    lang: ["Nextjs", "Tailwindcss", "AI Integration", "Typescript"],  
    color: "#1e3a8a",
    bookBg: "bg-[#f8fafc]",
    bookBorder: "border-[#2563eb]",
    description: "An AI-powered legal technology platform assisting citizens in understanding constitutional rights and automated legal documentation.",
    link: "https://openlaw.live/"
  },
  {
    title: "Brabik Smarthomes",
    time: "2025",
    lang: ["Nextjs", "Zustand", "Threejs","Tailwindcss", "Typescript"],  
    color: "#706D63",
    image: "brabik.png",
    bookBg:"bg-[#fff]",
    bookBorder: "border-[#0a0a0a9a]",
    description:
      "A minimalist e-commerce platform for smart home devices and automation solutions.",
    link: "https://brabik.netlify.app/"
  },
  {
    title: "Track Member",
    time: "2025",
    bookBg:"bg-[#fff]",
    bookBorder: "border-[#03c9fa]",
    lang: ["Svelte 5", "Convex", "clerk", "Sveltekit", "typeScript", "tailwindcss"],  
    color: "#706D63",
    image: "tap2.png",
    description:
      "A digital membership card platform that allows users to create, manage, and share their membership cards easily.",
    link: "https://tap2member.netlify.app/"
  },
  {
    title: "Bwintech",
    image: "bwin.png",
    time: "2025",
    lang: ["Nextjs", "Tailwindcss", "Nodejs"],
    color: "#706D63",
    bookBg:"bg-[#fff]",
    bookBorder: "border-[#706D63]",
    description:
      "Bwintech is a boutique data consultancy helping businesses make smarter decisions with their data.",
    link: "https://bwintech.com.au/",
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
      className={`lg:px-[140px] md:px-[100px] poppins px-4 ${styles.projects}`}
    >
      <div className={styles.body}>
        {projects.map((project, idx) => (
          <Project
            date={project.time}
            key={idx}
            lang={project.lang}
            link={project.link}
            index={idx}
            bookBorder={project.bookBorder}
            bookBg={project.bookBg}
            image={project.image}
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
