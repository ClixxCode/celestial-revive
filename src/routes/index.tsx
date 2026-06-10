import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { FeatureCards } from "@/components/site/FeatureCards";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Testimonials } from "@/components/site/Testimonials";

import { IntroBand } from "@/components/site/IntroBand";
import { QuoteBlock } from "@/components/site/QuoteBlock";
import { FamilySection } from "@/components/site/FamilySection";
import { MediaCard } from "@/components/site/MediaCard";
import { FooterCTA } from "@/components/site/FooterCTA";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Steinlage Insurance Agency | Medicare & ACA Made Simple" },
      {
        name: "description",
        content:
          "Independent Medicare and ACA brokers in St. Louis. Three generations and 100+ years of combined experience helping families choose the right coverage.",
      },
      { property: "og:title", content: "Steinlage Insurance Agency" },
      {
        property: "og:description",
        content:
          "Strategic Medicare & ACA planning. Our family helping your family since 1950.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <FeatureCards />
        <IntroBand />
        <QuoteBlock />
        <FamilySection />
        <Testimonials />
        <MediaCard />

        <FooterCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
