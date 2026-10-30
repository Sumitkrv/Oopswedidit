"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { FaqItem } from "@/config/site";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-coffee/15 border-y border-coffee/15 max-w-4xl mx-auto">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="py-6 sm:py-8 transition-colors">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-start justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-lg cursor-pointer group"
              aria-expanded={isOpen}
            >
              <span className="font-display font-bold text-xl sm:text-2xl text-coffee group-hover:text-terracotta transition-colors">
                {faq.question}
              </span>
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  isOpen
                    ? "bg-terracotta text-cream"
                    : "bg-cream-card border border-coffee/15 text-coffee group-hover:border-terracotta"
                }`}
              >
                {isOpen ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-base sm:text-lg text-coffee/80 leading-relaxed font-sans pr-12">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

