# Eggy Weggy privacy policy setup

Prepared on 21 October 2026.

## Result

A dedicated, responsive policy draft is prepared at `eggy-weggy-privacy.html`, matching the existing website. Its intended public address is:

https://boontanggames.com/eggy-weggy-privacy.html

The page is explicitly a draft, has no effective date and requests no indexing. It is not yet linked from the live navigation or sitemap. The existing website notice remains a separate document.

## Two details needed from the owner

1. The legal operator: an individual trading as Boontang Games, or the full registered company name. Do not assume that the brand is a limited company.
2. A working public privacy/support email. The website currently publishes no mailbox. A Git commit author address is not enough to establish the intended privacy contact, so no email has been silently repurposed.

Replace the two clearly marked owner-detail fields only after these facts are supplied. Add any other contact/representative details that apply to the operator and actual launch markets. Do not copy a home address or personal contact details from an unrelated conversation.

## Reviewed behaviour

The draft is based on Android development source 1.16.0 / code 25, inspected on 21 October 2026 at snapshot `e107b973bb97e4de99633e1e1e3033be4c32ec36`. All cited file hashes matched that snapshot. The latest published preview is 1.14.0 / code 23; it retains the earlier adult-only advertising restriction. The next-release policy must not claim that the newer child advertising path has already shipped.

| Area | Observed behaviour and policy treatment |
| --- | --- |
| Core game | Offline puzzle play; device-local progress, settings, active board, challenges, lives and wallet. No game account, chat, public leaderboard or cloud-save service. |
| Local play notes | `web/playtest.js` retains up to 300 recent attempts; `web/app.js` records them during saving. This is not a separate opt-in or a remote analytics upload. The policy discloses the local record and rollover limit. |
| Advertising | Native Google Mobile Ads 24.9.0; Google UMP 4.0.0. Official test app/unit IDs remain configured. Initialisation and loads follow explicit advertising/privacy actions. No banner, interstitial or app-open placement is implemented. |
| Age | `PrivacyGate.java` offers under13, teen, adult and unknown. The range is saved locally. Next-release younger/unknown requests receive conservative child-directed/non-personalised configuration; adult eligibility remains separate. |
| Child advertising limits | Request flags are present. Real SDK creative behaviour, prohibited identifier handling and five-second dismissal remain unverified. The draft does not certify compliance, parental consent or an absence of SDK data processing. |
| Purchases | Google Play Billing foundations exist; checkout defaults off. New checkout remains adult-only, with no implemented supervised-child purchase path. The draft describes disabled checkout and requires an update before activation. |
| Backups | User-selected document export/import. Files include game/progress/preferences and permitted inventory; lives, ad allowances and receipt ledgers stay local. Android automatic backup is disabled. Exported files must be deleted separately. |
| Support | A player can copy a prepared report or open a GitHub report URL. Opening that URL transmits its query text to GitHub before issue submission. The draft explicitly explains this distinction and does not promise anonymous/private GitHub support. |
| Permissions/security | Application manifest requests internet, network state and vibration, not contacts/camera/microphone/precise location. Do not infer zero approximate-location collection: an ad service can derive it from IP. App storage is not represented as encrypted. |
| Providers | Google's advertising/consent services, GitHub when chosen, support email provider when established, and user-selected backup providers. No additional analytics or mediation provider was identified in the reviewed integration. |

Key evidence: `android/AndroidManifest.xml`, `android/build.gradle`, `android/src/com/eggyweggy/game/PrivacyGate.java`, `AdPrivacyPolicy.java`, `RewardedAds.java`, `MainActivity.java`, `SupportRequestPolicy.java`, `web/app.js`, `web/playtest.js`, `android/README.md`, and `docs/child-advertising-plan.md` in the game source.

## Finish the website setup

Once the owner details are supplied:

1. Replace the two owner-detail placeholders, review the proposed lawful bases and support retention criteria, and identify the actual support provider and applicable international-transfer arrangements. The draft's legal bases and retention wording are proposed operating practices, not proof that these decisions or safeguards already exist.
2. Confirm which APK/source the completed notice describes. Keep version-specific advertising differences explicit if multiple versions remain distributed.
3. Set an actual effective/update date, remove draft status and the noindex directive, and use a final page title and description.
4. Add an Eggy Weggy privacy link to the homepage, game page and website-privacy page. Update the website notice's current “will be published” wording to link to the completed policy. Add the final URL to the sitemap and update the repository setup notes.
5. Check the deployed HTTPS URL without signing in. Google Play expects an accessible, non-editable HTML policy, and an in-app policy link or text.
6. Add the completed notice and working privacy contact to the Android Privacy screen. The packaged WebView deliberately blocks general network navigation: preserve that boundary, offer readable offline text, and if opening the public URL use a narrowly allowed native browser action. A website change does not modify an installed APK.
7. Enter this final URL in Play Console and reconcile Data safety, target audience, ads and store contact fields against the exact distributed build. Do not submit the website-only notice or claim “no data collected” merely because puzzle saves are local.

This draft preparation does not publish another APK, enable live ads or checkout, submit a Play listing, alter DNS or change the current game.

## Separate checks before live advertising or paid products

- Validate the exact SDK/version and merged manifest rather than relying solely on the newest provider documentation, which currently describes a newer Ads SDK than the pinned 24.9.0.
- Check actual SDK identifier/data behaviour, applicable consent/legal basis, and any parental-consent requirements. Under-age request flags and a non-personalised label do not establish those facts.
- Complete the existing child/unknown ad-content, five-second close and earned-reward checks before enabling live child advertising.
- Record the actual Google/AdMob consent configuration, recipients, transfer safeguards and data-retention practices. Configure any required public app-ads.txt using the owner's authentic seller details.
- Update purchase disclosures only when the real verification, fulfilment, account/recovery and refund arrangements are known. Do not promise cross-device consumable recovery in the current local-only implementation.

## Official references checked

- [Google Play User Data policy](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en): privacy policy access, identity/contact, handling, retention and deletion.
- [Google Play Data safety guidance](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en): account for the app and integrated SDKs, across distributed versions.
- [Google Play Families policies](https://support.google.com/googleplay/android-developer/answer/9893335?hl=en): mixed audiences and child/unknown-age advertising.
- [Google Mobile Ads Android data disclosure](https://developers.google.com/admob/android/privacy/play-data-disclosure): IP-derived general location, interactions, diagnostics and applicable identifiers; current page describes the latest SDK, not automatically the pinned build.
- [ICO: privacy information to provide](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/): operator/contact, purposes, bases, recipients/transfers, retention, rights and complaints. The page notes review following the Data (Use and Access) Act.
- [ICO: lawful bases](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/a-guide-to-lawful-basis/): determine and document the appropriate basis before processing; the available bases are not interchangeable.
- [Google UMP European privacy guidance](https://developers.google.com/admob/android/privacy/gdpr): applicable consent, withdrawal and separate under-age treatment.
- [ICO: introduction to the Children's code](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/introduction-to-the-childrens-code/): services likely to be accessed by under-18s and high-privacy defaults.

## Verification

The page reuses the existing local stylesheet and dragon head, with no scripts, external fonts or trackers. Local HTML checks passed: unique section IDs, valid section anchors, existing local resources and no script elements. The updated existing responsive test passes JavaScript syntax checking and includes this page at 320, 360, 390, 430, 768 and 1280px. A local Playwright run could not start because this workspace has no Chromium executable; the repository's existing pull-request workflow installs Chromium and runs those checks. Its result must be checked before merging. Keyboard navigation, enlarged-text layout and the eventual deployed public URL still need browser verification.
