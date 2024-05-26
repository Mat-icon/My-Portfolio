// components/Contact.js
"use client";

import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faMinus,
  faPlane,
  faSoccerBall,
  faWeight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugins
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

  useEffect(() => {
    const draggableElements = [
      elementRef,
      jobRef,
      hobbiesRef,
      potraitRef,
      contactRef,
    ];

    draggableElements.forEach((ref) => {
      if (ref.current) {
        Draggable.create(ref.current, {
          type: "x,y",
          edgeResistance: 0.92,
          bounds: ".contact-body",
          inertia: true,
          onDragStart: () => console.log("Drag started"),
          onDrag: () => console.log("Dragging"),
          onDragEnd: () => console.log("Drag ended"),
        });
      }
    });
  }, []);

  return (
    <div className="contact-body w-full h-screen relative">
      <div className="title text-center">
        <h1 className="text-3xl md:text-6xl" ref={cardRef}>
          Your <span className="text-green-400">interactive</span> developer
        </h1>
      </div>

      <div className="about-me relative top-36 left-1/4" ref={jobRef}>
        <div className="about-me-title p-4">
          <p>about-me</p>
          <div className="flex space-x-8 text-gray-500 text-sm">
            <FontAwesomeIcon
              icon={faMinus}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
            <div
              className="w-3 h-3 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            ></div>
            <FontAwesomeIcon
              icon={faX}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
          </div>
        </div>
        <div className="about-me-text p-4">
          <p>
            <span className="text-gray-600">1. </span>Nice to meet you! I'm
            Matthew a{" "}
            <span className="text-green-400">Freelance Web Developer</span>.
          </p>
        </div>
      </div>

      <div className="job relative top-52 left-28" ref={elementRef}>
        <div className="about-me-title p-4">
          <p>where-i-work</p>
          <div className="flex space-x-8 text-gray-500 text-sm">
            <FontAwesomeIcon
              icon={faMinus}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
            <div
              className="w-3 h-3 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            ></div>
            <FontAwesomeIcon
              icon={faX}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
          </div>
        </div>
        <div className="about-me-text p-4 text-base font-semibold">
          <p>
            <span className="text-gray-600">1. </span>Currently based in Lagos,
            Nigeria<sub className="text-xs"> NG</sub>
          </p>
          <p>
            <span className="text-gray-600">2. </span> Available for all remote
            collaborations around the world
          </p>
        </div>
      </div>

      <div className="hobbies relative  left-2/3" ref={hobbiesRef}>
        <div className="about-me-title p-4">
          <p>hobbies</p>
          <div className="flex space-x-8 text-gray-500">
            <FontAwesomeIcon
              icon={faMinus}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
            <div
              className="w-3 h-3 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            ></div>
            <FontAwesomeIcon
              icon={faX}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
          </div>
        </div>
        <div className="about-me-text p-4 text-lg space-y-3">
          <p>
            <span className="text-gray-600">1 </span>{" "}
            <FontAwesomeIcon icon={faSoccerBall} className="text-orange-500" />{" "}
            football
          </p>
          <p>
            <span className="text-gray-600">2 </span>
            <FontAwesomeIcon
              icon={faGamepad}
              className="text-purple-500"
            />{" "}
            playing video games
          </p>
          <p>
            <span className="text-gray-600">3 </span>
            <FontAwesomeIcon icon={faPlane} className="text-green-500" />{" "}
            travelling
          </p>
          <p>
            <span className="text-gray-600">4 </span>{" "}
            <FontAwesomeIcon icon={faWeight} className="text-blue-500" />{" "}
            exercise
          </p>
        </div>
      </div>

      <div className="potrait relative left-2/4" ref={potraitRef}>
        <div className="about-me-title p-4">
          <p>potrait</p>
          <div className="flex space-x-8 text-gray-500">
            <FontAwesomeIcon
              icon={faMinus}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
            <div
              className="w-3 h-3 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            ></div>
            <FontAwesomeIcon
              icon={faX}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
          </div>
        </div>
        <div className="potrait-img bg-green-400"></div>
      </div>

      <div
        className="contact-links translate-x-14 relative bottom-20"
        ref={contactRef}
      >
        <div className="about-me-title p-4">
          <p>contact-me</p>
          <div className="flex space-x-8 text-gray-500">
            <FontAwesomeIcon
              icon={faMinus}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
            <div
              className="w-3 h-3 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            ></div>
            <FontAwesomeIcon
              icon={faX}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
          </div>
        </div>
        <div className="potrait-img text-md flex flex-col space-y-3 p-6">
          <a href="/home" className="hover:text-green-400 decoration-inherit">
            linkedin
          </a>
          <a href="/home" className="hover:text-green-400">
            facebook
          </a>
          <a href="/home" className="hover:text-green-400">
            x
          </a>
          <a href="/home" className="hover:text-green-400">
            Whatsapp
          </a>
          <a href="/home" className="hover:text-green-400">
            github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
