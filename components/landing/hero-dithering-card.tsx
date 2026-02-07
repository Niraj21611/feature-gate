"use client";

import { ArrowRight } from "lucide-react";
import { lazy, Suspense, useState } from "react";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({
    default: mod.Dithering,
  }))
);

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full flex justify-center items-center px-4 md:px-6">
      <div
        className="w-full max-w-6xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden bg-white shadow-sm min-h-[600px] flex flex-col items-center justify-center duration-500">

          {/* ✅ White base */}
          <div className="absolute inset-0 bg-white" />

          {/* ✅ Subtle black grain */}
          <Suspense fallback={null}>
            <div className="absolute inset-0 pointer-events-none opacity-[0.10]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.9),white_70%)]" />

              <Dithering
                colorBack="#FFFFFF"
                size={2}
                colorFront="#111111"
                shape="warp"
                type="8x8"
                speed={isHovered ? 0.25 : 1}
                className="size-full"
              />

            </div>

          </Suspense>

          {/* Content */}
          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              New: Visual Flag Editor →
            </div>

            <h2 className="font-cooper text-5xl md:text-7xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-8 leading-[1.05]">
              Deploy at the
              <br />
              <span className="text-slate-500">speed of thought.</span>
            </h2>


            <p className="text-slate-600 text-md md:text-lg max-w-2xl mb-8 leading-relaxed">
              Decouple release from deployment. Manage features, run experiments,
              and rollback instantly without touching a line of code.
            </p>


            <button className="group relative inline-flex h-12 items-center justify-center gap-3 rounded-full bg-slate-900 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/10">
              <span className="relative z-10">Start Building</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
