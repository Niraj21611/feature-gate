export default function UseCases() {
  return (
    <section id="enterprise" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="reveal-text text-3xl font-semibold text-slate-900 tracking-tight text-center mb-16">
          One platform, endless possibilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="reveal-text stagger-1 group p-8 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-white rounded-lg border border-slate-100 text-slate-900 shadow-sm">
                <svg
                  aria-hidden
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 7h16" />
                  <path d="M4 12h10" />
                  <path d="M4 17h16" />
                </svg>
              </div>
              <svg
                aria-hidden
                className="text-slate-300 group-hover:text-slate-600 transition-colors"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Trunk-Based Development
            </h3>
            <p className="text-sm text-slate-500">
              Merge code to main constantly. Keep features hidden behind flags
              until they are ready for prime time.
            </p>
          </div>

          <div className="reveal-text stagger-2 group p-8 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-white rounded-lg border border-slate-100 text-slate-900 shadow-sm">
                <svg
                  aria-hidden
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6" />
                  <path d="M23 11h-6" />
                </svg>
              </div>
              <svg
                aria-hidden
                className="text-slate-300 group-hover:text-slate-600 transition-colors"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Beta Testing Management
            </h3>
            <p className="text-sm text-slate-500">
              Allow non-technical teams to manage beta access lists without
              requiring engineering support.
            </p>
          </div>

          <div className="reveal-text stagger-3 group p-8 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-white rounded-lg border border-slate-100 text-slate-900 shadow-sm">
                <svg
                  aria-hidden
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="12" x="3" y="6" rx="2" />
                  <path d="M7 18v2" />
                  <path d="M17 18v2" />
                  <path d="M8 14h8" />
                </svg>
              </div>
              <svg
                aria-hidden
                className="text-slate-300 group-hover:text-slate-600 transition-colors"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Infrastructure Migration
            </h3>
            <p className="text-sm text-slate-500">
              Safely migrate databases or services by routing a percentage of
              traffic to the new infrastructure.
            </p>
          </div>

          <div className="reveal-text stagger-4 group p-8 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-white rounded-lg border border-slate-100 text-slate-900 shadow-sm">
                <svg
                  aria-hidden
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <svg
                aria-hidden
                className="text-slate-300 group-hover:text-slate-600 transition-colors"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Paywall &amp; Entitlements
            </h3>
            <p className="text-sm text-slate-500">
              Control feature access based on subscription tiers dynamically
              without redeploying code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
