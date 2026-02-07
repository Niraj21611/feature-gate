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
    <section id="pricing" className="relative bg-white">
      {/* Isometric frame rails */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-full border-x border-slate-200/60" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center py-20 px-6 border-b border-dashed border-slate-200/80">
          <p className="reveal-text text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-5">
            Pricing
          </p>
          <h2 className="reveal-text stagger-1 font-cooper text-3xl md:text-[2.75rem] font-medium text-slate-900 tracking-tight mb-5 leading-[1.1]">
            Simple, transparent pricing.
          </h2>
          <p className="reveal-text stagger-2 text-slate-500 text-base md:text-lg">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing cards - 3 columns with borders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-slate-200/60">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`reveal-text stagger-${index + 1} relative p-8 lg:p-10 transition-all duration-300 
                ${index < 2 ? "border-b lg:border-b-0 lg:border-r border-slate-200/60" : ""}
                ${plan.popular ? "bg-slate-950 text-white" : "bg-white hover:bg-slate-50/50"}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-0 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-b-lg">
                  Most popular
                </div>
              )}

              {/* Plan header */}
              <div className="mb-8 mt-2">
                <h3 className={`text-lg font-semibold mb-2 ${plan.popular ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.popular ? "text-white/60" : "text-slate-500"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className={`font-cooper text-4xl lg:text-5xl font-medium ${plan.popular ? "text-white" : "text-slate-900"}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm mt-1.5 ${plan.popular ? "text-white/50" : "text-slate-400"}`}>
                  {plan.priceDetail}
                </p>
              </div>

              {/* Divider */}
              <div className={`border-t mb-8 ${plan.popular ? "border-white/10" : "border-dashed border-slate-200/80"}`} />

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-emerald-400" : "text-emerald-600"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.popular ? "text-white/80" : "text-slate-600"}`}>
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
                    ? "bg-white text-slate-900 hover:bg-slate-100"
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
        <div className="py-10 text-center px-6 border-b border-slate-200/60">
          <p className="text-slate-500 text-sm">
            Have questions?{" "}
            <a href="#" className="text-slate-900 transition-colors duration-200 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900">
              Check our FAQ
            </a>{" "}
            or{" "}
            <a href="#" className="text-slate-900 transition-colors duration-200 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900">
              contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
