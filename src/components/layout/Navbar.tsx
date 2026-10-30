"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/common/BrandLogo";
import { MagneticButton } from "@/components/common/MagneticButton";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-sm border-b border-coffee/10 shadow-[0_2px_12px_rgba(83,37,16,0.04)] py-3 sm:py-4"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with signature animated wordmark */}
          <div className="flex items-center">
            <BrandLogo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-cream-card/80 px-4 py-2 rounded-full border border-coffee/10"
            aria-label="Main Navigation"
          >
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-full ${
                    isActive
                      ? "text-terracotta font-semibold"
                      : "text-coffee/80 hover:text-terracotta"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-terracotta/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Rightmost CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <MagneticButton
              href="/contact"
              variant="primary"
              size="sm"
              withArrow
            >
              Let&apos;s Talk
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-full text-coffee hover:bg-peach/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-coffee" />
              ) : (
                <Menu className="w-6 h-6 text-coffee" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[72px] z-30 bg-cream flex flex-col justify-between px-6 py-10 md:hidden overflow-y-auto"
          >
            <div className="space-y-6 pt-4">
              <span className="text-xs uppercase tracking-widest text-terracotta font-bold">
                Navigation
              </span>
              <nav className="flex flex-col space-y-4">
                {siteConfig.navigation.map((item, index) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-4xl font-display font-bold tracking-tight block py-2 transition-colors ${
                          isActive
                            ? "text-terracotta"
                            : "text-coffee hover:text-terracotta"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <div className="pt-10 border-t border-coffee/10 space-y-6">
              <div className="flex flex-col space-y-2">
                <span className="text-xs uppercase tracking-wider text-coffee/60">
                  Direct Inquiries
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-base sm:text-lg font-medium text-coffee hover:text-terracotta transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
                <div className="flex flex-col space-y-1 pt-1">
                  {siteConfig.contact.phones.map((p) => (
                    <a
                      key={p.raw}
                      href={`tel:${p.raw}`}
                      className="text-sm font-medium text-coffee/80 hover:text-terracotta transition-colors"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-terracotta text-cream font-display font-semibold text-lg shadow-md hover:bg-coffee transition-colors"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
