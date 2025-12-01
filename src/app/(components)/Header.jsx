'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Model = ({ path, position, scale = 1, seed = 0, mousePosition, isHovering }) => {
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
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      const offset = offsetRef.current;
      
      // Calculate base position with random motion
      const containmentRadius = 0.4;
      const baseX = Math.sin(time * offset.speedX + offset.x) * containmentRadius;
      const baseY = Math.cos(time * offset.speedY + offset.y) * containmentRadius;
      const baseZ = Math.sin(time * offset.speedZ + offset.z) * containmentRadius * 0.5;
      
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
      currentOffset.current.x += (targetOffset.current.x - currentOffset.current.x) * lerpSpeed;
      currentOffset.current.y += (targetOffset.current.y - currentOffset.current.y) * lerpSpeed;
      
      // Apply combined position
      meshRef.current.position.x = initialPosition.current[0] + baseX + currentOffset.current.x;
      meshRef.current.position.y = initialPosition.current[1] + baseY + currentOffset.current.y;
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

  const responsiveScale = isMobile ? scale * 1.5 : scale;

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

const Header = () => {
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

  const getHomeLabelOpacity = () => {
    const fadeStart = 0;
    const fadeEnd = 0.15;
    
    if (scrollProgress < fadeStart) return 1;
    if (scrollProgress > fadeEnd) return 0;
    
    const progress = (scrollProgress - fadeStart) / (fadeEnd - fadeStart);
    const opacity = 1 - progress;
    console.log('Home opacity:', opacity, 'scrollProgress:', scrollProgress);
    return opacity;
  };




  return (
    <div ref={headerRef} className="relative h-[55vh] xl:h-[62vh] justify-center  flex text-center items-center">
      <div 
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: '100%', height: '90%', position: 'absolute', top: 0, left: 0, overflow: 'visible' }}
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Scene mousePosition={mousePosition} isHovering={isHovering} />
        </Canvas>
      </div>

      <div className="absolute z-10 bottom-0 flex flex-col items-center w-full pointer-events-none">
        <motion.span 
          className="text-xs md:text-[12px] mb-5 fonts md:mb-4 text-[#9D9D9D] uppercase tracking-wider"
          style={{ opacity: getHomeLabelOpacity() }}
        >
          Home
        </motion.span>
        
        <div className="w-[98%] text-[45px] leading-[1] tracking-[-3px] md:tracking-[-6px] poppins md:text-7xl lg:text-[88px] lg:w-9/12">
          <h1 className="text-center mx-auto">
       
              Hi<span className="font-serif">, </span>
          
              I<span className="font-serif">&apos;</span>m{" "}
          
              Matthew<span className="font-serif">,</span>{" "}
        
               <br className="lg:hidden block" />
              a{" "}
            <br className="hidden xl:block" />
            <span 
              className="all-text"
            >
              creative{" "}
            </span>
            
              developer
           
          </h1>
        </div>
        
        <p className="w-10/12 md:w-10/12 lg:w-5/12 2xl:w-6/12  text-[16px] text-center max-w-2xl text-[#9D9D9D] mt-6 our-text">
         I bring value to web development projects by merging <br/> technical expertise with creativity and aesthetics.
        </p>
      </div>
    </div>
  );
};

export default Header;