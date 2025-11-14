// "use client";

// import { useState, useEffect } from "react";

// import Services from "../(components)/Programs/Service";
// import Contactbar from "./Contactbar";
// import Footer from "./Footer";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import LuminousBeam from "./LuminousBeam";

// export default function Project({currentRoute}) {

//   return (
//     <div >

//         {/* Content */}
//         <div className=" flex flex-col">
//           <main className="w-full header">
//             <div className="relative z-10 flex flex-col text-center items-center mt-32 ">

//               <span className="text-xs poppins text-gray-500 uppercase tracking-wider">
//                 Work
//               </span>
//               <h1 className="w-[94%] text-[40px] tracking-tighter md:text-7xl lg:text-[88px] lg:w-9/12 poppins">
//                 A collection of <br />
//                 best
//                 <span className=" text-[#fa9595]"> projects. </span>
//               </h1>
//               <p className="w-10/12 md:w-10/12 lg:w-5/12 2xl:w-6/12 tracking-[-1px] text-[16px] text-center max-w-2xl text-[#9D9D9D] mt-4 our-text">
//                 With many years in web development, I acquired extensive
//                 experience working on projects across multiple industries and
//                 technologies. Let me show you my best creations.
//               </p>
//             </div>
//                   <div className="mx-auto mt-4 flex justify-center">
//           <LuminousBeam height="h-[170px]" color="fa9595"/>
//         </div>
//           </main>
//            <style>{`
//         @keyframes scrollWords {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-scroll {
//           animation: scrollWords 410s linear infinite;
//         }
//            @keyframes pulse {
//           0%, 100% {
//             opacity: 1;
//             filter: brightness(1);
//             transform: scale(3);
//           }
//           50% {
//             opacity: 0.85;
//             filter: brightness(1.2);
//              transform: scale(3);
//           }
//         }

//         @keyframes beamFlow {
//           0% {
//             transform: translateY(-100%);
//           }
//           100% {
//             transform: translateY(150%);
//           }
//         }

//         .luminous-vertical-beam {
//           position: absolute;
//           top: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             to bottom,
//            transparent 0%,
//             #fa959533 5%,
//             #fa9595cc 15%,
//             #fa9595 50%,
//             #fa9595cc 85%,
//             #fa959533 95%,
//             transparent 100%
//           );
//          box-shadow:
//   0 0 10px #fa9595cc,
//   0 0 80px #fa959599,
//   0 0 80px #fa959566,
//   0 0 0px #fa959533;

//           animation: pulse 0.5s ease-in-out infinite, beamFlow 3s linear infinite;
//           will-change: transform;

//           transition: height 0.8s ease-out;
//         }

//         .vertical-static-glow {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             to bottom,
//             transparent 0%,
//             rgba(255, 255, 255, 0.1) 20%,
//             rgba(255, 255, 255, 0.2) 50%,
//             rgba(255, 255, 255, 0.1) 80%,
//             transparent 100%
//           );

//           box-shadow:
//             0 0 8px rgba(143, 255, 134, 0.3),
//             0 0 15px rgba(143, 255, 134, 0.2);
//         }
//       `}</style>
//       <div className="fixed top-[-15%] inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center ">
//             <div className="relative flex gap-8 text-[560px] md:text-[700px] space-x-8 font-extrabold tracking-[-40px] text-[#00000044] font-mono whitespace-nowrap animate-scroll">
//               <p>code</p>
//               <p>beautiful interfaces</p>
//               <p>code</p>
//               <p>design</p>
//               <p>creative logic</p>
//               <p>design</p>
//               {/* Duplicate for seamless loop */}
//               <p>code</p>
//               <p>beautiful interfaces</p>
//               <p>code</p>
//               <p>design</p>
//               <p>creative logic</p>
//               <p>design</p>
//             </div>
//           </div>

//           <Services />
//           <Contactbar currentRoute={currentRoute}/>

//           <Footer currentRoute={currentRoute} />
//         </div>
//       </div>

//   );
// }

"use client";

import React, { useState, useEffect, useRef } from "react";
import PagesContactBar from "./PagesContactBar";
import Footer from "./Footer";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import LuminousBeam from "./LuminousBeam";
import PageTestimonials from "./PagesTestimonial";
import Services from "../(components)/Programs/Service";

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

export default function Project() {
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
            <span className="text-xs md:text-[13px] poppins mb-4 md:mb-4 text-white uppercase tracking-wider">
              Work
            </span>
            <h1 className=" w-[94%] text-[#09090B] text-5xl tracking-tighter md:text-7xl lg:text-[92px] lg:w-9/12 poppins">
              A collection<br className='block md:hidden'/> of <br  className="hidden md:block"/>
              my best
              <span className=" text-[#e14f62]"> projects.</span>
            </h1>
            <p className="w-11/12 md:w-10/12 text-white lg:w-5/12 2xl:w-6/12 tracking-[-1px] text-[16px] text-center max-w-2xl mt-6  md:mt-4 our-text">
              With many years in web development, I acquired extensive
              experience working on projects across multiple industries
              <br className='md:block hidden'/> and technologies. Let me show you my best creations.
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
                      #e14f6233 5%,
                      #e14f62cc 15%,
                      #e14f62 50%,
                      #e14f62cc 85%,
                      #e14f6233 95%,
                      transparent 100%
                    );
                   box-shadow: 
            0 0 10px #e14f62cc,
            0 0 80px #e14f6299,
            0 0 80px #e14f6266,
            0 0 0px #e14f6233;
                      
                      
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
          <div className="relative flex gap-8 text-[560px] md:text-[700px] space-x-8 font-extrabold tracking-[-40px] text-[#0000003d] font-mono whitespace-nowrap animate-scroll">
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
        <Services />
        <PageTestimonials />
        <PagesContactBar />
        <Footer />
      </div>
    </div>
  );
}
