"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    tech: "testimonials",
    content:
      "Working with Matthew was a fantastic experience. He brings a unique mix of creativity and technical expertise to every project. His ability to translate complex ideas into elegant, functional solutions is remarkable. Beyond his skill set, Matthew is proactive, communicates clearly, and always maintains a positive energy that motivates the entire team. I would gladly collaborate with him again on future projects.",
    author: "Bamise",
    position: "Founder of Noirvik Fashion",
    image: "/images/bamise.jpg",
  },
  {
    id: 2,
    tech: "testimonials",
    content:
      "Matthew's dedication to delivering exceptional work truly stands out. He approaches each challenge with thoughtful precision and ensures that no detail is overlooked. During our collaboration, he consistently demonstrated strong problem-solving skills and an impressive sense of design and functionality. His professionalism and technical acumen make him an invaluable asset to any team.",
    author: "Abiodun Illori",
    position: "CEO of Brabik Smarthomes",
    image: "/images/abiodun.png",
  },
  {
    id: 3,
    tech: "testimonials",
    content:
      "It has been an absolute pleasure working with Matthew. He combines strong development knowledge with a genuine passion for creating meaningful digital experiences. His ability to adapt quickly, learn continuously, and provide innovative solutions makes him stand out as a developer. He is not only dependable but also contributes valuable insights that elevate the entire project.",
    author: "Blessing Bayo-Ige",
    position: "Founder of Bwintech",
    image: "/images/bless.jpeg",
  },
  {
    id: 4,
    tech: "testimonials",
    content:
      "Matthew consistently goes above and beyond expectations. His attention to detail, deep understanding of frontend architecture, and creative thinking make him an exceptional collaborator. He approaches every task with a problem-solving mindset and a genuine desire to create the best possible outcome. I've seen him handle complex requirements effortlessly, always delivering polished and scalable solutions.",
    author: "Abiodun Illori",
    position: "Chief Executive Officer",
    image: "/images/abiodun.png",
  },
  {
    id: 5,
    tech: "testimonials",
    content:
      "Matthew is a talented developer with a great sense for design and user experience. He is highly collaborative and receptive to feedback, making the entire design-to-development process smooth and efficient. His ability to bring creative concepts to life through clean, structured code is inspiring. I admire his professionalism, consistency, and dedication to producing high-quality work that aligns perfectly with the project's vision.",
    author: "Christopher Victor",
    position: "UI/UX Designer",
    image: "/images/vicky.png",
  },
];

