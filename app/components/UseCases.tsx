const useCases = [
  {
    title: "Progressive Rollouts",
    description:
      "Release features to 1% of users, then 10%, then 50%, then everyone. Catch issues early before they affect your entire user base.",
    visual: (
      <div className="relative p-6 bg-white rounded-xl border border-ink-black/5">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-ink-black font-medium">
              new-checkout-flow
            </span>
            <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
              Rolling out
            </span>
          </div>
          <div className="space-y-3">
            {[
              { label: "Internal", value: 100, active: true },
              { label: "Beta Users", value: 100, active: true },
              { label: "10% Traffic", value: 100, active: true },
              { label: "50% Traffic", value: 65, active: true },
              { label: "All Users", value: 0, active: false },
            ].map((stage) => (
              <div key={stage.label} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className={stage.active ? "text-ink-black" : "text-dusty-denim"}>
                    {stage.label}
                  </span>
                  <span className={stage.active ? "text-blue-slate" : "text-dusty-denim"}>
                    {stage.value}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-ink-black/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      stage.active ? "bg-blue-slate" : "bg-ink-black/10"
                    }`}
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
    description:
      "Run statistically significant experiments to understand what works. Make decisions based on data, not opinions.",
    visual: (
      <div className="relative p-6 bg-white rounded-xl border border-ink-black/5">
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-ink-black font-medium">
              pricing-experiment
            </span>
            <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
              Running
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-ink-black/[0.02] rounded-lg">
              <div className="text-xs text-dusty-denim mb-1">Control</div>
              <div className="text-2xl font-semibold text-ink-black">3.2%</div>
              <div className="text-xs text-dusty-denim mt-1">
                12,847 sessions
              </div>
            </div>
            <div className="p-4 bg-emerald-50/50 rounded-lg border border-emerald-200/50">
              <div className="text-xs text-emerald-700 mb-1">Variant A</div>
              <div className="text-2xl font-semibold text-emerald-700">
                4.1%
              </div>
              <div className="text-xs text-emerald-600 mt-1">
                +28% uplift
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-dusty-denim">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            95% statistical significance reached
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Kill Switches",
    description:
      "Instantly disable problematic features in production without deploying. Turn hours of incident response into seconds.",
    visual: (
      <div className="relative p-6 bg-white rounded-xl border border-ink-black/5">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-ink-black font-medium">
              payment-processor-v2
            </span>
            <div className="relative">
              <div className="w-12 h-6 bg-red-100 rounded-full flex items-center px-0.5">
                <div className="w-5 h-5 bg-red-500 rounded-full shadow-sm" />
              </div>
            </div>
          </div>
          <div className="p-3 bg-red-50 rounded-lg border border-red-100">
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 text-red-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <div className="text-sm font-medium text-red-800">
                  Feature disabled
                </div>
                <div className="text-xs text-red-600 mt-0.5">
                  Disabled by @sarah 2 minutes ago
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs text-dusty-denim">
            All traffic instantly routed to fallback
          </div>
        </div>
      </div>
    ),
  },
];

export default function UseCases() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-blue-slate uppercase tracking-wider mb-4">
            Use Cases
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink-black leading-tight mb-6">
            Built for how modern
            <br className="hidden sm:block" /> teams actually work
          </h2>
          <p className="text-lg text-dusty-denim leading-relaxed">
            Whether you&apos;re rolling out a risky change or running experiments
            at scale, FeatureGate has you covered.
          </p>
        </div>

        {/* Use cases */}
        <div className="space-y-16 lg:space-y-24">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-2xl lg:text-3xl font-semibold text-ink-black mb-4">
                  {useCase.title}
                </h3>
                <p className="text-lg text-dusty-denim leading-relaxed mb-6">
                  {useCase.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium text-blue-slate hover:text-ink-black transition-colors duration-200"
                >
                  Learn more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
              <div
                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="relative">
                  {useCase.visual}
                  {/* Decorative shadow */}
                  <div className="absolute -inset-4 bg-gradient-to-b from-eggshell/0 via-eggshell/50 to-eggshell/0 -z-10 rounded-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
