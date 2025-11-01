import { usePathname } from "next/navigation";
import React from "react";


const Footer = () => {
  const pathname = usePathname();
  
  
    let spanColor;
    if(pathname === "/"){
      spanColor = "text-[#8FFF86]"
    }else if(pathname === "/About"){
      spanColor = "text-[#95bdfa]"
    }
    else if(pathname === "/ProjectsPage"){
      spanColor = "text-[#fa9595]"
    }else{
       spanColor = "text-[#8FFF86]"
    }


  return (
    <div className="w-full h-[70vh] glossy-25 px-2 xl:px-10 backdrop-blur-sm  tracking-tighter top-full absolute mt-4 footer-content">
      <div className="w-full flex flex-col space-y-52 relative top-1/4  items-center">
        <div className="flex flex-col text-sm   sm:flex-col sm:flex md:flex justify-between items-center md:flex-row md:items-center md:space-x-4  w-11/12">
        <div className="flex items-center space-x-2">
          <div className="rotate-90 gap-[1px] flex items-center">
            <span className="w-2 h-2 border-t-4 border-l-4 border-[#8fff86] rotate-[-45deg]" />
            <span className="w-1 h-3 bg-[#8fff86] rotate-[30deg] rounded-full" />
            <span className="w-2 h-2 border-t-4 border-r-4 border-[#8fff86] rotate-[45deg]" />
          </div>
          <span className="text-xl font-normal tracking-[-2px] ">
            matthew 
             <span className={`${spanColor}`}>
                 &#123;ameh&#125;
            </span>
          </span>
          </div>
          <div className=" space-x-6 text-base text-[#9D9D9D] tracking-[-1px] first-letter: ">
            <a href="/" className="hover:text-white hover:scale-105" style={{ transition: "ease-in 0.5s" }}>home</a>
            <a href="/ProjectsPage" className="hover:text-white hover:scale-105" style={{ transition: "ease-in 0.5s" }}>projects</a>
            <a href="/About" className="hover:text-white hover:scale-105" style={{ transition: "ease-in 0.5s" }}>about</a>
            <a href="/contact" className="hover:text-white hover:scale-105" style={{ transition: "ease-in 0.5s" }}>contact</a>
          </div>
        </div>
        <div className="w-11/12 flex flex-col md:flex-row md:justify-between items-center md:items-center">
         
          <div className="text-center tracking-[-1px] sm:text-sm md:text-base text-sm text-[#9D9D9D]">
            2024 - 2025 Matthew Ameh | Freelance Web Developer
          </div>
          <div className="flex space-x-6 tracking-[-1px]  sm:text-sm md:text-base text-sm mb-2 text-[#9D9D9D]">
            <a href="#privacy-policy" className="hover:text-white" style={{ transition: "ease-in 0.5s" }}>
              privacy policy
            </a>
            <a href="#cookie-free" className="hover:text-white " style={{ transition: "ease-in 0.5s" }}>
              cookie-free website
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
