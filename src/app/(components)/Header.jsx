import React, { useState} from "react";
import AnimatedLetters from "./AnimatedLetters";
import './App.scss'

const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["m", " ", "M", "a", "t", "t", "h", "e", "w", " ", "a"];

  return (
    <>
      <main className="w-full header" >
        <div className="relative z-10 flex flex-col text-center items-center mt-32 ">
          {" "}
          <div className="words-container">
            <div className="word">
              <p>&lt;h1&gt;</p>
              <p>&lt;br&gt;</p>
              <p>&lt;div&gt;</p>
            </div>
          </div>
          <span className="text-xs poppins text-gray-500 uppercase tracking-wider">
            Home
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal  mt-4 lg:w-10/12 poppins g">
            Hi<span className=" font-serif">&#44;</span> I
            <span className="font-serif">&#39;</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br /> <span className="all-text"> creative </span>developer
          </h1>
          <p className=" w-11/12 md:w-10/12 lg:w-6/12 2xl:w-5/12 text-base max-w-2xl text-gray-400 mt-8 our-text">
            I bring value to web development projects by merging technical
            expertise with creativity and aesthetics.
          </p>
        </div>
      </main>
    </>
  );
};

export default Header;
