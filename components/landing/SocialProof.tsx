import {
  Box,
  Layers,
  Zap,
  Infinity as InfinityIcon,
  Cloud,
} from "lucide-react";

export default function SocialProof() {
  const brands = [
    { icon: Box, name: "ACME" },
    { icon: Layers, name: "Stack" },
    { icon: Zap, name: "Bolt" },
    { icon: InfinityIcon, name: "Loop" },
    { icon: Cloud, name: "Sky" },
  ];

  return (
    <section className="relative bg-white border-b border-slate-200/60">
      {/* Isometric frame rails */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-full border-x border-slate-200/60" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14">
        <p className="reveal-text text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 text-center mb-10">
          Trusted by modern engineering teams
        </p>
        <div className="reveal-text stagger-1 flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {brands.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="flex items-center gap-2.5 text-slate-400 hover:text-slate-700 transition-colors duration-300 cursor-default"
            >
              <Icon className="w-5 h-5" aria-hidden />
              <span className="font-semibold text-base tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
