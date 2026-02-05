"use client";

import { motion, useReducedMotion } from "framer-motion";

const useCases = [
  {
    title: "Progressive Rollouts",
    description: "Release features to 1% of users, then 10%, then 50%, then everyone. Catch issues early.",
    visual: (
      <div className="p-5 bg-white rounded-lg border border-ink-black/[0.04]">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-ink-black font-medium">new-checkout-flow</span>
            <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Rolling out</span>
          </div>
          <div className="space-y-2">
            {[
              { label: "Internal", value: 100, active: true },
              { label: "Beta Users", value: 100, active: true },
              { label: "10% Traffic", value: 100, active: true },
              { label: "50% Traffic", value: 65, active: true },
              { label: "All Users", value: 0, active: false },
            ].map((stage) => (
              <div key={stage.label} className="space-y-1">
                <div className="flex items-center justify-between text-[10px]">
                  <span className={stage.active ? "text-ink-black" : "text-dusty-denim"}>{stage.label}</span>
                  <span className={stage.active ? "text-blue-slate" : "text-dusty-denim"}>{stage.value}%</span>
                </div>
                <div className="w-full h-1 bg-ink-black/[0.04] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${stage.active ? "bg-blue-slate" : "bg-ink-black/[0.06]"}`}
                    style={{ width: `${stage.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "A/B Testing",
    description: "Run statistically significant experiments. Make decisions based on data, not opinions.",
    visual: (
      <div className="p-5 bg-white rounded-lg border border-ink-black/[0.04]">
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-ink-black font-medium">pricing-experiment</span>
            <span className="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">Running</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-ink-black/[0.015] rounded-md">
              <div className="text-[10px] text-dusty-denim mb-0.5">Control</div>
              <div className="text-xl font-semibold text-ink-black">3.2%</div>
              <div className="text-[10px] text-dusty-denim mt-0.5">12,847 sessions</div>
            </div>
            <div className="p-3 bg-emerald-50/60 rounded-md border border-emerald-200/40">
              <div className="text-[10px] text-emerald-700 mb-0.5">Variant A</div>
              <div className="text-xl font-semibold text-emerald-700">4.1%</div>
              <div className="text-[10px] text-emerald-600 mt-0.5">+28% uplift</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-dusty-denim">
            <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            95% statistical significance
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Kill Switches",
    description: "Instantly disable problematic features in production. Turn hours of incident response into seconds.",
    visual: (
      <div className="p-5 bg-white rounded-lg border border-ink-black/[0.04]">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-ink-black font-medium">payment-processor-v2</span>
            <div className="w-10 h-5 bg-red-100 rounded-full flex items-center px-0.5">
              <div className="w-4 h-4 bg-red-500 rounded-full shadow-sm" />
            </div>
          </div>
          <div className="p-2.5 bg-red-50 rounded-md border border-red-100">
            <div className="flex items-start gap-1.5">
              <svg className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <div className="text-xs font-medium text-red-800">Feature disabled</div>
                <div className="text-[10px] text-red-600 mt-0.5">Disabled by @sarah 2 min ago</div>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-dusty-denim">All traffic routed to fallback</div>
        </div>
      </div>
    ),
  },
];

export default function UseCases() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="solutions" className="relative py-20 lg:py-28 bg-white">
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
            Use Cases
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink-black leading-tight mb-4">
            Built for how modern
            <br className="hidden sm:block" /> teams actually work
          </h2>
          <p className="text-base text-dusty-denim leading-relaxed">
            Whether you&apos;re rolling out a risky change or running experiments at scale.
          </p>
        </motion.div>

        {/* Use cases */}
        <div className="space-y-12 lg:space-y-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-xl lg:text-2xl font-semibold text-ink-black mb-3">
                  {useCase.title}
                </h3>
                <p className="text-sm text-dusty-denim leading-relaxed mb-5">
                  {useCase.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-blue-slate hover:text-ink-black transition-colors duration-300 group"
                >
                  Learn more
                  <svg className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                {useCase.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
