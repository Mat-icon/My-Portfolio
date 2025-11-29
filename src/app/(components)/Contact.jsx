"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import LuminousBeam from './LuminousBeam';

// Nigerian Flag Component
const NigerianFlag = ({ width = 24, height = 16, className = "" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 16" 
      className={`inline-block ${className}`}
      aria-label="Nigerian Flag"
    >
      <rect width="8" height="16" x="0" y="0" fill="#008751" />
      <rect width="8" height="16" x="8" y="0" fill="#FFFFFF" />
      <rect width="8" height="16" x="16" y="0" fill="#008751" />
    </svg>
  );
};

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Draggable);
}

const Contact = () => {
  const cardRef = useRef(null);
  const elementRef = useRef(null);
  const jobRef = useRef(null);
  const hobbiesRef = useRef(null);
  const potraitRef = useRef(null);
  const contactRef = useRef(null);
  const collabRef = useRef(null);

  const [hovered, setHovered] = useState(false);
  
  // Visibility states for each card
  const [elementVisible, setElementVisible] = useState(false);
  const [jobVisible, setJobVisible] = useState(false);
  const [hobbiesVisible, setHobbiesVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [collabVisible, setCollabVisible] = useState(false);
  const [potraitVisible, setPotraitVisible] = useState(false);

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

  const containerVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
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

  useEffect(() => {
    const draggableElements = [
      { ref: elementRef, visible: elementVisible },
      { ref: jobRef, visible: jobVisible },
      { ref: hobbiesRef, visible: hobbiesVisible },
      { ref: potraitRef, visible: potraitVisible },
      { ref: contactRef, visible: contactVisible },
      { ref: collabRef, visible: collabVisible },
    ];

    const isMobileDevice = () => /Mobi|Android/i.test(navigator.userAgent);

    const draggableInstances = draggableElements.map(({ ref, visible }) => {
      if (ref.current && visible && !isMobileDevice()) {
        // Clear any Framer Motion inline styles that might interfere
        gsap.set(ref.current, { clearProps: "all" });
        
        return Draggable.create(ref.current, {
          type: "x,y",
          edgeResistance: 0.92,
          bounds: ".contact-body",
          inertia: true,
          onDragStart: function() {
            // Ensure transform origin is preserved during drag
            gsap.set(this.target, { transformOrigin: "center center" });
          }
        })[0];
      }
      return null;
    });

    // Create intersection observers for each card
    const observerOptions = { threshold: 0.2 };

    const elementObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setElementVisible(entry.isIntersecting);
      });
    }, observerOptions);

    const jobObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setJobVisible(entry.isIntersecting);
      });
    }, observerOptions);

    const hobbiesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setHobbiesVisible(entry.isIntersecting);
      });
    }, observerOptions);

    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setContactVisible(entry.isIntersecting);
      });
    }, observerOptions);

    const collabObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setCollabVisible(entry.isIntersecting);
      });
    }, observerOptions);

    const potraitObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setPotraitVisible(entry.isIntersecting);
      });
    }, observerOptions);

    // Observe elements
    if (elementRef.current) elementObserver.observe(elementRef.current);
    if (jobRef.current) jobObserver.observe(jobRef.current);
    if (hobbiesRef.current) hobbiesObserver.observe(hobbiesRef.current);
    if (contactRef.current) contactObserver.observe(contactRef.current);
    if (collabRef.current) collabObserver.observe(collabRef.current);
    if (potraitRef.current) potraitObserver.observe(potraitRef.current);

    // Cleanup
    return () => {
      draggableInstances.forEach((instance) => {
        if (instance) instance.kill();
      });
      elementObserver.disconnect();
      jobObserver.disconnect();
      hobbiesObserver.disconnect();
      contactObserver.disconnect();
      collabObserver.disconnect();
      potraitObserver.disconnect();
    };
  }, [elementVisible, jobVisible, hobbiesVisible, contactVisible, collabVisible, potraitVisible]);

  return (
    <div className="w-full flex  relative z-10 flex-col items-center mb-0">
      <div className="contact-body md:h-[100vh] relative flex flex-col justify-center lg:flex-row flex-wrap space-x-1 gap-7 space-y-3">
        
        <motion.div
          className="job2 xl:absolute xl:left-5 md:h-44 h-auto w-4/5 lg:w-1/2 xl:w-2/6"
          ref={elementRef}
          initial="hidden"
          animate={elementVisible ? "visible" : "hidden"}
          variants={containerVariant}
          style={{ willChange: "auto" }}
          onAnimationComplete={() => {
            if (elementRef.current && elementVisible) {
              gsap.set(elementRef.current, { clearProps: "transform,opacity" });
            }
          }}
        >
          <div className="about-me-title3 bg-[#1D242A] px-4 py-2 text-white">
            <p className="text-sm  ">where-i-work</p>
            <div className="flex items-center space-x-2 text-[#494949] text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white hover:border-white"
                style={{ transition: "ease-in 0.5s" }}
              />
              <div
                className="w-2.5 h-2.5 border border-[#494949] rounded-sm hover:border-white"
                style={{ transition: "ease-in 0.5s" }}
              ></div>
              <FontAwesomeIcon
                icon={faX}
                className="hover:text-white hover:border-white"
                style={{ transition: "ease-in 0.5s" }}
              />
            </div>
          </div>
          <div className="w-11/12 about-me-text  backdrop-blur-sm  p-4 rounded-lg shadow text-sm md:text-base font-normal">
            <p className="flex  gap-2">
              <span className="text-[#c2c0c0da]">1 </span>
              <span>Currently based in Lagos, Nigeria  <NigerianFlag width={20} height={14} /></span>
             
            </p>
            <p className="mt-2">
              <span className="text-[#c2c0c0da]">2 </span> Available for all
              remote collaborations around the world 🌍
            </p>
          </div>
        </motion.div>

        <motion.div
          className="me2 md:w-full xl:absolute  lg:w-4/5 xl:w-[50%]"
          ref={jobRef}
          initial="hidden"
          animate={jobVisible ? "visible" : "hidden"}
          variants={containerVariant}
          style={{ willChange: "auto" }}
          onAnimationComplete={() => {
            if (jobRef.current && jobVisible) {
              gsap.set(jobRef.current, { clearProps: "transform,opacity" });
            }
          }}
        >
          <div className="about-me-title3 bg-[#1D242A] px-4 py-2 text-white">
            <p className="text-sm  ">about-me</p>
            <div className="flex items-center space-x-2 text-[#494949] text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white hover:border-white"
                style={{ transition: "ease-in 0.5s" }}
              />
              <div
                className="w-2.5 h-2.5 border border-[#494949] rounded-sm hover:border-white"
                style={{ transition: "ease-in 0.5s" }}
              ></div>
              <FontAwesomeIcon
                icon={faX}
                className="hover:text-white hover:border-white text-xs"
                style={{ transition: "ease-in 0.5s" }}
              />
            </div>
          </div>
          <div className="about-me-text  backdrop-blur-sm  p-4 text-[15px]">
            <p>
              <span className="text-[#c2c0c0da]">1 </span>Nice to meet you!
              I&apos;m
              <span className="text-red-300"> Matthew</span> a{" "}
              <span className="text-blue-400">Freelance Web Developer</span>.
            </p>
            <p className="mt-2">
              <span className="text-[#c2c0c0da]">2 </span>My focus is on{" "}
              <span className="text-lime-400">creative development</span>: my
              skills can be described as the{" "}
              <span className="text-blue-300">meeting point</span> between{" "}
              <span className="text-purple-400">creativity</span> and{" "}
              <span className="text-pink-500">technical proficiency</span>.
            </p>
            <p className="mt-2">
              <span className="text-[#c2c0c0da]">3 </span>I{" "}
              <span className="text-yellow-400">integrate</span> complex but{" "}
              <span className="text-blue-500">smooth animations</span> and{" "}
              <span className="text-green-500">interactions</span> into my
              projects, to present the{" "}
              <span className="text-red-400">website information</span> in an
              engaging way and make it a{" "}
              <span className="text-blue-500">memorable experience</span>.
            </p>
            <p className="mt-2">
              <span className="text-[#c2c0c0da]">4 </span>I strive to{" "}
              <span className="text-cyan-500">deliver projects</span> that are{" "}
              <span className="text-purple-400">visually compelling</span> by
              working closely with the{" "}
              <span className="text-yellow-600">designer</span>, but also{" "}
              <span className="text-sky-300">technically outstanding</span> with
              a clean{" "}
              <span className="text-red-400">and properly structured</span>{" "}
              code. All of this, without forgetting about{" "}
              <span className="text-lime-500">web performances</span> and{" "}
              <span className="text-pink-500"> technical SEO aspects.</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="hobbies2  xl:absolute xl:left-25  xl:bottom-0 backdrop-blur-sm w-4/5  lg:w-1/2 xl:w-1/4 h-60"
          ref={hobbiesRef}
          initial="hidden"
          animate={hobbiesVisible ? "visible" : "hidden"}
          variants={containerVariant}
          style={{ willChange: "auto" }}
          onAnimationComplete={() => {
            if (hobbiesRef.current && hobbiesVisible) {
              gsap.set(hobbiesRef.current, { clearProps: "transform,opacity" });
            }
          }}
        >
          <div className="about-me-title3 px-4 py-2 text-white">
            <p className="text-sm">hobbies</p>
            <div className="flex items-center space-x-2 text-[#494949] text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white hover:border-white"
                style={{ transition: "ease-in 0.5s" }}
              />
              <div
                className="w-2.5 h-2.5 border border-[#494949] rounded-sm hover:border-white"
                style={{ transition: "ease-in 0.5s" }}
              ></div>
              <FontAwesomeIcon
                icon={faX}
                className="hover:text-white hover:border-white text-xs"
                style={{ transition: "ease-in 0.5s" }}
              />
            </div>
          </div>
          <div className="about-me-text p-4 space-y-3">
            <p className="text-base">
              <span className="text-[#c2c0c0da]">1</span> ⚽ Football
            </p>
            <p className="text-base">
              <span className="text-[#c2c0c0da]">2 </span>
              🎮 Playing games
            </p>
            <p className="text-base">
              <span className="text-[#c2c0c0da]">3 </span>
              ✈️ Travelling
            </p>
            <p className="text-base">
              <span className="text-[#c2c0c0da]">4 </span> 🏋️ Exercise
            </p>
            <p className="text-base">
              <span className="text-[#c2c0c0da]">5 </span> 🎧 Music
            </p>
          </div>
        </motion.div>

        <motion.div
          className="me2 xl:absolute xl:right-4 xl:top-12 backdrop-blur-sm w-4/5  lg:w-1/2 xl:w-1/4 h-60"
          ref={contactRef}
          initial="hidden"
          animate={contactVisible ? "visible" : "hidden"}
          variants={containerVariant}
          style={{ willChange: "auto" }}
          onAnimationComplete={() => {
            if (contactRef.current && contactVisible) {
              gsap.set(contactRef.current, { clearProps: "transform,opacity" });
            }
          }}
        >
          <div className="about-me-title3 px-4 text-sm py-2 text-white">
            <p>me-online</p>
            <div className="flex items-center space-x-2 text-[#494949] text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white hover:border-white"
                style={{ transition: "ease-in 0.5s" }}
              />
              <div
                className="w-2.5 h-2.5 border border-[#494949] rounded-sm hover:border-white"
                style={{ transition: "ease-in 0.5s" }}
              ></div>
              <FontAwesomeIcon
                icon={faX}
                className="hover:text-white hover:border-white text-xs"
                style={{ transition: "ease-in 0.5s" }}
              />
            </div>
          </div>
          <div className="potrait-img  text-md flex flex-col space-y-3 p-4 shadow">
            <div className="flex space-x-2">
              <span className="text-[#c2c0c0da]">1 </span>{" "}
              <a
                href="https://www.linkedin.com/in/rex-technologies-759965238/"
                className="hover:text-[#8FFF86] decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                linkedin <FiArrowUpRight className="text-lg" />
              </a>
            </div>
            <div className="flex space-x-2">
              <span className="text-[#c2c0c0da]">2 </span>{" "}
              <a
                href="https://www.linkedin.com/in/rex-technologies-759965238/"
                className="hover:text-[#8FFF86] decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                instagram <FiArrowUpRight className="text-lg" />
              </a>
            </div>
            <div className="flex space-x-2">
              <span className="text-[#c2c0c0da]">3 </span>{" "}
              <a
                href="https://github.com/Mat-icon?tab=repositories"
                className="hover:text-[#8FFF86] decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                github <FiArrowUpRight className="text-lg" />
              </a>
            </div>
            <div className="flex space-x-2">
              <span className="text-[#c2c0c0da]">4 </span>{" "}
              <a
                href="https://github.com/Mat-icon?tab=repositories"
                className="hover:text-[#8FFF86] decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                x&#123;twitter&#125;
                <FiArrowUpRight className="text-lg" />
              </a>
            </div>
            <div className="flex space-x-2">
              <span className="text-[#c2c0c0da]">5 </span>{" "}
              <a
                href="https://github.com/Mat-icon?tab=repositories"
                className="hover:text-[#8FFF86] decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                facebook
                <FiArrowUpRight className="text-lg" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="me2 md:w-full xl:absolute xl:bottom-3 xl:right-0 backdrop-blur-sm lg:w-4/5 xl:w-[45%] h-auto"
          ref={collabRef}
          initial="hidden"
          animate={collabVisible ? "visible" : "hidden"}
          variants={containerVariant}
          style={{ willChange: "auto" }}
          onAnimationComplete={() => {
            if (collabRef.current && collabVisible) {
              gsap.set(collabRef.current, { clearProps: "transform,opacity" });
            }
          }}
        >
          <div className="about-me-title3 px-4 text-sm py-2 text-white">
            <p>collaborations</p>
            <div className="flex items-center space-x-2 text-[#494949] text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white hover:border-white"
                style={{ transition: "ease-in 0.5s" }}
              />
              <div
                className="w-2.5 h-2.5 border border-[#494949] rounded-sm hover:border-white"
                style={{ transition: "ease-in 0.5s" }}
              ></div>
              <FontAwesomeIcon
                icon={faX}
                className="hover:text-white hover:border-white text-xs"
                style={{ transition: "ease-in 0.5s" }}
              />
            </div>
          </div>
          <div className="p-4 text-[15px] rounded-lg">
            <p>
              <span className="text-[#c2c0c0da]">1 </span>My ideal collaboration
              are with
              <span className="text-red-500"> web agencies</span> and
              <span className="text-blue-400">
                {" "}
                digital design studios
              </span>{" "}
              that need
              <span className="text-purple-400"> technical expertise</span>{" "}
              coupled with an eye for{" "}
              <span className="text-red-400">design</span> and{" "}
              <span className="text-yellow-300">aesthetics</span>.
            </p>
            <p className="mt-2">
              <span className="text-[#c2c0c0da]">2 </span>I can also work with
              <span className="text-blue-300">
                {" "}
                independent professionals
              </span>{" "}
              such as
              <span className="text-purple-400"> designers</span> and
              <span className="text-pink-500"> developers</span> to complement
              their skills and bring{" "}
              <span className="text-lime-400">additional value</span> to their
              project.
            </p>
            <p className="mt-2">
              <span className="text-[#c2c0c0da]">3 </span>I achieve my
              <span className="text-yellow-400"> best results</span> in
              paternships that are based on
              <span className="text-cyan-400"> mutual understanding</span> and
              <span className="text-green-300"> close collaborations</span>{" "}
              between all parties, especially design and development.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="potrait2 xl:absolute xl:bottom-3 xl:left-3 backdrop-blur-sm w-11/12  lg:w-1/2 xl:w-1/4"
          ref={potraitRef}
          initial="hidden"
          animate={potraitVisible ? "visible" : "hidden"}
          variants={containerVariant}
          style={{ willChange: "auto" }}
          onAnimationComplete={() => {
            if (potraitRef.current && potraitVisible) {
              gsap.set(potraitRef.current, { clearProps: "transform,opacity" });
            }
          }}
        >
          <div className="about-me-title3  text-sm px-4 py-2 text-white">
            <p>potrait</p>
            <div className="flex items-center space-x-2 text-[#494949] text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white hover:border-white"
                style={{ transition: "ease-in 0.5s" }}
              />
              <div
                className="w-2.5 h-2.5 border border-[#494949] rounded-sm hover:border-white"
                style={{ transition: "ease-in 0.5s" }}
              ></div>
              <FontAwesomeIcon
                icon={faX}
                className="hover:text-white hover:border-white text-xs"
                style={{ transition: "ease-in 0.5s" }}
              />
            </div>
          </div>
          <div className="w-full h-auto bg-[#8ff866] overflow-hidden">
            <img
              src="/images/matthew.png"
              alt="img-face"
              className="h-[275px] w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Contact;