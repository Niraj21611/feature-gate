const testimonials = [
  {
    quote:
      "FeatureGate transformed how we ship features. What used to take days now takes minutes. The confidence it gives our team is invaluable.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "Streamline",
    avatar: "SC",
  },
  {
    quote:
      "The analytics alone are worth the investment. We finally understand which features actually move the needle.",
    author: "Marcus Rodriguez",
    role: "Head of Product",
    company: "Uplift Labs",
    avatar: "MR",
  },
  {
    quote:
      "We evaluated every feature flag solution on the market. FeatureGate was the clear winner for developer experience and reliability.",
    author: "Emily Watson",
    role: "Staff Engineer",
    company: "Nexus Systems",
    avatar: "EW",
  },
];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "< 10ms", label: "Flag evaluation" },
  { value: "50B+", label: "Monthly evaluations" },
  { value: "2,500+", label: "Teams worldwide" },
];

const logos = [
  "Vercel",
  "Stripe",
  "Linear",
  "Notion",
  "Figma",
  "Webflow",
  "Framer",
  "Loom",
];

export default function SocialProof() {
  return (
    <section className="relative py-24 lg:py-32 bg-eggshell">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20 lg:mb-28">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-semibold text-ink-black mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-dusty-denim">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-blue-slate uppercase tracking-wider mb-4">
            Trusted by the best
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink-black leading-tight">
            Teams that build the future
            <br className="hidden sm:block" /> choose FeatureGate
          </h2>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 mb-20 lg:mb-28">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-base font-semibold text-ink-black/30 hover:text-ink-black/60 transition-colors duration-200"
            >
              {logo}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl border border-ink-black/5 hover:shadow-lg hover:shadow-ink-black/5 transition-all duration-300"
            >
              {/* Quote */}
              <blockquote className="text-lg text-ink-black leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-ink-black/5 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-blue-slate">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-ink-black">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-dusty-denim">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
