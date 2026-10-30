"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "coffee" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  type = "button",
  disabled = false,
  external = false,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!btnRef.current || window.matchMedia("(pointer: coarse)").matches) return;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * 0.22;
    const distanceY = (e.clientY - centerY) * 0.22;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "inline-flex items-center justify-center font-display font-semibold transition-all duration-300 rounded-full select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs tracking-wider uppercase gap-1.5",
    md: "px-6 py-3 text-sm sm:text-base gap-2",
    lg: "px-8 py-4 text-base sm:text-lg gap-2.5 shadow-sm",
  };

  const variantStyles = {
    primary:
      "bg-terracotta text-cream hover:bg-coffee hover:text-cream border border-transparent shadow-[0_4px_16px_rgba(196,111,57,0.25)] hover:shadow-[0_6px_20px_rgba(83,37,16,0.3)]",
    secondary:
      "bg-peach text-coffee hover:bg-terracotta hover:text-cream border border-transparent",
    coffee:
      "bg-coffee text-cream hover:bg-terracotta hover:text-cream border border-transparent shadow-[0_4px_16px_rgba(83,37,16,0.2)]",
    outline:
      "bg-transparent text-coffee hover:bg-terracotta hover:text-cream border-2 border-coffee hover:border-terracotta",
    ghost:
      "bg-transparent text-coffee hover:text-terracotta underline-offset-4 hover:underline px-0 py-0",
  };

  const content = (
    <motion.div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.1 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block focus:outline-none"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className="inline-block focus:outline-none">
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block bg-transparent p-0 border-0 focus:outline-none"
    >
      {content}
    </button>
  );
}

