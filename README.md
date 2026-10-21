# Boontang Games website

The official static website for **boontanggames.com**, built for GitHub Pages.

## Pages
- \`index.html\` — studio homepage and Eggy Weggy showcase
- \`eggy-weggy.html\` — dedicated Eggy Weggy information and screenshots
- \`privacy.html\` — website-only privacy information, not an app privacy policy
- \`404.html\` — friendly fallback page
- \`styles.css\` — responsive stylesheet (no JavaScript or external CDN)
- \`assets/\` — brand symbol, screenshots copied from the owner's Eggy Weggy repository, and local headline font

## Important notes before merging

1. **Dragon badge**: the included \`assets/dragon-mark.svg\` is a newly drawn *temporary* winking-dragon mark, not the owner's previously commissioned original logo. Replace it with the original supplied logo asset before treating it as final branding.
2. **Screenshots**: four images were copied from the private **boontanggames/Eggy-weggy** development repository into this public website. These are actual game-development screenshots, not synthetic stock images. Review each for accuracy against the release build before public marketing.
3. **Game status**: Eggy Weggy is described as an Android project in development. Do not link a private development APK or claim the app is live in Google Play.
4. **Privacy**: \`privacy.html\` describes the website *only*. Do **not** submit it as Eggy Weggy's Google Play privacy policy. The game needs a separate, verified policy covering actual SDKs, data handling, age gates and purchasing before store release.
5. **Support**: a public support email is not yet configured. No address is invented. Once configured, add real contact details.
6. **Publisher**: don't create a fictional \`app-ads.txt\`. Generate it from the actual AdMob publisher account once established.
7. **Licensing**: the local Lilita One font is distributed with its OFL license under \`licenses/Lilita-One-OFL.txt\`.

## Publishing

Open the draft pull request, inspect the page and screenshot changes, then merge when approved. The current \`CNAME\` file remains unchanged as \`boontanggames.com\`. GitHub Pages is already configured; a merge to \`main\` should automatically deploy the updated site. Do not modify Namecheap or Cloudflare DNS for this redesign.

## Testing checklist

- Inspect navigation and pages on Android (320px and 390px widths) and desktop.
- Confirm all screenshots load on the public site; no 404 errors.
- Confirm headers, cards and CTA do not overflow at 200% text zoom.
- Check that \`https://boontanggames.com/\`, \`/eggy-weggy.html\` and \`/privacy.html\` are HTTPS.
- Confirm Eggy Weggy is the **only** game featured; there is no Field Command content.
- Check keyboard navigation, alt text and reduced-motion behaviour.
- Replace temporary dragon badge with owner's original image and rerun checks.
