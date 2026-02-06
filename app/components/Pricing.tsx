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
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="reveal-text text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="reveal-text stagger-1 text-slate-500 text-lg">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? "bg-slate-900 text-white scale-105 shadow-2xl shadow-slate-200"
                  : "bg-white border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-indigo-500 text-white text-xs font-medium rounded-full">
                  Most popular
                </div>
              )}

              {/* Plan header */}
              <div className="mb-8">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    plan.popular ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.popular ? "text-white/70" : "text-slate-500"
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
                      plan.popular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <p
                  className={`text-sm mt-1 ${
                    plan.popular ? "text-white/70" : "text-slate-500"
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
                        plan.popular ? "text-emerald-300" : "text-emerald-600"
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
                        plan.popular ? "text-white/90" : "text-slate-700"
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
                    ? "bg-white text-slate-900 hover:bg-slate-50"
                    : plan.popular
                    ? "bg-white/10 text-white border border-white/20 hover:bg-white/15"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="mt-16 text-center">
          <p className="text-slate-500">
            Have questions?{" "}
            <a
              href="#"
              className="text-slate-900 transition-colors duration-200 underline underline-offset-4"
            >
              Check our FAQ
            </a>{" "}
            or{" "}
            <a
              href="#"
              className="text-slate-900 transition-colors duration-200 underline underline-offset-4"
            >
              contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
