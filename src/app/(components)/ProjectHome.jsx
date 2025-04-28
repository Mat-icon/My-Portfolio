"use client";
import Project from "./ProjectPage";

const ProjectHome = () => {
  return (
    <div className="w-full flex justify-center h-[100dvh] overflow-hidden">
      <div className="gradient-effect w-full h-full overflow-hidden ">
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
      </div>
      <Project />
    </div>
  );
};

export default ProjectHome;
