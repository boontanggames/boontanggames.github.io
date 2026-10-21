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

The policy now describes the published **1.16.0 / code 25 GitHub testing preview**, whose exact APK source is `78dd94e3704ce627b4b7ecb87d4545c75893e7c8`. Publication was approved by the owner on 21 October 2026. This replaces the previous policy's distinction between published 1.14.0 and unpublished 1.16.0. Google Play submission, live adverts and cash checkout remain disabled/deferred. Policy publication does not activate those services or certify the game.

| Area | Observed behaviour and policy treatment |
| --- | --- |
| Core game | Offline puzzle play; device-local progress, settings, active board, challenges, lives and wallet. No game account, chat, public leaderboard or cloud-save service. |
| Local play notes | `web/playtest.js` retains up to 300 recent attempts; `web/app.js` records them during saving. This is not a separate opt-in or a remote analytics upload. The policy discloses the local record and rollover limit. |
| Advertising | Native Google Mobile Ads 25.4.0; Google UMP 4.0.0. Official test app/unit IDs remain configured. Initialisation and loads follow explicit advertising/privacy actions. No banner, interstitial or app-open placement is implemented. The exact debug/sample-ID exception may omit publisher consent messages; production/non-debug adult flows refresh UMP before each requested ad. |
| Age | `PrivacyGate.java` offers under13, teen, adult and unknown, with no default. The range is saved locally. TFAT CHILD, restricted publisher personalisation and non-personalised requests apply to younger, teen, unknown and unready profiles. All audiences have a G content limit. Age answers are not parental authorisation. |
| Child advertising limits | Request flags are present. Real SDK creative behaviour, prohibited identifier handling and five-second dismissal remain unverified. The policy does not certify compliance, parental consent or an absence of SDK data processing. |
| Purchases | Google Play Billing foundations exist; checkout defaults off. New checkout remains adult-only, with no implemented supervised-child purchase path. The policy describes disabled checkout and requires an update before activation. |
| Backups | User-selected document export/import. Files include game/progress/preferences and permitted inventory; lives, ad allowances and receipt ledgers stay local. Android automatic backup is disabled. Exported files must be deleted separately. |
| Support | Every profile can copy a prepared report locally. Only a known adult can open its external GitHub URL; the native age/privacy revision is checked again at dispatch. Opening transmits query text before issue submission. The policy explains this distinction and does not promise anonymous/private GitHub support. |
| Permissions/security | The actual APK excludes advertising-ID and all three Ad Services permissions for every age, and excludes contacts/camera/microphone/precise-location permissions. The publisher first-party-ID opt-out must succeed after initialization and before a load; this is different from App Set ID. Do not infer zero SDK identifiers or approximate-location processing: an ad service can derive general location from IP. App storage is not represented as encrypted. |
| Providers | Google's advertising/consent services, GitHub when chosen, Gmail for the confirmed public support mailbox, and user-selected backup providers. No additional analytics or mediation adapter was identified in the reviewed integration. Account-side demand sources require separate verification before live activation. |

Key evidence: `android/AndroidManifest.xml`, `android/build.gradle`, `android/src/com/eggyweggy/game/PrivacyGate.java`, `AdPrivacyPolicy.java`, `RewardedAds.java`, `MainActivity.java`, `SupportRequestPolicy.java`, `web/app.js`, `web/playtest.js`, `android/README.md`, and `docs/child-advertising-plan.md` in the game source.


## Source check on completion

The published APK from [successful build 39667708084](https://github.com/boontanggames/Eggy-weggy/actions/runs/39667708084) has SHA-256 `e3aa6f3f34eb85b65b2d47739bb97e8122c4fbecb2612ef3e1716d08ac8108e6`. Its actual manifest, SDK/API configuration, sample IDs, packaged assets and signing continuity were verified before release. The game repository records [the release and remaining checks](https://github.com/boontanggames/Eggy-weggy/blob/main/docs/mixed-audience-compliance-audit.md).

The separate current-SDK runtime diagnostic failed in its test-only native observer before Watch or age selection. It is not a successful child-ad request, playback, five-second dismissal or earned-reward test. The public policy describes implemented controls without presenting them as certification or proof that no SDK data is processed.

## App and store integration

This website change does not modify an installed APK. The existing Android Privacy screen has a short local explanation and advertising controls, but still needs the complete dated policy and confirmed contact to be included in a subsequent Android update.

When adding it, preserve the packaged WebView's network boundary: include readable offline text, and use a narrowly allowed native browser action if opening the public policy URL. Keep any external email/browser actions explicit.

Before a Google Play submission, reconcile the policy, in-app access, Data safety, target audience, ads and store contact fields with the exact distributed build. The current app has no game accounts. Do not claim “no data collected” solely because puzzle saves remain local.

## Production services

The existing game launch work still includes actual ad-content/identifier and child/unknown dismissal verification, consent configuration and any required parental/legal basis arrangements. Keep live advertising and checkout disabled until their separate requirements are met. A notice does not establish those tests or create purchase verification/recovery infrastructure.

Recheck the exact SDK versions rather than assuming the latest provider disclosure applies unchanged to the pinned 25.4.0. Obtain genuine owner seller details before adding app-ads.txt. If live ads, purchases, accounts, cloud saving or the controller change, update the policy before the new processing begins.

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
