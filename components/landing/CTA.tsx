import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <>
      {/* Stats bar */}
      <section className="relative bg-white">
        {/* Isometric frame rails */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="mx-auto max-w-6xl h-full border-x border-slate-200/60" />
        </div>

        <div className="max-w-6xl mx-auto border-b border-slate-200/60">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "50ms", label: "Global Latency" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "SOC2", label: "Certified" },
              { value: "1B+", label: "Flags/Day" },
            ].map(({ value, label }, i) => (
              <div
                key={label}
                className={`reveal-text stagger-${i + 1} py-10 px-6 text-center ${
                  i < 3 ? "border-r border-slate-200/60" : ""
                } ${i < 2 ? "border-b md:border-b-0" : i === 2 ? "border-b md:border-b-0" : ""}`}
              >
                <div className="font-cooper text-3xl md:text-4xl font-medium text-slate-900 mb-1.5">
                  {value}
                </div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-slate-400 font-semibold">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-white overflow-hidden">
        {/* Diagonal rays background */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-rays-diagonal opacity-[0.35]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
        </div>
        {/* Isometric frame rails */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="mx-auto max-w-6xl h-full border-x border-slate-200/60" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="py-28 px-6 text-center border-b border-dashed border-slate-200/60 relative">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-50/40 rounded-full blur-[100px] -z-10" />

            <p className="reveal-text text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-5">
              Get Started
            </p>
            <h2 className="reveal-text stagger-1 font-cooper text-4xl md:text-[3.25rem] font-medium text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Ready to ship<br className="hidden md:block" />
              confidently?
            </h2>
            <p className="reveal-text stagger-2 text-slate-500 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join thousands of teams using FeatureFlow to deploy faster and safer.
            </p>

            <div className="reveal-text stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button className="group w-full sm:w-auto inline-flex h-12 items-center justify-center gap-3 rounded-full bg-slate-900 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/10">
                <span>Get Started Free</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </button>
              <button className="w-full sm:w-auto px-8 py-3 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all">
                Contact Sales
              </button>
            </div>

            <p className="reveal-text stagger-4 text-xs text-slate-400">
              No credit card required for dev environments.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
