"use client";

import React, { useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import LuminousBeam from "./LuminousBeam";
import ContactForm from "./ContactForm";


const Model = ({
  path,
  position,
  scale = 1,
  seed = 0,
  mousePosition,
  isHovering,
}) => {
  const { scene } = useGLTF(path);
  const meshRef = useRef();
  const initialPosition = useRef(position);
  const [isMobile, setIsMobile] = useState(false);
  const targetOffset = useRef({ x: 0, y: 0 });
  const currentOffset = useRef({ x: 0, y: 0 });

  // Random motion offsets based on seed for unique movement per model
  const offsetRef = useRef({
    x: Math.sin(seed * 123) * 0.3,
    y: Math.cos(seed * 456) * 0.3,
    z: Math.sin(seed * 789) * 0.3,
    speedX: 0.3 + Math.sin(seed * 234) * 0.2,
    speedY: 0.4 + Math.cos(seed * 567) * 0.2,
    speedZ: 0.35 + Math.sin(seed * 890) * 0.2,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      const offset = offsetRef.current;

      // Calculate base position with random motion
      const containmentRadius = 0.4;
      const baseX =
        Math.sin(time * offset.speedX + offset.x) * containmentRadius;
      const baseY =
        Math.cos(time * offset.speedY + offset.y) * containmentRadius;
      const baseZ =
        Math.sin(time * offset.speedZ + offset.z) * containmentRadius * 0.5;

      // Calculate mouse-based repulsion
      if (isHovering && mousePosition) {
        // Direction from center to this object
        const dirX = initialPosition.current[0];
        const dirY = initialPosition.current[1];
        const length = Math.sqrt(dirX * dirX + dirY * dirY);

        // Normalize direction
        const normalizedX = length > 0 ? dirX / length : 0;
        const normalizedY = length > 0 ? dirY / length : 0;

        // Push objects away from center based on their position (circle-like expansion)
        const pushStrength = 1.5; // How far to push
        targetOffset.current.x = normalizedX * pushStrength;
        targetOffset.current.y = normalizedY * pushStrength;
      } else {
        // Pull back to original position
        targetOffset.current.x = 0;
        targetOffset.current.y = 0;
      }

      // Smooth interpolation (lerp) for gradual movement
      const lerpSpeed = 0.03; // Lower = slower, smoother transition
      currentOffset.current.x +=
        (targetOffset.current.x - currentOffset.current.x) * lerpSpeed;
      currentOffset.current.y +=
        (targetOffset.current.y - currentOffset.current.y) * lerpSpeed;

      // Apply combined position
      meshRef.current.position.x =
        initialPosition.current[0] + baseX + currentOffset.current.x;
      meshRef.current.position.y =
        initialPosition.current[1] + baseY + currentOffset.current.y;
      meshRef.current.position.z = initialPosition.current[2] + baseZ;

      // Very slow rotation
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x += 0.002;
    }
  });

  // Apply light gray material immediately to prevent color flash
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material = child.material.clone();
          child.material.color.setHex(0x8a8a8a);
          child.material.metalness = 0.9;
          child.material.roughness = 0.1;
          child.material.needsUpdate = true;
        }
      });
    }
  }, [scene]);

  const responsiveScale = isMobile ? scale * 0.8 : scale;

  return (
    <primitive
      ref={meshRef}
      object={scene.clone()}
      position={position}
      scale={responsiveScale}
    />
  );
};

const Scene = ({ mousePosition, isHovering }) => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, -5, 5]} intensity={1.5} />
      <pointLight position={[0, 5, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={1.5} />

      {/* Objects arranged in circle-like formation */}
      <Model
        path="/models/python_programming_language.glb"
        position={[-7, -0.9, 0]}
        scale={0.7}
        seed={1}
        mousePosition={mousePosition}
        isHovering={isHovering}
      />

      <Model
        path="/models/python_programming_language.glb"
        position={[0, -1, 0]}
        scale={0.5}
        seed={3}
        mousePosition={mousePosition}
        isHovering={isHovering}
      />

      <Model
        path="/models/python_programming_language.glb"
        position={[6, -1, 0]}
        scale={0.5}
        seed={2}
        mousePosition={mousePosition}
        isHovering={isHovering}
      />
    </>
  );
};

