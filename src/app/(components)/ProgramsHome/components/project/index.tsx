"use client";
import React, { MouseEvent } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

interface IndexProps {
  index: number;
  title: string;
  date: string;
  link: string;
  description: string;
  lang: string[];
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

export default function Index({
  index,
  date,
  title,
  link,
  lang,
  description,
  manageModal,
}: IndexProps) {
  const handleMouseEnter = (e: MouseEvent) => {
    manageModal(true, index, e.clientX, e.clientY);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    manageModal(false, index, e.clientX, e.clientY);
  };

    const formattedNumber = String(index + 1).padStart(2, "0");

  return (
    <Link href={link} className="w-full" target="_blank">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={` backdrop-blur-md ${styles.project}`}
      >
        <div className="flex ">
          {" "}
          <h3 className=" fonts text-[#c2c0c0da] text-[15px] ">{formattedNumber }</h3>
          <div>
            <div className="ml-4">
            <h2 className="tracking-tighter  poppins">{title}</h2>
            <h4 className="text-[12px] des tracking-tighter fonts font-light text-slate-300 mb-4">
              {description}
            </h4>
            <div className="flex flex-wrap gap-2">
              {lang.map((lan, index) => (
                <p
                  className="px-4 fonts tracking-tight py-[5px] border-[0.5px] lowercase border-[#646262da]   md:text-[11px] rounded-full bg-[#161616] text-[#dfdcdcda]   backdrop-blur-md"
                  key={index}
                >
                  {lan}
                </p>
              ))}
            </div>
            </div>
          </div>
        </div>
        <span className="fonts text-sm md:text-[15px] text-[#c2c0c0da]">
          {date}
        </span>
      </div>
    </Link>
  );
}
