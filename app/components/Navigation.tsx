"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("#product");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const anchorLine = 120;
      let current: string | null = null;
      for (const link of navLinks) {
        const target = document.querySelector(link.href);
        if (!target) continue;
        const rect = (target as HTMLElement).getBoundingClientRect();
        if (rect.top <= anchorLine && rect.bottom > anchorLine) {
          current = link.href;
          break;
        }
      }

      if (current) {
        setActiveHref((prev) => (prev === current ? prev : current));
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion ? undefined : { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
      }
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-eggshell/90 backdrop-blur-2xl border-b border-ink-black/[0.04] shadow-sm shadow-ink-black/[0.02]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <motion.div 
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-7 h-7 bg-ink-black rounded-md flex items-center justify-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="text-eggshell"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
            <span className="text-ink-black font-semibold text-base tracking-tight">
              FeatureGate
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-0.5 bg-ink-black/[0.03] rounded-full p-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full ${
                    activeHref === link.href
                      ? "text-ink-black"
                      : "text-blue-slate hover:text-ink-black"
                  }`}
                >
                  {activeHref === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#"
              className="text-sm font-medium text-blue-slate hover:text-ink-black transition-colors duration-300 px-3 py-1.5"
            >
              Sign in
            </a>
            <motion.a
              href="#"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="relative px-5 py-2 text-sm font-medium text-eggshell bg-ink-black rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-ink-black/15"
            >
              <span className="relative z-10">Get Started</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ink-black rounded-lg hover:bg-ink-black/5 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
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
                <path d="M4 12h16M4 6h16M4 18h16" />
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
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      setActiveHref(link.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`block px-4 py-2.5 text-base font-medium rounded-lg transition-all duration-200 ${
                      activeHref === link.href
                        ? "text-ink-black bg-white shadow-sm"
                        : "text-blue-slate hover:text-ink-black hover:bg-ink-black/[0.03]"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-4 mt-4 border-t border-ink-black/[0.05] space-y-2">
                  <a
                    href="#"
                    className="block px-4 py-2.5 text-base font-medium text-blue-slate hover:text-ink-black transition-colors duration-200"
                  >
                    Sign in
                  </a>
                  <a
                    href="#"
                    className="block mx-4 text-center px-5 py-2.5 text-base font-medium text-eggshell bg-ink-black rounded-full transition-all duration-200"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
