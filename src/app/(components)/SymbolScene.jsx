"use client";

import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const SymbolModel = ({
  char,
  position,
  scale = .8,
  seed = 0,
  accentColor = "#8fff86",
  mousePosition,
  isHovering,
}) => {
  const meshRef = useRef();
  const initialPosition = useRef(position);
  const targetOffset = useRef({ x: 0, y: 0 });
  const currentOffset = useRef({ x: 0, y: 0 });

  // Unique random offsets per symbol based on seed
  const offsetRef = useRef({
    x: Math.sin(seed * 123.456) * 0.5,
    y: Math.cos(seed * 456.789) * 0.5,
    z: Math.sin(seed * 789.123) * 0.5,
    speedX: 0.15 + Math.sin(seed * 234.567) * 0.1,
    speedY: 0.2 + Math.cos(seed * 567.891) * 0.1,
    speedZ: 0.18 + Math.sin(seed * 890.123) * 0.08,
    rotSpeedY: 0.002 + Math.sin(seed * 111) * 0.001,
    rotSpeedX: 0.001 + Math.cos(seed * 222) * 0.001,
    rotSpeedZ: 0.0008 + Math.sin(seed * 333) * 0.0005,
  });

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const o = offsetRef.current;

    // Smooth sinusoidal drift — no yoyo/reset, perfectly looping
    const driftRadius = 0.35;
    const driftX = Math.sin(time * o.speedX + o.x) * driftRadius;
    const driftY = Math.cos(time * o.speedY + o.y) * driftRadius;
    const driftZ = Math.sin(time * o.speedZ + o.z) * driftRadius * 0.4;

    // Mouse repulsion
    if (isHovering && mousePosition) {
      const dirX = initialPosition.current[0];
      const dirY = initialPosition.current[1];
      const len = Math.sqrt(dirX * dirX + dirY * dirY);
      const nx = len > 0 ? dirX / len : 0;
      const ny = len > 0 ? dirY / len : 0;
      targetOffset.current.x = nx * 1.5;
      targetOffset.current.y = ny * 1.5;
    } else {
      targetOffset.current.x = 0;
      targetOffset.current.y = 0;
    }

    // Smooth lerp for mouse interaction
    currentOffset.current.x +=
      (targetOffset.current.x - currentOffset.current.x) * 0.03;
    currentOffset.current.y +=
      (targetOffset.current.y - currentOffset.current.y) * 0.03;

    // Apply position
    meshRef.current.position.x =
      initialPosition.current[0] + driftX + currentOffset.current.x;
    meshRef.current.position.y =
      initialPosition.current[1] + driftY + currentOffset.current.y;
    meshRef.current.position.z = initialPosition.current[2] + driftZ;

    // Smooth continuous rotation — never resets
    meshRef.current.rotation.y += o.rotSpeedY;
    meshRef.current.rotation.x += o.rotSpeedX;
    meshRef.current.rotation.z += o.rotSpeedZ;
  });

  return (
    <Text
      ref={meshRef}
      position={position}
      fontSize={scale}
      font="/fonts/ObjectSans-Heavy.otf"
      anchorX="center"
      anchorY="middle"
      characters="{}()<>/*@$#!"
    >
      {char}
      <meshStandardMaterial
        color={accentColor}
        metalness={0.85}
        roughness={0.15}
        transparent
        opacity={0.7}
      />
    </Text>
  );
};

// Page-specific symbol configurations
const SYMBOL_CONFIGS = {
  home: {
    symbols: [
      { char: "<", position: [-6, 0.5, -1], scale: 0.55, seed: 1 },
      { char: "/", position: [-3, -1.2, -0.5], scale: 0.4, seed: 2 },
      { char: ">", position: [6, 0.3, -1], scale: 0.55, seed: 3 },
      { char: "{", position: [3, -0.8, -0.8], scale: 0.45, seed: 4 },
      { char: "}", position: [-1, 1.2, -1.2], scale: 0.45, seed: 5 },
    ],
  },
  about: {
    symbols: [
      { char: "(", position: [-5.5, 0.8, -1], scale: 0.5, seed: 6 },
      { char: ")", position: [5.5, 0.6, -1], scale: 0.5, seed: 7 },
      { char: "*", position: [-2, -1, -0.5], scale: 0.35, seed: 8 },
      { char: "{", position: [2.5, -0.5, -0.8], scale: 0.45, seed: 9 },
      { char: "}", position: [0, 1.5, -1.2], scale: 0.45, seed: 10 },
    ],
  },
  projects: {
    symbols: [
      { char: "<", position: [-6, 0.3, -1], scale: 0.5, seed: 11 },
      { char: ">", position: [6, 0.5, -1], scale: 0.5, seed: 12 },
      { char: "/", position: [0, -1.2, -0.5], scale: 0.4, seed: 13 },
      { char: "$", position: [-3, -0.6, -0.8], scale: 0.38, seed: 14 },
      { char: "!", position: [3.5, 1, -1.2], scale: 0.35, seed: 15 },
    ],
  },
  experiments: {
    symbols: [
      { char: "*", position: [-5, 0.5, -1], scale: 0.4, seed: 16 },
      { char: "#", position: [5, -0.3, -1], scale: 0.45, seed: 17 },
      { char: "@", position: [-1.5, -1.2, -0.5], scale: 0.38, seed: 18 },
      { char: "{", position: [2, 1, -0.8], scale: 0.45, seed: 19 },
      { char: "}", position: [-3, -0.5, -1.2], scale: 0.45, seed: 20 },
    ],
  },
  contact: {
    symbols: [
      { char: "@", position: [-5.5, 0.6, -1], scale: 0.5, seed: 21 },
      { char: "#", position: [5, -0.4, -1], scale: 0.45, seed: 22 },
      { char: "!", position: [-2, -1, -0.5], scale: 0.35, seed: 23 },
      { char: "(", position: [2.5, 1.2, -0.8], scale: 0.42, seed: 24 },
      { char: ")", position: [0, -0.8, -1.2], scale: 0.42, seed: 25 },
    ],
  },
};

const SymbolScene = ({ page = "home", accentColor = "#8fff86", mousePosition, isHovering }) => {
  const config = SYMBOL_CONFIGS[page] || SYMBOL_CONFIGS.home;

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, -5, 5]} intensity={1.5} />
      <pointLight position={[0, 5, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={1.5} />

      {config.symbols.map((sym, i) => (
        <SymbolModel
          key={`${page}-${i}`}
          char={sym.char}
          position={sym.position}
          scale={sym.scale}
          seed={sym.seed}
          accentColor={accentColor}
          mousePosition={mousePosition}
          isHovering={isHovering}
        />
      ))}
    </>
  );
};

export { SymbolScene, SYMBOL_CONFIGS };
export default SymbolScene;
