import { PlayCircle } from "lucide-react";

export function MediaCard() {
  return (
    <section className="bg-brand-soft py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <a
          href="https://www.nbc29.com/video/2023/11/21/community-conversation-margo-steinlage-with-center-11-21-23/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-stretch overflow-hidden rounded-2xl border border-brand/15 bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated md:flex-row"
        >
          <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-brand-deep to-brand md:aspect-auto md:w-1/2">
            <PlayCircle className="h-20 w-20 text-white/90 transition-transform group-hover:scale-110" strokeWidth={1.2} />
          </div>
          <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
            <h2 className="font-display text-3xl text-brand-deep sm:text-4xl">
              As Seen On NBC
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/75">
              Community Conversation: Margo Steinlage with the Center for Healthy Aging, sharing
              practical guidance for Medicare-eligible families.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand">
              Watch Now
              <span aria-hidden="true">&rarr;</span>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
