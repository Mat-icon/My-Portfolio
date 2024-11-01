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
}

const projects: ProjectType[] = [
  {
    title: "Delve Learn",
    src: "1.png",
    color: "#706D63",
    time: "2024",
    link: " https://delve.fun/",
  },
  {
    title: "Devlinks",
    src: "2.png",
    color: "#000000",
    time: "2024",
    link: "https://mathewlinktree.netlify.app/ ",
  },

  {
    title: "Homework AI",
    src: "ai.png",
    color: "whitesmoke",
    time: "2024",
    link: "https://aiforhomework.com/",
  },
  
  {
    title: "HSR Ministry",
    src: "hsr.png",
    color: "#333",
    time: "2024",
    link: "https://hsrministry.netlify.app/",
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
            link={project.link}
            index={idx}
            title={project.title}
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
