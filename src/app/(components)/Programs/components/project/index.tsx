// "use client";
// import React, { MouseEvent, useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";

// interface IndexProps {
//   index: number;
//   title: string;
//   date: string;
//   link: string;
//   description: string;
//   lang: string[];
//   image?: string;
//   bookBg: string;
//   bookBorder: string;
//   manageModal: (active: boolean, index: number, x: number, y: number) => void;
// }

// export default function Index({
//   index,
//   date,
//   title,
//   link,
//   lang,
//   bookBg,
//   bookBorder,
//   description,
//   image,
//   manageModal,
// }: IndexProps) {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isImageHovered, setIsImageHovered] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const projectRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           } else {
//             setIsVisible(false);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     if (projectRef.current) {
//       observer.observe(projectRef.current);
//     }

//     return () => {
//       window.removeEventListener("resize", checkMobile);
//       if (projectRef.current) {
//         observer.unobserve(projectRef.current);
//       }
//     };
//   }, []);

//   const handleMouseEnter = (e: MouseEvent) => {
//     if (!isMobile) {
//       setIsHovered(true);
//       manageModal(true, index, e.clientX, e.clientY);
//     }
//   };

//   const handleMouseLeave = (e: MouseEvent) => {
//     if (!isMobile) {
//       setIsHovered(false);
//       manageModal(false, index, e.clientX, e.clientY);
//     }
//   };

//   const formattedNumber = String(index + 1).padStart(2, "0");

//   const containerVariant = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
//     },
//   };

//   const numberVariant = {
//     hidden: {},
//     visible: {
//       transition: {
//         duration: 0.8,
//         delay: 0,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//     hovered: {
//       opacity: 0,
//       transition: {
//         duration: 0.4,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//   };

//   // Image variant for container hover (just scale)
//   const imageContainerHoverVariant = {
//     hidden: { opacity: 0, scale: 0.9, y: 20 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//     containerHovered: {
//       opacity: 1,
//       scale: 1.05,
//       y: 0,
//       transition: {
//         duration: 0.4,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.9,
//       y: 20,
//       transition: {
//         duration: 0.3,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//   };

//   // 3D book wrapper variant
//   const bookWrapperVariant = {
//     hidden: {
//       rotateY: 0,
//       rotateX: 0,
//     },
//     visible: {
//       rotateY: -15,
//       rotateX: 5,
//       transition: {
//         duration: 0.6,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//   };

//   // Paper layers with progressive depth
//   const paperLayerVariant = (index: number) => ({
//     hidden: {
//       opacity: 0,
//       x: 0,
//       y: 0,
//     },
//     visible: {
//       opacity: 1,
//       x: -5 - index * 3,
//       y: 2 + index * 2,
//       transition: {
//         duration: 0.4,
//         delay: 0.1 + index * 0.05,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//   });

//   // Main image with 3D transform
//   const imageVariant = {
//     hidden: {
//       rotateY: 0,
//       rotateX: 0,
//     },
//     visible: {
//       rotateY: 0,
//       rotateX: 0,
//       transition: {
//         duration: 0.5,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//   };

//   return (
//     <Link href={link} className="w-full" target="_blank">
//       <motion.div
//         ref={projectRef}
//         initial="hidden"
//         animate={isVisible ? "visible" : "hidden"}
//         variants={containerVariant}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         className={`backdrop-blur-md relative px-[15px] lg:px-[30px] ${
//           isMobile ? "py-[20px] pb-[30px]" : "py-[50px] lg:py-[70px]"
//         }`}
//         style={{
//           display: "flex",
//           flexDirection: isMobile ? "column" : "row",
//           width: "100%",
//           justifyContent: "space-between",
//           alignItems: isMobile ? "flex-start" : "center",
//           border: "0.5px solid #15191E",
//           marginTop: "15px",
//           borderRadius: "3px",
//           cursor: "pointer",
//           backgroundColor: "color-mix(in oklab, #1E232B 25%, transparent)",
//         }}
//       >
//         <AnimatePresence>
//           {isMobile && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
//               className="w-full mx-auto mb-6 -mt-8"
//               style={{
//                 zIndex: 9999,
//                 perspective: "1200px",
//               }}
//               onMouseEnter={() => setIsImageHovered(true)}
//               onMouseLeave={() => setIsImageHovered(false)}
//             >
//               {/* 3D Book wrapper */}
//               <motion.div
//                 initial="hidden"
//                 animate={isImageHovered ? "visible" : "hidden"}
//                 variants={bookWrapperVariant}
//                 style={{
//                   transformStyle: "preserve-3d",
//                   position: "relative",
//                 }}
//               >
//                 {/* Paper stack layers - visible when hovering on image */}
//                 {isImageHovered && (
//                   <>
//                     {/* Layer 4 - deepest */}
//                     <motion.div
//                       initial="hidden"
//                       animate="visible"
//                       variants={paperLayerVariant(3)}
//                       className={`absolute top-0 left-0 w-full h-[200px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
//                       style={{
//                         zIndex: 1,
//                         transformStyle: "preserve-3d",
//                       }}
//                     />

