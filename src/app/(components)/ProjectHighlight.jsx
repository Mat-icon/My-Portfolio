"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Services from "../(components)/ProgramsHome/Service";
import { FaArrowRight } from "react-icons/fa6";
import Tech from "./Tech";



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
          <div className="about-me-title p-2 text-white">
            <p className="text-base font-[500] tracking-tighter">about-me</p>
            <div className="flex space-x-4 text-gray-500 text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white cursor-pointer"
                style={{ transition: "ease-in 0.5s" }}
              />
              <div
                className="w-2.5 h-2.5 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
                style={{ transition: "ease-in 0.5s" }}
              ></div>
              <FontAwesomeIcon
                icon={faX}
                className="hover:text-white cursor-pointer"
                style={{ transition: "ease-in 0.5s" }}
              />
            </div>
          </div>
          <div className="about-me-text tracking-tighter p-4 text-[15px] rounded-lg shadow">
            <p>
              <span className="text-[#c2c0c0da]">1. </span>Nice to meet you!
              I&apos;m
              <span className="text-red-500"> Matthew</span> a{" "}
              <span className="text-blue-400">Freelance Web Developer</span>.
            </p>
            <p className="mt-2">
              <span className="text-[#c2c0c0da]">2. </span>My focus is on{" "}
              <span className="text-lime-400">creative development</span>: my
              skills can be described as the{" "}
              <span className="text-blue-300">meeting point</span> between{" "}
              <span className="text-purple-400">creativity</span> and{" "}
              <span className="text-pink-500">technical proficiency</span>.
            </p>
            <p className="mt-2">
              <span className="text-[#c2c0c0da]">3. </span>I{" "}
              <span className="text-yellow-400">integrate</span> complex but{" "}
              <span className="text-blue-800">smooth animations</span> and{" "}
              <span className="text-green-500">interactions</span> into my
              projects, to present the{" "}
              <span className="text-red-400">website information</span> in an
              engaging way and make it a{" "}
              <span className="text-blue-500">memorable experience</span>.
            </p>
            <p className="mt-2">
              <span className="text-[#c2c0c0da]">4. </span>I strive to{" "}
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
          <div className="about-me-title p-2 text-white">
            <p className="text-base">hobbies</p>
            <div className="flex space-x-4 text-gray-500">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white cursor-pointer text-xs"
                style={{ transition: "ease-in 0.5s" }}
              />
              <div
                className="w-2.5 h-2.5 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
                style={{ transition: "ease-in 0.5s" }}
              ></div>
              <FontAwesomeIcon
                icon={faX}
                className="hover:text-white cursor-pointer text-xs"
                style={{ transition: "ease-in 0.5s" }}
              />
            </div>
          </div>
          <div className="about-me-text p-4 space-y-3">
            <p className="text-base">
              <span className="text-[#c2c0c0da]">1.</span> ⚽ Football
            </p>
            <p className="text-base">
              <span className="text-[#c2c0c0da]">2. </span>
              🎮 Playing games
            </p>
            <p className="text-base">
              <span className="text-[#c2c0c0da]">3. </span>
              ✈️ Travelling
            </p>
            <p className="text-base">
              <span className="text-[#c2c0c0da]">4. </span> 🏋️ Exercise
            </p>
            <p className="text-base">
              <span className="text-[#c2c0c0da]">5. </span> 🎧 Music
            </p>
          </div>
        </div>

        <div
          className="contact-links backdrop-blur-sm w-4/5 tracking-tighter lg:w-1/2 xl:w-1/4 h-64"
          ref={contactRef}
        >
          <div className="about-me-title p-2 text-white">
            <p >me-online</p>
            <div className="flex space-x-4 text-gray-500 text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white cursor-pointer"
                style={{ transition: "ease-in 0.5s" }}
              />
              <div
                className="w-2.5 h-2.5 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
                style={{ transition: "ease-in 0.5s" }}
              ></div>
              <FontAwesomeIcon
                icon={faX}
                className="hover:text-white cursor-pointer"
                style={{ transition: "ease-in 0.5s" }}
              />
            </div>
          </div>
          <div className="potrait-img tracking-tighter text-md flex flex-col space-y-3  p-4 shadow">
            <div className="flex">
              <span className="text-[#c2c0c0da]">1.</span>{" "}
              <a
                href="https://www.linkedin.com/in/rex-technologies-759965238/"
                className="hover:text-[#8FFF86] decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                linkedin <FiArrowUpRight className="text-lg" />
              </a>
            </div>
            <div className="flex">
              <span className="text-[#c2c0c0da]">2.</span>{" "}
              <a
                href="https://www.linkedin.com/in/rex-technologies-759965238/"
                className="hover:text-[#8FFF86] decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                instagram <FiArrowUpRight className="text-lg" />
              </a>
            </div>
            <div className="flex">
              <span className="text-[#c2c0c0da]">3.</span>{" "}
              <a
                href="https://github.com/Mat-icon?tab=repositories"
                className="hover:text-[#8FFF86] decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                github <FiArrowUpRight className="text-lg" />
              </a>
            </div>
            <div className="flex">
              <span className="text-[#c2c0c0da]">4.</span>{" "}
              <a
                href="https://github.com/Mat-icon?tab=repositories"
                className="hover:text-[#8FFF86] decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                x &#123;twitter&#125;
                <FiArrowUpRight className="text-lg" />
              </a>
            </div>
            <div className="flex">
              <span className="text-[#c2c0c0da]">5.</span>{" "}
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
          <div className="about-me-title p-2 text-white">
            <p>collaborations</p>
            <div className="flex space-x-4 text-gray-500 text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white cursor-pointer"
                style={{ transition: "ease-in 0.5s" }}
              />
              <div
                className="w-2.5 h-2.5 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
                style={{ transition: "ease-in 0.5s" }}
              ></div>
              <FontAwesomeIcon
                icon={faX}
                className="hover:text-white cursor-pointer text-xs"
                style={{ transition: "ease-in 0.5s" }}
              />
            </div>
          </div>
          <div className="about-me-text p-4 text-[15px]  rounded-lg shadow">
            <p>
              <span className="text-[#c2c0c0da]">1. </span>My ideal collaboration
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
              <span className="text-[#c2c0c0da]">2. </span>I can also work with
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
              <span className="text-[#c2c0c0da]">3. </span>I achieve my
              <span className="text-yellow-400"> best results</span> in
              paternships that are based on
              <span className="text-cyan-400"> mutual understanding</span> and
              <span className="text-green-500"> close collaborations</span>{" "}
              between all parties, especially design and development.
            </p>
          </div>
        </div>

        <div
          className="potrait backdrop-blur-sm w-11/12 tracking-tighter lg:w-1/2 xl:w-1/4"
          ref={potraitRef}
        >
          <div className="about-me-title p-2 text-white">
            <p >potrait</p>
            <div className="flex space-x-4 text-gray-500 text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white cursor-pointer"
                style={{ transition: "ease-in 0.5s" }}
              />
              <div
                className="w-2.5 h-2.5 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
                style={{ transition: "ease-in 0.5s" }}
              ></div>
              <FontAwesomeIcon
                icon={faX}
                className="hover:text-white cursor-pointer text-xs"
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
            className="material-bubble3 w-3/5 md:w-4/12 lg:w-[15%] poppin mb-[50px] p-4 lg:px-4 rounded-[4px] border-[0.5px] border-[#6462628c] text-center text-sm flex mt-8 items-center justify-center transition-all duration-300"
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
              <p
                className="flex items-center text-white  justify-center tracking-tighter"
              >
                <>
                  about-me{" "}
                  <FaArrowRight
                  className="translate-x-1"
                  />
                </>
              </p>
            )}
          </Link>
    </div>
  );
};

