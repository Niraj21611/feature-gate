"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Learning", href: "#learning" },
  { label: "Books", href: "#books" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#about" },
];

export default function SpiritualNav() {
  const prefersReducedMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
      }
      className="fixed top-2 left-0 right-0 z-50 bg-[#EFEDE7] backdrop-blur-sm "
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo / Wordmark */}
          <a
            href="/"
            className="font-serif text-xl lg:text-2xl text-earth-dark tracking-tight hover:opacity-70 transition-opacity duration-300"
          >
            Sanctuary
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] text-black hover:text-earth-dark transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="flex flex-row items-center justify-center">
            {/* Login */}
      

            {/* Cart */}
            <a
              href="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-base text-stone-gray hover:text-earth-dark hover:bg-earth-dark/5 rounded-lg transition-all duration-200"
            >
              <ShoppingCart className="h-5 w-5 stroke-[2]" />
            </a>

                  <a
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-base text-stone-gray hover:text-earth-dark hover:bg-earth-dark/5 rounded-lg transition-all duration-200"
            >
              <User className="h-5 w-5 stroke-[2]" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-earth-dark hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden border-t border-earth-dark/5"
            >
              <div className="py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base text-stone-gray hover:text-earth-dark hover:bg-earth-dark/5 rounded-lg transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#begin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mx-4 mt-2 inline-flex items-center justify-center px-6 py-3 bg-earth-dark text-soft-white text-[15px] font-medium rounded-full hover:bg-stone-gray transition-all duration-300"
                >
                  Begin your journey
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