export default function Contacts() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const headerRef = useRef(null);
  const canvasRef = useRef(null);

  const handleMouseMove = (e) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div ref={headerRef}>
      <div
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "100%",
          height: "90%",
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "visible",
        }}
        className="z-[5]"
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Scene mousePosition={mousePosition} isHovering={isHovering} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="flex flex-col relative  rounded overflow-hidden">
        <main className="w-full header">
          <div className="relative z-10 flex flex-col text-center items-center mt-32 ">
            <span className="text-xs md:text-[12px] mb-5 poppins md:mb-4 text-[#9D9D9D] uppercase tracking-wider">
              Contact
            </span>
            <h1 className=" w-[98%] text-[45px] leading-[1] tracking-tighter poppins md:text-7xl lg:text-[88px] lg:w-9/12">
              Do you want <br className="md:hidden block"/>to talk <br className="hidden md:block"/> about <br className="md:hidden block"/>a
              <span className=" text-[#91d1f8]"> project </span>?
            </h1>
            <p className="w-10/12 md:w-10/12 lg:w-5/12 2xl:w-6/12 tracking-[-1px] text-[16px] text-center max-w-2xl text-[#9D9D9D] mt-4 our-text">
              Whether you have a project you want to work on together or just
              want
              to have a chat, you are in the right place:<br /> Let&#39;s get in touch
            </p>
        
          </div>
        </main>

        <style>{`
                  @keyframes scrollWords {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-50%);
                    }
                  }
                  .animate-scroll {
                    animation: scrollWords 610s linear infinite;
                  }
                     @keyframes pulse {
                    0%, 100% {
                      opacity: 1;
                      filter: brightness(1);
                      transform: scale(3);
                    }
                    50% {
                      opacity: 0.85;
                      filter: brightness(1.2);
                       transform: scale(3);
                    }
                  }
          
                  @keyframes beamFlow {
                    0% {
                      transform: translateY(-100%);
                    }
                    100% {
                      transform: translateY(150%);
                    }
                  }
          
                  .luminous-vertical-beam {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                      to bottom,
                     transparent 0%,
                      #91d1f833 5%,
                      #91d1f8cc 15%,
                      #91d1f8 50%,
                      #91d1f8cc 85%,
                      #91d1f833 95%,
                      transparent 100%
                    );
                   box-shadow: 
            0 0 10px #91d1f8cc,
            0 0 80px #91d1f899,
            0 0 80px #91d1f866,
            0 0 0px #91d1f833;
                      
                    animation: pulse 0.5s ease-in-out infinite, beamFlow 3s linear infinite;
                    will-change: transform;
                    
                    transition: height 0.8s ease-out;
                  }
          
                  .vertical-static-glow {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                      to bottom,
                      transparent 0%,
                      rgba(255, 255, 255, 0.1) 20%,
                      rgba(255, 255, 255, 0.2) 50%,
                      rgba(255, 255, 255, 0.1) 80%,
                      transparent 100%
                    );
          
                    box-shadow: 
                      0 0 8px rgba(143, 255, 134, 0.3),
                      0 0 15px rgba(143, 255, 134, 0.2);
                  }
                `}</style>
        <div className="fixed top-[-15%] inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center ">
          <div className="relative flex gap-8 text-[560px] md:text-[700px] space-x-8 font-[900] poppins tracking-[-40px] text-[#0000003d] font-mono whitespace-nowrap animate-scroll">
            <p>code</p>
            <p>beautiful interfaces</p>
            <p>code</p>
            <p>design</p>
            <p>creative logic</p>
            <p>design</p>
            {/* Duplicate for seamless loop */}
            <p>code</p>
            <p>beautiful interfaces</p>
            <p>code</p>
            <p>design</p>
            <p>creative logic</p>
            <p>design</p>
          </div>
        </div>
       <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
