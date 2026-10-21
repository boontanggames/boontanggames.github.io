# Eggy Weggy privacy policy setup

Updated on 21 October 2026.

## Configured policy and contact

Policy: https://boontanggames.com/eggy-weggy-privacy.html

Data controller: **Kenneth Burton, trading as Boontang Games**, United Kingdom.

Public support/privacy contact: **boontanggames@gmail.com**, confirmed by the owner on 21 October 2026. The owner operates the brand personally and has not incorporated Boontang Games Ltd. No trademark or incorporation status is claimed.

The policy has an effective/update date of 21 October 2026 and contains no draft or owner-detail placeholders. It is linked from the homepage, game page and separate website privacy notice, and included in the sitemap. The studio contact button opens the confirmed public mailbox.

The game policy covers local saves/play notes, optional Google test adverts and consent controls, age groups, backups, user-shared reports, disabled checkout, retention, privacy rights and complaints. Support email is handled through Gmail. Necessary game/choice processing and support/security use limited legitimate interests; legally required consent remains separate. Publishing the notice does not configure live ads, establish parental consent or activate purchases.

The website notice separately covers GitHub Pages hosting and the confirmed email contact. Neither page introduces a form, tracker or advertising script.

## Reviewed behaviour

The policy was prepared from Android development source 1.16.0 / code 25, inspected on 21 October 2026 at snapshot `e107b973bb97e4de99633e1e1e3033be4c32ec36`. All cited file hashes matched that snapshot. The latest published preview is 1.14.0 / code 23; it retains the earlier adult-only advertising restriction. The next-release policy must not claim that the newer child advertising path has already shipped.

| Area | Observed behaviour and policy treatment |
| --- | --- |
| Core game | Offline puzzle play; device-local progress, settings, active board, challenges, lives and wallet. No game account, chat, public leaderboard or cloud-save service. |
| Local play notes | `web/playtest.js` retains up to 300 recent attempts; `web/app.js` records them during saving. This is not a separate opt-in or a remote analytics upload. The policy discloses the local record and rollover limit. |
| Advertising | Native Google Mobile Ads 24.9.0; Google UMP 4.0.0. Official test app/unit IDs remain configured. Initialisation and loads follow explicit advertising/privacy actions. No banner, interstitial or app-open placement is implemented. |
| Age | `PrivacyGate.java` offers under13, teen, adult and unknown. The range is saved locally. Next-release younger/unknown requests receive conservative child-directed/non-personalised configuration; adult eligibility remains separate. |
| Child advertising limits | Request flags are present. Real SDK creative behaviour, prohibited identifier handling and five-second dismissal remain unverified. The policy does not certify compliance, parental consent or an absence of SDK data processing. |
| Purchases | Google Play Billing foundations exist; checkout defaults off. New checkout remains adult-only, with no implemented supervised-child purchase path. The policy describes disabled checkout and requires an update before activation. |
| Backups | User-selected document export/import. Files include game/progress/preferences and permitted inventory; lives, ad allowances and receipt ledgers stay local. Android automatic backup is disabled. Exported files must be deleted separately. |
| Support | A player can copy a prepared report or open a GitHub report URL. Opening that URL transmits its query text to GitHub before issue submission. The draft explicitly explains this distinction and does not promise anonymous/private GitHub support. |
| Permissions/security | Application manifest requests internet, network state and vibration, not contacts/camera/microphone/precise location. Do not infer zero approximate-location collection: an ad service can derive it from IP. App storage is not represented as encrypted. |
| Providers | Google's advertising/consent services, GitHub when chosen, support email provider when established, and user-selected backup providers. No additional analytics or mediation provider was identified in the reviewed integration. |

Key evidence: `android/AndroidManifest.xml`, `android/build.gradle`, `android/src/com/eggyweggy/game/PrivacyGate.java`, `AdPrivacyPolicy.java`, `RewardedAds.java`, `MainActivity.java`, `SupportRequestPolicy.java`, `web/app.js`, `web/playtest.js`, `android/README.md`, and `docs/child-advertising-plan.md` in the game source.


## Source check on completion

Game main was rechecked at `c43f7651ce0f36a4513939ab35d22d8843cd051b`. The relevant gameplay, local-notes, age/privacy, advertising, manifest and dependency file hashes still match the reviewed snapshot. The README still identifies 1.14.0 as the latest published preview and 1.16.0 as unpublished source. The policy distinguishes those versions.

## App and store integration

This website change does not modify an installed APK. The existing Android Privacy screen has a short local explanation and advertising controls, but still needs the complete dated policy and confirmed contact to be included in a subsequent Android update.

When adding it, preserve the packaged WebView's network boundary: include readable offline text, and use a narrowly allowed native browser action if opening the public policy URL. Keep any external email/browser actions explicit.

Before a Google Play submission, reconcile the policy, in-app access, Data safety, target audience, ads and store contact fields with the exact distributed build. The current app has no game accounts. Do not claim “no data collected” solely because puzzle saves remain local.

## Production services

The existing game launch work still includes actual ad-content/identifier and child/unknown dismissal verification, consent configuration and any required parental/legal basis arrangements. Keep live advertising and checkout disabled until their separate requirements are met. A notice does not establish those tests or create purchase verification/recovery infrastructure.

Recheck the exact SDK versions rather than assuming the latest provider disclosure applies unchanged to the pinned 24.9.0. Obtain genuine owner seller details before adding app-ads.txt. If live ads, purchases, accounts, cloud saving or the controller change, update the policy before the new processing begins.

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

Local checks cover HTML structure, section targets, existing relative links/resources, the canonical policy URL, the confirmed contact, absence of draft placeholders and sitemap XML. The existing pull-request workflow checks all pages, including the game policy, for horizontal overflow and broken images at 320, 360, 390, 430, 768 and 1280px. Its final result and the subsequent deployment are recorded in the pull request.

Public release is complete only when the deployed HTTPS policy URL is accessible without signing in and contains the confirmed operator/contact details.
