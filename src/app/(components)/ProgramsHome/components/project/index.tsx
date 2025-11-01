"use client";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

interface IndexProps {
  index: number;
  title: string;
  date: string;
  link: string;
  description: string;
  lang: string[];
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

export default function Index({
  index,
  date,
  title,
  link,
  lang,
  description,
  manageModal,
}: IndexProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (e: MouseEvent) => {
    setIsHovered(true);
    manageModal(true, index, e.clientX, e.clientY);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    setIsHovered(false);
    manageModal(false, index, e.clientX, e.clientY);
  };

  const formattedNumber = String(index + 1).padStart(2, "0");

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0,
        ease: "easeOut",
      },
    },
  };

  const opacityVariant = (delay: number) => ({
    hidden: { opacity: 0.1 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay,
        ease: "easeOut",
      },
    },
  });

  const numberVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0,
        ease: "easeOut",
      },
    },
    hovered: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <Link href={link} className="w-full" target="_blank">
      <motion.div
        ref={projectRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariant}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`backdrop-blur-md ${styles.project}`}
      >
        <div className="w-full flex items-start justify-between">
          <div className="flex items-start">
            <motion.h3
              initial="hidden"
              animate={isHovered ? "hovered" : isVisible ? "visible" : "hidden"}
              variants={numberVariant}
              className="fonts text-[#c2c0c0da] text-[15px]"
            >
              {formattedNumber}
            </motion.h3>
            <div>
              <div className="ml-2 md:ml-4">
                <motion.h2
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={opacityVariant(0.8)}
                  className="tracking-tighter lowercase poppins"
                >
                  {title}
                </motion.h2>
                <motion.h4
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={opacityVariant(1.1)}
                  className="text-[12px] des tracking-tighter fonts font-light text-slate-300 mb-2"
                >
                  {description}
                </motion.h4>
                <motion.div
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={opacityVariant(1.4)}
                  className="flex flex-wrap gap-2"
                >
                  {lang.map((lan, idx) => (
                    <p
                      className="px-4 fonts tracking-tight py-[5px] border-[0.5px] lowercase border-[#646262da] md:text-[11px] rounded-full bg-[#161616] text-[#dfdcdcda] backdrop-blur-md"
                      key={idx}
                    >
                      {lan}
                    </p>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[1px]">
            <motion.span
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={opacityVariant(0)}
              className="fonts text-sm md:text-[15px] text-[#c2c0c0da]"
            >
              {date}
            </motion.span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="rotate-[1deg]"
            >
              <path
                d="M4 12L12 4M12 4H4M12 4V12"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}