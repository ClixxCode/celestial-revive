import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Roselyn L.",
    location: "Lake St. Louis, MO",
    quote:
      "What a wonderful experience we had learning about our Medicare options. Megan is so knowledgeable, well prepared and answered all our questions. We feel so fortunate to have placed our trust in getting this crucial information in a concise, well formulated meeting.",
  },
  {
    name: "Debbie P.",
    location: "Lake St. Louis, MO",
    quote:
      "Eric Steinlage and his team are the best. He's quick, very knowledgeable and wants what is best for his clients. My husband and I couldn't be happier with the service and atmosphere at Steinlage Insurance.",
  },
  {
    name: "Terrie L.",
    location: "St. Louis, MO",
    quote:
      "Eric and the staff at Steinlage really took care of me. Medicare supplements can be very complicated and they have years of experience. They review your information every year to make sure you still have the best plan for your needs.",
  },
  {
    name: "Joe D.",
    location: "St. Louis, MO",
    quote:
      "Outstanding knowledge of Medicare and the choices we have. Highly recommend Eric and the rest of his staff. Very knowledgeable and helped us make the correct choice for my wife and self.",
  },
  {
    name: "Janet L.",
    location: "St. Louis, MO",
    quote:
      "Fantastic service. Efficient, knowledgeable, and professional. Extremely helpful from beginning to end. Highly recommend.",
  },
  {
    name: "Megan M.",
    location: "St. Louis, MO",
    quote:
      "Fast, friendly, and makes what is usually confusing and stressful simple and easy.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-3xl text-brand-deep sm:text-4xl md:text-5xl">
            What our clients are saying.
          </h2>
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJM8Mw6JPP3ocRs1Djfy4YQEg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold uppercase tracking-wider text-brand hover:underline"
          >
            Read all reviews &rarr;
          </a>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <li
              key={r.name}
              className="flex flex-col rounded-2xl border border-brand-deep/10 bg-card p-7 shadow-soft"
            >
              <div className="flex gap-0.5 text-highlight" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/85">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-brand-deep/10 pt-4">
                <p className="font-semibold text-brand-deep">{r.name}</p>
                <p className="text-xs uppercase tracking-wider text-foreground/55">
                  {r.location} &middot; Google Review
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
