export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-space-blue/50 via-ink-black to-ink-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-slate/10 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--eggshell) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Content */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-eggshell leading-tight mb-6">
          Ready to ship features
          <br /> with confidence?
        </h2>
        <p className="text-lg lg:text-xl text-dusty-denim leading-relaxed max-w-2xl mx-auto mb-10">
          Join thousands of engineering teams who trust FeatureGate to deploy
          safely, experiment freely, and iterate faster.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-ink-black bg-eggshell rounded-full hover:bg-white transition-all duration-200 hover:shadow-xl hover:shadow-eggshell/20 hover:-translate-y-0.5"
          >
            Start your free trial
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
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-eggshell bg-transparent border border-eggshell/20 rounded-full hover:bg-eggshell/10 hover:border-eggshell/30 transition-all duration-200"
          >
            Talk to sales
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-dusty-denim">
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-emerald-400"
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
            14-day free trial
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-emerald-400"
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
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-emerald-400"
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
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
