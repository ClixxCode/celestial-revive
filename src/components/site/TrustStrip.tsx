import { Star } from "lucide-react";

export function TrustStrip() {
  return (
    <section aria-label="Client reviews" className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-6 border-y border-brand-deep/10 bg-card px-8 py-8 text-center md:flex-row md:justify-center md:gap-6">
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-display text-2xl leading-none text-brand-deep md:text-3xl">
            <span>1,000+</span>
            <span className="flex items-center gap-1" aria-label="five stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-highlight text-highlight md:h-7 md:w-7" />
              ))}
            </span>
            <span>Google&nbsp;reviews</span>
          </p>
          <a
            href="https://www.google.com/search?q=Steinlage+Insurance+Agency+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-brand-deep/20 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-brand-deep transition-colors hover:bg-brand-deep hover:text-white md:ml-2"
          >
            Read Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
