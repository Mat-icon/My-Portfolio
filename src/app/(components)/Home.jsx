import React from "react";
import Header from "./Header";
import Hello from "./Hello";

const Home = () => {
  return (
    <div className="w-full h-screen relative">
  
      <div className="gradient-effect">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
      </div>
      <div className="flex align-middle">
      <Header/>
      <Hello/>
      </div>
     
     </div>
  
  );
};

export default Home;
