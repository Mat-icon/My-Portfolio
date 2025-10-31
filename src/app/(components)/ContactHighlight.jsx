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

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Draggable);
}

const ContactHighlight = () => {
  const cardRef = useRef(null);
  const elementRef = useRef(null);
  const jobRef = useRef(null);
  const hobbiesRef = useRef(null);
  const potraitRef = useRef(null);
  const contactRef = useRef(null);
  const collabRef = useRef(null);

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


  useEffect(() => {
    const draggableElements = [
      elementRef,
      jobRef,
      hobbiesRef,
      potraitRef,
      contactRef,
      collabRef,
    ];

    const isMobileDevice = () => /Mobi|Android/i.test(navigator.userAgent);

    const draggableInstances = draggableElements.map((ref) => {
      if (ref.current) {
        return Draggable.create(ref.current, {
          type: "x,y",
          edgeResistance: 0.92,
          bounds: ".contact-body",
          inertia: true,
          onDragStart: () => console.log("Drag started"),
          onDrag: () => console.log("Dragging"),
          onDragEnd: () => console.log("Drag ended"),
        })[0];
      }
      return null;
    });

    if (isMobileDevice()) {
      draggableInstances.forEach((instance) => {
        if (instance) instance.disable();
      });
    }

    // Cleanup
    return () => {
      draggableInstances.forEach((instance) => {
        if (instance) instance.kill();
      });
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center mb-0">
      <h1 className="text-4xl md:text-6xl tracking-tight poppins text-center">
        Your <span className="all-text">creative</span> web developer
      </h1>
      <div className="light4"></div>
      <div className="contact-body flex flex-col justify-center lg:flex-row flex-wrap space-x-1 gap-7 space-y-3">
        <div
          className="me backdrop-blur-sm md:w-full lg:w-4/5 xl:w-[60%]"
          ref={jobRef}
        >
          <div className="about-me-title px-4 py-2 text-white">
            <p className="text-sm tracking-[-1px] ">about-me</p>
           <div className="flex items-center space-x-2 text-[#494949] text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white hover:border-white "
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
          <div className="about-me-text tracking-tighter p-4 text-[15px] rounded-lg">
            <p>
              <span className="text-[#c2c0c0da]">1 </span>Nice to meet you!
              I&apos;m
              <span className="text-red-500"> Matthew</span> a{" "}
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
              <span className="text-blue-800">smooth animations</span> and{" "}
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
              <span className="text-red-600">and properly structured</span>{" "}
              code. All of this, without forgetting about{" "}
              <span className="text-lime-500">web performances</span> and{" "}
              <span className="text-pink-500"> technical SEO aspects.</span>
            </p>
          </div>
        </div>

        <div
          className="hobbies backdrop-blur-sm w-4/5 tracking-tighter lg:w-1/2 xl:w-1/3 h-64"
          ref={hobbiesRef}
        >
          <div className="about-me-title px-4 py-2 text-white">
            <p className="text-sm">hobbies</p>
            <div className="flex items-center space-x-2 text-[#494949] text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white hover:border-white "
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
        </div>

        <div
          className="contact-links backdrop-blur-sm w-4/5 tracking-tighter lg:w-1/2 xl:w-1/4 h-64"
          ref={contactRef}
        >
          <div className="about-me-title px-4 text-sm py-2 text-white">
            <p>me-online</p>
            <div className="flex items-center space-x-2 text-[#494949] text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white hover:border-white "
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
          <div className="potrait-img tracking-tighter text-md flex flex-col space-y-3  p-4 shadow">
            <div className="flex space-x-2">
              <span className="text-[#c2c0c0da]">1  </span>{" "}
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
        </div>

        <div
          className="me md:w-full  backdrop-blur-sm tracking-tighter lg:w-4/5 xl:w-[60%] h-auto"
          ref={collabRef}
        >
          <div className="about-me-title px-4 text-sm py-2 text-white">
            <p>collaborations</p>
            <div className="flex items-center space-x-2 text-[#494949] text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white hover:border-white "
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
          <div className="p-4 text-[15px] rounded-lg ">
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
        </div>

        <div
          className="potrait backdrop-blur-sm w-11/12 tracking-tighter lg:w-1/2 xl:w-1/4"
          ref={potraitRef}
        >
          <div className="about-me-title text-sm px-4 py-2 text-white">
            <p>potrait</p>
            <div className="flex items-center space-x-2 text-[#494949] text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white hover:border-white "
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
          <div className="w-full h-auto bg-[#8FFF86] overflow-hidden ">
            <img
              src="/images/matthew.png"
              alt="img-face"
              className="h-[275px] w-full object-cover"
            />
          </div>
        </div>
      </div>
      <Link
        href="/About"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ background: "#101010e1" }}
        className="material-bubble3  hover:border-[#8eff86]  w-3/5 md:w-4/12 lg:w-[15%] poppin mb-[50px] p-4 lg:px-4 rounded-[4px] border-[0.5px] border-[#6462628c] text-center text-sm flex mt-8 items-center justify-center transition-all duration-300"
      >
        {hovered ? (
          <motion.p
            className="flex items-center  justify-center tracking-tighter"
            variants={container}
            initial="hidden"
            animate={hovered ? "visible" : "hidden"}
          >
            {renderText("about-me")}
            <FaArrowRight
              className={`transition-transform duration-300 ${
                hovered ? "translate-x-1" : ""
              }`}
            />
          </motion.p>
        ) : (
          <p className="flex items-center text-white  justify-center tracking-tighter">
            <>
              about-me <FaArrowRight className="translate-x-1" />
            </>
          </p>
        )}
      </Link>
    </div>
  );
};

export default ContactHighlight;