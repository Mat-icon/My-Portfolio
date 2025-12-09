"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const RouteLoader = ({ isVisible }) => {
  const pathname = usePathname();

  // Define colors for each route
  const getRouteColor = () => {
    switch (pathname) {
      case "/":
        return "#8fff86"; // blue-500
      case "/about-me":
        return "#4d81ee"; // violet-500
      case "/projects":
        return "#e14f62"; // pink-500
      case "/contact":
        return "#91d1f8"; // emerald-500
        case "/experiments":
        return "#E1B84F"; 
      default:
        return "#8fff86"; // default blue
    }
  };

  const routeColor = getRouteColor();

  // Prevent scrolling while loader is active
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="route-loader"
          className="absolute  inset-0 z-[99999] md:ml-[3%] w-full md:w-[97%]  backdrop-blur-md flex items-center justify-center"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "200%" }}
          transition={{
            y: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          style={{
            overflow: "hidden",
          }}
        >
          {/* DARK BACKDROP */}
          <motion.div
            className="absolute inset-0"
            style={{
              height: "100%",
              width: "100%",
            }}
            initial={{ backgroundColor: "rgba(0,0,0,1)", opacity: 1 }}
            animate={{
              opacity: 0.9,
              backgroundColor: "rgba(0,0,0,1)",
              transition: {
                duration: 0.8,
                delay: 0.8, // wait for svg rotation first
              },
            }}
            exit={{
              opacity: 0.6,
              backgroundColor: "rgba(0,0,0,0.9)",
              transition: { duration: 0.4 },
            }}
          />

          {/* SVG LOGO */}
          <motion.div
            className="relative z-10 flex items-center justify-center"
            initial={{ rotate: 0, scale: 1.3 }}
            animate={{
              rotate: 180,
              scale: 1,
              transition: {
                rotate: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
                scale: { duration: 0.8 }
              }
            }}
            exit={{
              rotate: 180,
              scale: 0.9,
              transition: { duration: 0.4 }
            }}
          >
            <div className="rotate-90 scale-[7.65] flex items-center -space-x-[3px]">
              <span
                className="w-3 h-3 p-[6px] border-t-[4px] border-l-[4px] rounded-sm rotate-[-45deg]"
                style={{ borderColor: routeColor }}
              />
              <span
                className="w-[4px] h-6 rotate-[10deg] rounded-bl-[1px] rounded-tr-[1px] rounded-br-sm rounded-tl-sm" 
                style={{ backgroundColor: routeColor }}
              />
              <span
                className="w-3 h-3 p-[6px] border-t-[4px] border-r-[4px] rounded-sm rotate-[45deg]"
                style={{ borderColor: routeColor }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RouteLoader;