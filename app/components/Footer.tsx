import { Github, Linkedin, Twitter, Layers } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 pr-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center">
                <Layers className="text-white w-3.5 h-3.5" aria-hidden />
              </div>
              <span className="font-semibold text-slate-900 tracking-tight">
                FeatureFlow
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-6 max-w-xs">
              The feature management platform for teams that care about speed,
              safety, and user experience.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-slate-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" aria-hidden />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-slate-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" aria-hidden />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-slate-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-slate-900 mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#product" className="hover:text-indigo-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#developers" className="hover:text-indigo-600 transition-colors">
                  SDKs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-indigo-600 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-slate-900 mb-4 text-sm">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© 2026 FeatureFlow Inc.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600">
              Terms
            </a>
            <a href="#" className="hover:text-slate-600">
              Security
            </a>
          </div>
        </div>
        </div>
    </footer>
  );
}
