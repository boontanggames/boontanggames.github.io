# Boontang Games website setup

This is a draft static site for **boontanggames.com**, hosted free using GitHub Pages.

## Review first
- Review the homepage and Eggy Weggy description for accuracy.
- Replace the temporary **B✦** monogram with your **actual winking dragon logo** once the original asset is available and licensed for public use.
- Supply a public support email when ready; no private personal email has been published.
- The included `privacy.html` is **website information only**. Do **not** submit it as an app privacy policy to Google Play. Audit Eggy Weggy's actual Android SDKs and data flows and publish a complete, accurate app-specific policy before release.
- The site intentionally does not link to the private Eggy Weggy repository or imply it is available on Google Play. Add real public download links only after publication.

## Publish on GitHub Pages
1. Merge the draft pull request after checking the content.
2. In repository **Settings → Pages**, select **Deploy from a branch**, branch `main`, folder `/ (root)` and save.
3. The website's default URL will be `https://boontanggames.github.io/`.
4. In **Settings → Pages → Custom domain**, enter `boontanggames.com`.
5. At your DNS provider (e.g. Namecheap) point the .com apex to GitHub Pages using these A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
6. Set `www` as a CNAME pointing to `boontanggames.github.io`.
7. Remove conflicting **web** parking A/CNAME records, but do not remove MX, TXT, SPF, DKIM or other email-related records.
8. Wait for DNS and HTTPS provisioning; enable **Enforce HTTPS** when available.
9. Configure **boontanggames.co.uk** (both apex and www) as a permanent redirect to `https://boontanggames.com`. Confirm that HTTPS visitors also redirect without a certificate error; a forwarding service with HTTPS support may be required.

**Don't create an `app-ads.txt` placeholder.** Obtain the exact authorised publisher line(s) from your AdMob account before creating `https://boontanggames.com/app-ads.txt`; then verify the app's website URL in the Play/AdMob metadata.

## No paid hosting required
The site uses plain HTML and CSS with no third-party scripts, build tools or external fonts. It should be easy to edit in GitHub, Codex or any text editor.

## Future content
- Upload the original winking dragon logo.
- Replace the illustrative egg artwork with actual authorised game screenshots.
- Publish a genuine support mailbox and an accurate Eggy Weggy app privacy policy.
- Update release/store links after public launches.
- Add pages for other games only if you decide to develop and release them in future.
