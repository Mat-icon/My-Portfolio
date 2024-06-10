'use client'
import Link from "next/link";
import React, {useState} from "react";
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

const testimonials = [
  {
    id: 1,
    tech: "testimonials",
    content:
      "Stefano is an experienced professional, curious and always looking for new ideas and inspirations. He has an excellent aptitude for teamwork and discussion, and it was a pleasure to work with him both for his approach and his skills.",
    author: "Alessandro Tunno",
    position: "Independent Creative Director",
    image: "/images/top.jpg",
  },
  {
    id: 2,
    tech: "testimonials",
    content:
      "Stefano takes the development process seriously. His knowledge is inspiring and always appreciated. I highly recommend Stefano.",
    author: "Riccardo Marconato",
    position: "Independent Creative Director",
    image: "/images/top.jpg",
  },
  {
    id: 3,
    tech: "testimonials",
    content:
      "Absolute pleasure working with Stefano. He has a knack for accurate implementations and state-of-the-art technical solutions.",
    author: "Giuseppe Capizzi",
    position: "Digital Designer & Founder @ Vool",
    image: "/images/top.jpg",
  },
  {
    id: 4,
    tech: "testimonials",
    content:
      "Absolute pleasure working with Stefano. He has a knack for accurate implementations and state-of-the-art technical solutions.",
    author: "Giuseppe Capizzi",
    position: "Digital Designer & Founder @ Vool",
    image: "/images/top.jpg",
  },
  
];

const TestimonialCardhighlight = ({ tech, content, author, position, image }) => (
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
      <img src={image} alt={author} className="author-image" />
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
      <h1 className="poppins text-4xl md:text-6xl text-center">
        Nice things <span className="all-text">people say</span>
        <br />
        about my work
      </h1>

      <div className="relative w-full h-screen flex justify-center items-center p-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={80}
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
    title: "Heartfelt Academy",
    year: "2023",
    technologies: ["sass", "next.js", "html"],
    image: "/images/top.jpg",
    link: "/",
  },
  {
    id: 2,
    title: "Music App",
    year: "2023",
    technologies: ["sass", "next.js", "html"],
    image: "/images/top.jpg",
    link: "/",
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
            <div
              className="project-glass rounded-md  shadow-lg max-w-5xl mx-auto text-white p-2"
              key={project.id}
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={project.image}
                  alt="Project Image"
                  className="w-full md:w-1/2 h-auto project-img rounded-md"
                />
                <div className="p-4 md:w-1/2">
                  <h2 className="text-3xl mb-2 font-medium">{project.title}</h2>
                  <p className="text-sm text-gray-600 mb-4 fonts">2023</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className=" border border-gray-700 px-4 py-2 rounded-3xl text-sm" style={{background:"#00000037"}}>
                      webflow
                    </span>
                    <span className=" border border-gray-700 px-4 py-2 rounded-3xl text-sm" style={{background:"#00000037"}}>
                      css
                    </span>
                    <span className=" border border-gray-700  px-4 py-2 rounded-3xl text-sm" style={{background:"#00000037"}}>
                      javascript
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))} <Link
            href='/ProjectsPage'
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
  return (
    <>
    
    <div className="flex flex-col items-center"> <div className="light4"></div>
      <h1 className="text-4xl md:text-6xl text-center poppins">
        Project <span className="all-text">higlights</span>
      </h1>
      <AllProjects />
     <TestimonialHighlight/>
    </div></>
  );
};

export default ProjectHighlight;
