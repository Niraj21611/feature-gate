import { ToggleRight, GitBranch, FlaskConical, ShieldCheck, BarChart3, Users, Code2, FileJson, BookOpen } from "lucide-react";

export default function Features() {
  return (
    <section id="product" className="relative bg-white">
      {/* Isometric frame rails */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-full border-x border-slate-200/60" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center py-20 px-6 border-b border-dashed border-slate-200/80">
          <p className="reveal-text text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-5">
            Super Fast Setup
          </p>
          <h2 className="reveal-text stagger-1 font-cooper text-3xl md:text-[2.75rem] font-medium text-slate-900 tracking-tight mb-5 leading-[1.1]">
            The hardest part about switching to<br className="hidden md:block" />
            FeatureFlow is deciding when to do it.
          </h2>
          <p className="reveal-text stagger-2 text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Quick and simple setup, no matter if you&apos;re integrating from scratch or
            switching from another tool. Go from setup to shipping before lunch.
          </p>
        </div>

        {/* 3-column bordered cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-200/60">
          {/* Card 1 — Animated floating SDK cards */}
          <div className="reveal-text stagger-1 group border-b md:border-b-0 md:border-r border-slate-200/60 p-0">
            <div className="p-8 flex flex-col items-center justify-center min-h-[240px] border-b border-dashed border-slate-200/60 overflow-hidden">
              <div className="relative w-full h-40 flex items-center justify-center">
                {/* Stacked floating cards */}
                <div className="relative w-[220px] h-[140px]">
                  {/* Back card */}
                  <div className="absolute left-0 top-4 w-[100px] h-[72px] bg-white rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center gap-1.5 animate-float-slow opacity-70 group-hover:opacity-90 transition-opacity duration-500 -rotate-6">
                    <Code2 className="w-5 h-5 text-slate-400" aria-hidden />
                    <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">EMAIL API</span>
                  </div>
                  {/* Middle card */}
                  <div className="absolute left-[55px] top-0 w-[110px] h-[80px] bg-white rounded-xl border border-slate-200 shadow-md flex flex-col items-center justify-center gap-2 animate-float z-10 group-hover:shadow-lg transition-shadow duration-500">
                    <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center">
                      <FileJson className="w-5 h-5 text-slate-700" aria-hidden />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-700">SDK</span>
                  </div>
                  {/* Front card */}
                  <div className="absolute right-0 top-6 w-[90px] h-[68px] bg-white rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center gap-1.5 animate-float-delayed opacity-60 group-hover:opacity-85 transition-opacity duration-500 rotate-3">
                    <BookOpen className="w-5 h-5 text-slate-400" aria-hidden />
                    <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">DOCS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-900 mb-3">
                SDK &amp; API Integration
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Simple REST API with intuitive endpoints. Official SDKs for
                React, Node, Python, Go, and more.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="reveal-text stagger-2 group border-b md:border-b-0 md:border-r border-slate-200/60 p-0">
            <div className="p-8 flex flex-col items-center justify-center min-h-[240px] border-b border-dashed border-slate-200/60">
              <div className="relative w-full h-40 flex items-center justify-center gap-4">
                {[
                  { icon: ToggleRight, label: "FLAGS" },
                  { icon: Users, label: "SEGMENTS" },
                  { icon: FlaskConical, label: "EXPERIMENTS" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 px-4 py-3 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <Icon className="w-5 h-5 text-slate-600" aria-hidden />
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-900 mb-3">
                Easy Migration Tools
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Instantly import your flags, segments, and experiments
                from LaunchDarkly, Split, or others.
              </p>
            </div>
          </div>

          {/* Card 3 — Animated waveform + headset */}
          <div className="reveal-text stagger-3 group p-0">
            <div className="p-8 flex flex-col items-center justify-center min-h-[240px] border-b border-dashed border-slate-200/60 overflow-hidden">
              <div className="relative w-full h-40 flex items-center justify-center">
                {/* Audio waveform visualization */}
                <div className="flex items-center gap-[3px]">
                  {/* Left waveform bars */}
                  {[28, 44, 20, 36, 52, 16, 40, 32, 48, 24, 38].map((h, i) => (
                    <div
                      key={`l-${i}`}
                      className="w-[3px] rounded-full bg-slate-200 group-hover:bg-slate-300 transition-colors duration-500"
                      style={{
                        height: `${h}px`,
                        animation: `waveform 1.5s ease-in-out ${i * 0.08}s infinite alternate`,
                      }}
                    />
                  ))}

                  {/* Center headset icon */}
                  <div className="mx-3 w-14 h-14 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center animate-pulse-subtle">
                    <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                    </svg>
                  </div>

                  {/* Right waveform bars */}
                  {[38, 24, 48, 32, 40, 16, 52, 36, 20, 44, 28].map((h, i) => (
                    <div
                      key={`r-${i}`}
                      className="w-[3px] rounded-full bg-slate-200 group-hover:bg-slate-300 transition-colors duration-500"
                      style={{
                        height: `${h}px`,
                        animation: `waveform 1.5s ease-in-out ${(i + 11) * 0.08}s infinite alternate`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-900 mb-3">
                Quick Human Support
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Let our team help you migrate from your previous tool.
                Zero downtime guaranteed.
              </p>
            </div>
          </div>
        </div>

        {/* Dotted separator line */}
        <div aria-hidden className="border-b border-dashed border-slate-200/60" />

        {/* 3 benefit feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-200/60">
          {/* Benefit 1 */}
          <div className="reveal-text stagger-1 group border-b md:border-b-0 md:border-r border-slate-200/60 p-8 hover:bg-slate-50/50 transition-colors duration-300">
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 mb-5 group-hover:scale-110 transition-transform duration-300">
              <GitBranch className="w-5 h-5" aria-hidden />
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Targeted Rollouts
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Release features to specific users based on email, region, or
              custom attributes. Slowly ramp up from 1% to 100%.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="reveal-text stagger-2 group border-b md:border-b-0 md:border-r border-slate-200/60 p-8 hover:bg-slate-50/50 transition-colors duration-300">
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 mb-5 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-5 h-5" aria-hidden />
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              A/B Experiments
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Run statistically significant experiments. Compare variants and
              automatically promote the winner.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="reveal-text stagger-3 group p-8 hover:bg-slate-50/50 transition-colors duration-300">
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 mb-5 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-5 h-5" aria-hidden />
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-2">
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
