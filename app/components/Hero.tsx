"use client";

import { CTASection } from "@/components/ui/hero-dithering-card";


export default function Hero() {
  // Styling + animation behavior is driven by the provided Tailwind classes
  // and the global `.reveal-text` IntersectionObserver in `app/page.tsx`.
  return (
    <section className="relative pt-32 pb-20 md:pt-16 md:pb-32 overflow-hidden border-b border-slate-200/60">
      {/* Frame lines + top divider (match screenshot #2) */}

      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-full border-x border-slate-200/60" />
        <div className="mx-auto max-w-6xl border-t border-slate-200/60" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] -z-10 opacity-60" />

      <div className="max-w-full mx-auto px-6 text-center">

        {/* <div className="reveal-text flex justify-center mb-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:border-slate-300 transition-colors"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-500" />
            <span className="tracking-wide">New: Visual Flag Editor →</span>
          </a>
        </div>

        <h1 className="reveal-text stagger-1 text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
          Deploy at the <br className="hidden md:block" />
          <span className="text-slate-400">speed of thought.</span>
        </h1>

        <p className="reveal-text stagger-2 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Decouple release from deployment. Manage features, run experiments, and
          rollback instantly without touching a line of code.
        </p>

        <div className="reveal-text stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 hover:scale-[1.02] transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2">
            Start Building
            <svg
              aria-hidden
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
            <svg
              aria-hidden
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
            Watch Demo
          </button>
        </div> */}

        <CTASection/>

        {/* Inner frame divider (between CTAs and mock) */}
        <div
          aria-hidden
          className="reveal-text stagger-4 w-screen relative left-1/2 -translate-x-1/2 border-t border-slate-200/60 mb-16"
        />

        <div className="reveal-text stagger-4 relative max-w-5xl mx-auto">
          <div className="relative bg-white rounded-xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden">
            <div className="h-10 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
            </div>

            <div className="p-8 text-left">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="text-slate-900 font-semibold text-lg">
                    Production Flags
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Filtering by active status
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-md hover:bg-slate-50 transition">
                    Filter
                  </button>
                  <button className="text-xs font-medium text-white bg-slate-900 px-3 py-1.5 rounded-md hover:bg-slate-800 transition shadow-sm">
                    + New Flag
                  </button>
                </div>
              </div>

              <div className="w-full">
                <div className="grid grid-cols-12 gap-4 border-b border-slate-100 pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <div className="col-span-5 pl-2">Feature</div>
                  <div className="col-span-3">Environment</div>
                  <div className="col-span-3">Targeting</div>
                  <div className="col-span-1 text-right pr-2">State</div>
                </div>

                <div className="grid grid-cols-12 gap-4 py-4 border-b border-slate-50 items-center hover:bg-slate-50/80 transition-colors rounded-lg -mx-2 px-2 group cursor-default">
                  <div className="col-span-5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <svg
                        aria-hidden
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">
                        AI Assistance v2
                      </div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">
                        feat-ai-beta
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      Production
                    </span>
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-600">50% Users</span>
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-indigo-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <div className="w-9 h-5 bg-emerald-500 rounded-full relative cursor-pointer shadow-sm transition-colors">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 py-4 border-b border-slate-50 items-center hover:bg-slate-50/80 transition-colors rounded-lg -mx-2 px-2 group cursor-default">
                  <div className="col-span-5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
                      <svg
                        aria-hidden
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">
                        New Checkout Flow
                      </div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">
                        checkout-optimize
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      Staging
                    </span>
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-600">
                        Internal Only
                      </span>
                      <div className="flex -space-x-1">
                        <div className="w-4 h-4 rounded-full bg-slate-200 border border-white" />
                        <div className="w-4 h-4 rounded-full bg-slate-300 border border-white" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <div className="w-9 h-5 bg-emerald-500 rounded-full relative cursor-pointer shadow-sm transition-colors">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 py-4 items-center hover:bg-slate-50/80 transition-colors rounded-lg -mx-2 px-2 group cursor-default">
                  <div className="col-span-5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center">
                      <svg
                        aria-hidden
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 6h18" />
                        <path d="M8 6V4h8v2" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">
                        Legacy API
                      </div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">
                        api-v1-deprecate
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      Production
                    </span>
                  </div>
                  <div className="col-span-3">
                    <span className="text-xs text-slate-400">0% Users</span>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <div className="w-9 h-5 bg-slate-200 rounded-full relative cursor-pointer shadow-inner transition-colors">
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
