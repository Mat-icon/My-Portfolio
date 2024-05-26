import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="gradient-effect">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
      </div>
      <Hero />
    </div>
  );
};

export default Home;
