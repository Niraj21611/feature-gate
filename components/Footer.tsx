"use client";

import { motion, useReducedMotion } from "framer-motion";

const footerLinks = {
  Product: [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
  ],
  Solutions: [
    { label: "Rollouts", href: "#" },
    { label: "A/B Testing", href: "#" },
    { label: "Kill Switches", href: "#" },
    { label: "Enterprise", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Guides", href: "#" },
    { label: "Community", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="bg-ink-black border-t border-eggshell/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10">
            {/* Brand column */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-2"
            >
              <a href="/" className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 bg-eggshell rounded-md flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-ink-black">
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-eggshell font-semibold text-base">FeatureGate</span>
              </a>
              <p className="text-xs text-dusty-denim leading-relaxed max-w-xs mb-5">
                The modern feature management platform for teams that ship with confidence.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-2">
                {[
                  { label: "Twitter", icon: <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /> },
                  { label: "GitHub", icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /> },
                  { label: "LinkedIn", icon: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M2 4a2 2 0 114 0 2 2 0 01-4 0z" /> },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-md bg-eggshell/[0.04] text-dusty-denim hover:bg-eggshell/[0.08] hover:text-eggshell transition-all duration-300"
                    aria-label={social.label}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links], i) => (
              <motion.div
                key={category}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <h4 className="text-xs font-semibold text-eggshell mb-3">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-xs text-dusty-denim hover:text-eggshell transition-colors duration-300">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-eggshell/[0.04]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-dusty-denim">
              © 2026 FeatureGate, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
                <a key={item} href="#" className="text-xs text-dusty-denim hover:text-eggshell transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
