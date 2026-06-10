import { ArrowRight } from "lucide-react";
import familyAsset from "@/assets/steinlage-family.jpg.asset.json";

export function FamilySection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
        <div className="relative">
          <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-2xl bg-brand md:block" />
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-elevated">
            <img
              src={familyAsset.url}
              alt="The Steinlage family in their office: Eric, Margo and Karl Steinlage"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <h2 className="font-display text-4xl leading-tight text-brand-deep sm:text-5xl">
            Our family helping your&nbsp;family.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
            We have over 100 years of combined experience. For three generations, the Steinlage
            family has helped families with their insurance needs, specializing in the senior
            health market with Medicare insurance and the individual ACA market. Get to know us
            and see how we can help your family save for the future.
          </p>
          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-foreground transition-colors hover:bg-brand-deep"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
