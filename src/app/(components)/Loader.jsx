import React from "react";
import { Rings } from "react-loader-spinner";


const Loader = () => {
  return (
    <div className="w-full h-[100dvh]  flex justify-center items-center">
      <div className="gradient-effect w-full h-full overflow-hidden">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
      </div>

      <div className="w-11/12 md:w-[38%]  border border-[#81808079] bg-[#00000027] rounded-[4px] h-10 md:h-12 relative z-10 flex items-center ">
       <div className="w-[15%] md:w-[10%] font-bold flex items-center justify-center">M</div>
       <div className="w-[1px] bg-[#81808079] h-full"></div>
       <div className="w-[70%] md:w-[80%] flex items-center justify-center">
          <span className="text-base  font-medium text-center fonts">
            matthew
            <span className="text-base md:text-lg all-text">&lt;ameh&gt;</span>
          </span>
        </div>
        <div className="w-[1px] bg-[#81808079] h-full"></div>
        <header className="w-[15%] md:w-[10%]  h-12 flex justify-center items-center  relative z-10">
        <Rings
          visible={true}
          height="50"
          width="50"
          color="#4fa94d"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        </header>
      </div>
    </div>
  );
};

export default Loader;