const TestimonialCard = ({ tech, content, author, position, image, accentColor, bgColor }) => (
  <div className={`${bgColor} mt-8 testimonial-card   b backdrop-blur-md  w-11/12 md:w-full transition-all duration-500`}>
    <div className="about-me-title2  px-4 py-[10px]">
      <p className="text-sm text-white">{tech}</p>
      <div className="flex space-x-2 items-center text-[#494949] text-xs">
        <FontAwesomeIcon
          icon={faMinus}
          className="hover:text-white cursor-pointer"
          style={{ transition: "ease-in 0.5s" }}
        />
        <div
          className="w-2.5 h-2.5 border border-[#494949] rounded-sm hover:border-white cursor-pointer"
          style={{ transition: "ease-in 0.5s" }}
        ></div>
        <FontAwesomeIcon
          icon={faX}
          className="hover:text-white cursor-pointer"
          style={{ transition: "ease-in 0.5s" }}
        />
      </div>
    </div>
    <div className="flex md:flex-row flex-col items-start md:gap-6 p-5">
      {/* Image Section */}
      <div className="w-[80px] h-[80px] rounded-full overflow-hidden md:ml-0 md:mt-0 mt-4 order-2 md:order-none relative shrink-0">
        <Image
          width={500}
          height={500}
          src={image}
          alt={author}
          className="object-cover w-full h-full rounded-full"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col text-left text-[#fff] items-start md:items-start md:justify-center mt-4 md:mt-0">
        <p className="text-sm md:text-base ">
          {content}
        </p>
        <p className="mt-6 text-sm  text-[#9d9d9d]">
          <span style={{ color: accentColor }}>{author}</span> &#47;&#47; {position}
        </p>
      </div>
    </div>
  </div>
);

const PagesTestimonial = () => {
  const pathname = usePathname();
const routeColors = {
  "/projects": "#e14f62",
  "/about-me": "#4d81ee",
  "/experiments": "#E1B84F",
};

const accentColor = routeColors[pathname] || "#E1B84F";


    const bgColor = pathname === "/projects" ? "glossy-25" : "glossy-25";
  
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const containerVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0]?.isIntersecting),
      { threshold: 0.5 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => cardRef.current && observer.unobserve(cardRef.current);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            filter: brightness(1);
          }
          50% {
            opacity: 0.85;
            filter: brightness(1.2);
          }
        }

        .luminous-tracker-beam {
          position: absolute;
          left: 0;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent 0%,
            ${accentColor}33 5%,
            ${accentColor}cc 15%,
            ${accentColor} 50%,
            ${accentColor}cc 85%,
            ${accentColor}33 95%,
            transparent 100%
          );
          box-shadow: 
            0 0 10px ${accentColor}cc,
            0 0 20px ${accentColor}99,
            0 0 40px ${accentColor}66,
            0 0 80px ${accentColor}33;
          animation: pulse 2s ease-in-out infinite;
          transition: width 0.8s ease-out;
        }

        .tracker-static-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent 0%,
            #ffffff1a 20%,
            #ffffff33 50%,
            #ffffff1a 80%,
            transparent 100%
          );
          box-shadow: 
            0 0 5px ${accentColor}4d,
            0 0 10px ${accentColor}33;
        }
      `}</style>

       <h1 className="w-[96%] text-white poppins text-4xl md:text-[58px]  tracking-tighter md:leading-[60px] text-center">
        Nice things <span style={{ color: accentColor }}>people<br className="md:hidden block" /> say</span>
        <br className="hidden md:block" /> about my work
      </h1>

      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariant}
        className="relative w-full flex justify-center items-center overflow-visible"
      >
        <div className="w-full overflow-hidden">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation]}
            spaceBetween={5}
            slidesPerView={1}
            centeredSlides={true}
            breakpoints={{
              768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1.8,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 1.6,
                spaceBetween: 30,
              },
            }}
            loop={true}
            speed={800}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onProgress={(swiper) => {
              for (let i = 0; i < swiper.slides.length; i++) {
                const slide = swiper.slides[i];
                const slideProgress = slide.progress;
                const absProgress = Math.abs(slideProgress);

                const scale = 1.05 - Math.min(absProgress * 0.2, 0.2);
                const opacity = 1 - Math.min(absProgress * 0.4, 0.5);

                slide.style.transform = `scale(${scale})`;
                slide.style.opacity = opacity;
                slide.style.transition = "transform 0.5s, opacity 0.5s";
              }
            }}
            className="testimonial-swiper cursor-grab active:cursor-grabbing w-full"
          >
            {testimonials.map(
              ({ id, tech, content, author, position, image }) => (
                <SwiperSlide
                  key={id}
                  className="flex justify-center xl:ml-1 my-10"
                >
                  <TestimonialCard
                    tech={tech}
                    content={content}
                    author={author}
                    position={position}
                    image={image}
                    accentColor={accentColor}
                    bgColor={bgColor}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </motion.div>

      <div className={`w-11/12 md:w-[38%] backdrop-blur-md border border-[#494949] ${bgColor} rounded-[4px] h-10 relative z-10 flex items-center`}>
        <div
          onClick={handlePrev}
          className="w-[15%] md:w-[10%] h-full border-r-[0.5px] border-[#494949] rounded-l-[3px] flex items-center justify-center cursor-pointer"
          style={{ 
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
          onMouseLeave={(e) => e.currentTarget.style.color = ""}
        >
          <HiChevronLeft className="text-xl" />
        </div>
        <div className="w-[70%] md:w-[90%] flex  items-center justify-center">
          <div className="relative w-10/12 h-[2px] overflow-hidden rounded">
            <div className="tracker-static-glow" />
            <div
              className="luminous-tracker-beam"
              style={{
                width: `${(activeIndex / (testimonials.length - 1)) * 100}%`,
              }}
            />
          </div>
        </div>

        <div
          onClick={handleNext}
          className="w-[15%] border-l-[0.5px] border-[#494949] md:w-[10%] h-full rounded-r-[3px] flex justify-center items-center relative z-10 cursor-pointer"
          style={{ 
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
          onMouseLeave={(e) => e.currentTarget.style.color = ""}
        >
          <HiChevronRight className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default PagesTestimonial;