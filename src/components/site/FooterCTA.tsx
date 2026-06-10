import { Phone } from "lucide-react";

export function FooterCTA() {
  return (
    <section id="contact" className="bg-brand-deep text-brand-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:text-left">
        <h2 className="font-display text-3xl sm:text-4xl">
          Contact us today for a plan assessment.
        </h2>
        <a
          href="tel:6365615060"
          className="inline-flex items-center gap-3 rounded-md bg-white px-7 py-4 text-lg font-bold tracking-wide text-brand-deep transition-colors hover:bg-brand-soft"
        >
          <Phone className="h-5 w-5" />
          (636) 561-5060
        </a>
      </div>
    </section>
  );
}
