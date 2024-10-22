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
    <div className="w-full flex flex-col items-center mb-20">
      <h1 className="text-4xl md:text-6xl poppins text-center">
        Your interactive<span className="all-text"> developer</span>
      </h1>
      <div className="light4"></div>
      <div className="contact-body flex flex-col justify-center lg:flex-row flex-wrap space-x-1 space-y-3">
        <div className="me md:w-full lg:w-4/5 xl:w-2/3" ref={jobRef}>
          <div className="about-me-title p-2 text-white">
            <p>about-me</p>
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
          <div className="about-me-text p-4 text-base rounded-lg shadow">
            <p>
              <span className="text-gray-600">1. </span>Nice to meet you!
              I&apos;m
              <span className="text-red-500"> Matthew</span> a{" "}
              <span className="text-blue-400">Freelance Web Developer</span>.
            </p>
            <p className="mt-2">
              <span className="text-gray-600">2. </span>My focus is on{" "}
              <span className="text-lime-400">creative development</span>: my
              skills can be described as the{" "}
              <span className="text-blue-300">meeting point</span> between{" "}
              <span className="text-purple-400">creativity</span> and{" "}
              <span className="text-pink-500">technical proficiency</span>.
            </p>
            <p className="mt-2">
              <span className="text-gray-600">3. </span>I{" "}
              <span className="text-yellow-400">integrate</span> complex but{" "}
              <span className="text-blue-800">smooth animations</span> and{" "}
              <span className="text-green-500">interactions</span> into my
              projects, to present the{" "}
              <span className="text-red-400">website information</span> in an
              engaging way and make it a{" "}
              <span className="text-blue-500">memorable experience</span>.
            </p>
            <p className="mt-2">
              <span className="text-gray-600">4. </span>I strive to{" "}
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
          className="hobbies w-4/5 h-auto lg:w-1/2 xl:w-1/3"
          ref={hobbiesRef}
        >
          <div className="about-me-title p-3 text-white">
            <p className="text-sm">hobbies</p>
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
              <span className="text-gray-600">1.</span> ⚽ Football
            </p>
            <p className="text-base">
              <span className="text-gray-600">2. </span>
              🎮 Playing games
            </p>
            <p className="text-base">
              <span className="text-gray-600">3. </span>
              ✈️ Travelling
            </p>
            <p className="text-base">
              <span className="text-gray-600">4. </span> 🏋️ Exercise
            </p>
          </div>
        </div>

        <div className="contact-links w-4/5 lg:w-1/2 xl:w-1/4" ref={contactRef}>
          <div className="about-me-title p-3 text-white">
            <p className="text-sm">me-online</p>
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
          <div className="potrait-img text-md flex flex-col space-y-3 p-6 shadow">
            <div className="flex">
              <span className="text-gray-600">1.</span>{" "}
              <a
                href="https://www.linkedin.com/in/rex-technologies-759965238/"
                className="hover:text-lime-400 decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                linkedin <FiArrowUpRight className="text-lg" />
              </a>
            </div>
            <div className="flex">
              <span className="text-gray-600">2.</span>{" "}
              <a
                href="https://www.linkedin.com/in/rex-technologies-759965238/"
                className="hover:text-lime-400 decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                instagram <FiArrowUpRight className="text-lg" />
              </a>
            </div>
            <div className="flex">
              <span className="text-gray-600">3.</span>{" "}
              <a
                href="https://github.com/Mat-icon?tab=repositories"
                className="hover:text-lime-400 decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                github <FiArrowUpRight className="text-lg" />
              </a>
            </div>
            <div className="flex">
              <span className="text-gray-600">4.</span>{" "}
              <a
                href="https://github.com/Mat-icon?tab=repositories"
                className="hover:text-lime-400 decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                x &#123;twitter&#125;
                <FiArrowUpRight className="text-lg" />
              </a>
            </div>
            <div className="flex">
              <span className="text-gray-600">5.</span>{" "}
              <a
                href="https://github.com/Mat-icon?tab=repositories"
                className="hover:text-lime-400 decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                facebook
                <FiArrowUpRight className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="me md:w-full lg:w-4/5 xl:w-2/3" ref={collabRef}>
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
          <div className="about-me-text p-4 text-base rounded-lg shadow">
            <p>
              <span className="text-gray-600">1. </span>My ideal collaboration
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
              <span className="text-gray-600">2. </span>I can also work with
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
              <span className="text-gray-600">3. </span>I achieve my
              <span className="text-yellow-400"> best results</span> in
              paternships that are based on
              <span className="text-cyan-400"> mutual understanding</span> and
              <span className="text-green-500"> close collaborations</span>{" "}
              between all parties, especially design and development.
            </p>
          </div>
        </div>

        <div className="potrait w-11/12 lg:w-1/2 xl:w-1/4" ref={potraitRef}>
          <div className="about-me-title p-3 text-white">
            <p className="text-sm">potrait</p>
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
          <div className="w-full h-auto bg-lime-400">
            <img src="/images/portrait3.jpg" alt="img-face" className="h-[275px] w-full object-cover" />
          </div>
        </div>
      </div>
      <Link
        href="/About"
        style={{ background: "#101010d3" }}
        className="material-bubble3 w-3/5 md:w-4/12 lg:w-3/12 p-4 lg:px-4 rounded-md mt-5  border border-gray-600 text-center lg:text-center text-sm flex items-center  justify-center"
      >
        about-me
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
  <div className=" mt-8 testimonial-card w-72 md:w-full ">
    <div className="about-me-title p-3">
      <p className="text-sm font-semibold">{tech}</p>
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
    <div className="testimonial-content p-5">
      <p className="testimonial-text">{content}</p>
      <p className="testimonial-author">
        {author} &#123;&#125; {position}
      </p>{" "}
      <Image
        width={500}
        height={500}
        src={image}
        alt={author}
        className="w-[60px] h-[60px] rounded-full mt-4  object-cover"
      />
    </div>
  </div>
);

