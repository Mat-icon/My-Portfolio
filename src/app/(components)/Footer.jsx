import React from "react";


const Footer = () => {
  return (
    <div className="w-full h-96 top-full absolute mt-4 footer-content">
      <div className="w-full flex flex-col space-y-52 relative top-1/4  items-center">
        <div className="flex flex-col text-xs md:text-sm sm:flex-col sm:flex md:flex justify-between items-center md:flex-row md:items-center md:space-x-4  w-11/12">
          <span className="text-lg font-normal ">
            matthew 
             <span className="" style={{ color: "#8FFF86" }}>
                {''}&lt;ameh&gt;
            </span>
          </span>
          <div className=" space-x-6 text-gray-600 ">
            <a href="/" className="hover:text-white hover:scale-105" style={{ transition: "ease-in 0.5s" }}>home</a>
            <a href="/ProjectsPage" className="hover:text-white hover:scale-105" style={{ transition: "ease-in 0.5s" }}>projects</a>
            <a href="/About" className="hover:text-white hover:scale-105" style={{ transition: "ease-in 0.5s" }}>about</a>
            <a href="/contact" className="hover:text-white hover:scale-105" style={{ transition: "ease-in 0.5s" }}>contact</a>
          </div>
        </div>
        <div className="w-11/12 flex flex-col md:flex-row md:justify-between items-center md:items-center">
         
          <div className="text-center sm:text-sm md:text-sm text-xs text-gray-500">
             2024 Matthew Ameh | Freelance Web Developer -
            P.IVA IT03686021209
          </div>
          <div className="flex space-x-6  sm:text-sm md:text-sm text-xs mb-2 text-gray-500">
            <a href="#privacy-policy" className="hover:text-white hover:scale-105" style={{ transition: "ease-in 0.5s" }}>
              privacy policy
            </a>
            <a href="#cookie-free" className="hover:text-white hover:scale-105" style={{ transition: "ease-in 0.5s" }}>
              cookie-free website
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
