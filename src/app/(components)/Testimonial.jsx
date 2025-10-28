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
import Image from "next/image";

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
      "Stefano’s work is always on point — creative, efficient, and inspiring to collaborate with.",
    author: "Francesca Romano",
    position: "UI/UX Designer",
    image: "/images/potrait2.jpg",
  },
  {
    id: 5,
    tech: "testimonials",
    content:
      "Highly reliable and technically strong. Working with Stefano was a seamless experience from start to finish.",
    author: "Marco Bianchi",
    position: "Frontend Developer",
    image: "/images/potrait2.jpg",
  },
];

const TestimonialCard = ({ tech, content, author, position, image }) => (
  <div className="testimonial-card bg-[#111]  border border-gray-700 rounded-2xl w-[340px] h-[380px] flex flex-col justify-between shadow-lg overflow-hidden">
    <div className="about-me-title test-color p-3 flex justify-between items-center border-b border-gray-700">
      <p className="text-sm font-semibold">{tech}</p>
      <div className="flex space-x-3 text-gray-500 text-xs">
        <FontAwesomeIcon
          icon={faMinus}
          className="hover:text-white cursor-pointer transition-all duration-300"
        />
        <div className="w-2.5 h-2.5 border border-gray-500 rounded-sm hover:border-white cursor-pointer transition-all duration-300" />
        <FontAwesomeIcon
          icon={faX}
          className="hover:text-white cursor-pointer transition-all duration-300"
        />
      </div>
    </div>

    <div className="flex flex-col items-center justify-center p-6 text-center flex-grow">
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{content}</p>
      <div className="flex flex-col items-center">
        <Image
          width={60}
          height={60}
          src={image}
          alt={author}
          className="w-[60px] h-[60px] rounded-full object-cover mb-3"
        />
        <p className="text-white font-medium text-sm">{author}</p>
        <p className="text-gray-400 text-xs">{position}</p>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      {/* BLUR OVERLAYS */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent backdrop-blur-md z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent backdrop-blur-md z-10" />

      <h1 className="w-[96%] tracking-tight poppins text-3xl md:text-[64px] md:leading-[60px] text-center mb-8">
        Nice things <span className="text-blue-700">people say</span>
        <br className="hidden md:block" /> about my work
      </h1>

      <div className="relative w-[95%] md:w-[90%] flex justify-center items-center p-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, // ✅ 3 per view on desktop
          }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="cursor-grab testimonial-swiper"
        >
          {testimonials.map(
            ({ id, tech, content, author, position, image }) => (
              <SwiperSlide key={id} className="flex justify-center">
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

      {/* Progress Bar */}
      <div className="relative mt-6 w-1/2 h-[1px] bg-gray-600 rounded">
        <div
          className={`absolute h-full bg-blue-600 transition-all duration-300`}
          style={{
            width: `${(activeIndex / (testimonials.length - 1)) * 100}%`,
            filter: "blur(2px)",
          }}
        />
      </div>
    </div>
  );
};

export default Testimonial;
