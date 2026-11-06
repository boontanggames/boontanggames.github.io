# Boontang Games website

Official website: https://boontanggames.com

## The 1.25 presentation

A buildless studio website with a dedicated Eggy Weggy game page. The direction
uses the official orange dragon mark, warm cream and charcoal for the studio,
and the game's plum and gold for Eggy Weggy. Real portrait screenshots carry the
presentation; there are no invented reviews, player counts or store badges.

- `index.html` — studio introduction, actual gameplay, studio story and contact.
- `eggy-weggy.html` — how the game plays, six chapters, full screenshot gallery,
  personalisation and development-testing enquiries.
- `styles.css` — responsive presentation, local fonts, reduced-motion support
  and shared readable privacy-page styles.
- `gallery.js` — optional screenshot viewer with native dialog focus handling,
  Escape, arrow keys, Previous/Next, backdrop close and return focus. Screenshot
  links work normally without JavaScript. The script makes no service calls and
  stores nothing.
- `privacy.html` — the separate website-only privacy notice.
- `eggy-weggy-privacy.html` — the Android game's privacy policy.
- `404.html` — the existing not-found URL presentation.

`CNAME` remains `boontanggames.com`. GitHub Pages hosting, domain, stable page
URLs, public audience and `boontanggames@gmail.com` contact are preserved. This
redesign does not introduce a hosting service, build dependency, tracking,
analytics, external fonts, third-party JavaScript or email collection form.

## Authentic screenshots

The 1.25 page uses six captures supplied from the actual Android development
build:

- `assets/eggy-home-125.webp`
- `assets/eggy-portals-125.webp`
- `assets/eggy-sunshine-125.webp`
- `assets/eggy-map-125.webp`
- `assets/eggy-events-125.webp`
- `assets/eggy-house-125.webp`

Keep every screenshot uncropped and retain its natural portrait aspect ratio.
Images use natural height throughout; do not bring back fixed-height
`object-fit: cover` treatments. The gallery shows large, full screenshots on
narrow phones and expands images through an optional keyboard-accessible viewer.
Older `eggy-*.png` assets are retained as historical files, but the new pages do
not present them as current captures. Never substitute a generated image or a
mockup for a screenshot described as actual gameplay.

The copy describes the verified 1.25 development candidate: 400 campaign levels
across six chapters, sunshine combinations, conveyor belts, Crystal Caverns
portals, Egg House personalisation and weekly events. Publish those claims and
screenshots only after the corresponding candidate passes game verification.
They do not represent a Google Play production release.

## Fonts and official branding

The header and footer keep the official dragon-head mark small; the full
unaltered official logo appears at a bounded width in the studio section.
Original branding details remain in `assets/logo-provenance.md`.

Lilita One is bundled as `assets/lilita-one.ttf`. Baloo 2 is locally served as
`assets/baloo-2-latin.woff`, a 54,668-byte Latin subset of the game's existing
variable TTF. The subset was produced with FontTools, retaining Latin characters,
common punctuation and navigation symbols; no font outlines were redrawn.
Both use `font-display: swap` and are distributed with their SIL Open Font
Licenses in `licenses/`. Legal-policy body copy uses a readable system font.

## Release and privacy rules

The game page clearly says **Android development preview** and **not yet on
Google Play**. The testing-copy action is an email to the existing studio inbox.
Never publish a private preview APK or invent a Play Store link. Any future
release/download link needs a confirmed public, owner-approved destination.

The game policy is at https://boontanggames.com/eggy-weggy-privacy.html, with
Kenneth Burton trading as Boontang Games as controller and
`boontanggames@gmail.com` as public support/privacy contact. The website notice
remains at `privacy.html`. Keep both policies aligned with actual practice. The
in-app policy, accurate Play declarations and authentic AdMob seller details
remain separate launch work; a website redesign does not activate those services.

## Review before publication

The site owner runs viewport, large-text, image and keyboard checks before
publication: 320/360/390/430 px phones, tablet and desktop; native image loading;
all six full screenshot links; dialog Escape, focus return and Previous/Next;
no horizontal document overflow; readable policies; and no broken stable URLs.
The source editor does not deploy or change DNS. This source pass has no browser
or production-deployment claim; publication and final real-image checks belong
to the site owner.
