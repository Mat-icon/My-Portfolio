import React from "react";
import Contacts from "./Contacts";

const ContactPage = () => {
  return (
    <div className="w-full flex justify-center h-[100dvh] overflow-hidden">
      <div className="gradient-effect w-full h-full overflow-hidden ">
        <div className="circle circle7"></div>
        <div className="circle circle8"></div>
      </div>
      <Contacts />
    </div>
  );
};

export default ContactPage;
