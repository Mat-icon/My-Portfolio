import React, { useState } from "react";
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
import Image from "next/image";

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
  <div className=" mt-8 testimonial-card w-72 md:w-full ">
    <div className="about-me-title test-color p-3">
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
    <div className="flex md:flex-row-reverse flex-col items-center md:gap-4  p-5">
      <div className="flex flex-col text-center  items-center">
        <p className="testimonial-text">{content}</p>
        <p className="testimonial-author">
          {author} &#123;&#125; {position}
        </p>
      </div>
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

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesPerView = 3;

  const isMiddleSlide = (index) => {
    const midIndex = (slidesPerView - 1) / 2;
    return index === activeIndex + midIndex;
  };

  return (
    <div className="w-[100%] h-auto flex-col flex items-center">
      <h1 className="w-[96%] poppins text-3xl md:text-[64px] md:leading-[60px] text-center">
        Nice things <span className="text-blue-700">people say</span>
        <br className="hidden md:block" /> about my work
      </h1>

      <div className="relative w-[90%] flex justify-center items-center p-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={100}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="cursor-grab testimonial-swiper"
        >
          {testimonials.map(
            ({ id, tech, content, author, position, image }, index) => (
              <SwiperSlide
                key={id}
                className={isMiddleSlide(index) ? "active-slide" : ""}
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

     
      <div className="relative mt-4 w-1/2 h-[1px] bg-gray-400 rounded ">
        <div
          className={`absolute h-full bg-[blue] transition-all duration-300`}
          style={{
            width: `${(activeIndex / (testimonials.length - 1)) * 100}%`,
            filter: 'blur(2px)', 
          }}
        />
      </div>
    </div>
  );
};

export default Testimonial;
