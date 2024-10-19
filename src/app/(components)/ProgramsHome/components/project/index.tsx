"use client";
import React, { MouseEvent } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

interface IndexProps {
  index: number;
  title: string;
  date: string;
  link: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

export default function Index({
  index,
  date,
  title,
  link,
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
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
    </Link>
  );
}
