import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'; 


const testimonials = [
  {
    id: 1,
    tech: "testimonials",
    content: "Stefano is an experienced professional, curious and always looking for new ideas and inspirations. He has an excellent aptitude for teamwork and discussion, and it was a pleasure to work with him both for his approach and his skills.",
    author: "Alessandro Tunno",
    position: "Independent Creative Director",
    image: "/images/top.jpg"
  },
  {
    id: 2,
    tech: "testimonials",
    content: "Stefano takes the development process seriously. His knowledge is inspiring and always appreciated. I highly recommend Stefano.",
    author: "Riccardo Marconato",
    position: "Independent Creative Director",
    image: "/images/top.jpg"
  },
  {
    id: 3,
    tech: "testimonials",
    content: "Absolute pleasure working with Stefano. He has a knack for accurate implementations and state-of-the-art technical solutions.",
    author: "Giuseppe Capizzi",
    position: "Digital Designer & Founder @ Vool",
    image: "/images/top.jpg"
  },
  {
    id: 4,
    tech: "testimonials",
    content: "Absolute pleasure working with Stefano. He has a knack for accurate implementations and state-of-the-art technical solutions.",
    author: "Giuseppe Capizzi",
    position: "Digital Designer & Founder @ Vool",
    image: "/images/top.jpg"
  },
  {
    id: 5,
    tech: "testimonials",
    content: "Absolute pleasure working with Stefano. He has a knack for accurate implementations and state-of-the-art technical solutions.",
    author: "Giuseppe Capizzi",
    position: "Digital Designer & Founder @ Vool",
    image: "/images/top.jpg"
  },

];

const TestimonialCard = ({ tech, content, author, position, image }) => (
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
      <img src={image} alt={author} className="author-image" />
      <p className="testimonial-text">{content}</p>
      <p className="testimonial-author">{author} &#123;&#125; {position}</p>
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
    <>
      <h1 className="poppins text-4xl md:text-6xl text-center">
        Nice things <span className="text-blue-600">people say</span>
        <br />about my work
      </h1>

      <div className="relative w-full h-screen flex justify-center items-center p-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} 
          spaceBetween={0}
          slidesPerView={2}
          loop={true} 
          autoplay={{ delay: 5000, disableOnInteraction: true }} 
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className=" cursor-grab testimonial-swiper"
        >
          {testimonials.map(({ id, tech, content, author, position, image }, index) => (
            <SwiperSlide key={id} className={isMiddleSlide(index) ? 'active-slide' : ''}>
              <TestimonialCard
                tech={tech}
                content={content}
                author={author}
                position={position}
                image={image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
