export default function CTA() {
  return (
    <>
      <section className="py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div className="reveal-text">
              <div className="text-3xl font-semibold text-slate-900 mb-1">
                50ms
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Global Latency
              </div>
            </div>
            <div className="reveal-text stagger-1">
              <div className="text-3xl font-semibold text-slate-900 mb-1">
                99.99%
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Uptime SLA
              </div>
            </div>
            <div className="reveal-text stagger-2">
              <div className="text-3xl font-semibold text-slate-900 mb-1">
                SOC2
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Certified
              </div>
            </div>
            <div className="reveal-text stagger-3">
              <div className="text-3xl font-semibold text-slate-900 mb-1">
                1B+
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Flags/Day
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50" />
        <div className="relative max-w-3xl mx-auto px-6 text-center z-10">
          <h2 className="reveal-text text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-8">
            Ready to ship confidently?
          </h2>
          <div className="reveal-text stagger-1 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-xl shadow-slate-200">
              Get Started Free
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all">
              Contact Sales
            </button>
          </div>
          <p className="reveal-text stagger-2 mt-8 text-xs text-slate-400">
            No credit card required for dev environments.
          </p>
        </div>
      </section>
    </>
  );
}
