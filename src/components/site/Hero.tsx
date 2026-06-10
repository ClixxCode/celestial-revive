import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Family owned since 1950
          </div>
          <h1 className="text-balance font-display text-5xl leading-[1.05] text-brand-deep sm:text-6xl md:text-7xl">
            Over 100 Years of <em className="not-italic text-brand">Combined Experience</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
            To get started, please schedule an appointment today. Personalized Medicare and ACA
            guidance from advisors who treat your family like our own.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-foreground shadow-soft transition-all hover:bg-brand-deep hover:shadow-elevated"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:6365615060"
              className="inline-flex items-center gap-2 rounded-md border border-brand/30 bg-white px-6 py-3.5 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-soft"
            >
              Call 636-561-5060
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-brand/15 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-foreground/60">Years</dt>
              <dd className="mt-1 font-display text-3xl text-brand-deep">100+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-foreground/60">Carriers</dt>
              <dd className="mt-1 font-display text-3xl text-brand-deep">50+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-foreground/60">Generations</dt>
              <dd className="mt-1 font-display text-3xl text-brand-deep">3</dd>
            </div>
          </dl>
        </div>

        <div className="relative md:col-span-5">
          <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-elevated">
            <div className="aspect-[4/5] bg-gradient-to-br from-brand-soft via-white to-sand">
              <svg
                viewBox="0 0 400 500"
                className="h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.55 0.16 250)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="oklch(0.36 0.13 255)" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <rect width="400" height="500" fill="url(#g1)" />
                <circle cx="200" cy="180" r="60" fill="oklch(0.55 0.16 250)" opacity="0.15" />
                <path
                  d="M120 320 Q200 260 280 320 L280 460 L120 460 Z"
                  fill="oklch(0.55 0.16 250)"
                  opacity="0.2"
                />
                <text
                  x="200"
                  y="240"
                  textAnchor="middle"
                  fontFamily="DM Serif Display"
                  fontSize="42"
                  fill="oklch(0.36 0.13 255)"
                >
                  Steinlage
                </text>
                <text
                  x="200"
                  y="270"
                  textAnchor="middle"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="3"
                  fill="oklch(0.36 0.13 255)"
                  opacity="0.7"
                >
                  MEDICARE &amp; ACA MADE SIMPLE
                </text>
              </svg>
            </div>
            <div className="border-t border-brand/10 bg-white px-6 py-5">
              <p className="text-xs uppercase tracking-[0.18em] text-foreground/60">
                Independent Brokers
              </p>
              <p className="mt-1 text-sm text-foreground/80">
                We shop 50+ highly rated carriers to find the plan that fits your life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
