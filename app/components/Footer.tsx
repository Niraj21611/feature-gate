import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-white">
      {/* Isometric frame rails */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-full border-x border-slate-200/60" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-16 border-b border-dashed border-slate-200/60">
          <div className="col-span-2 pr-8">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/feature-logo.png" width={28} height={28} alt="FeatureFlow" />
              <span className="font-semibold text-slate-900 tracking-tight">
                FeatureFlow
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-6 max-w-xs leading-relaxed">
              The feature management platform for teams that care about speed,
              safety, and user experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" aria-hidden />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" aria-hidden />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" aria-hidden />
              </a>
            </div>
          </div>

          {[
            {
              title: "Product",
              links: [
                { label: "Features", href: "#product" },
                { label: "SDKs", href: "#developers" },
                { label: "Integrations", href: "#" },
                { label: "Pricing", href: "#pricing" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Guides", href: "#" },
                { label: "Status", href: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Legal", href: "#" },
                { label: "Contact", href: "#" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-900 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3 text-sm text-slate-500">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-slate-900 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© 2026 FeatureFlow Inc.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
