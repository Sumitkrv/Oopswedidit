"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-terracotta z-50 origin-left pointer-events-none"
    />
  );
}

