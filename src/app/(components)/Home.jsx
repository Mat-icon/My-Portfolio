'use client'
import React from "react";
import Hero from "./Hero";
import { useEffect, useState } from "react";
import Loader from "./Loader";
const Home = () => {
  const [isloading, setIsLoading] = useState(true);


  useEffect(() => {
    
    const Loading =
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    

    return () => {
      clearTimeout(Loading);
    };
  }, []);
   if(isloading){
    return <Loader/>
   }
 

  return (
    <div className="w-full flex justify-center h-[100dvh] overflow-hidden">
      <div className="gradient-effect w-full h-full overflow-hidden ">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
      </div>
      <Hero />
    </div>
  );
};

export default Home;
