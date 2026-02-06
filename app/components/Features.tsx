import { ShieldCheck, TestTube2, TrendingUpDownIcon } from "lucide-react";

export default function Features() {
  return (
    <section id="product" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="reveal-text text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
            Complete control. No clutter.
          </h2>
          <p className="reveal-text stagger-1 text-slate-500 text-lg">
            Everything you need to manage your releases, nothing you don&apos;t.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="reveal-text stagger-1 group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUpDownIcon className="w-6 h-6" aria-hidden />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Targeted Rollouts
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Release features to specific users based on email, region, or
              custom attributes. Slowly ramp up from 1% to 100%.
            </p>
          </div>

          <div className="reveal-text stagger-2 group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
              <TestTube2 className="w-6 h-6" aria-hidden />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              A/B Experiments
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Run statistically significant experiments. Compare variants and
              automatically promote the winner.
            </p>
          </div>

          <div className="reveal-text stagger-3 group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6" aria-hidden />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Instant Kill Switch
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Safety net for your code. Disable buggy features globally in 200ms
              without rolling back or redeploying.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
