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

  return (
    <Link href={link} className="w-full" target="_blank">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={` backdrop-blur-md ${styles.project}`}
      >
        <div>
          <h2 className="tracking-tighter  poppins">{title}</h2>
          <div className="text-[12px]  tracking-tighter fonts font-light text-slate-300 mb-4">{description}</div>
          <div className="flex flex-wrap gap-2">
            {lang.map((lan, index) => (
              <p
                className="px-4 fonts tracking-tight py-[5px] border-[0.5px] lowercase border-[#646262da]  text-[8px] md:text-[11px] rounded-full bg-[#161616] text-[#dfdcdcda]   backdrop-blur-md"
                key={index}
              >
                {lan}
              </p>
            ))}
          </div>
          
        </div>
        <p className="fonts text-[#c2c0c0da]">{date}</p>
      </div>
     
    </Link>
  );
}
