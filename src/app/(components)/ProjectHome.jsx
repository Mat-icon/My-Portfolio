"use client";

import React from "react";
import { useState } from "react";
import Project from "./ProjectPage";

const ProjectHome = () => {
  return (
    <div className="w-full h-auto  overflow-hidden">
      <div className="gradient-effect">
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
      </div>
      <Project />
    </div>
  );
};

export default ProjectHome;
