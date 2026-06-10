import signatureAsset from "@/assets/steinlage-signature.png.asset.json";
import founderAsset from "@/assets/william-steinlage.png.asset.json";

export function QuoteBlock() {
  return (
    <section className="relative overflow-hidden bg-sand py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(var(--brand-deep) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-10 select-none font-display text-[18rem] leading-none text-brand/10 md:text-[28rem]"
      >
        &ldquo;
      </span>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="relative mx-auto max-w-xs md:max-w-none">
            <div className="absolute -inset-3 -rotate-2 rounded-sm bg-brand-deep" />
            <div className="absolute -inset-1 rotate-1 rounded-sm bg-highlight" />
            <div className="relative overflow-hidden rounded-sm bg-white p-3 shadow-elevated">
              <img
                src={founderAsset.url}
                alt="William H. Steinlage, founder and former CEO"
                className="aspect-[4/5] w-full object-cover grayscale"
                loading="lazy"
              />
              <div className="border-t border-border/60 px-1 pb-1 pt-3 text-center">
                <p className="font-display text-lg text-brand-deep">William H. Steinlage</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/60">
                  Founder &middot; 1950
                </p>
              </div>
            </div>
          </div>
        </div>

        <figure className="md:col-span-7">
          <blockquote className="font-display text-3xl leading-[1.2] text-brand-deep sm:text-4xl md:text-5xl">
            Quality is never an accident; it is always the result of high intention, sincere
            effort, intelligent direction and skillful execution.{" "}
            <span className="text-brand">
              It represents the wise choice of many alternatives.
            </span>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-foreground/60">
            <span className="h-px w-10 bg-brand" />
            Willa Foster
          </figcaption>

          <div className="mt-10 space-y-4 border-l-2 border-brand/30 pl-6 text-base leading-relaxed text-foreground/80">
            <p>
              These words reflect the level of excellence that the Steinlage Agency strives to
              provide to our customers.
            </p>
            <p>
              Our reputation rides on the quality of our product and service. We get one time to
              make a first impression. When we work with high intention, sincere effort,
              intelligent direction, and skillful execution, then we deliver to you the highest
              quality results.
            </p>
          </div>

          <img
            src={signatureAsset.url}
            alt="William H. Steinlage signature"
            className="mt-8 h-16 w-auto opacity-90"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
