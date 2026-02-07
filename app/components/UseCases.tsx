import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const useCases = [
  {
    title: "Trunk-Based Development",
    description:
      "Merge code to main constantly. Keep features hidden behind flags until they are ready for prime time.",
    image: "/assets/asset-4.png",
  },
  {
    title: "Beta Testing Management",
    description:
      "Allow non-technical teams to manage beta access lists without requiring engineering support.",
    image: "/assets/asset-5.png",
  },
  {
    title: "Infrastructure Migration",
    description:
      "Safely migrate databases or services by routing a percentage of traffic to the new infrastructure.",
    image: "/assets/asset-1.png",
  },
  {
    title: "Paywall & Entitlements",
    description:
      "Control feature access based on subscription tiers dynamically without redeploying code.",
    image: "/assets/asset-2.png",
  },
];

export default function UseCases() {
  return (
    <section id="enterprise" className="relative bg-white">
      {/* Diagonal rays background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-rays-diagonal opacity-[0.45]" />
        {/* Fade-out edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
      </div>
      {/* Isometric frame rails */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-full border-x border-slate-200/60" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center py-20 px-6 border-b border-dashed border-slate-200/80">
          <p className="reveal-text text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-5">
            Use Cases
          </p>
          <h2 className="reveal-text stagger-1 font-cooper text-3xl md:text-[2.75rem] font-medium text-slate-900 tracking-tight mb-5 leading-[1.1]">
            One platform,<br className="hidden md:block" />
            endless possibilities.
          </h2>
          <p className="reveal-text stagger-2 text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re rolling out to 10 users or 10 million, FeatureFlow
            adapts to every stage of your product lifecycle.
          </p>
        </div>

        {/* 2x2 bordered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-slate-200/60">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`reveal-text stagger-${index + 1} group
                ${index % 2 === 0 ? "md:border-r" : ""} 
                ${index < 2 ? "border-b" : ""} 
                border-slate-200/60 transition-colors duration-300 hover:bg-slate-50/50`}
            >
              {/* Image area */}
              <div className="p-6 pb-0">
                <div className="rounded-xl border border-dashed border-slate-200/80 p-4 flex items-center justify-center bg-slate-50/30 min-h-[180px]">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    width={320}
                    height={180}
                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-slate-600 transition-colors duration-200 flex-shrink-0 mt-0.5" aria-hidden />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