const testimonials = [
  {
    id: 1,
    tech: "testimonials",
    content:
      "Stefano is an experienced professional, curious and always looking for new ideas and inspirations. He has an excellent aptitude for teamwork and discussion, and it was a pleasure to work with him both for his approach and his skills.",
    author: "Alessandro Tunno",
    position: "Independent Creative Director",
    image: "/images/potrait2.jpg",
  },
  {
    id: 2,
    tech: "testimonials",
    content:
      "Stefano takes the development process seriously. His knowledge is inspiring and always appreciated. I highly recommend Stefano.",
    author: "Riccardo Marconato",
    position: "Independent Creative Director",
    image: "/images/portrait3.jpg",
  },
  {
    id: 3,
    tech: "testimonials",
    content:
      "Absolute pleasure working with Stefano. He has a knack for accurate implementations and state-of-the-art technical solutions.",
    author: "Giuseppe Capizzi",
    position: "Digital Designer & Founder @ Vool",
    image: "/images/portrait.jpg",
  },
  {
    id: 4,
    tech: "testimonials",
    content:
      "Absolute pleasure working with Stefano. He has a knack for accurate implementations and state-of-the-art technical solutions.",
    author: "Giuseppe Capizzi",
    position: "Digital Designer & Founder @ Vool",
    image: "/images/potrait2.jpg",
  },
  {
    id: 5,
    tech: "testimonials",
    content:
      "Absolute pleasure working with Stefano. He has a knack for accurate implementations and state-of-the-art technical solutions.",
    author: "Giuseppe Capizzi",
    position: "Digital Designer & Founder @ Vool",
    image: "/images/potrait2.jpg",
  },
];

const TestimonialCardhighlight = ({
  tech,
  content,
  author,
  position,
  image,
}) => (
  <div className=" mt-8 testimonial-card b   backdrop-blur-md tracking-tighter w-full md:w-full ">
    <div className="about-me-title test-color p-2">
      <p className="text-sm">{tech}</p>
      <div className="flex space-x-4 text-gray-500 text-xs">
        <FontAwesomeIcon
          icon={faMinus}
          className="hover:text-white cursor-pointer"
          style={{ transition: "ease-in 0.5s" }}
        />
        <div
          className="w-2.5 h-2.5 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
          style={{ transition: "ease-in 0.5s" }}
        ></div>
        <FontAwesomeIcon
          icon={faX}
          className="hover:text-white cursor-pointer"
          style={{ transition: "ease-in 0.5s" }}
        />
      </div>
    </div>
    <div className=" flex md:flex-row-reverse flex-col md:items-start items-center md:gap-4  p-5">
      <div className="flex flex-col  text-left items-center">
        <p className=" text-sm">{content}</p>
      </div>
      <Image
        width={500}
        height={500}
        src={image}
        alt={author}
        className="w-[40px] h-[40px] rounded-full mt-4  object-cover"
      />
      <p className="w-4/5 mx-auto text-center absolute bottom-4 testimonial-author">
        {author} &#123;&#125; {position}
      </p>
    </div>
  </div>
);

