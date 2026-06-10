import { Phone } from "lucide-react";

export function IntroBand() {
  return (
    <section id="about" className="relative bg-brand text-brand-foreground">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Strategic Medicare &amp; ACA planning starts here.
          </h2>
        </div>

        <div className="md:col-span-7 md:pt-2">
          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            As independent health insurance brokers, we shop over 50 highly rated Medicare and ACA
            carriers each year. Our goal is to find the most optimal coverage based on your unique
            needs. We match you with the right coverage by focusing on what matters most, your
            doctors, your prescriptions, and your budget. We only work with trusted, reputable
            companies, so you can feel confident you&rsquo;re getting dependable coverage without
            the hassle or pressure.
          </p>
          <p className="mt-6 text-base leading-relaxed text-white/90">
            <a href="#contact" className="underline underline-offset-4 hover:text-white">
              Contact Steinlage
            </a>{" "}
            today to get started with a Medicare / ACA plan assessment, including pre-enrollment
            guidance, enrollment support, and ongoing help year-round.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-deep transition-colors hover:bg-brand-soft"
            >
              Get a Free Estimate
            </a>
            <a
              href="tel:6365615060"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              (636) 561-5060
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
