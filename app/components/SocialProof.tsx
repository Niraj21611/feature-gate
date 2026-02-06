import {
  Box,
  Layers,
  Zap,
  Infinity as InfinityIcon,
  Cloud,
} from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="reveal-text text-xs font-medium uppercase tracking-widest text-slate-400 mb-8">
          Trusted by modern engineering teams
        </p>
        <div className="reveal-text stagger-1 flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          <div className="flex items-center gap-2 text-slate-800 font-semibold text-lg tracking-tight">
            <Box className="w-5 h-5" aria-hidden /> ACME
          </div>
          <div className="flex items-center gap-2 text-slate-800 font-semibold text-lg tracking-tight">
            <Layers className="w-5 h-5" aria-hidden /> Stack
          </div>
          <div className="flex items-center gap-2 text-slate-800 font-semibold text-lg tracking-tight">
            <Zap className="w-5 h-5" aria-hidden /> Bolt
          </div>
          <div className="flex items-center gap-2 text-slate-800 font-semibold text-lg tracking-tight">
            <InfinityIcon className="w-5 h-5" aria-hidden /> Loop
          </div>
          <div className="flex items-center gap-2 text-slate-800 font-semibold text-lg tracking-tight">
            <Cloud className="w-5 h-5" aria-hidden /> Sky
          </div>
        </div>
      </div>
    </section>
  );
}
