"use client";
import React from "react";
import Hero from "./Hero";
import { useEffect, useState, useRef } from "react";
import Loader from "./Loader";
import { gsap } from "gsap";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && circle1Ref.current && circle2Ref.current) {
      // Clear any existing animations
      gsap.killTweensOf([circle1Ref.current, circle2Ref.current]);

      if (isMobile) {
        // Mobile animations - side by side, smaller movement
        gsap.to(circle1Ref.current, {
          scale: 1.3,
          x: "+=30",
          y: "+=20",
          duration: 25,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          force3D: true,
        });

        gsap.to(circle1Ref.current, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
        });

        gsap.to(circle2Ref.current, {
          scale: 1.4,
          x: "-=30",
          y: "-=20",
          duration: 22,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 2,
          force3D: true,
        });

        gsap.to(circle2Ref.current, {
          rotation: -360,
          duration: 25,
          repeat: -1,
          ease: "none",
        });
      } else {
        // Desktop animations - diagonal, larger movement
        gsap.to(circle1Ref.current, {
          scale: 1.6,
          x: "+=120",
          y: "+=80",
          duration: 28,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          force3D: true,
        });

        gsap.to(circle1Ref.current, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
        });

        gsap.to(circle2Ref.current, {
          scale: 1.7,
          x: "-=100",
          y: "-=70",
          duration: 24,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 2,
          force3D: true,
        });

        gsap.to(circle2Ref.current, {
          rotation: -360,
          duration: 25,
          repeat: -1,
          ease: "none",
        });
      }

      // Pulse opacity for both mobile and desktop
      gsap.to([circle1Ref.current, circle2Ref.current], {
        opacity: 0.6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [isLoading, isMobile]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full flex justify-center h-dvh overflow-hidden bg-[#0f0f0f] relative">
      {/* Gradient background container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Circle 1 - Top Left (Desktop) / Left (Mobile) */}
        <div
          ref={circle1Ref}
          className="absolute rounded-full"
          style={{
            top: isMobile ? "55%" : "45%",
            left: isMobile ? "-45%" : "-8%",
            width: isMobile ? "200px" : "400px",
            height: isMobile ? "200px" : "400px",
            background: isMobile
              ? "#8FFF86"
              : "#365A34",
            filter: isMobile ? "blur(60px)" : "blur(120px)",
             transform: isMobile ? "scale(1)": "scale(0.5)",
            opacity: 0.8,
            willChange: "transform, opacity",
          }}
        />

        {/* Circle 2 - Bottom Right (Desktop) / Right (Mobile) */}
        <div
          ref={circle2Ref}
          className="absolute rounded-full"
          style={{
            bottom: isMobile ? "45%" : "50%",
            right: isMobile ? "-45%" : "-10%",
            width: isMobile ? "200px" : "400px",
            height: isMobile ? "200px" : "400px",
            background: isMobile
              ? "#8FFF86"
              : "radial-gradient(circle, #8FFF8666 0%, #8FFF8666 50%, transparent 80%)",
            filter: isMobile ? "blur(60px)" : "blur(100px)",
            transform: isMobile ? "scale(1)": "scale(0.5)",
            opacity: 0.8,
            willChange: "transform, opacity",
          }}
        />
      </div>

      {/* Hero content */}
      <Hero />
    </div>
  );
};

export default Home;