//                     {/* Layer 3 */}
//                     <motion.div
//                       initial="hidden"
//                       animate="visible"
//                       variants={paperLayerVariant(2)}
//                       className={`absolute top-0 left-0 w-full h-[200px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
//                       style={{
//                         zIndex: 2,
//                         transformStyle: "preserve-3d",
//                       }}
//                     />

//                     {/* Layer 2 */}
//                     <motion.div
//                       initial="hidden"
//                       animate="visible"
//                       variants={paperLayerVariant(1)}
//                       className={`absolute top-0 left-0 w-full h-[200px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
//                       style={{
//                         zIndex: 3,
//                         transformStyle: "preserve-3d",
//                       }}
//                     />

//                     {/* Layer 1 - closest to main image */}
//                     <motion.div
//                       initial="hidden"
//                       animate="visible"
//                       variants={paperLayerVariant(0)}
//                       className={`absolute top-0 left-0 w-full h-[200px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
//                       style={{
//                         zIndex: 4,
//                         transformStyle: "preserve-3d",
//                       }}
//                     />
//                   </>
//                 )}

//                 {/* Main image */}
//                 <motion.div
//                   variants={imageVariant}
//                   className="relative w-full h-[200px] overflow-hidden rounded-[3px] border border-[#646262da] shadow-2xl"
//                   style={{
//                     zIndex: 5,
//                     transformStyle: "preserve-3d",
//                     backgroundColor: "#000",
//                   }}
//                 >
//                   <Image
//                     src={`/images/${image as string}`}
//                     alt={title}
//                      width={600}
//                     height={700}
//                     className="object-cover w-full h-full rounded-[3px]"
//                   />
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <div className="w-full flex items-start justify-between">
//           <div className="flex items-start">
//             <motion.h3
//               initial={false}
//               animate={isHovered ? "hovered" : isVisible ? "visible" : "hidden"}
//               variants={numberVariant}
//               className="fonts text-[#fff] text-[16px]"
//               style={{ transition: "all 0.4s" }}
//             >
//               {formattedNumber}
//             </motion.h3>
//             <div>
//               <div className="ml-2 md:ml-4">
//                 <h2
//                   className="tracking-tighter lowercase poppins text-black text-[30px] xl:text-[40px]"
//                   style={{
//                     margin: "0px",
//                     fontWeight: 400,
//                     transition: "all 0.4s",
//                     transform:
//                       isHovered && !isMobile ? "translateX(-35px)" : "none",
//                   }}
//                 >
//                   {title}
//                 </h2>
//                 <h4
//                   className="text-[12px] des tracking-tighter fonts font-light text-[#9D9D9D] mb-2"
//                   style={{
//                     transition: "all 0.4s",
//                     transform:
//                       isHovered && !isMobile ? "translateX(-35px)" : "none",
//                   }}
//                 >
//                   {description}
//                 </h4>

