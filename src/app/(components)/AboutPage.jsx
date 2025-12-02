"use client";
import React, { useState, useEffect, useRef } from "react";
import PagesContactBar from "./PagesContactBar";
import Footer from "./Footer";
import Contact from "./Contact";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import LuminousBeam from "./LuminousBeam";
import TechAbout from "./TechAbout";
import PageTestimonials from './PagesTestimonial';
import RouteLoader from "./RouteLoader";


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

export default function Project(isVisible ,accentColor) {
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
      <div className="flex flex-col items-center relative  rounded overflow-hidden">
        <main className="w-full header">
          <div className="relative z-10 flex flex-col text-center items-center mt-32 ">
            <span className="text-xs md:text-[12px] fonts mb-4 text-[#9D9D9D] uppercase tracking-wider">
              About
            </span>
            <h1 className=" w-[94%] text-white text-5xl tracking-tighter md:text-7xl lg:text-[92px] lg:w-9/12 poppins">
              Let&#39;s get to <br />
              know
              <span className=" text-[#4d81ee]"> each other. </span>
            </h1>
            <p className="w-10/12 md:w-10/12 text-[#9d9d9d] lg:w-6/12 2xl:w-7/12  text-[16px] text-center max-w-2xl mt-6  our-text">
              Let me introduce myself, my workflows, my collaborations,<br /> and the
              technologies I like to use to bring my projects to life.
            </p>
            <div className="mx-auto my-4 flex justify-center">
            <LuminousBeam height="h-[70px]" color="4d81ee" />
          </div>
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
                      #4d81ee 5%,
                      #4d81ee 15%,
                      #4d81ee 50%,
                      #4d81ee 85%,
                      #4d81ee 95%,
                      transparent 100%
                    );
                   box-shadow: 
            0 0 10px #4d81ee,
            0 0 80px #4d81ee,
            0 0 80px #4d81ee,
            0 0 0px #4d81ee,
                      
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

                
                                <RouteLoader  isVisible={isVisible} accentColor={accentColor} />
        <div className="fixed top-[-15%] inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center ">
          <div className="relative flex gap-8 object-heavy text-[400px] md:text-[600px] space-x-8 font-extrabold  text-[#00000044]  whitespace-nowrap animate-scroll">
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
        <Contact />
        <TechAbout />
<PageTestimonials />
        <PagesContactBar />
        <Footer />
      </div>
    </div>
  );
}
