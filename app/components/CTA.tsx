"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function CTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-20 lg:py-28 bg-ink-black overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-slate/8 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Content */}
        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-eggshell leading-tight mb-5"
        >
          Ready to ship features
          <br /> with confidence?
        </motion.h2>
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base text-dusty-denim leading-relaxed max-w-lg mx-auto mb-8"
        >
          Join thousands of teams who trust FeatureGate to deploy safely and iterate faster.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.a
            href="#"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -1 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-ink-black bg-eggshell rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-eggshell/15"
          >
            Start your free trial
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-eggshell bg-transparent border border-eggshell/15 rounded-full hover:bg-eggshell/[0.06] hover:border-eggshell/25 transition-all duration-300"
          >
            Talk to sales
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-dusty-denim"
        >
          {["14-day free trial", "No credit card required", "Cancel anytime"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
