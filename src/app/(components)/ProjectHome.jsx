"use client";

import React from "react";
import { useState } from "react";
import Project from "./ProjectPage";

const ProjectHome = () => {
  return (
    <div className="w-full h-auto  ">
      <div className="gradient-effect w-full h-[100dvh] overflow-hidden">
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
      </div>
      <Project />
    </div>
  );
};

export default ProjectHome;
