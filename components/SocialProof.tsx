"use client";

import { motion, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    quote: "FeatureGate transformed how we ship features. What used to take days now takes minutes.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "Streamline",
    avatar: "SC",
  },
  {
    quote: "The analytics alone are worth the investment. We finally understand which features actually move the needle.",
    author: "Marcus Rodriguez",
    role: "Head of Product",
    company: "Uplift Labs",
    avatar: "MR",
  },
  {
    quote: "We evaluated every feature flag solution on the market. FeatureGate was the clear winner.",
    author: "Emily Watson",
    role: "Staff Engineer",
    company: "Nexus Systems",
    avatar: "EW",
  },
];

const stats = [
  { value: "99.99%", label: "Uptime" },
  { value: "< 10ms", label: "Evaluation" },
  { value: "50B+", label: "Monthly evals" },
  { value: "2,500+", label: "Teams" },
];

const logos = ["Vercel", "Stripe", "Linear", "Notion", "Figma", "Webflow", "Framer", "Loom"];

export default function SocialProof() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-20 lg:py-28 bg-eggshell">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-2xl lg:text-3xl font-semibold text-ink-black mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-dusty-denim">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-10"
        >
          <p className="text-xs font-semibold text-blue-slate uppercase tracking-widest mb-3">
            Trusted by the best
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink-black leading-tight">
            Teams that build the future
            <br className="hidden sm:block" /> choose FeatureGate
          </h2>
        </motion.div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-16 lg:mb-20">
          {logos.map((logo, i) => (
            <motion.span
              key={logo}
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-sm font-medium text-ink-black/25 hover:text-ink-black/50 transition-colors duration-300"
            >
              {logo}
            </motion.span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl border border-ink-black/[0.04] hover:shadow-lg hover:shadow-ink-black/[0.03] transition-all duration-300"
            >
              {/* Quote */}
              <blockquote className="text-sm text-ink-black leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-ink-black/[0.04] rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-blue-slate">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-ink-black">{testimonial.author}</div>
                  <div className="text-xs text-dusty-denim">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
