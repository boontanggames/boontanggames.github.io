# Boontang Games website

Official website: https://boontanggames.com

## Mobile-first redesign

This version replaces the earlier overly decorative design with a simplified, professional layout built around the official Boontang Games branding. It uses a compact **dragon-head logo** plus type in the header, and limits the complete logo's width to avoid horizontal overflow.

- \`index.html\` — studio homepage
- \`eggy-weggy.html\` — Eggy Weggy information and development screenshots
- \`privacy.html\` — website-only privacy notice
- \`404.html\` — not-found page
- \`styles.css\` — fully replaced, responsive stylesheet
- \`assets/boontang-head.webp\` — official logo pack head icon
- \`assets/boontang-logo.webp\` — official full logo
- \`assets/eggy-*.png\` — development screenshots from the private game repository, already present in the previous release

The site retains \`CNAME\` with \`boontanggames.com\`. It requires no DNS changes, hosting upgrades or JavaScript.

## Before merging

Review the three pages on a 320px/360px/390px/430px phone and desktop, test browser zoom, and confirm there is no horizontal scrolling. The head icon should stay small in the header and the full logo must be limited to the hero area. The stylesheet link includes a version query to avoid a stale browser cache of the earlier large-logo CSS.

The website privacy page is **not** an Eggy Weggy app privacy policy. A complete app-specific policy, business contact information, and AdMob app-ads.txt seller declaration are still needed for a public Google Play launch. Never publish a private preview APK or invent a Play Store link.

The site contains no references to Field Command, no analytics, no third-party script, and no paid services.
