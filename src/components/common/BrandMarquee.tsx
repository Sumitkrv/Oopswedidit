"use client";

import { motion } from "motion/react";

interface BrandMarqueeProps {
  className?: string;
  items?: string[];
  speed?: number;
  reversed?: boolean;
}

const DEFAULT_ITEMS = [
  "DESIGN THAT SPEAKS",
  "IDEAS THAT WORK",
  "BRANDS THAT STAND OUT",
  "DIGITAL DONE DIFFERENTLY",
  "SURPRISE & DELIGHT",
  "COMMERCIAL CLARITY",
];

export function BrandMarquee({
  className = "",
  items = DEFAULT_ITEMS,
  speed = 28,
  reversed = false,
}: BrandMarqueeProps) {
  // Duplicate array to ensure infinite loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden bg-coffee text-cream py-5 sm:py-6 border-y border-coffee-dark select-none ${className}`}
      role="region"
      aria-label="Studio ethos marquee"
    >
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        animate={{
          x: reversed ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {repeatedItems.map((phrase, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="font-display font-bold text-sm sm:text-base md:text-lg tracking-[0.2em] text-cream">
              {phrase}
            </span>
            {/* Small Terracotta Separator */}
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta inline-block" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

