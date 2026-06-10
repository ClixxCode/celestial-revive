import { ArrowUpRight } from "lucide-react";

const FEATURES = [
  {
    eyebrow: "Partnerships",
    title: "Financial Advisors",
    body: "Learn why financial advisors across the nation partner with us and ask us to guide their clients through Medicare and ACA.",
    cta: "Learn More",
    href: "#partnerships",
    variant: "light-orange",
  },
  {
    eyebrow: "Resources",
    title: "Becoming Medicare eligible?",
    body: "This on-demand educational webinar offers clear, strategic guidance to help you understand Medicare and make informed coverage decisions that align with your health, lifestyle, and financial goals. Watch anytime, from the comfort of your own home.",
    cta: "Learn More",
    href: "#webinars",
    variant: "dark",
  },
  {
    eyebrow: "Guidance",
    title: "Know the Facts, Avoid the Pitfalls",
    body: "We provide personalized Medicare and ACA guidance so you can make confident choices, avoid costly mistakes, and feel fully supported every step of the way.",
    cta: "Get Started",
    href: "#contact",
    variant: "light-blue",
  },
] as const;

export function FeatureCards() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-stretch gap-8 md:grid-cols-3">
          {FEATURES.map(({ eyebrow, title, body, cta, href, variant }) => {
            const isDark = variant === "dark";
            const cardBg = isDark ? "bg-brand-deep" : "bg-card";
            const cardShadow = isDark
              ? "shadow-[20px_20px_0_0_color-mix(in_oklab,var(--highlight)_18%,transparent)]"
              : "shadow-[20px_20px_0_0_color-mix(in_oklab,var(--brand-deep)_8%,transparent)] hover:shadow-[20px_20px_0_0_color-mix(in_oklab,var(--brand-deep)_14%,transparent)]";
            const sideBorder =
              variant === "light-orange"
                ? "border-l-4 border-highlight"
                : variant === "light-blue"
                  ? "border-l-4 border-brand-deep"
                  : "border-t-4 border-highlight";
            const titleColor = isDark ? "text-white" : "text-brand-deep";
            const bodyColor = isDark ? "text-white/80" : "text-foreground/70";
            const ctaColor = isDark
              ? "text-highlight hover:text-white"
              : "text-brand-deep group-hover:text-highlight";

            return (
              <article
                key={title}
                className={`group relative flex flex-col p-10 transition-all duration-300 hover:-translate-y-2 ${cardBg} ${sideBorder} ${cardShadow}`}
              >
                <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-highlight">
                  {eyebrow}
                </span>
                <h3 className={`font-display text-3xl font-bold leading-tight ${titleColor}`}>
                  {title}
                </h3>
                <p className={`mt-6 flex-1 text-sm leading-relaxed ${bodyColor}`}>{body}</p>
                <a
                  href={href}
                  className={`mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors ${ctaColor}`}
                >
                  {cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
