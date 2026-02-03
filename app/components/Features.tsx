const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Instant Rollouts",
    description:
      "Deploy features to any percentage of users in milliseconds. No code changes, no redeploys, no waiting.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Built-in Analytics",
    description:
      "Track feature adoption, measure impact, and make data-driven decisions with comprehensive analytics.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified with SSO, audit logs, and granular permissions. Your data stays yours.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Developer First",
    description:
      "SDKs for every major language, REST APIs, and CLI tools. Integrate in minutes, not days.",
  },
];

export default function Features() {
  return (
    <section id="product" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-blue-slate uppercase tracking-wider mb-4">
            Why FeatureGate
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink-black leading-tight mb-6">
            Everything you need to ship
            <br className="hidden sm:block" /> features fearlessly
          </h2>
          <p className="text-lg text-dusty-denim leading-relaxed">
            A complete feature management platform designed for modern
            engineering teams who value speed, safety, and visibility.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 lg:p-10 bg-eggshell/50 rounded-2xl lg:rounded-3xl border border-ink-black/5 hover:border-ink-black/10 hover:bg-eggshell/80 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-ink-black mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-semibold text-ink-black mb-3">
                {feature.title}
              </h3>
              <p className="text-base lg:text-lg text-dusty-denim leading-relaxed">
                {feature.description}
              </p>

              {/* Hover arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-5 h-5 text-blue-slate"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
