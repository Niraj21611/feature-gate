"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: prefersReducedMotion
        ? undefined
        : {
            staggerChildren: 0.045,
            delayChildren: 0.08,
          },
    },
  };

  const word = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    show: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.34, ease: "easeOut" },
        },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-eggshell via-eggshell to-white pt-20">
      {/* Subtle architectural grid (extremely low contrast) */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(13, 19, 33, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(13, 19, 33, 0.055) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 48%, rgba(0,0,0,0) 78%)",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 48%, rgba(0,0,0,0) 78%)",
          willChange: "transform",
        }}
        initial={prefersReducedMotion ? false : { x: 0, y: 0 }}
        animate={prefersReducedMotion ? undefined : { x: -18, y: -12 }}
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 42,
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror",
              }
        }
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-dusty-denim/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-slate/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-ink-black/5 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-slate">
                Now available for enterprise teams
              </span>
            </div>

            {/* Headline */}
            <motion.h1
              variants={container}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-ink-black leading-[1.1] tracking-tight mb-6"
            >
              <span className="block">
                {["Ship", "features"].map((w) => (
                  <motion.span
                    key={w}
                    variants={word}
                    className="inline-block"
                  >
                    {w}&nbsp;
                  </motion.span>
                ))}
              </span>
              <span className="block">
                <motion.span
                  variants={word}
                  className="inline-block text-blue-slate"
                >
                  with&nbsp;
                </motion.span>
                <motion.span
                  variants={word}
                  className="inline-block text-accent-blue"
                >
                  confidence
                </motion.span>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 0.38, ease: "easeOut", delay: 0.22 }
              }
              className="text-lg lg:text-xl text-dusty-denim leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              The modern feature management platform that helps engineering
              teams <span className="text-accent-blue">deploy safely</span>,
              experiment freely, and iterate faster than ever before.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 0.32, ease: "easeOut", delay: 0.32 }
              }
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-eggshell bg-ink-black rounded-full hover:bg-deep-space-blue transition-all duration-200 hover:shadow-xl hover:shadow-ink-black/15 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
              >
                Start for free
                <svg
                  className="ml-2 w-4 h-4 text-eggshell group-hover:text-eggshell"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <span className="pointer-events-none absolute left-8 right-8 bottom-3 h-px bg-accent-blue/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-ink-black bg-white border border-ink-black/10 rounded-full hover:bg-ink-black/5 hover:border-ink-black/20 transition-all duration-200"
              >
                <svg
                  className="mr-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch demo
              </a>
            </motion.div>

            {/* Social proof mini */}
            <div className="mt-12 pt-8 border-t border-ink-black/5">
              <p className="text-sm text-dusty-denim mb-4">
                Trusted by forward-thinking teams
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-8 opacity-60">
                {["Vercel", "Stripe", "Linear", "Notion"].map((company) => (
                  <span
                    key={company}
                    className="text-sm font-semibold text-ink-black/70 tracking-wide"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <motion.div
              className="relative"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 0.44, ease: "easeOut", delay: 0.18 }
              }
            >
              {/* Main card */}
              <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-2xl shadow-ink-black/10 border border-ink-black/5 overflow-hidden">
                {/* Window header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-ink-black/[0.02] border-b border-ink-black/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-ink-black/10" />
                    <div className="w-3 h-3 rounded-full bg-ink-black/10" />
                    <div className="w-3 h-3 rounded-full bg-ink-black/10" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 bg-ink-black/5 rounded-md text-xs text-dusty-denim">
                      dashboard.featuregate.io
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-ink-black">
                        Feature Flags
                      </h3>
                      <p className="text-sm text-dusty-denim">
                        12 active features
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-ink-black text-eggshell text-sm font-medium rounded-lg">
                      + New Flag
                    </button>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3">
                    {[
                      {
                        name: "dark-mode",
                        status: true,
                        users: "100%",
                        env: "Production",
                      },
                      {
                        name: "new-checkout",
                        status: true,
                        users: "25%",
                        env: "Canary",
                      },
                      {
                        name: "ai-assistant",
                        status: false,
                        users: "0%",
                        env: "Development",
                      },
                      {
                        name: "redesigned-nav",
                        status: true,
                        users: "50%",
                        env: "Experiment",
                      },
                    ].map((feature) => (
                      <div
                        key={feature.name}
                        className="flex items-center justify-between p-4 bg-ink-black/[0.02] rounded-xl hover:bg-ink-black/[0.04] transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              feature.status ? "bg-emerald-500" : "bg-ink-black/20"
                            }`}
                          />
                          <code className="text-sm font-medium text-ink-black">
                            {feature.name}
                          </code>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-dusty-denim">
                            {feature.users}
                          </span>
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-md ${
                              feature.env === "Production"
                                ? "bg-emerald-50 text-emerald-700"
                                : feature.env === "Canary"
                                ? "bg-amber-50 text-amber-700"
                                : feature.env === "Experiment"
                                ? "bg-purple-50 text-purple-700"
                                : "bg-ink-black/5 text-dusty-denim"
                            }`}
                          >
                            {feature.env}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl shadow-ink-black/10 border border-ink-black/5 p-4 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-black">+23%</p>
                    <p className="text-xs text-dusty-denim">Conversion</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl shadow-ink-black/10 border border-ink-black/5 p-4 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-black">
                      99.99%
                    </p>
                    <p className="text-xs text-dusty-denim">Uptime</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
