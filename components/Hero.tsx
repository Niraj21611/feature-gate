"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import the Remotion player to avoid SSR issues
const DashboardPlayer = dynamic(
  () => import("./DashboardPlayer").then((mod) => mod.DashboardPlayer),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-[520/400] bg-white rounded-2xl shadow-2xl shadow-ink-black/[0.06] border border-ink-black/[0.04] animate-pulse" />
    ),
  }
);

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-eggshell pt-16">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-dusty-denim/8 via-blue-slate/5 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-ink-black/[0.04] rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-xs font-medium text-blue-slate tracking-wide">
                Now available for enterprise
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink-black leading-[1.08] tracking-tight mb-5"
            >
              Ship features
              <br />
              <span className="text-blue-slate">with </span>
              <span className="text-accent-blue">confidence</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base lg:text-lg text-dusty-denim leading-relaxed max-w-md mx-auto lg:mx-0 mb-8"
            >
              The modern feature management platform that helps teams{" "}
              <span className="text-blue-slate">deploy safely</span>, experiment freely, and iterate faster.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.a
                href="#"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -1 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-eggshell bg-ink-black rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-ink-black/10"
              >
                Start for free
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-ink-black bg-white border border-ink-black/[0.08] rounded-full hover:bg-ink-black/[0.02] hover:border-ink-black/[0.12] transition-all duration-300"
              >
                <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch demo
              </a>
            </motion.div>

            {/* Minimal social proof */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-ink-black/[0.04]"
            >
              <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-dusty-denim/70 font-medium tracking-wide">
                {["Vercel", "Stripe", "Linear", "Notion"].map((company) => (
                  <span key={company} className="hover:text-ink-black/50 transition-colors duration-300">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Remotion Animated Dashboard */}
            <DashboardPlayer />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
