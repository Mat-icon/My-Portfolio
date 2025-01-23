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
        className={styles.project}
      >
        <div>
          <h2>{title}</h2>
          <div className="text-[12px] font-light text-slate-400 mb-4">{description}</div>
          <div className="flex flex-wrap gap-2">
            {lang.map((lan, index) => (
              <p
                className="px-4 py-1 text-[14px] rounded-full bg-black/30 text-white backdrop-blur-md"
                key={index}
              >
                {lan}
              </p>
            ))}
          </div>
          
        </div>
        <p>{date}</p>
      </div>
     
    </Link>
  );
}
