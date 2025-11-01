'use client'
import React from "react";
import Hero from "./Hero";
import { useEffect, useState, useRef } from "react";
import Loader from "./Loader";
import { gsap } from "gsap";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && circle1Ref.current && circle2Ref.current) {
      // Animate circle 1
      gsap.to(circle1Ref.current, {
        scale: 1.5,
        x: '+=100',
        y: '-=50',
        duration: 28,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      gsap.to(circle1Ref.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });

      // Animate circle 2
      gsap.to(circle2Ref.current, {
        scale: 1.8,
        x: '-=80',
        y: '+=60',
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 2,
      });

      gsap.to(circle2Ref.current, {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: 'none',
      });

      // Optional: Pulse opacity
      gsap.to([circle1Ref.current, circle2Ref.current], {
        opacity: 0.7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full flex justify-center h-dvh overflow-hidden bg-[#0f0f0f] relative">
      {/* Gradient background container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Circle 1 - Top Left */}
        <div
          ref={circle1Ref}
          className="absolute rounded-full"
          style={{
            top: '20%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(142, 255, 134, 0.6) 0%, rgba(142, 255, 134, 0.3) 40%, transparent 70%)',
            filter: 'blur(100px)',
            transform: 'scale(0.5)',
            opacity: 0.5,
          }}
        />
        
        {/* Circle 2 - Bottom Right */}
        <div
          ref={circle2Ref}
          className="absolute rounded-full"
          style={{
            bottom: '45%',
            right: '-8%',
            width: '500px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(142, 255, 134, 0.6) 0%, rgba(142, 255, 134, 0.3) 40%, transparent 70%)',
            filter: 'blur(100px)',
            transform: 'scale(0.5)',
            opacity: 0.5,
          }}
        />
      </div>

      {/* Hero content */}
      <Hero />
    </div>
  );
};


export default Home;
