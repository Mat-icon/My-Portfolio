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
import { FiArrowUpRight } from "react-icons/fi";

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
    <div className="w-full flex flex-col items-center">
      <div className="light2"></div>
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
          className="job md:h-44 h-auto w-4/5 lg:w-1/2 xl:w-2/5"
          ref={elementRef}
        >
          <div className="about-me-title p-3 text-white">
            <p className="text-sm">where-i-work</p>
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
          <div className="w-11/12 about-me-text p-4 rounded-lg shadow text-sm md:text-base font-normal">
            <p>
              <span className="text-gray-600">1. </span>Currently based in
              Lagos, Nigeria<sub className="text-xs"> NG</sub>🟩⬜🟩
            </p>
            <p>
              <span className="text-gray-600">2. </span> Available for all
              remote collaborations around the world🌍
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
            <p className="text-base">
              <span className="text-gray-600">5. </span> 🎧 Music
            </p>
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
            <img
              src="/images/crop.jpg"
              alt="img-face"
              className="h-[275px] w-full object-cover"
            />
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
                className="hover:text-blue-400 decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                linkedin <FiArrowUpRight className="text-lg" />
              </a>
            </div>
            <div className="flex">
              <span className="text-gray-600">2.</span>{" "}
              <a
                href="/home"
                className="hover:text-blue-400 decoration-inherit flex items-center"
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
                className="hover:text-blue-400 decoration-inherit flex items-center"
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
                className="hover:text-blue-400 decoration-inherit flex items-center"
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
                className="hover:text-blue-400 decoration-inherit flex items-center"
                style={{ transition: "0.4s ease-in" }}
                target="_blank"
              >
                facebook
                <FiArrowUpRight className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
