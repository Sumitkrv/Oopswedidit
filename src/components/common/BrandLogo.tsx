"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface BrandLogoProps {
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

export function BrandLogo({
  className = "",
  light = false,
  size = "md",
  animated = true,
}: BrandLogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-4xl sm:text-5xl",
    xl: "text-5xl sm:text-7xl",
  };

  const textColor = light ? "text-cream" : "text-coffee";
  const dotColor = "text-terracotta";

  if (!animated) {
    return (
      <Link
        href="/"
        className={`font-display font-bold tracking-tight inline-flex items-baseline select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded ${sizeClasses[size]} ${textColor} ${className}`}
        aria-label="oopswedidit home"
      >
        <span>oops</span>
        <span>wedidit</span>
        <span className={dotColor}>.</span>
      </Link>
    );
  }

  // Smooth signature entrance: "oops" slides softly from left (-12px), "wedidit" from right (+12px), settling into place
  return (
    <Link
      href="/"
      className={`font-display font-bold tracking-tight inline-flex items-baseline select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded ${sizeClasses[size]} ${textColor} ${className}`}
      aria-label="oopswedidit home"
    >
      <motion.span
        initial={{ opacity: 0, x: -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5"
      >
        oops
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
      >
        wedidit
      </motion.span>
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
        className={`inline-block ${dotColor} transition-transform duration-300 group-hover:scale-125`}
      >
        .
      </motion.span>
    </Link>
  );
}

