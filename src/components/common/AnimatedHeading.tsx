"use client";

import { motion } from "motion/react";

interface AnimatedHeadingProps {
  children?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  className?: string;
  delay?: number;
  italicText?: string;
  italicClass?: string;
}

export function AnimatedHeading({
  children,
  as: Component = "h2",
  className = "",
  delay = 0,
}: AnimatedHeadingProps) {
  return (
    <Component className={`overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
          delay,
        }}
      >
        {children}
      </motion.span>
    </Component>
  );
}

