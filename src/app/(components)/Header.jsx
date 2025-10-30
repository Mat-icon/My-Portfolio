import React, { useState } from "react";
import "./App.scss";

const Header = () => {
  return (
    <div className="relative z-10 flex flex-col text-center items-center mt-24 md:mt-24">
      <span className="text-xs md:text-[13px] poppins mb-2 md:mb-4 text-gray-400 uppercase tracking-wider">
        Home
      </span>
      <div className="w-[94%] text-[40px] tracking-tight md:text-7xl lg:text-[95px] lg:w-10/12 poppins">
        <h1 className="text-center mx-auto xl:leading-[82px] leading-[60px] scale-[1.1] md:scale-[0.95] xl:leading-0 xl:[word-spacing:-10px]">
          Hi<span className="font-serif">, </span> I
          <span className="font-serif">&apos;</span>m Matthew
          <span className="font-serif">,</span> a {""}
          <br className="hidden xl:block" />
          <span className="all-text">creative </span> developer.
        </h1>
      </div>
      <p className="w-10/12 md:w-10/12 lg:w-5/12 2xl:w-6/12 tracking-tighter md:text-[16px] text-[14px] text-center max-w-2xl text-gray-400 mt-4  our-text">
        I bring value to web development projects by merging technical expertise
        with creativity and aesthetics.
      </p>
    </div>
  );
};

export default Header;
