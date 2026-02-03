const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with feature flags.",
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
    description: "For growing teams that need more power and flexibility.",
    price: "$49",
    priceDetail: "per seat / month",
    features: [
      "Unlimited feature flags",
      "Unlimited environments",
      "90-day analytics retention",
      "Priority support",
      "Advanced targeting & segments",
      "A/B testing & experiments",
      "Audit logs",
    ],
    cta: "Start free trial",
    ctaStyle: "primary",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced security and scale needs.",
    price: "Custom",
    priceDetail: "Contact for pricing",
    features: [
      "Everything in Pro",
      "Unlimited analytics retention",
      "SSO & SCIM provisioning",
      "99.99% uptime SLA",
      "Dedicated success manager",
      "Custom integrations",
      "On-premise deployment option",
    ],
    cta: "Contact sales",
    ctaStyle: "secondary",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-eggshell">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-blue-slate uppercase tracking-wider mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink-black leading-tight mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-dusty-denim leading-relaxed">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl lg:rounded-3xl transition-all duration-300 ${
                plan.popular
                  ? "bg-ink-black text-eggshell scale-105 shadow-2xl shadow-ink-black/20"
                  : "bg-white border border-ink-black/5 hover:shadow-lg hover:shadow-ink-black/5"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-slate text-eggshell text-xs font-medium rounded-full">
                  Most popular
                </div>
              )}

              {/* Plan header */}
              <div className="mb-8">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    plan.popular ? "text-eggshell" : "text-ink-black"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.popular ? "text-eggshell/70" : "text-dusty-denim"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-4xl lg:text-5xl font-semibold ${
                      plan.popular ? "text-eggshell" : "text-ink-black"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <p
                  className={`text-sm mt-1 ${
                    plan.popular ? "text-eggshell/70" : "text-dusty-denim"
                  }`}
                >
                  {plan.priceDetail}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-emerald-400" : "text-emerald-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-eggshell/90" : "text-ink-black/80"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`block w-full py-3.5 text-center text-sm font-medium rounded-full transition-all duration-200 ${
                  plan.ctaStyle === "primary"
                    ? "bg-eggshell text-ink-black hover:bg-white"
                    : plan.popular
                    ? "bg-eggshell/10 text-eggshell border border-eggshell/20 hover:bg-eggshell/20"
                    : "bg-ink-black text-eggshell hover:bg-deep-space-blue"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="mt-16 text-center">
          <p className="text-dusty-denim">
            Have questions?{" "}
            <a
              href="#"
              className="text-blue-slate hover:text-ink-black transition-colors duration-200 underline underline-offset-4"
            >
              Check our FAQ
            </a>{" "}
            or{" "}
            <a
              href="#"
              className="text-blue-slate hover:text-ink-black transition-colors duration-200 underline underline-offset-4"
            >
              contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