const TestimonialHighlight = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesPerView = 3;

  const isMiddleSlide = (index) => {
    const midIndex = (slidesPerView - 1) / 2;
    return index === activeIndex + midIndex;
  };

  return (
    <>
      <h1 className="poppins text-3xl md:text-6xl text-center">
        Nice things <span className="all-text">people say</span>
        <br />
        about my work
      </h1>

      <div className="relative w-full h-screen flex justify-center items-center p-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={100}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className=" cursor-grab testimonial-swiper"
        >
          {testimonials.map(
            ({ id, tech, content, author, position, image }, index) => (
              <SwiperSlide
                key={id}
                className={isMiddleSlide(index) ? "active-slide" : ""}
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
    </>
  );
};

const projects = [
  {
    id: 1,
    title: "Telgachain",
    year: "2023",
    technologies: ["css", "react", "node.js"],
    image: "/images/telg.png",
    link: "https://tegalchain.org/",
  },
  {
    id: 2,
    title: "Cloud Mall",
    year: "2023",
    technologies: ["node.js", "next.js", "tailwind"],
    image: "/images/mall.png",
    link: "https://cloudmall.netlify.app/",
  },
];

const AllProjects = () => {
  return (
    <>
      <div
        className="w-full flex flex-col items-center mt-10 mb-28
      "
      >
        <div className="w-full flex flex-col items-center space-y-4  mt-30 poppins">
          {projects.map((project) => (
            <Link
              className="project-glass rounded-md  shadow-lg max-w-5xl mx-auto text-white p-2"
              key={project.id}
              href={project.link}
              target="_blank"
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <Image
                    src={project.image}
                    alt="Project Image"
                    width={800} // Set appropriate width
                    height={600} // Set appropriate height to maintain the aspect ratio
                    layout="responsive"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,..."
                    loading="eager"
                    className="project-img rounded-sm"
                  />
                </div>
                <div className="p-4 md:w-1/2 mt-5">
                  <h2 className="text-3xl mb-2 font-medium">{project.title}</h2>
                  <p className="text-sm text-gray-600 mb-4 fonts">2023</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="border border-gray-700 px-4 py-2 rounded-3xl text-sm"
                        style={{ background: "#00000037" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}{" "}
          <Link
            href="/ProjectsPage"
            style={{ background: "#101010d3" }}
            className="material-bubble3 w-3/5 md:w-4/12 lg:w-3/12 p-4 lg:px-4 rounded-md   border border-gray-600 text-center lg:text-center text-sm flex items-center  justify-center"
          >
            all-projects
          </Link>
        </div>
      </div>
    </>
  );
};

const ProjectHighlight = () => {
  const [isVisible, setIsVisible] = useState({
    light4: false,
    heading: false,
    services: false,
    link: false,
    contact: false,
  });

  const light4Ref = useRef(null);
  const headingRef = useRef(null);
  const servicesRef = useRef(null);
  const linkRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetName = entry.target.getAttribute("data-name");
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [targetName]: true }));
          } else {
            setIsVisible((prev) => ({ ...prev, [targetName]: false }));
          }
        });
      },
      { threshold: 0.1 } // Adjust as needed
    );

    const elements = [
      { ref: light4Ref, name: "light4" },
      { ref: headingRef, name: "heading" },
      { ref: servicesRef, name: "services" },
      { ref: linkRef, name: "link" },
      { ref: contactRef, name: "contact" },
    ];

    elements.forEach(({ ref, name }) => {
      if (ref.current) {
        ref.current.setAttribute("data-name", name);
        observer.observe(ref.current);
      }
    });

    return () => {
      elements.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        ref={light4Ref}
        initial="hidden"
        animate={isVisible.light4 ? "visible" : "hidden"}
        variants={containerVariants}
        className="light4"
      ></motion.div>

      <motion.h1
        ref={headingRef}
        initial="hidden"
        animate={isVisible.heading ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-4xl md:text-6xl text-center poppins"
      >
        Project <span className="all-text">highlights</span>
      </motion.h1>

      <motion.div
        ref={servicesRef}
        initial="hidden"
        animate={isVisible.services ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full"
      >
        <Services />
      </motion.div>

      <motion.div
        className="w-full flex items-center justify-center"
        ref={linkRef}
        initial="hidden"
        animate={isVisible.link ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Link
          href="/ProjectsPage"
          style={{ background: "#101010d3" }}
          className="material-bubble3 w-3/5 md:w-4/12 lg:w-3/12 mb-[50px] p-4 lg:px-4 rounded-md border border-gray-600 text-center text-sm flex items-center justify-center"
        >
          all-projects
        </Link>
      </motion.div>

      <motion.div
        ref={contactRef}
        initial="hidden"
        animate={isVisible.contact ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <ContactHighlight />
      </motion.div>
      <TestimonialHighlight />
    </div>
  );
};

export default ProjectHighlight;