//                 <div
//                   className="flex flex-wrap gap-1 xl:gap-2 "
//                   style={{
//                     transition: "all 0.4s",
//                     fontWeight: 300,
//                     transform:
//                       isHovered && !isMobile ? "translateX(-35px)" : "none",
//                   }}
//                 >
//                   {lang.map((lan, idx) => (
//                     <span
//                       key={idx}
//                       className="px-4 fonts tracking-tighter py-[6px] border-[0.5px] lowercase border-[#131613] text-[12px] rounded-full bg-[#1E232B] text-[#fff] backdrop-blur-md"
//                     >
//                       {lan}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center gap-[1px]">
//             <motion.span
//               initial={false}
//               className="fonts text-sm md:text-[16px]  text-[#fff]"
//               style={{
//                 transition: "all 0.4s",
//                 transform: isHovered && !isMobile ? "translateX(-10px)" : "none",
//               }}
//             >
//               {date}
//             </motion.span>
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 16 16"
//               fill="none"
//               className="rotate-[1deg]"
//               style={{
//                 transition: "all 0.4s",
//                 opacity: isHovered && !isMobile ? 1 : 0,
//               }}
//             >
//               <path
//                 d="M4 12L12 4M12 4H4M12 4V12"
//                 stroke="#ffffff"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//         </div>
//         <AnimatePresence>
//           {/* Image with 3D book effect - desktop version */}
//           {!isMobile && isHovered && (
//             <motion.div
//               initial="hidden"
//               animate="containerHovered"
//               exit="exit"
//               variants={imageContainerHoverVariant}
//               className="absolute top-[-2%] left-1/2"
//               style={{
//                 transform: "translate(-50%, -50%)",
//                 zIndex: 9999,
//                 perspective: "1200px",
//               }}
//               onMouseEnter={() => setIsImageHovered(true)}
//               onMouseLeave={() => setIsImageHovered(false)}
//             >
//               {/* 3D Book wrapper */}
//               <motion.div
//                 initial="hidden"
//                 animate={isImageHovered ? "visible" : "hidden"}
//                 variants={bookWrapperVariant}
//                 style={{
//                   transformStyle: "preserve-3d",
//                   position: "relative",
//                 }}
//               >
//                 {/* Paper stack layers - visible when hovering on image */}
//                 {isImageHovered && (
//                   <>
//                     {/* Layer 4 - deepest */}
//                     <motion.div
//                       initial="hidden"
//                       animate="visible"
//                       variants={paperLayerVariant(3)}
//                       className={`absolute top-0 left-0 w-[400px] h-[250px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
//                       style={{
//                         zIndex: 1,
//                         transformStyle: "preserve-3d",
//                       }}
//                     />

//                     {/* Layer 3 */}
//                     <motion.div
//                       initial="hidden"
//                       animate="visible"
//                       variants={paperLayerVariant(2)}
//                       className={`absolute top-0 left-0 w-[400px] h-[250px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
//                       style={{
//                         zIndex: 2,
//                         transformStyle: "preserve-3d",
//                       }}
//                     />

//                     {/* Layer 2 */}
//                     <motion.div
//                       initial="hidden"
//                       animate="visible"
//                       variants={paperLayerVariant(1)}
//                       className={`absolute top-0 left-0 w-[400px] h-[250px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
//                       style={{
//                         zIndex: 3,
//                         transformStyle: "preserve-3d",
//                       }}
//                     />

//                     {/* Layer 1 - closest to main image */}
//                     <motion.div
//                       initial="hidden"
//                       animate="visible"
//                       variants={paperLayerVariant(0)}
//                       className={`absolute top-0 left-0 w-[400px] h-[250px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
//                       style={{
//                         zIndex: 4,
//                         transformStyle: "preserve-3d",
//                       }}
//                     />
//                   </>
//                 )}

//                 {/* Main image */}
//                 <motion.div
//                   variants={imageVariant}
//                   className="relative w-[400px] h-[250px] overflow-hidden rounded-[3px] border border-[#646262da] shadow-2xl"
//                   style={{
//                     zIndex: 5,
//                     transformStyle: "preserve-3d",

//                   }}
//                 >
//                   <Image
//                     src={`/images/${image as string}`}
//                     alt={title}
//                     width={1450}
//                     height={250}
//                     className="object-cover h-full rounded-[3px]"
//                   />
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </Link>
//   );
// }

