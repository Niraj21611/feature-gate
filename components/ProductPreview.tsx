"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ProductPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-20 lg:py-28 bg-ink-black overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-slate/15 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12 lg:mb-16"
        >
          <p className="text-xs font-semibold text-dusty-denim uppercase tracking-widest mb-3">
            See it in action
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-eggshell leading-tight mb-4">
            A dashboard that actually
            <br className="hidden sm:block" /> makes sense
          </h2>
          <p className="text-base text-dusty-denim leading-relaxed">
            Manage feature flags, run experiments, and analyze results from one intuitive interface.
          </p>
        </motion.div>

        {/* Product preview */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Main dashboard */}
          <div className="relative bg-deep-space-blue/40 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-eggshell/[0.06] overflow-hidden">
            {/* Window header */}
            <div className="flex items-center justify-between px-5 py-3 bg-ink-black/30 border-b border-eggshell/[0.04]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-eggshell/15" />
                  <div className="w-2.5 h-2.5 rounded-full bg-eggshell/15" />
                  <div className="w-2.5 h-2.5 rounded-full bg-eggshell/15" />
                </div>
                <span className="text-xs text-dusty-denim">Experiments</span>
              </div>
              <div className="px-2 py-1 bg-eggshell/[0.04] rounded text-[10px] text-dusty-denim">
                Production
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-5 lg:p-8">
              <div className="grid lg:grid-cols-3 gap-5">
                {/* Left sidebar */}
                <div className="lg:col-span-1">
                  <div className="p-4 bg-ink-black/25 rounded-lg border border-eggshell/[0.04]">
                    <h4 className="text-xs font-medium text-eggshell/80 mb-3">Active Experiments</h4>
                    <div className="space-y-2">
                      {[
                        { name: "Checkout Flow v2", status: "running", progress: 78 },
                        { name: "AI Recommendations", status: "running", progress: 45 },
                        { name: "New Pricing Page", status: "paused", progress: 100 },
                      ].map((exp, i) => (
                        <motion.div
                          key={exp.name}
                          initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.08 }}
                          className="p-2.5 bg-eggshell/[0.03] rounded-md hover:bg-eggshell/[0.06] transition-colors duration-200 cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs text-eggshell/80">{exp.name}</span>
                            <span className={`text-[10px] ${exp.status === "running" ? "text-emerald-400" : "text-amber-400"}`}>
                              {exp.status}
                            </span>
                          </div>
                          <div className="w-full h-1 bg-ink-black/40 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${exp.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                              className={`h-full rounded-full ${exp.status === "running" ? "bg-emerald-500" : "bg-amber-500"}`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Sessions", value: "1.2M", change: "+12%" },
                      { label: "Conversion", value: "4.8%", change: "+0.3%" },
                      { label: "Revenue", value: "$127", change: "+8%" },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.08 }}
                        className="p-3 bg-ink-black/25 rounded-lg border border-eggshell/[0.04]"
                      >
                        <p className="text-[10px] text-dusty-denim mb-0.5">{stat.label}</p>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-lg font-semibold text-eggshell">{stat.value}</span>
                          <span className="text-[10px] text-emerald-400">{stat.change}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="p-5 bg-ink-black/25 rounded-lg border border-eggshell/[0.04]">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-medium text-eggshell/80">Conversion Over Time</h4>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-[10px] text-dusty-denim">Variant A</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-blue-slate" />
                          <span className="text-[10px] text-dusty-denim">Control</span>
                        </div>
                      </div>
                    </div>
                    {/* Chart */}
                    <div className="relative h-36">
                      <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                        {[0, 1, 2, 3].map((i) => (
                          <line key={i} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="rgba(240, 235, 216, 0.04)" strokeWidth="1" />
                        ))}
                        <motion.path
                          d="M0 80 Q50 76 100 72 T200 68 T300 64 T400 60"
                          fill="none"
                          stroke="#3e5c76"
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3 }}
                        />
                        <motion.path
                          d="M0 88 Q50 72 100 56 T200 44 T300 32 T400 24"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.5 }}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
