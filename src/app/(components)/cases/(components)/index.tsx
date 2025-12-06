
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Index = ({
  index = 0,
  title = "Nuxt Social Share",
  subtitle = "Simple social sharing for your Nuxt Sites",
  image = "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80",
  description = "A Nuxt module providing a customizable social share button component with support for multiple platforms. Features include customizable styles, share counts, and easy integration with your existing Nuxt application.",
  tags = ["nuxt", "vue.js", "typescript", "open-source"],
  github = "#",
  documentation = "#",
}) => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

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
      { threshold: 0.2 }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  const formattedNumber = String(index + 1).padStart(2, "0");

  const containerVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const numberVariant = {
    hidden: {},
    visible: {
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

  return (
    <motion.div
      ref={projectRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariant}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      className="w-full max-w-4xl mx-auto fonts backdrop-blur-md border border-[#494949] rounded-[8px] px-3 md:px-8 py-8 cursor-pointer"
      style={{
        backgroundColor: "color-mix(in oklab, #0f0f0f 25%, transparent)",
      }}
      onClick={() => setOpen(!open)}
    >
      {/* HEADER */}
      <div className="flex items-start justify-between py-6">
        <div className="flex items-start gap-4">
          {/* NUMBER */}
          <motion.h3
            initial={false}
            animate={isHovered ? "hovered" : isVisible ? "visible" : "hidden"}
            variants={numberVariant}
            className="text-[#c2c0c0da] fonts text-[15px] mt-2"
            style={{ 
              transition: "all 0.4s",
            }}
          >
            {formattedNumber}
          </motion.h3>

          {/* TITLE & SUBTITLE */}
          <div
            className="space-y-3"
            style={{
              transition: "all 0.4s",
              transform: isHovered ? "translateX(-35px)" : "none",
            }}
          >
            <h1 className="text-3xl md:text-5xl font-bold poppins text-white tracking-tighter">
              {title}
            </h1>
            <p className="text-[#9d9d9d] fonts text-sm mt-1">{subtitle}</p>
          </div>
        </div>

        {/* CHEVRON BUTTON */}
        <motion.button
          className="text-white rounded-2xl px-3 text-2xl py-1 border bg-[#07080742] border-[#494949] hover:text-white transition"
          style={{
            transition: "all 0.4s",
            transform: isHovered ? "translateX(-10px)" : "none",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          {open ? <BiChevronDown /> : <BiChevronUp />}
        </motion.button>
      </div>

      {/* COLLAPSIBLE SECTION */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="w-full h-[0.5px] my-4 bg-[#494949]" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* IMAGE */}
              <div className="w-full h-56 bg-black/40 rounded-[3px] border border-white/10 overflow-hidden flex items-center justify-center">
                <img
                  src={image}
                  alt={title}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>

              {/* DESCRIPTION */}
              <div className="flex flex-col justify-between">
                <p className="text-white/80 fonts text-sm leading-relaxed">
                  {description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs lowercase px-3 py-[6px] rounded-full bg-[#07080742] border border-[#494949] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 w-full justify-center flex md:flex-row flex-col gap-4 mx-auto">
              <a
                href={github}
                className="px-4 py-3 text-sm rounded-md bg-[#07080742] border border-[#494949] text-white hover:bg-white/20 transition"
                onClick={(e) => e.stopPropagation()}
              >
                github-repository ↗
              </a>
              <a
                href={documentation}
                className="px-4 py-3 text-sm rounded-md bg-[#07080742] border border-[#494949] text-white hover:text-white transition"
                onClick={(e) => e.stopPropagation()}
              >
                documentation ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Index;