import React from "react";
import {
  faMinus,
  faWindowMaximize,
  faX,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <div className=" nav w-11/12 head left-0 sticky top-0 z-10 p-4 mt-6">
      <div className=" flex justify-evenly  space-x-96">
        <div className=" -translate-x-20 ml-3 font-light text-lg logo font-serif">
          M
        </div>
        <div className="font-bold text-xl">
          matthew <span className=" text-lime-500">ameh</span>
        </div>
        <div className="flex space-x-8 text-gray-400 text-sm">
          <FontAwesomeIcon
            icon={faMinus}
            className="hover:text-white cursor-pointer"
            style={{ transition: "ease-in 0.5s" }}
          />
          <div
            className=" w-3 h-3 border border-gray-400 rounded-sm hover:text-white cursor-pointer"
            style={{ transition: "ease-in 0.5s" }}
          ></div>
          <FontAwesomeIcon
            icon={faX}
            className="hover:text-white cursor-pointer"
            style={{ transition: "ease-in 0.5s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
