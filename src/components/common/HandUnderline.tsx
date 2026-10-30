"use client";

import { motion } from "motion/react";

interface HandUnderlineProps {
  className?: string;
  color?: string;
  width?: string;
  height?: number;
}

export function HandUnderline({
  className = "",
  color = "#C46F39",
  width = "100%",
  height = 14,
}: HandUnderlineProps) {
  return (
    <svg
      viewBox="0 0 300 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width, height }}
      className={`pointer-events-none block ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M 5 18 C 65 6, 175 4, 295 14 C 235 22, 115 22, 45 19"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
    </svg>
  );
}

