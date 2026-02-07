import Image from "next/image";
import { Terminal } from "lucide-react";

const sdkLanguages = [
  { name: "React", color: "bg-sky-50 text-sky-700 border-sky-200/60" },
  { name: "Node.js", color: "bg-emerald-50 text-emerald-700 border-emerald-200/60" },
  { name: "Python", color: "bg-amber-50 text-amber-700 border-amber-200/60" },
  { name: "Go", color: "bg-indigo-50 text-indigo-700 border-indigo-200/60" },
  { name: "Ruby", color: "bg-red-50 text-red-700 border-red-200/60" },
  { name: "PHP", color: "bg-purple-50 text-purple-700 border-purple-200/60" },
];

export default function ProductPreview() {
  return (
    <section id="developers" className="relative bg-white">
      {/* Isometric frame rails */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-full border-x border-slate-200/60" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center py-20 px-6 border-b border-dashed border-slate-200/80">
          <p className="reveal-text text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-5">
            Developer Experience
          </p>
          <h2 className="reveal-text stagger-1 font-cooper text-3xl md:text-[2.75rem] font-medium text-slate-900 tracking-tight mb-5 leading-[1.1]">
            Built for developers,<br className="hidden md:block" />
            loved by product teams.
          </h2>
          <p className="reveal-text stagger-2 text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Integrate in minutes with typed SDKs for React, Node, Python, and Go.
            We handle the caching, evaluations, and updates so you don&apos;t have to.
          </p>
        </div>

        {/* Two-column layout: Code Preview + Feature list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-slate-200/60">
          {/* Left: Code editor mockup + install command */}
          <div className="reveal-text border-b lg:border-b-0 lg:border-r border-slate-200/60 p-8 lg:p-10 flex flex-col">
            {/* Code editor */}
            <div className="bg-white rounded-xl shadow-xl shadow-slate-200/60 border border-slate-200 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800 bg-slate-900">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Checkout.tsx
                </span>
              </div>
              <div className="p-5 font-mono text-[13px] leading-[1.8] overflow-x-auto bg-slate-950 text-slate-300">
                <div className="text-slate-600">{"// 1. Import the hook"}</div>
                <div>
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-sky-300">{"{ useFeature }"}</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-emerald-400">&apos;@featureflow/react&apos;</span>;
                </div>
                <br />
                <div>
                  <span className="text-purple-400">export function</span>{" "}
                  <span className="text-amber-300">CheckoutPage</span>() {"{"}
                </div>
                <div className="text-slate-600 pl-4">{"// 2. Check flag status"}</div>
                <div className="pl-4">
                  <span className="text-purple-400">const</span> isNewFlow ={" "}
                  <span className="text-sky-300">useFeature</span>(
                  <span className="text-emerald-400">&apos;new-checkout&apos;</span>);
                </div>
                <br />
                <div className="pl-4">
                  <span className="text-purple-400">return</span> (
                </div>
                <div className="pl-8">
                  isNewFlow ?{" "}
                  <span className="text-sky-300">&lt;NewCheckout /&gt;</span> :{" "}
                  <span className="text-slate-600">&lt;LegacyCheckout /&gt;</span>
                </div>
                <div className="pl-4">);</div>
                <div>{"}"}</div>
              </div>
            </div>

            {/* Install command */}
            <div className="mt-5 bg-slate-950 rounded-lg border border-slate-800 px-4 py-3 flex items-center gap-3 font-mono text-[13px]">
              <Terminal className="w-4 h-4 text-slate-500 flex-shrink-0" aria-hidden />
              <span className="text-slate-500">$</span>
              <span className="text-emerald-400">npm install</span>
              <span className="text-slate-300">@featureflow/react</span>
            </div>

            {/* SDK Language pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {sdkLanguages.map(({ name, color }) => (
                <span
                  key={name}
                  className={`text-[11px] font-semibold px-3 py-1.5 rounded-full border ${color} transition-all duration-200 hover:scale-105 cursor-default`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Feature benefits */}
          <div className="reveal-text stagger-1 p-8 lg:p-10 flex flex-col justify-center">
            {/* Dashboard image */}
            <div className="mb-8 rounded-xl border border-dashed border-slate-200/80 p-5 flex items-center justify-center bg-slate-50/30">
              <Image
                src="/assets/asset-3.png"
                alt="Dashboard Preview"
                width={400}
                height={220}
                className="object-contain"
              />
            </div>

            <ul className="space-y-5">
              {[
                {
                  title: "Type-safe SDKs",
                  desc: "Autogenerated types from your flag definitions — catch errors at compile time.",
                },
                {
                  title: "Local Fallbacks",
                  desc: "Zero latency defaults baked into the SDK. Your app never breaks if the connection drops.",
                },
                {
                  title: "Real-time Updates",
                  desc: "Flag changes propagate globally in <50ms via edge-cached streaming.",
                },
                {
                  title: "Edge Evaluation",
                  desc: "Flags evaluated at the CDN edge — no round-trips to your origin server.",
                },
              ].map(({ title, desc }) => (
                <li key={title} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