const TestimonialHighlight = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      {/* BLUR OVERLAYS */}

      <h1 className="w-[96%] poppins text-3xl md:text-6xl md:leading-[60px] text-center">
        Nice things <span className="all-text">people say</span>
        <br className="hidden md:block" /> about my work
      </h1>

      <div className="relative  w-full flex justify-center items-center">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          speed={4000} // Smooth continuous speed
          autoplay={{
            delay: 0, // no delay between slides
            disableOnInteraction: false,
          }}
          allowTouchMove={false} // prevent drag interruption
          className="cursor-default testimonial-swiper "
        >
          {testimonials.map(
            ({ id, tech, content, author, position, image }) => (
              <SwiperSlide
                key={id}
                className="flex justify-center xl:ml-1 my-10"
              >
                <TestimonialCardhighlight
                  tech={tech}
                  content={content}
                  author={author}
                  position={position}
                  image={image}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      <div className="w-11/12 md:w-[38%]  backdrop-blur-md border border-[#6462628c] bg-[#101010e1] rounded-[4px] h-10 md:h-12 relative z-10 flex items-center ">
        <div className="w-[15%] md:w-[10%] h-full border-r-[0.5px] border-[#6462628c] rounded-l-[3px] hover:bg-[#8FFF86] hover:text-black  flex items-center justify-center">
          ≺
        </div>
        <div className="w-[1px] bg-[#101010e1] h-full"></div>
        <div className="w-[70%] md:w-[80%] flex tracking-tighter items-center justify-center">
          <div className="relative mt-4 w-1/2 h-[1px] bg-gray-700 rounded ">
            <div
              className="absolute z-10 h-1 bg-[#1afc4b] transition-all duration-300"
              style={{
                width: `${(activeIndex / (testimonials.length - 1)) * 100}%`,
                filter: "blur(12px)",
              }}
            />
          </div>
        </div>
        <div className="w-[1px] bg-[#101010e1] h-full"></div>
        <header className="w-[15%] border-l-[0.5px] border-[#6462628c] md:w-[10%] h-full rounded-r-[3px] hover:bg-[#8FFF86] hover:text-black  flex justify-center items-center  relative z-10">
          ≻
        </header>
      </div>
    </div>
  );
};

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

  // ✨ Motion Variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
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
    <div className="flex flex-col mt-14 lg:mt-0 items-center">
      {/* Animated container for staggered children */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex flex-col items-center w-full"
      >
        {/* Light element */}
        <motion.div
          ref={sections.light4}
          custom={0.1}
          initial="hidden"
          animate={isVisible.light4 ? "visible" : "hidden"}
          variants={fadeUpVariant}
          className="light4"
        ></motion.div>

        {/* Heading */}
        <motion.h1
          ref={sections.heading}
          custom={0.2}
          initial="hidden"
          animate={isVisible.heading ? "visible" : "hidden"}
          variants={fadeUpVariant}
          className="text-4xl md:text-[64px] tracking-tight text-center poppins"
        >
          Project <span className="all-text">highlights</span>
        </motion.h1>

        {/* Services */}
        <motion.div
          ref={sections.services}
          custom={0.3}
          initial="hidden"
          animate={isVisible.services ? "visible" : "hidden"}
          variants={fadeUpVariant}
          className="w-full"
        >
          <Services />
        </motion.div>

        {/* Link */}
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
            className="material-bubble3 w-3/5 md:w-4/12 lg:w-[15%] poppin mb-[50px] p-4 lg:px-4 rounded-[4px] border-[0.5px] border-[#6462628c] text-center text-sm flex items-center justify-center transition-all duration-300"
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
              <p
                className="flex items-center text-white  justify-center tracking-tighter"
              >
                <>
                  all-projects{" "}
                  <FaArrowRight
                  className="translate-x-1"
                  />
                </>
              </p>
            )}
          </Link>
        </motion.div>

        {/* Contact */}
        <motion.div
          ref={sections.contact}
          custom={0.5}
          initial="hidden"
          animate={isVisible.contact ? "visible" : "hidden"}
          variants={fadeUpVariant}
        >
          <ContactHighlight />
        </motion.div>

        {/* Tech */}
        <motion.div
          ref={sections.tech}
          custom={0.6}
          initial="hidden"
          animate={isVisible.tech ? "visible" : "hidden"}
          variants={fadeUpVariant}
        >
          <Tech />
        </motion.div>
      </motion.div>
      <TestimonialHighlight />
    </div>
  );
};

export default ProjectHighlight;
