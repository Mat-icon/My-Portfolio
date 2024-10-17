'use client';
import React, { MouseEvent } from 'react';
import styles from './style.module.scss';

interface IndexProps {
  index: number;
  title: string;
  date: string,
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

export default function Index({ index, date, title, manageModal }: IndexProps) {
  const handleMouseEnter = (e: MouseEvent) => {
    manageModal(true, index, e.clientX, e.clientY);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    manageModal(false, index, e.clientX, e.clientY);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.project}>
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  );
}
