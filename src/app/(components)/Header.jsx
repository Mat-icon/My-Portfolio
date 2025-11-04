import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./App.scss";

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Try multiple scroll sources for Next.js compatibility
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      
      console.log('Scrolling - scrollY:', scrollY, 'windowHeight:', windowHeight);
      
      // Calculate progress based on scroll distance
      // Adjust multiplier to control how fast fade happens
      const maxScroll = windowHeight * 0.8;
      const progress = Math.max(0, Math.min(1, scrollY / maxScroll));
      
      console.log('Scroll progress:', progress);
      setScrollProgress(progress);
    };

    // Listen to both window scroll and document scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const getHeadingWordOpacity = (index, totalWords) => {
    const wordProgress = index / totalWords;
    const fadeStart = 0.15 + (wordProgress * 0.45);
    const fadeEnd = fadeStart + 0.12;
    
    if (scrollProgress < fadeStart) return 1;
    if (scrollProgress > fadeEnd) return 0;
    
    const progress = (scrollProgress - fadeStart) / (fadeEnd - fadeStart);
    return 1 - progress;
  };

  const getParagraphWordOpacity = (index, totalWords) => {
    const wordProgress = index / totalWords;
    const fadeStart = 0.60 + (wordProgress * 0.30);
    const fadeEnd = fadeStart + 0.08;
    
    if (scrollProgress < fadeStart) return 1;
    if (scrollProgress > fadeEnd) return 0;
    
    const progress = (scrollProgress - fadeStart) / (fadeEnd - fadeStart);
    return 1 - progress;
  };

  const paragraphText = "I bring value to web development projects by merging technical expertise with creativity and aesthetics.";
  const paragraphWords = paragraphText.split(" ");

  return (
    <div ref={headerRef} className="relative h-[60vh] xl:h-[62vh] justify-center z-10 flex text-center items-center">
      <div className="absolute bottom-0 flex flex-col items-center w-full">
        <motion.span 
          className="text-xs md:text-[13px] poppins mb-2 md:mb-4 text-gray-400 uppercase tracking-wider"
          style={{ opacity: getHomeLabelOpacity() }}
        >
          Home
        </motion.span>
        
        <div className="w-[94%] text-[40px] tracking-tighter md:text-7xl lg:text-[88px] lg:w-9/12 poppins">
          <h1 className="text-center mx-auto">
            <motion.span style={{ opacity: getHeadingWordOpacity(0, 6) }}>
              Hi<span className="font-serif">, </span>
            </motion.span>
            <motion.span style={{ opacity: getHeadingWordOpacity(1, 6) }}>
              I<span className="font-serif">&apos;</span>m{" "}
            </motion.span>
            <motion.span style={{ opacity: getHeadingWordOpacity(2, 6) }}>
              Matthew<span className="font-serif">,</span>{" "}
            </motion.span>
            <motion.span style={{ opacity: getHeadingWordOpacity(3, 6) }}>
              a{" "}
            </motion.span>
            <br className="hidden xl:block" />
            <motion.span 
              className="all-text"
              style={{ opacity: getHeadingWordOpacity(4, 6) }}
            >
              creative{" "}
            </motion.span>
            <motion.span style={{ opacity: getHeadingWordOpacity(5, 6) }}>
              &#123;developer&#125;.
            </motion.span>
          </h1>
        </div>
        
        <p className="w-10/12 md:w-10/12 lg:w-5/12 2xl:w-6/12 tracking-[-1px] md:text-[16px] text-[14px] text-center max-w-2xl text-[#9D9D9D] mt-4 our-text">
          {paragraphWords.map((word, index) => (
            <motion.span 
              key={index}
              style={{ opacity: getParagraphWordOpacity(index, paragraphWords.length) }}
            >
              {word}{index < paragraphWords.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Header;