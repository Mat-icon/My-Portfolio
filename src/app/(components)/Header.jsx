import React, { useState, useEffect, useRef } from "react";
import "./App.scss";

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress based on element position
        // Starts at 0 when element is at bottom of viewport
        // Reaches 1 when element top reaches top of viewport
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Start fading immediately when scrolling begins
        const scrollStart = windowHeight - elementHeight / 2;
        const scrollEnd = 0;
        
        const progress = Math.max(0, Math.min(1, 
          (scrollStart - elementTop) / (scrollStart - scrollEnd)
        ));
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate opacity for heading words (slower fade)
  const getHeadingWordOpacity = (index, totalWords) => {
    // Spread the fade across the entire scroll range
    const wordProgress = index / (totalWords - 1);
    const fadeStart = wordProgress * 0.8; // Start earlier
    const fadeEnd = fadeStart + 0.4; // Longer fade duration for slower effect
    
    if (scrollProgress < fadeStart) return 1;
    if (scrollProgress > fadeEnd) return 0;
    
    const progress = (scrollProgress - fadeStart) / (fadeEnd - fadeStart);
    // Ease out function for smoother fade
    return 1 - (progress * progress);
  };

  // Calculate opacity for paragraph words (faster fade)
  const getParagraphWordOpacity = (index, totalWords) => {
    // Faster fade - completes earlier in scroll
    const wordProgress = index / (totalWords - 1);
    const fadeStart = wordProgress * 0.4; // Start very early
    const fadeEnd = fadeStart + 0.2; // Shorter duration for faster fade
    
    if (scrollProgress < fadeStart) return 1;
    if (scrollProgress > fadeEnd) return 0;
    
    const progress = (scrollProgress - fadeStart) / (fadeEnd - fadeStart);
    return 1 - (progress * progress);
  };

  const headingWords = ["Hi,", "I'm", "Matthew,", "a", "creative", "developer."];
  const paragraphText = "";
  const paragraphWords = paragraphText.split(" ");



  return (
    <div ref={headerRef} className="relative  h-[60vh]  xl:h-[65vh]  justify-center z-10 flex  text-center items-center">
      <div className="absolute bottom-0 flex flex-col items-center w-full">
      <span 
        className="text-xs md:text-[13px] poppins mb-2 md:mb-4 text-gray-400 uppercase tracking-wider"
      >
        Home
      </span>
      <div className="w-[94%] text-[40px] tracking-tight md:text-7xl lg:text-[88px]  lg:w-9/12 poppins">
        <h1 className="text-center mx-auto">
          <span >
            Hi<span className="font-serif">, </span>
          </span>
          <span s >
            I<span className="font-serif">&apos;</span>m{" "}
          </span>
          <span  >
            Matthew<span className="font-serif">,</span>{" "}
          </span>
          <span >
            a{" "}
          </span>
          <br className="hidden xl:block" />
          <span 
            className="all-text" 
            
          >
            creative{" "}
          </span>
          <span  >
            &#123;developer&#125;.
          </span>
        </h1>
      </div>
      <p className="w-10/12 md:w-10/12  lg:w-5/12 2xl:w-6/12 tracking-[-1px] md:text-[16px] text-[14px] text-center max-w-2xl text-[#9D9D9D] mt-4 our-text">
        I bring value to web development projects by merging technical expertise with creativity and aesthetics.
      </p>
    
      </div>
    </div>
  );
};

export default Header;