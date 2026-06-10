
# Remove AI-tell flourishes

Goal: make the homepage read like a real agency site, not a generated template. Remove decorative eyebrow pills, kicker labels, and ornamental icons that don't add information.

## Hero (`src/components/site/Hero.tsx`)
- Remove the "Family owned since 1950" pill badge above the H1 (dot + uppercase tracked label).
- Keep the headline, subhead, CTAs, and the Years / Carriers / Generations stats row.

## Feature cards (`src/components/site/FeatureCards.tsx`)
- Remove the rounded icon tile (Users / ShoppingBasket / Clock) above each card title.
- Drop the `lucide-react` `Users`, `ShoppingBasket`, `Clock` imports and the `icon` field in the `FEATURES` array.
- Keep the `ArrowUpRight` on the "Learn More / Get Started" link — that one is functional, not decorative.

## Intro band (`src/components/site/IntroBand.tsx`)
- Remove the "STEINLAGE INSURANCE AGENCY" uppercase eyebrow above the H2. The H2 already carries the brand voice.
- Keep the phone icon on the call button (functional affordance).

## Quote block (`src/components/site/QuoteBlock.tsx`)
- Remove the "A NOTE FROM" eyebrow label above "William H. Steinlage".
- Remove the small decorative quote-mark SVG above the blockquote.
- Keep the signature image, title line, blockquote, and Willa Foster attribution.

## Media card (`src/components/site/MediaCard.tsx`)
- Remove the "IN THE NEWS" eyebrow above "As Seen On NBC".
- Remove the `NBC29` floating pill on the thumbnail (the headline already says NBC).
- Keep the play-circle icon — it signals "this is a video".

## Family section (`src/components/site/FamilySection.tsx`)
- Remove the "SINCE 1950" eyebrow above the H2. The body copy already mentions 1950 and three generations.

## Out of scope
- Layout, colors, typography, copy wording — unchanged.
- Footer CTA, SiteHeader, SiteFooter — no AI-tell elements flagged there.
