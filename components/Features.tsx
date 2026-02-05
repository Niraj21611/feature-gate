"use client";

import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Instant Rollouts",
    description: "Deploy features to any percentage of users in milliseconds. No code changes required.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Built-in Analytics",
    description: "Track feature adoption and make data-driven decisions with comprehensive analytics.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with SSO, audit logs, and granular permissions.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Developer First",
    description: "SDKs for every major language, REST APIs, and CLI tools. Integrate in minutes.",
  },
];

export default function Features() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="product" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-14 lg:mb-16"
        >
          <p className="text-xs font-semibold text-blue-slate uppercase tracking-widest mb-3">
            Why FeatureGate
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink-black leading-tight mb-4">
            Everything you need to ship
            <br className="hidden sm:block" /> features fearlessly
          </h2>
          <p className="text-base text-dusty-denim leading-relaxed">
            A complete feature management platform designed for modern teams.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 lg:p-7 bg-eggshell/30 rounded-xl border border-ink-black/[0.03] hover:bg-eggshell/60 hover:border-ink-black/[0.06] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-ink-black mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-base lg:text-lg font-semibold text-ink-black mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-dusty-denim leading-relaxed">
                {feature.description}
              </p>

              {/* Subtle arrow on hover */}
              <div className="absolute top-6 right-6 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-4 h-4 text-blue-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
