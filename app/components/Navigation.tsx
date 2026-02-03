"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

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
      initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 0.26, ease: "easeOut" }
      }
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-eggshell/80 backdrop-blur-xl border-b border-ink-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-ink-black rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <svg
                width="16"
                height="16"
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
            </div>
            <span className="text-ink-black font-semibold text-lg tracking-tight">
              FeatureGate
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveHref(link.href)}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 underline decoration-2 underline-offset-[10px] ${
                  activeHref === link.href
                    ? "text-accent-blue decoration-accent-blue/60"
                    : "text-blue-slate hover:text-ink-black decoration-transparent hover:decoration-ink-black/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-blue-slate hover:text-ink-black transition-colors duration-200 px-4 py-2"
            >
              Sign in
            </a>
            <a
              href="#"
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-eggshell bg-ink-black rounded-full hover:bg-deep-space-blue transition-all duration-200 hover:shadow-lg hover:shadow-ink-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
            >
              Get Started
              <span className="pointer-events-none absolute left-5 right-5 bottom-2 h-px bg-accent-blue/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ink-black"
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
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-ink-black/5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveHref(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                    activeHref === link.href
                      ? "text-accent-blue bg-ink-black/5"
                      : "text-blue-slate hover:text-ink-black hover:bg-ink-black/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-ink-black/5">
                <a
                  href="#"
                  className="px-4 py-3 text-base font-medium text-blue-slate hover:text-ink-black transition-colors duration-200"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="mx-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-eggshell bg-ink-black rounded-full hover:bg-deep-space-blue transition-all duration-200"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
