import { Star } from "lucide-react";

export function TrustStrip() {
  return (
    <section aria-label="Client reviews" className="bg-background pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative flex flex-col items-center gap-6 border-y border-brand-deep/10 bg-card px-8 py-10 text-center md:flex-row md:justify-center md:gap-10 md:text-left">
          <div className="flex items-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-7 w-7 fill-highlight text-highlight" />
            ))}
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="font-display text-3xl leading-none text-brand-deep md:text-4xl">
              1,000+ five-star Google&nbsp;reviews
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
              Trusted by families across the&nbsp;Midwest
            </p>
          </div>
          <a
            href="https://www.google.com/search?q=Steinlage+Insurance+Agency+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-brand-deep/20 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-brand-deep transition-colors hover:bg-brand-deep hover:text-white md:ml-4"
          >
            Read Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
