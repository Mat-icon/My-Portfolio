"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ── 3D Symbol Geometry Builders ──────────────────────────────────────
// Each symbol is built from real 3D primitives (boxes, spheres, torus)
// so they have actual depth and catch light properly.

const matProps = { color: "#7C7C7C", metalness: 0.7, roughness: 0.1 };

// ✳ Asterisk — 6 arms + center sphere
const Asterisk3D = () => {
  const arms = 6;
  const len = 0.95;
  const rad = 0.11;
  return (
    <group>
      {Array.from({ length: arms }).map((_, i) => (
        <mesh key={i} rotation={[0, 0, (i / arms) * Math.PI]} castShadow>
          <capsuleGeometry args={[rad, len, 8, 16]} />
          <meshStandardMaterial {...matProps} />
        </mesh>
      ))}
      <mesh castShadow>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
    </group>
  );
};

// ＃ Hash — 2 horizontal + 2 vertical bars
const Hash3D = () => {
  const len = 0.95;
  const gap = 0.28;
  const rad = 0.11;
  return (
    <group>
      <mesh position={[-gap, 0, 0]} rotation={[0, 0, -0.08]} castShadow>
        <capsuleGeometry args={[rad, len, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[gap, 0, 0]} rotation={[0, 0, -0.08]} castShadow>
        <capsuleGeometry args={[rad, len, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[0, gap, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <capsuleGeometry args={[rad, len, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[0, -gap, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <capsuleGeometry args={[rad, len, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
    </group>
  );
};

// < Left Angle Bracket — 2 angled bars
const AngleLeft3D = () => {
  const len = 0.65;
  const rad = 0.11;
  return (
    <group>
      <mesh position={[0.12, 0.20, 0]} rotation={[0, 0, Math.PI * 0.2]} castShadow>
        <capsuleGeometry args={[rad, len, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[0.12, -0.20, 0]} rotation={[0, 0, -Math.PI * 0.2]} castShadow>
        <capsuleGeometry args={[rad, len, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
    </group>
  );
};

// > Right Angle Bracket — mirror of <
const AngleRight3D = () => {
  const len = 0.65;
  const rad = 0.11;
  return (
    <group>
      <mesh position={[-0.12, 0.20, 0]} rotation={[0, 0, -Math.PI * 0.2]} castShadow>
        <capsuleGeometry args={[rad, len, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[-0.12, -0.20, 0]} rotation={[0, 0, Math.PI * 0.2]} castShadow>
        <capsuleGeometry args={[rad, len, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
    </group>
  );
};

// / Slash — one diagonal bar
const Slash3D = () => {
  const len = 1.0;
  const rad = 0.11;
  return (
    <group>
      <mesh rotation={[0, 0, Math.PI * 0.3]} castShadow>
        <capsuleGeometry args={[rad, len, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
    </group>
  );
};

// { Left Brace — top hook + middle point + bottom hook
const BraceLeft3D = () => {
  const rad = 0.09;
  return (
    <group>
      <mesh position={[0.12, 0.32, 0]} rotation={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[rad, 0.38, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[0.12, -0.32, 0]} rotation={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[rad, 0.38, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[0.2, 0.51, 0]} rotation={[0, 0, Math.PI / 3]} castShadow>
        <capsuleGeometry args={[rad, 0.22, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[0.2, -0.51, 0]} rotation={[0, 0, -Math.PI / 3]} castShadow>
        <capsuleGeometry args={[rad, 0.22, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[0.02, 0.09, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
        <capsuleGeometry args={[rad, 0.2, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[0.02, -0.09, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <capsuleGeometry args={[rad, 0.2, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
    </group>
  );
};

// } Right Brace — mirror of {
const BraceRight3D = () => {
  const rad = 0.09;
  return (
    <group>
      <mesh position={[-0.12, 0.32, 0]} rotation={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[rad, 0.38, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[-0.12, -0.32, 0]} rotation={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[rad, 0.38, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[-0.2, 0.51, 0]} rotation={[0, 0, -Math.PI / 3]} castShadow>
        <capsuleGeometry args={[rad, 0.22, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[-0.2, -0.51, 0]} rotation={[0, 0, Math.PI / 3]} castShadow>
        <capsuleGeometry args={[rad, 0.22, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[-0.02, 0.09, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <capsuleGeometry args={[rad, 0.2, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[-0.02, -0.09, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
        <capsuleGeometry args={[rad, 0.2, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
    </group>
  );
};

// @ At Sign — torus ring + inner loop + dot
const At3D = () => (
  <group>
    <mesh castShadow>
      <torusGeometry args={[0.38, 0.09, 16, 48]} />
      <meshStandardMaterial {...matProps} />
    </mesh>
    <mesh position={[0.08, -0.04, 0]} rotation={[0, 0, -0.3]} castShadow>
      <capsuleGeometry args={[0.08, 0.22, 8, 16]} />
      <meshStandardMaterial {...matProps} />
    </mesh>
    <mesh position={[-0.04, 0.08, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
      <capsuleGeometry args={[0.08, 0.22, 8, 16]} />
      <meshStandardMaterial {...matProps} />
    </mesh>
    <mesh castShadow>
      <sphereGeometry args={[0.14, 16, 16]} />
      <meshStandardMaterial {...matProps} />
    </mesh>
  </group>
);

// $ Dollar — vertical bar + S curves
const Dollar3D = () => {
  const rad = 0.09;
  return (
    <group>
      <mesh castShadow>
        <capsuleGeometry args={[0.08, 1.0, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[-0.09, 0.32, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <capsuleGeometry args={[rad, 0.22, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[-0.18, 0.18, 0]} rotation={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[rad, 0.22, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 3]} castShadow>
        <capsuleGeometry args={[rad, 0.32, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[0.18, -0.18, 0]} rotation={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[rad, 0.22, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
      <mesh position={[0.09, -0.32, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <capsuleGeometry args={[rad, 0.22, 8, 16]} />
        <meshStandardMaterial {...matProps} />
      </mesh>
    </group>
  );
};

// ! Exclamation — vertical bar + dot sphere
const Exclamation3D = () => (
  <group>
    <mesh position={[0, 0.16, 0]} castShadow>
      <capsuleGeometry args={[0.11, 0.55, 8, 16]} />
      <meshStandardMaterial {...matProps} />
    </mesh>
    <mesh position={[0, -0.3, 0]} castShadow>
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshStandardMaterial {...matProps} />
    </mesh>
  </group>
);

// ( Left Paren — arc from torus segments
const ParenLeft3D = () => (
  <group>
    <mesh position={[0.22, 0, 0]} rotation={[0, 0, Math.PI * 0.75]} castShadow>
      <torusGeometry args={[0.45, 0.1, 16, 32, Math.PI * 0.5]} />
      <meshStandardMaterial {...matProps} />
    </mesh>
  </group>
);

// ) Right Paren — mirror of (
const ParenRight3D = () => (
  <group>
    <mesh position={[-0.22, 0, 0]} rotation={[0, 0, -Math.PI * 0.25]} castShadow>
      <torusGeometry args={[0.45, 0.1, 16, 32, Math.PI * 0.5]} />
      <meshStandardMaterial {...matProps} />
    </mesh>
  </group>
);

// ── Symbol Selector ─────────────────────────────────────────────────
const SYMBOL_MAP = {
  "*": Asterisk3D,
  "#": Hash3D,
  "<": AngleLeft3D,
  ">": AngleRight3D,
  "/": Slash3D,
  "{": BraceLeft3D,
  "}": BraceRight3D,
  "@": At3D,
  $: Dollar3D,
  "!": Exclamation3D,
  "(": ParenLeft3D,
  ")": ParenRight3D,
};

// ── Floating 3D Symbol with animation ───────────────────────────────
const Symbol3DModel = ({ char, position, scale = 1.5, seed = 0, mousePosition, isHovering }) => {
  const groupRef = useRef();
  const initialPosition = useRef(position);
  const targetOffset = useRef({ x: 0, y: 0 });
  const currentOffset = useRef({ x: 0, y: 0 });

  const offsets = useMemo(
    () => ({
      x: Math.sin(seed * 123.456) * 0.5,
      y: Math.cos(seed * 456.789) * 0.5,
      z: Math.sin(seed * 789.123) * 0.5,
      sX: 0.15 + Math.sin(seed * 234.567) * 0.1,
      sY: 0.2 + Math.cos(seed * 567.891) * 0.1,
      sZ: 0.18 + Math.sin(seed * 890.123) * 0.08,
      rY: 0.004 + Math.sin(seed * 111) * 0.002,
      rX: 0.002 + Math.cos(seed * 222) * 0.002,
      rZ: 0.001 + Math.sin(seed * 333) * 0.001,
    }),
    [seed]
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Smooth sinusoidal drift
    const driftX = Math.sin(t * offsets.sX + offsets.x) * 0.35;
    const driftY = Math.cos(t * offsets.sY + offsets.y) * 0.35;
    const driftZ = Math.sin(t * offsets.sZ + offsets.z) * 0.15;

    // Mouse repulsion
    if (isHovering && mousePosition) {
      const dX = initialPosition.current[0];
      const dY = initialPosition.current[1];
      const len = Math.sqrt(dX * dX + dY * dY);
      targetOffset.current.x = (len > 0 ? dX / len : 0) * 1.5;
      targetOffset.current.y = (len > 0 ? dY / len : 0) * 1.5;
    } else {
      targetOffset.current.x = 0;
      targetOffset.current.y = 0;
    }

    currentOffset.current.x += (targetOffset.current.x - currentOffset.current.x) * 0.03;
    currentOffset.current.y += (targetOffset.current.y - currentOffset.current.y) * 0.03;

    groupRef.current.position.x = initialPosition.current[0] + driftX + currentOffset.current.x;
    groupRef.current.position.y = initialPosition.current[1] + driftY + currentOffset.current.y;
    groupRef.current.position.z = initialPosition.current[2] + driftZ;

    // Smooth continuous 3D rotation — the whole point of true 3D
    groupRef.current.rotation.y += offsets.rY;
    groupRef.current.rotation.x += offsets.rX;
    groupRef.current.rotation.z += offsets.rZ;
  });

  const SymbolComponent = SYMBOL_MAP[char];
  if (!SymbolComponent) return null;

  return (
    <group ref={groupRef} position={position} scale={[scale, scale, scale]}>
      <SymbolComponent />
    </group>
  );
};

// ── Page-specific symbol configurations ─────────────────────────────
// Positions within ±4.5 x, ±2 y — surrounding the header text with sensible spacing
const SYMBOL_CONFIGS = {
  home: {
    symbols: [
      { char: "<", position: [-4.2, -0.5, 0.5], scale: 1.8, seed: 1 },
      { char: "/", position: [-1.8, -2.8, 0.3], scale: 1.3, seed: 2 },
      { char: ">", position: [4.2, -0.8, 0.5], scale: 1.8, seed: 3 },
      { char: "{", position: [2.5, -2.2, 0.2], scale: 1.5, seed: 4 },
      { char: "}", position: [-0.5, 0.3, -0.2], scale: 1.5, seed: 5 },
    ],
  },
  about: {
    symbols: [
      { char: "(", position: [-4, 1.3, 0.5], scale: 1.6, seed: 6 },
      { char: ")", position: [4, 0.8, 0.5], scale: 1.6, seed: 7 },
      { char: "*", position: [-1.5, -1.8, 0.3], scale: 1.4, seed: 8 },
      { char: "{", position: [2, -1.2, 0.2], scale: 1.5, seed: 9 },
      { char: "}", position: [0.3, 2.0, -0.2], scale: 1.5, seed: 10 },
    ],
  },
  projects: {
    symbols: [
      { char: "<", position: [-4.2, 0.8, 0.5], scale: 1.7, seed: 11 },
      { char: ">", position: [4.2, 0.6, 0.5], scale: 1.7, seed: 12 },
      { char: "/", position: [0.3, -1.8, 0.3], scale: 1.4, seed: 13 },
      { char: "$", position: [-2, -0.6, 0.2], scale: 1.3, seed: 14 },
      { char: "!", position: [2.5, 1.6, -0.2], scale: 1.5, seed: 15 },
    ],
  },
  experiments: {
    symbols: [
      { char: "*", position: [-3.8, 1.2, 0.5], scale: 1.5, seed: 16 },
      { char: "#", position: [3.8, -0.5, 0.5], scale: 1.5, seed: 17 },
      { char: "@", position: [-1.2, -1.8, 0.3], scale: 1.5, seed: 18 },
      { char: "{", position: [2, 1.6, 0.2], scale: 1.5, seed: 19 },
      { char: "}", position: [-2.5, -0.6, -0.2], scale: 1.5, seed: 20 },
    ],
  },
  contact: {
    symbols: [
      { char: "@", position: [-4, 0.8, 0.5], scale: 1.7, seed: 21 },
      { char: "#", position: [3.8, -0.6, 0.5], scale: 1.5, seed: 22 },
      { char: "!", position: [-1.5, -1.8, 0.3], scale: 1.5, seed: 23 },
      { char: "(", position: [2.2, 1.6, 0.2], scale: 1.5, seed: 24 },
      { char: ")", position: [0.3, -1.0, -0.2], scale: 1.5, seed: 25 },
    ],
  },
};

// ── Scene Component ─────────────────────────────────────────────────
const SymbolScene = ({ page = "home", mousePosition, isHovering }) => {
  const config = SYMBOL_CONFIGS[page] || SYMBOL_CONFIGS.home;

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <directionalLight position={[-5, -5, 5]} intensity={2.5} />
      <pointLight position={[0, 5, 5]} intensity={3} color="#ffffff" />
      <pointLight position={[-5, -3, 3]} intensity={2.5} />
      <pointLight position={[3, -2, 4]} intensity={2} color="#ffffff" />

      {config.symbols.map((sym, i) => (
        <Symbol3DModel
          key={`${page}-${i}`}
          char={sym.char}
          position={sym.position}
          scale={sym.scale}
          seed={sym.seed}
          mousePosition={mousePosition}
          isHovering={isHovering}
        />
      ))}
    </>
  );
};

export { SymbolScene, SYMBOL_CONFIGS };
export default SymbolScene;
