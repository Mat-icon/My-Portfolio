"use client";

import { useEffect, useRef } from "react";

const words = ["code", "beautiful interfaces", "code", "design", "creative logic", "design"];

const getScrollParent = (element) => {
  let parent = element?.parentElement;

  while (parent) {
    const { overflowY } = window.getComputedStyle(parent);
    if (overflowY === "auto" || overflowY === "scroll") return parent;
    parent = parent.parentElement;
  }

  return window;
};

const getScrollTop = (container) =>
  container === window ? window.scrollY : container.scrollTop;

export default function ScrollDrivenMarquee({ className = "" }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const scrollParent = getScrollParent(track);
    let previousScroll = getScrollTop(scrollParent);
    let currentX = 0;
    let targetX = 0;
    let frameId;

    const wrapPosition = (value) => {
      const loopWidth = track.scrollWidth / 2;
      if (!loopWidth) return value;
      while (value <= -loopWidth) value += loopWidth;
      while (value > 0) value -= loopWidth;
      return value;
    };

    const onScroll = () => {
      const nextScroll = getScrollTop(scrollParent);
      const delta = nextScroll - previousScroll;
      previousScroll = nextScroll;
      targetX = wrapPosition(targetX - delta * 1.15);
    };

    const animate = () => {
      const loopWidth = track.scrollWidth / 2;
      if (loopWidth && Math.abs(targetX - currentX) > loopWidth / 2) {
        currentX = targetX;
      }
      currentX += (targetX - currentX) * 0.18;
      currentX = wrapPosition(currentX);
      track.style.transform = `translate3d(${currentX}px, 0, 0)`;
      frameId = requestAnimationFrame(animate);
    };

    scrollParent.addEventListener("scroll", onScroll, { passive: true });
    frameId = requestAnimationFrame(animate);

    return () => {
      scrollParent.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={trackRef} className={className}>
      {[...words, ...words].map((word, index) => (
        <p key={`${word}-${index}`}>{word}</p>
      ))}
    </div>
  );
}
