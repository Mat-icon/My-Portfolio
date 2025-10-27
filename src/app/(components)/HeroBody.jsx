import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ProjectHighlight from "./ProjectHighlight";
import Header from "./Header";
import Contactbar from "./Contactbar";

const HeroBody = () => {
  const [isProjectVisible, setIsProjectVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === projectRef.current) {
            setIsProjectVisible(entry.isIntersecting); // Trigger animation when in view
          }
          if (entry.target === contactRef.current) {
            setIsContactVisible(entry.isIntersecting); // Trigger animation when in view
          }
        });
      },
      {
        threshold: 0.05, // Adjust the threshold as needed for visibility
      }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  // Define animation for ProjectHighlight and Contactbar
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="test2 flex flex-col">
      <Header />

      <div ref={projectRef}>
        <motion.div
          initial="hidden"
          animate={isProjectVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <ProjectHighlight />
        </motion.div>
      </div>

      <Contactbar />
    </div>
  );
};

export default HeroBody;
