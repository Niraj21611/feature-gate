"use client";

import { motion, useReducedMotion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    description: "For small teams getting started.",
    price: "Free",
    priceDetail: "Up to 5 seats",
    features: [
      "Up to 10 feature flags",
      "1 environment",
      "7-day analytics retention",
      "Community support",
      "Basic targeting rules",
    ],
    cta: "Get started",
    ctaStyle: "secondary",
  },
  {
    name: "Pro",
    description: "For growing teams that need more.",
    price: "$49",
    priceDetail: "per seat / month",
    features: [
      "Unlimited feature flags",
      "Unlimited environments",
      "90-day analytics retention",
      "Priority support",
      "Advanced targeting",
      "A/B testing",
      "Audit logs",
    ],
    cta: "Start free trial",
    ctaStyle: "primary",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations at scale.",
    price: "Custom",
    priceDetail: "Contact for pricing",
    features: [
      "Everything in Pro",
      "Unlimited retention",
      "SSO & SCIM",
      "99.99% uptime SLA",
      "Dedicated success manager",
      "Custom integrations",
      "On-premise option",
    ],
    cta: "Contact sales",
    ctaStyle: "secondary",
  },
];

export default function Pricing() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="pricing" className="relative py-20 lg:py-28 bg-eggshell">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12 lg:mb-16"
        >
          <p className="text-xs font-semibold text-blue-slate uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink-black leading-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-base text-dusty-denim leading-relaxed">
            Start free, scale as you grow. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 rounded-xl transition-all duration-300 ${
                plan.popular
                  ? "bg-ink-black text-eggshell lg:scale-[1.02] shadow-xl shadow-ink-black/15"
                  : "bg-white border border-ink-black/[0.04] hover:shadow-lg hover:shadow-ink-black/[0.04]"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-slate text-eggshell text-[10px] font-medium rounded-full tracking-wide">
                  Most popular
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className={`text-base font-semibold mb-1 ${plan.popular ? "text-eggshell" : "text-ink-black"}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs ${plan.popular ? "text-eggshell/60" : "text-dusty-denim"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl lg:text-4xl font-semibold ${plan.popular ? "text-eggshell" : "text-ink-black"}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-xs mt-0.5 ${plan.popular ? "text-eggshell/60" : "text-dusty-denim"}`}>
                  {plan.priceDetail}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-emerald-400" : "text-emerald-500"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-xs ${plan.popular ? "text-eggshell/80" : "text-ink-black/70"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="#"
                whileHover={prefersReducedMotion ? {} : { scale: 1.01 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.99 }}
                className={`block w-full py-2.5 text-center text-sm font-medium rounded-full transition-all duration-300 ${
                  plan.ctaStyle === "primary"
                    ? "bg-eggshell text-ink-black hover:bg-white"
                    : plan.popular
                    ? "bg-eggshell/10 text-eggshell border border-eggshell/15 hover:bg-eggshell/15"
                    : "bg-ink-black text-eggshell hover:shadow-md hover:shadow-ink-black/10"
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* FAQ teaser */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-dusty-denim">
            Have questions?{" "}
            <a href="#" className="text-blue-slate hover:text-ink-black transition-colors duration-300 underline underline-offset-4 decoration-ink-black/10 hover:decoration-ink-black/30">
              Check our FAQ
            </a>{" "}
            or{" "}
            <a href="#" className="text-blue-slate hover:text-ink-black transition-colors duration-300 underline underline-offset-4 decoration-ink-black/10 hover:decoration-ink-black/30">
              contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