"use client";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface IndexProps {
  index: number;
  title: string;
  date: string;
  link: string;
  description: string;
  lang: string[];
  image?: string;
  bookBg: string;
  bookBorder: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

export default function Index({
  index,
  date,
  title,
  link,
  lang,
  bookBg,
  bookBorder,
  description,
  image,
  manageModal,
}: IndexProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (e: MouseEvent) => {
    if (!isMobile) {
      setIsHovered(true);
      manageModal(true, index, e.clientX, e.clientY);
    }
  };

  const handleMouseLeave = (e: MouseEvent) => {
    if (!isMobile) {
      setIsHovered(false);
      manageModal(false, index, e.clientX, e.clientY);
    }
  };

  const formattedNumber = String(index + 1).padStart(2, "0");

  const containerVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const numberVariant = {
    hidden: {},
    visible: {
      transition: {
        duration: 0.8,
        delay: 0,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hovered: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageContainerHoverVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    containerHovered: {
      opacity: 1,
      scale: 1.05,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const bookWrapperVariant = {
    hidden: {
      rotateY: 0,
      rotateX: 0,
    },
    visible: {
      rotateY: -15,
      rotateX: 5,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const paperLayerVariant = (index: number) => ({
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: -5 - index * 3,
      y: 2 + index * 2,
      transition: {
        duration: 0.4,
        delay: 0.1 + index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  });

  const imageVariant = {
    hidden: {
      rotateY: 0,
      rotateX: 0,
    },
    visible: {
      rotateY: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Link href={link} className="w-full" target="_blank">
      <motion.div
        ref={projectRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariant}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`backdrop-blur-md relative px-[15px] lg:px-[30px] ${
          isMobile ? "py-[20px] pb-[30px]" : "py-[50px] lg:py-[70px]"
        }`}
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          marginTop: isMobile ? "60px" : "15px",
          border: "0.5px solid #15191E",
          borderRadius: "3px",
          cursor: "pointer",
          backgroundColor: "color-mix(in oklab, #1E232B 25%, transparent)",
        }}
      >
        {/* ---------------- MOBILE IMAGE TOP ---------------- */}
        <AnimatePresence>
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full mx-auto mb-8 -mt-16"
              style={{
                zIndex: 9999,
                perspective: "1200px",
              }}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <motion.div
                initial="hidden"
                animate={isImageHovered ? "visible" : "hidden"}
                variants={bookWrapperVariant}
                style={{
                  transformStyle: "preserve-3d",
                  position: "relative",
                }}
              >
                {isImageHovered && (
                  <>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={paperLayerVariant(3)}
                      className={`absolute top-0 left-0 w-full h-[150px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
                      style={{ zIndex: 1, transformStyle: "preserve-3d" }}
                    />
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={paperLayerVariant(2)}
                      className={`absolute top-0 left-0 w-full h-[150px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
                      style={{ zIndex: 2, transformStyle: "preserve-3d" }}
                    />
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={paperLayerVariant(1)}
                      className={`absolute top-0 left-0 w-full h-[150px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
                      style={{ zIndex: 3, transformStyle: "preserve-3d" }}
                    />
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={paperLayerVariant(0)}
                      className={`absolute top-0 left-0 w-full h-[150px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
                      style={{ zIndex: 4, transformStyle: "preserve-3d" }}
                    />
                  </>
                )}

                <motion.div
                  variants={imageVariant}
                  className="relative w-full h-[150px] overflow-hidden rounded-[3px] border border-[#646262da] shadow-2xl"
                  style={{
                    zIndex: 5,
                    transformStyle: "preserve-3d",
                    backgroundColor: "#000",
                  }}
                >
                  <Image
                    src={`/images/${image as string}`}
                    alt={title}
                    width={600}
                    height={700}
                    className="object-cover w-full h-full rounded-[3px]"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---------------- MOBILE LAYOUT FIX ---------------- */}
        {isMobile ? (
          <div className="w-full">
            {/* Top row number + date */}
            <div className="flex w-full justify-between items-center mb-2">
              <span className="fonts text-[#c2c0c0da] text-[15px]">
                {formattedNumber}
              </span>
              <span className="fonts text-sm text-[#c2c0c0da]">{date}</span>
            </div>

            {/* Content */}
            <h2 className="tracking-[-1px] poppins text-white text-[26px]">{title}</h2>

            {/* <h4 className="text-[12px] des tracking-tighter fonts font-light text-[#9D9D9D] mb-2">
              {description}
            </h4> */}

            <div className="flex flex-wrap mt-2 md:mt-0 gap-2">
              {lang.map((lan, idx) => (
                <span
                  key={idx}
                  className="px-4 fonts tracking-tighter py-[6px] border-[0.5px] lowercase text-[12px] rounded-full bg-[#1E232B] text-[#fff] border-[#131613] backdrop-blur-md"
                >
                  {lan}
                </span>
              ))}
            </div>
          </div>
        ) : (
          /* ---------------- DESKTOP (UNCHANGED) ---------------- */
          <div className="w-full flex items-start justify-between">
            <div className="flex items-start">
              <motion.h3
                initial={false}
                animate={
                  isHovered ? "hovered" : isVisible ? "visible" : "hidden"
                }
                variants={numberVariant}
                className="fonts text-[#c2c0c0da] text-[15px]"
                style={{ transition: "all 0.4s" }}
              >
                {formattedNumber}
              </motion.h3>

              <div className="ml-2 md:ml-4">
                <h2
                  className="tracking-[-1px] poppins text-white text-[26px] xl:text-[40px]"
                  style={{
                    margin: "0px",
                    fontWeight: 400,
                    transition: "all 0.4s",
                    transform: isHovered ? "translateX(-35px)" : "none",
                  }}
                >
                  {title}
                </h2>

                <h4
                  className="text-[12px] des tracking-tighter fonts font-light text-[#9D9D9D] mb-2"
                  style={{
                    transition: "all 0.4s",
                    transform: isHovered ? "translateX(-35px)" : "none",
                  }}
                >
                  {description}
                </h4>

                <div
                  className="flex flex-wrap gap-1 xl:gap-2"
                  style={{
                    transition: "all 0.4s",
                    transform: isHovered ? "translateX(-35px)" : "none",
                  }}
                >
                  {lang.map((lan, idx) => (
                    <span
                      key={idx}
                      className="px-4 fonts tracking-tighter py-[6px] border-[0.5px] lowercase text-[12px] rounded-full bg-[#1E232B] text-[#fff] border-[#131613] backdrop-blur-md"
                    >
                      {lan}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[1px]">
              <motion.span
                initial={false}
                className="fonts text-sm md:text-[15px] text-[#c2c0c0da]"
                style={{
                  transition: "all 0.4s",
                  transform: isHovered ? "translateX(-10px)" : "none",
                }}
              >
                {date}
              </motion.span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="rotate-[1deg]"
                style={{
                  transition: "all 0.4s",
                  opacity: isHovered ? 1 : 0,
                }}
              >
                <path
                  d="M4 12L12 4M12 4H4M12 4V12"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}

        {/* ---------------- DESKTOP FLOATING IMAGE ---------------- */}
        <AnimatePresence>
          {!isMobile && isHovered && (
            <motion.div
              initial="hidden"
              animate="containerHovered"
              exit="exit"
              variants={imageContainerHoverVariant}
              className="absolute top-[-2%] left-1/2"
              style={{
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
                perspective: "1200px",
              }}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <motion.div
                initial="hidden"
                animate={isImageHovered ? "visible" : "hidden"}
                variants={bookWrapperVariant}
                style={{
                  transformStyle: "preserve-3d",
                  position: "relative",
                }}
              >
                {isImageHovered && (
                  <>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={paperLayerVariant(3)}
                      className={`absolute top-0 left-0 w-[400px] h-[250px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
                      style={{ zIndex: 1, transformStyle: "preserve-3d" }}
                    />

                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={paperLayerVariant(2)}
                      className={`absolute top-0 left-0 w-[400px] h-[250px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
                      style={{ zIndex: 2, transformStyle: "preserve-3d" }}
                    />

                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={paperLayerVariant(1)}
                      className={`absolute top-0 left-0 w-[400px] h-[250px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
                      style={{ zIndex: 3, transformStyle: "preserve-3d" }}
                    />

                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={paperLayerVariant(0)}
                      className={`absolute top-0 left-0 w-[400px] h-[250px] rounded-[3px] ${bookBg} border-l border-t border-b ${bookBorder}`}
                      style={{ zIndex: 4, transformStyle: "preserve-3d" }}
                    />
                  </>
                )}

                <motion.div
                  variants={imageVariant}
                  className="relative w-[400px] h-[250px] overflow-hidden rounded-[3px] border border-[#646262da] shadow-2xl"
                  style={{
                    zIndex: 5,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    src={`/images/${image as string}`}
                    alt={title}
                    width={1450}
                    height={250}
                    className="object-cover h-full rounded-[3px]"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}
