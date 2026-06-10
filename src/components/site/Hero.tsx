import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroAsset from "@/assets/hero-family.jpg.asset.json";
import heroVideo from "@/assets/steinlage-hero.mp4.asset.json";

const ROTATING_WORDS = ["Drive", "Passion", "Talent", "Integrity", "Experience"];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          src={heroVideo.url}
          poster={heroAsset.url}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/85 via-brand-deep/70 to-brand-deep/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36 lg:py-44">
        <div className="max-w-5xl text-white">
          <h1 className="font-display text-4xl leading-[1.1] sm:text-5xl md:whitespace-nowrap md:text-6xl lg:text-7xl">
            Over 100 Years of{" "}
            <span
              key={wordIndex}
              className="relative isolate inline-block animate-fade-in not-italic"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-[-0.15em] bottom-[0.08em] top-[0.18em] z-0 -rotate-1 rounded-sm bg-highlight"
              />
              <span className="relative z-10 text-white">{ROTATING_WORDS[wordIndex]}</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            To get started, please schedule an appointment today. Personalized Medicare and ACA
            guidance from advisors who treat your family like our own.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-deep shadow-soft transition-all hover:bg-brand-soft hover:shadow-elevated"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <dl className="mt-14 flex flex-col items-stretch justify-between gap-8 border-t border-white/20 pt-10 md:flex-row md:gap-12">
            <div className="flex flex-1 items-center gap-4">
              <div className="flex items-baseline gap-3">
                <dd className="font-display text-5xl font-medium leading-none text-white md:text-6xl">
                  100<span className="align-top text-2xl opacity-80 md:text-3xl">+</span>
                </dd>
                <dt className="font-display text-3xl font-medium leading-none text-white md:text-4xl">
                  Years
                </dt>
              </div>
              <div className="ml-auto hidden h-16 w-px self-center bg-gradient-to-b from-transparent via-white/30 to-transparent md:block" />
            </div>

            <div className="flex flex-1 items-center gap-4">
              <div className="flex items-baseline gap-3">
                <dd className="font-display text-5xl font-medium leading-none text-white md:text-6xl">
                  50<span className="align-top text-2xl opacity-80 md:text-3xl">+</span>
                </dd>
                <dt className="font-display text-3xl font-medium leading-none text-white md:text-4xl">
                  Carriers
                </dt>
              </div>
              <div className="ml-auto hidden h-16 w-px self-center bg-gradient-to-b from-transparent via-white/30 to-transparent md:block" />
            </div>

            <div className="flex flex-1 items-center gap-4">
              <div className="flex items-baseline gap-3">
                <dd className="font-display text-5xl font-medium leading-none text-white md:text-6xl">
                  3
                </dd>
                <dt className="font-display text-3xl font-medium leading-none text-white md:text-4xl">
                  Generations

                <dd className="font-display text-5xl font-medium leading-none text-white md:text-6xl">
                  3
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 h-1 w-12 bg-highlight" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
