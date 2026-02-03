"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ProductPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-24 lg:py-32 bg-ink-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space-blue/50 to-ink-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-slate/20 rounded-full blur-3xl" />

      {/* Optional subtle technical grid */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(240, 235, 216, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(240, 235, 216, 0.055) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.45) 52%, rgba(0,0,0,0) 82%)",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.45) 52%, rgba(0,0,0,0) 82%)",
          willChange: "transform",
        }}
        initial={prefersReducedMotion ? false : { x: 0, y: 0 }}
        animate={prefersReducedMotion ? undefined : { x: -14, y: -10 }}
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 48,
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror",
              }
        }
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 0.36, ease: "easeOut" }
          }
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <p className="text-sm font-semibold text-dusty-denim uppercase tracking-wider mb-4">
            See it in action
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-eggshell leading-tight mb-6">
            A dashboard that actually
            <br className="hidden sm:block" /> makes sense
          </h2>
          <p className="text-lg text-dusty-denim leading-relaxed">
            Manage feature flags, run experiments, and analyze results — all
            from one intuitive interface designed for teams that move fast.
          </p>
        </motion.div>

        {/* Product preview */}
        <div className="relative">
          {/* Main dashboard */}
          <div className="relative bg-deep-space-blue/50 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-eggshell/10 overflow-hidden shadow-2xl">
            {/* Window header */}
            <div className="flex items-center justify-between px-6 py-4 bg-ink-black/30 border-b border-eggshell/5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-eggshell/20" />
                  <div className="w-3 h-3 rounded-full bg-eggshell/20" />
                  <div className="w-3 h-3 rounded-full bg-eggshell/20" />
                </div>
                <div className="h-5 w-px bg-eggshell/10" />
                <span className="text-sm text-dusty-denim">Experiments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 bg-eggshell/5 rounded-lg text-xs text-dusty-denim">
                  Production
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 lg:p-10">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left sidebar */}
                <div className="lg:col-span-1 space-y-4">
                  <div className="p-4 bg-ink-black/30 rounded-xl border border-eggshell/5">
                    <h4 className="text-sm font-medium text-eggshell mb-4">
                      Active Experiments
                    </h4>
                    <div className="space-y-3">
                      {[
                        { name: "Checkout Flow v2", status: "running", progress: 78 },
                        { name: "AI Recommendations", status: "running", progress: 45 },
                        { name: "New Pricing Page", status: "paused", progress: 100 },
                      ].map((exp) => (
                        <div
                          key={exp.name}
                          className="p-3 bg-eggshell/5 rounded-lg hover:bg-eggshell/10 transition-colors duration-200 cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-eggshell/90">
                              {exp.name}
                            </span>
                            <span
                              className={`text-xs ${
                                exp.status === "running"
                                  ? "text-emerald-400"
                                  : "text-amber-400"
                              }`}
                            >
                              {exp.status}
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-ink-black/50 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                exp.status === "running"
                                  ? "bg-emerald-500"
                                  : "bg-amber-500"
                              }`}
                              style={{ width: `${exp.progress}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Total Sessions", value: "1.2M", change: "+12%" },
                      { label: "Conversion Rate", value: "4.8%", change: "+0.3%" },
                      { label: "Avg. Revenue", value: "$127", change: "+8%" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="p-4 bg-ink-black/30 rounded-xl border border-eggshell/5"
                      >
                        <p className="text-xs text-dusty-denim mb-1">
                          {stat.label}
                        </p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-semibold text-eggshell">
                            {stat.value}
                          </span>
                          <span className="text-xs text-emerald-400">
                            {stat.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="p-6 bg-ink-black/30 rounded-xl border border-eggshell/5">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-sm font-medium text-eggshell">
                        Conversion Over Time
                      </h4>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-emerald-500" />
                          <span className="text-xs text-dusty-denim">
                            Variant A
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-blue-slate" />
                          <span className="text-xs text-dusty-denim">
                            Control
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Simulated chart */}
                    <div className="relative h-48">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 400 150"
                        preserveAspectRatio="none"
                      >
                        {/* Grid lines */}
                        {[0, 1, 2, 3, 4].map((i) => (
                          <line
                            key={i}
                            x1="0"
                            y1={i * 37.5}
                            x2="400"
                            y2={i * 37.5}
                            stroke="rgba(240, 235, 216, 0.05)"
                            strokeWidth="1"
                          />
                        ))}
                        {/* Control line */}
                        <path
                          d="M0 100 Q50 95 100 90 T200 85 T300 80 T400 75"
                          fill="none"
                          stroke="#3e5c76"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        {/* Variant A line */}
                        <path
                          d="M0 110 Q50 90 100 70 T200 55 T300 40 T400 30"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        {/* Variant A fill */}
                        <path
                          d="M0 110 Q50 90 100 70 T200 55 T300 40 T400 30 L400 150 L0 150 Z"
                          fill="url(#gradient)"
                          opacity="0.2"
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#10b981"
                              stopOpacity="1"
                            />
                            <stop
                              offset="100%"
                              stopColor="#10b981"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-blue-slate/20 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
