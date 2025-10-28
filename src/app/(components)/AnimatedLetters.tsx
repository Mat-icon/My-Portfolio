"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

const TextRevealOnScroll = ({
  text,
  className = "",
  as = "span",
}: {
  text: ReactNode;
  className?: string;
  as?: "span" | "div";
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const Container = motion[as];

  // 💥 same animation as your original
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const letter = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  // Recursive render — allows JSX (spans, br, etc.)
  const renderText = (node: ReactNode, keyPrefix = ""): ReactNode => {
    if (typeof node === "string") {
      return node.split("").map((char, i) => (
        <motion.span
          key={`${keyPrefix}-${i}`}
          variants={letter}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ));
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => renderText(child, `${keyPrefix}-${i}`));
    }

    if (typeof node === "object" && node !== null && "props" in node) {
      const element = node as any;
      return (
        <element.type key={keyPrefix} {...element.props}>
          {renderText(element.props.children, keyPrefix + "-child")}
        </element.type>
      );
    }

    return node;
  };

  return (
    <Container
      ref={ref}
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {renderText(text)}
    </Container>
  );
};

export default TextRevealOnScroll;
