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
        <div className="w-[15%] md:w-[10%] flex items-center justify-center rotate-90 gap-[1px]">
          <span className="w-2 h-2 border-t-4 border-l-4 border-white rotate-[-45deg]" />
          <span className="w-1 h-3 bg-white rotate-[30deg] rounded-full" />
          <span className="w-2 h-2 border-t-4 border-r-4 border-white rotate-[45deg]" />
        </div>
        <div className="w-[1px] bg-[#81808079] h-full"></div>
        <div className="w-[70%] md:w-[80%] flex tracking-tighter items-center justify-center">
          <span className="text-base tracking-tighter  font-medium text-center fonts">
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
