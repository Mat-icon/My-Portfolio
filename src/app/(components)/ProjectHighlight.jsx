"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Services from "../(components)/ProgramsHome/Service";
import Tech from "./Tech";
import ContactHighlight from "./ContactHighlight";
import TestimonialHighlight from "./TestimonialHighlight";

const ProjectHighlight = () => {
  const [isVisible, setIsVisible] = useState({
    light4: false,
    heading: false,
    services: false,
    link: false,
    contact: false,
    testimonial: false,
    tech: false,
  });

  const sections = {
    light4: useRef(null),
    heading: useRef(null),
    services: useRef(null),
    link: useRef(null),
    contact: useRef(null),
    testimonial: useRef(null),
    tech: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetName = entry.target.getAttribute("data-name");
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [targetName]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.entries(sections).forEach(([name, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("data-name", name);
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sections).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const [hovered, setHovered] = useState(false);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const renderText = (node, keyPrefix = "") => {
    if (typeof node === "string") {
      return node.split("").map((char, i) => (
        <motion.span
          key={`${keyPrefix}-${i}`}
          variants={letter}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ));
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => renderText(child, `${keyPrefix}-${i}`));
    }

    if (typeof node === "object" && node !== null && "props" in node) {
      const element = node;
      return (
        <element.type key={keyPrefix} {...element.props}>
          {renderText(element.props.children, keyPrefix + "-child")}
        </element.type>
      );
    }

    return node;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-4xl md:text-[64px] tracking-tight text-center poppins">
          Projects <span className="all-text">highlight</span>
        </h1>

        <div className="w-full">
          <Services />
        </div>

        <motion.div
          ref={sections.link}
          custom={0.4}
          initial="hidden"
          animate={isVisible.link ? "visible" : "hidden"}
          variants={fadeUpVariant}
          className="w-full flex items-center justify-center"
        >
          <Link
            href="/ProjectsPage"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ background: "#101010e1" }}
            className="material-bubble3  hover:border-[#8eff86]  w-3/5 md:w-4/12 lg:w-[15%] poppin mb-[50px] p-4 lg:px-4 rounded-[4px] border-[0.5px] border-[#6462628c] text-center text-sm flex items-center justify-center transition-all duration-300"
          >
            {hovered ? (
              <motion.p
                className="flex items-center  justify-center tracking-tighter"
                variants={container}
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
              >
                {renderText("all-projects")}
                <FaArrowRight
                  className={`transition-transform duration-300 ${
                    hovered ? "translate-x-1" : ""
                  }`}
                />
              </motion.p>
            ) : (
              <p className="flex items-center text-white  justify-center tracking-tighter">
                <>
                  all-projects <FaArrowRight className="translate-x-1" />
                </>
              </p>
            )}
          </Link>
        </motion.div>

        <motion.div
          ref={sections.contact}
          custom={0.5}
          initial="hidden"
          animate={isVisible.contact ? "visible" : "hidden"}
          variants={fadeUpVariant}
        >
          <ContactHighlight />
        </motion.div>

        <motion.div
          ref={sections.tech}
          custom={0.6}
          initial="hidden"
          animate={isVisible.tech ? "visible" : "hidden"}
          variants={fadeUpVariant}
        >
          <Tech />
        </motion.div>
      </div>
      <TestimonialHighlight />
    </div>
  );
};

export default ProjectHighlight;
