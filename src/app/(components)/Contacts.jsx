"use client";

import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Contactbar from "./Contactbar";
import Footer from "./Footer";

export default function Contacts({ currentRoute }) {
  return (
    <div className="flex flex-col relative  rounded overflow-hidden">
      <main className="w-full header">
        <div className="relative z-10 flex flex-col text-center items-center mt-32 ">
          <span className="text-xs md:text-[13px] poppins mb-2 md:mb-4 text-gray-400 uppercase tracking-wider">
            Contact
          </span>
          <h1 className=" w-[94%] text-[40px] tracking-tighter md:text-7xl lg:text-[88px] lg:w-9/12 poppins">
            Lets book a virtual <br/>space or  
            <span className=" text-[#ffd886]"> drop a line</span>
          </h1>
          <p className="w-10/12 md:w-10/12 lg:w-5/12 2xl:w-6/12 tracking-[-1px] text-[16px] text-center max-w-2xl text-[#9D9D9D] mt-4 our-text">
            Whether you have a project you want to work on together or just want
            to have a chat, you are in the right place: Let&#39;s get in touch
          </p>
        </div>
      </main>

      <style>{`
            @keyframes scrollWords {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scrollWords 410s linear infinite;
            }
               @keyframes pulse {
              0%, 100% {
                opacity: 1;
                filter: brightness(1);
                transform: scale(3);
              }
              50% {
                opacity: 0.85;
                filter: brightness(1.2);
                 transform: scale(3);
              }
            }
    
            @keyframes beamFlow {
              0% {
                transform: translateY(-100%);
              }
              100% {
                transform: translateY(150%);
              }
            }
    
            .luminous-vertical-beam {
              position: absolute;
              top: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                to bottom,
               transparent 0%,
                #ffd88633 5%,
                #ffd886cc 15%,
                #ffd886 50%,
                #ffd886cc 85%,
                #ffd88633 95%,
                transparent 100%
              );
             box-shadow: 
      0 0 10px #ffd886cc,
      0 0 80px #ffd88699,
      0 0 80px #ffd88666,
      0 0 0px #ffd88633;
                
              animation: pulse 0.5s ease-in-out infinite, beamFlow 3s linear infinite;
              will-change: transform;
              
              transition: height 0.8s ease-out;
            }
    
            .vertical-static-glow {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                to bottom,
                transparent 0%,
                rgba(255, 255, 255, 0.1) 20%,
                rgba(255, 255, 255, 0.2) 50%,
                rgba(255, 255, 255, 0.1) 80%,
                transparent 100%
              );
    
              box-shadow: 
                0 0 8px rgba(143, 255, 134, 0.3),
                0 0 15px rgba(143, 255, 134, 0.2);
            }
          `}</style>
      <div className="fixed top-[-15%] inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center ">
        <div className="relative flex gap-8 text-[560px] md:text-[700px] space-x-8 font-extrabold tracking-[-40px] text-[#00000044] font-mono whitespace-nowrap animate-scroll">
          <p>code</p>
          <p>beautiful interfaces</p>
          <p>code</p>
          <p>design</p>
          <p>creative logic</p>
          <p>design</p>
          {/* Duplicate for seamless loop */}
          <p>code</p>
          <p>beautiful interfaces</p>
          <p>code</p>
          <p>design</p>
          <p>creative logic</p>
          <p>design</p>
        </div>
      </div>

      <ContactForm />
      <Contactbar currentRoute={currentRoute} />
      <Footer currentRoute={currentRoute} />
    </div>
  );
}
