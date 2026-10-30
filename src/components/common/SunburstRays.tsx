"use client";

import { motion } from "motion/react";

interface SunburstRaysProps {
  className?: string;
  size?: number;
  color?: string;
  animate?: boolean;
}

export function SunburstRays({
  className = "",
  size = 48,
  color = "#C46F39",
  animate = true,
}: SunburstRaysProps) {
  const rays = [
    { x1: 50, y1: 18, x2: 50, y2: 6 },
    { x1: 72, y1: 28, x2: 82, y2: 18 },
    { x1: 82, y1: 50, x2: 94, y2: 50 },
    { x1: 72, y1: 72, x2: 82, y2: 82 },
    { x1: 50, y1: 82, x2: 50, y2: 94 },
    { x1: 28, y1: 72, x2: 18, y2: 82 },
    { x1: 18, y1: 50, x2: 6, y2: 50 },
    { x1: 28, y1: 28, x2: 18, y2: 18 },
  ];

  if (!animate) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="10" fill={color} />
        {rays.map((ray, i) => (
          <line
            key={i}
            x1={ray.x1}
            y1={ray.y1}
            x2={ray.x2}
            y2={ray.y2}
            stroke={color}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        ))}
      </svg>
    );
  }

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block pointer-events-none ${className}`}
      aria-hidden="true"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.circle
        cx="50"
        cy="50"
        r="10"
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      />
      {rays.map((ray, i) => (
        <motion.line
          key={i}
          x1={ray.x1}
          y1={ray.y1}
          x2={ray.x2}
          y2={ray.y2}
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            delay: 0.2 + i * 0.04,
            duration: 0.3,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.svg>
  );
}

