"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

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

const TestimonialCard = ({ tech, content, author, position, image }) => (
  <div className=" mt-8 testimonial-card b   backdrop-blur-md tracking-tighter w-full md:w-full ">
    <div className="about-me-title test-color p-2">
      <p className="text-sm">{tech}</p>
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
    <div className=" flex md:flex-row-reverse flex-col md:items-start items-center md:gap-4  p-5">
      <div className="flex flex-col  text-left items-center">
        <p className=" text-sm">{content}</p>
      </div>
      <Image
        width={500}
        height={500}
        src={image}
        alt={author}
        className="w-[90px] h-[90px] md:w-[40px] md:h-[40px] rounded-full mt-4 md:mt-0 object-cover order-2 md:order-none"
      />
      <p className="w-4/5 mx-auto text-center absolute bottom-4 testimonial-author order-1 md:order-none">
        {author} &#123;&#125; {position}
      </p>
    </div>
  </div>
);

const TestimonialHighlight = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

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

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      <h1 className="w-[96%] poppins text-3xl md:text-6xl md:leading-[60px] text-center">
        Nice things <span className="all-text">people say</span>
        <br className="hidden md:block" /> about my work
      </h1>

      <div className="relative  w-full flex justify-center items-center">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="testimonial-swiper cursor-grab active:cursor-grabbing"
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
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      <div className="w-11/12 md:w-[38%]   backdrop-blur-md border border-[#494949] bg-[#1111101a] rounded-[4px] h-10 relative z-10 flex items-center ">
        <div
          onClick={handlePrev}
          className="w-[15%] md:w-[10%] h-full border-r-[0.5px] border-[#494949] rounded-l-[3px] hover:text-[#8FFF86]   flex items-center justify-center cursor-pointer"
        >
          <HiChevronLeft className="text-xl" />
        </div>
        <div className="w-[70%] md:w-[90%] flex tracking-tighter items-center justify-center">
          <div className="relative w-full h-[1px] bg-[#494949] rounded ">
            <div
              className="absolute z-10 h-[1px] bg-[#8FFF86] transition-all duration-300"
              style={{
                width: `${(activeIndex / (testimonials.length - 1)) * 100}%`,
              }}
            />
          </div>
        </div>

        <div
          onClick={handleNext}
          className="w-[15%] border-l-[0.5px] border-[#494949] md:w-[10%] h-full rounded-r-[3px] hover:text-[#8FFF86]  flex justify-center items-center  relative z-10 cursor-pointer"
        >
          <HiChevronRight className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialHighlight;