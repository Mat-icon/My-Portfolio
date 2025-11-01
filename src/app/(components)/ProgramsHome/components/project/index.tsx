"use client";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface IndexProps {
  index: number;
  title: string;
  date: string;
  link: string;
  description: string;
  lang: string[];
  image?: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

export default function Index({
  index,
  date,
  title,
  link,
  lang,
  description,
  image,
  manageModal,
}: IndexProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
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
      { threshold: 0.5 }
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0,
        ease: [0.25, 0.1, 0.25, 1],
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
        ease: [0.25, 0.1, 0.25, 1],
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
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hovered: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const langItemVariant = (idx: number) => ({
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: [0, 1, 1],
      scale: [0.95, 0.95, 1],
      transition: {
        duration: 0.6,
        delay: 1.4 + idx * 0.12,
        times: [0, 0.4, 1],
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  });

  // Image variant for container hover (just scale)
  const imageContainerHoverVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    containerHovered: {
      opacity: 1,
      scale: 1.05,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // 3D book wrapper variant
  const bookWrapperVariant = {
    hidden: {
      rotateY: 0,
      rotateX: 0,
    },
    visible: {
      rotateY: -15,
      rotateX: 5,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Paper layers with progressive depth
  const paperLayerVariant = (index: number) => ({
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: -8 - index * 4,
      y: 3 + index * 2,
      transition: {
        duration: 0.4,
        delay: 0.1 + index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  });

  // Main image with 3D transform
  const imageVariant = {
    hidden: {
      rotateY: 0,
      rotateX: 0,
    },
    visible: {
      rotateY: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
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
        className="backdrop-blur-sm relative"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "70px 30px",
          border: "0.5px solid #494949",
          marginTop: "15px",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "all 0.2s",
          backgroundColor: "color-mix(in oklab, #0f0f0f 25%, transparent)",
        }}
      >
        <div className="w-full flex items-start justify-between">
          <div className="flex items-start">
            <motion.h3
              initial="hidden"
              animate={isHovered ? "hovered" : isVisible ? "visible" : "hidden"}
              variants={numberVariant}
              className="fonts text-[#c2c0c0da] text-[15px]"
              style={{ transition: "all 0.4s" }}
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
                  style={{
                    fontSize: "45px",
                    margin: "0px",
                    fontWeight: 400,
                    transition: "all 0.4s",
                    transform: isHovered ? "translateX(-35px)" : "none",
                  }}
                >
                  {title}
                </motion.h2>
                <motion.h4
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={opacityVariant(1.1)}
                  className="text-[12px] des tracking-tighter fonts font-light text-slate-400 mb-2"
                  style={{
                    transition: "all 0.4s",
                    transform: isHovered ? "translateX(-35px)" : "none",
                  }}
                >
                  {description}
                </motion.h4>

                <div
                  className="flex flex-wrap gap-2 "
                  style={{
                    transition: "all 0.4s",
                    fontWeight: 300,
                    transform: isHovered ? "translateX(-35px)" : "none",
                  }}
                >
                  {lang.map((lan, idx) => (
                    <motion.span
                      key={idx}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      variants={langItemVariant(idx)}
                      className="px-4 fonts tracking-tighter py-[5px] border-[0.5px] lowercase border-[#494949] md:text-[12px] rounded-full bg-[#131613] text-[#dfdcdcda] backdrop-blur-md"
                    >
                      {lan}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[1px]">
            <motion.span
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={opacityVariant(0)}
              className="fonts text-sm md:text-[15px] text-[#c2c0c0da]"
              style={{
                transition: "all 0.4s",
                transform: isHovered ? "translateX(-10px)" : "none",
              }}
            >
              {date}
            </motion.span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="rotate-[1deg]"
              style={{
                transition: "all 0.4s",
                opacity: isHovered ? 1 : 0,
              }}
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

        {/* Image with 3D book effect */}
        <motion.div
          initial="hidden"
          animate={isHovered ? "containerHovered" : "hidden"}
          variants={imageContainerHoverVariant}
          className="absolute top-[-2%] left-1/2"
          style={{
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            perspective: "1200px",
          }}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          {/* 3D Book wrapper */}
          <motion.div
            initial="hidden"
            animate={isImageHovered ? "visible" : "hidden"}
            variants={bookWrapperVariant}
            style={{
              transformStyle: "preserve-3d",
              position: "relative",
            }}
          >
            {/* Paper stack layers - visible when hovering on image */}
            {isImageHovered && (
              <>
                {/* Layer 4 - deepest */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={paperLayerVariant(3)}
                  className="absolute top-0 left-0 w-[400px] h-[250px] rounded-[3px] bg-[#0a0a0a9a] border-l border-t border-b border-white/70"
                  style={{
                    zIndex: 1,
                    transformStyle: "preserve-3d",
                  }}
                />

                {/* Layer 3 */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={paperLayerVariant(2)}
                  className="absolute top-0 left-0 w-[400px] h-[250px] rounded-[3px] bg-[#0d0d0d] border-l border-t border-b border-white/70"
                  style={{
                    zIndex: 2,
                    transformStyle: "preserve-3d",
                  }}
                />

                {/* Layer 2 */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={paperLayerVariant(1)}
                  className="absolute top-0 left-0 w-[400px] h-[250px] rounded-[3px] bg-[#111111] border-l border-t border-b border-white/70"
                  style={{
                    zIndex: 3,
                    transformStyle: "preserve-3d",
                  }}
                />

                {/* Layer 1 - closest to main image */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={paperLayerVariant(0)}
                  className="absolute top-0 left-0 w-[400px] h-[250px] rounded-[3px] bg-[#141414] border-l border-t border-b border-white/70"
                  style={{
                    zIndex: 4,
                    transformStyle: "preserve-3d",
                  }}
                />
              </>
            )}

            {/* Main image */}
            <motion.div
              variants={imageVariant}
              className="relative w-[400px] h-[250px] overflow-hidden rounded-[3px] border border-[#646262da] shadow-2xl"
              style={{
                zIndex: 5,
                transformStyle: "preserve-3d",
                backgroundColor: "#000",
              }}
            >
              <Image
                src="/images/hsr.png"
                alt={title}
                fill
                className="object-cover rounded-[3px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
