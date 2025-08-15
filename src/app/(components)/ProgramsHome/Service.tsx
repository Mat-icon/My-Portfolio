"use client";
import React, { useState, useEffect, useRef, MouseEvent } from "react";
import styles from "./style.module.scss";
import Project from "./components/project";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

interface ProjectType {
  title: string;
  src: string;
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
    src: "5.png",
    description:
      "Bwintech is a boutique data consultancy based in Australia, focused on helping growing businesses make smarter decisions with their data. With a nimble, global team of professionals and freelancers, Bwintech delivers fast, customized, and effective data-driven solutions without the red tape that slows down larger firms. As part of their push to scale operations and streamline collaboration, I was brought in to design and develop a web platform that automates task management between clients, managers, and data analysts in a secure, efficient way.The primary goal of this project was to build a seamless platform where clients could securely submit data tasks and track progress—while giving managers and staff the tools to efficiently handle requests, store files, and deliver results. The system needed to support user role management, automate notifications, and ensure safe handling of sensitive data files",
    link: "https://bwintech.com.au/",
  },
  {
    title: "Home Loan Hub App",
    time: "2025",
    lang: ["nextjs", "AI", "node.js"],
    color: "#706D63",
    src: "5.png",
    description:
      "HOME-LOAN-HUB is an AI-powered loan eligibility chatbot built for Bwintech as part of its mission to create smarter, more human-like digital experiences. The platform helps users determine their loan eligibility through a dynamic and conversational interface that mimics a real human assistant. This was more than just a form-based calculator—it was designed to feel personal, intuitive, and responsive. The core goal was to remove friction from the loan application journey by using AI to engage users and guide them toward meaningful results.The aim of this project was to develop a loan eligibility tool that doesn't feel like a boring form. The client wanted a solution that was fast, friendly, and intelligent—something that could ask the right questions, adapt in real time, and deliver a clear eligibility decision with minimal user effort. Just as important was making sure the experience felt conversational, while still handling logic, flow control, and API integration behind the scenes.",
    link: "https://home-loan-hub.netlify.app/",
  },

  {
    title: "Adelehamza Resources",
    time: "2025",
    lang: ["nextjs", "tailwind", "node.js"],
    link: "https://adelehamzaresources.com/",
    color: "#706D63",
    src: "5.png",
    description:
      "AdeleHamza Resource is a specialized consultancy that helps individuals and organizations navigate Nigeria’s building construction regulations. With a focus on legal compliance, the company offers digital and physical documentation services that streamline the permitting process and remove delays and legal risks from construction projects. I was brought in to design and develop a digital platform that reflects the brand’s trust-based mission while enabling a smooth, user-friendly experience for clients needing professional guidance and documentation.The main goal of this project was to build a platform that communicates clarity, professionalism, and trust—core values that AdeleHamza stands for. The site needed to simplify the process of requesting legal building documents, provide important service information, and position the brand as a reliable partner for construction-related consultancy. Additionally, the platform had to be easy to manage internally and capable of scaling with the brand’s growth.",
  },
  {
    title: "Delve Learn",
    src: "1.png",
    lang: ["tailwindcss", "next.js", "php"],
    color: "#706D63",
    time: "2024",
    link: " https://delve.fun/",
    description:
      "A comprehensive learning platform offering interactive courses and resources for skill development.",
  },
  {
    title: "Devlinks",
    src: "2.png",
    lang: ["css", "next.js", "tailwindcss", "firebase"],
    color: "#000000",
    time: "2024",
    link: "https://mathewlinktree.netlify.app/ ",
    description:
      "A personalized link-sharing tool to connect all your social media and portfolio links in one place.",
  },
  {
    title: "Homework AI",
    src: "ai.png",
    lang: ["tailwindcss", "next.js"],
    color: "whitesmoke",
    time: "2024",
    link: "https://aiforhomework.com/",
    description:
      "An AI-powered solution to assist students with homework by providing step-by-step guidance.",
  },
  {
    title: "HSR Ministry",
    src: "hsr.png",
    lang: ["tailwindcss", "next.js", "sass", "firebase"],
    color: "#333",
    time: "2024",
    link: "https://hsrministry.netlify.app/",
    description:
      "A ministry website showcasing services, events, with database and bulk sms for birthday messages and church updates.",
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
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);

  const xMoveContainer = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const yMoveContainer = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const xMoveCursor = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const yMoveCursor = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const xMoveCursorLabel = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const yMoveCursorLabel = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  useEffect(() => {
    if (modalContainer.current && cursor.current && cursorLabel.current) {
      xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
        duration: 0.8,
        ease: "power3",
      });
      yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
        duration: 0.8,
        ease: "power3",
      });

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
      xMoveContainer.current &&
      yMoveContainer.current &&
      xMoveCursor.current &&
      yMoveCursor.current &&
      xMoveCursorLabel.current &&
      yMoveCursorLabel.current
    ) {
      xMoveContainer.current(x);
      yMoveContainer.current(y);
      xMoveCursor.current(x);
      yMoveCursor.current(y);
      xMoveCursorLabel.current(x);
      yMoveCursorLabel.current(y);
    }
  };

  const manageModal = (
    active: boolean,
    index: number,
    x: number,
    y: number
  ) => {
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

      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={`w-[200px] h-[250px] md:h-[300px] rounded-md md:w-[350px] ${styles.modalContainer}`}
        >
          <div
            style={{ top: `${index * -100}%` }}
            className={styles.modalSlider}
          >
            {projects.map((project, idx) => {
              const { src, color, link } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${idx}`}
                >
                  <Link href={link} passHref>
                    <Image
                      src={`/images/${src}`}
                      width={300}
                      height={0}
                      alt={project.title}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </motion.div>
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
      </>
    </main>
  );
}
