"use client";

import { useEffect, useState } from "react";
import { Layers, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Developers", href: "#developers" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      {/* Frame lines (match screenshot #2) */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-full border-x border-slate-200/60" />
      </div>

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-200 transition-transform group-hover:scale-105">
            <Layers className="w-4 h-4" aria-hidden />
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">
            FeatureFlow
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2"
          >
            Log in
          </a>
          <a
            href="#"
            className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg shadow-slate-200 inline-flex items-center gap-2"
          >
            Start Free
            <ArrowRight className="w-[18px] h-[18px]" aria-hidden />
          </a>
        </div>
      </div>
    </nav>
  );
}
