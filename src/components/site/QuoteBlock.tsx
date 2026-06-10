import signatureAsset from "@/assets/steinlage-signature.jpg.asset.json";

export function QuoteBlock() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          A note from
        </p>
        <h2 className="mt-3 font-display text-4xl text-brand-deep sm:text-5xl">
          William H. Steinlage
        </h2>
        <p className="mt-2 text-sm font-medium uppercase tracking-wider text-foreground/60">
          Former CEO &amp; President
        </p>

        <figure className="mt-12">
          <svg
            className="mx-auto h-10 w-10 text-brand/30"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
          <blockquote className="mt-6 font-display text-2xl leading-snug text-brand-deep sm:text-3xl">
            Quality is never an accident; it is always the result of high intention, sincere
            effort, intelligent direction and skillful execution. It represents the wise choice of
            many alternatives.
          </blockquote>
          <figcaption className="mt-4 text-sm uppercase tracking-wider text-foreground/60">
            &mdash; Willa Foster
          </figcaption>
        </figure>

        <div className="mx-auto mt-12 max-w-2xl space-y-5 text-left text-base leading-relaxed text-foreground/80">
          <p>
            These words reflect the level of excellence that the Steinlage Agency strives to
            provide to our customers.
          </p>
          <p>
            Our reputation rides on the quality of our product and service. We get one time to
            make a first impression. When we work with high intention, sincere effort, intelligent
            direction, and skillful execution, then we deliver to you the highest quality results.
          </p>
        </div>

        <img
          src={signatureAsset.url}
          alt="William H. Steinlage signature"
          className="mx-auto mt-10 h-16 w-auto opacity-90"
          loading="lazy"
        />
      </div>
    </section>
  );
}
