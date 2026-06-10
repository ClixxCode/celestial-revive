import { ArrowUpRight } from "lucide-react";

const FEATURES = [
  {
    title: "Financial Advisors",
    body: "Learn why financial advisors across the nation partner with us and ask us to guide their clients through Medicare and ACA.",
    cta: "Learn More",
    href: "#partnerships",
  },
  {
    title: "Becoming Medicare eligible?",
    body: "This on-demand educational webinar offers clear, strategic guidance to help you understand Medicare and make informed coverage decisions that align with your health, lifestyle, and financial goals, wherever you are in your journey. Watch anytime, from the comfort of your own home, and gain the clarity you need to move forward with confidence.",
    cta: "Learn More",
    href: "#webinars",
  },
  {
    title: "Know the Facts, Avoid the Pitfalls",
    body: "We provide personalized Medicare and ACA guidance so you can make confident choices, avoid costly mistakes, and feel fully supported every step of the way.",
    cta: "Get Started",
    href: "#contact",
  },
];

export function FeatureCards() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map(({ title, body, cta, href }) => (
            <article
              key={title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-elevated"
            >
              <h3 className="font-display text-2xl text-brand-deep">{title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/75">{body}</p>
              <a
                href={href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:text-brand-deep"
              >
                {cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
