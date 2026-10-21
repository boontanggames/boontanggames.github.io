# Boontang Games website setup

This is the static site for **boontanggames.com**, hosted free using GitHub Pages.

## Review first
- Review the homepage and Eggy Weggy description for accuracy.
- The official winking dragon logo and game screenshots are already included. Keep the mobile layout checks passing when changing them.
- Public support/privacy email: **boontanggames@gmail.com**. Operator: **Kenneth Burton, trading as Boontang Games**. These details were supplied for this purpose by the owner.
- `privacy.html` covers the website. `eggy-weggy-privacy.html` is the dedicated Android game policy. Its public URL is https://boontanggames.com/eggy-weggy-privacy.html. Check the actual distributed build, in-app policy access and matching Data safety/target-audience declarations before a store submission.
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
- Keep the policy and public contact details current if the operator, advertising, purchase or data-handling arrangements change.
- Include the policy and public contact in the next Android update; the existing installed APK is not changed by publishing this website.
- Update release/store links after public launches.
- Add pages for other games only if you decide to develop and release them in future.
