import React from "react";
import { Rings } from "react-loader-spinner";


const Loader = () => {
  return (
    <div className="w-full h-screen  flex justify-center items-center ">
      <div className="gradient-effect w-full h-screen">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
      </div>
      <header className="w-7/12  h-12 flex justify-center items-center  relative z-10">
        <Rings
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </header>
    </div>
  );
};

export default Loader;
