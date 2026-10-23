# Eggy Weggy public privacy notice

## Current 1.20 notice and standing release requirement

Reviewed and updated **23 October 2026** for the published **1.20.0 / code 31**
GitHub testing APK. The public page follows the policy actually packaged in
game source `1307d22cda8bda1455dc3b7727cefd32a51cb7b0`, with website-specific
version/date context. It explains the advertising pause and local development
rewards, optional device-local lives reminders, disabled friend-request push,
virtual-coin clothing and owned-item backups, and the separate adult cloud flow.
It retains the SDK traffic, account, deletion and family-service acceptance limits.

The owner requires the **online policy and bundled in-game notice to be reviewed
for every APK release**. Update both when disclosures change, verify the exact
APK's notice and the normal public HTTPS response before publishing the APK,
and record version, source, hashes and results. If practices have not changed,
record that review rather than inventing a new policy amendment date. Website
publication cannot change a notice inside an existing installed APK.

The game repository's `AGENTS.md` and `docs/release-checklist.md` record this
standing instruction. The current website change passed six focused layouts,
including enlarged text, all 87 canonical content blocks and 13 section links;
the published APK's notice and bundle were byte-compared with the reviewed
source. Final public-response/deployment proof belongs in the game's versioned
privacy-publication audit after deployment, not in a claim based on pushing source.

## Historical 1.19 preparation and earlier publication

Reviewed 22 October 2026 at the owner's instruction to update the website.

- Public policy: https://boontanggames.com/eggy-weggy-privacy.html
- Controller: **Kenneth Burton, trading as Boontang Games**, United Kingdom.
- Privacy/support contact: **boontanggames@gmail.com**, previously confirmed by the owner.
- Policy effective/update date: **22 October 2026**.
- Separate website-only notice: https://boontanggames.com/privacy.html

## Scope and accuracy

The proposed notice covers testing builds through **1.19.0 / code 29** without claiming that the APK has already been released. It retains the historical published **1.17.1 / code 27** GitHub preview and **1.18.0 / code 28 private test candidate** scope. Optional Firebase Authentication, cloud backups and approved-friend scores were introduced in 1.18; the 1.19 welcome prompt offers local nickname and preset-avatar customisation, can be skipped, and does not initialise Firebase or connect an account. Cloud/social remains restricted to private known-adult testing after explicit native opt-in. Children, teens and unknown-age profiles remain offline for these features. No validated family provisioning is claimed.

The update discloses chosen profile fields, native Google identity handling, private complete-backup snapshots, separate friends activation, pending-request profile visibility, approved-friend score access, recipients, retention, international processing, sign-out versus deletion and cleanup limitations. It retains optional advertising/consent and disabled checkout disclosures. Firebase Analytics is not included; Firebase Auth/Firestore can still process account, device, network and service information.

The account and local-profile descriptions follow the reviewed 1.19 in-app notice and controller/UI:

1. Automatic checkpoints start only after a successful cloud save or confirmed restore and a durably saved per-account preference. Signing in alone does not enable automatic uploads. Saving checks the remote revision before replacement.
2. The app exposes Enable friends, not a local Friends off control. Signing out or opting out does not delete server relationships or revoke existing approved-friend access; remove a friend or delete the game account.
3. The account action is **Profile → Cloud save → Delete cloud account**. Signing out clears native authentication and blocks new signed-in operations; turning off cloud additionally disables Firestore networking.
4. Showing the optional welcome prompt, saving a local design, skipping it or choosing **Play on this device** does not initialise Firebase or enable cloud/friends. The profile fields already disclosed remain the same.

The canonical public Markdown copy is `docs/privacy-policy.md` in the game repository; the website renders that reviewed text while preserving its existing page layout and section URLs. The 1.19 app packages its own offline notice. Updating this website cannot change a notice inside an already installed APK.

## What publication does not establish

Publishing the notice does not launch public accounts, enable live advertising or checkout, publish an APK, submit Google Play declarations or certify Families compliance. Real Google sign-in, two-device recovery/friend access, SDK traffic, project location/provider retention and account-deletion operations still need the acceptance recorded in the private game repository.

This task does not publish a new account-deletion page or verify the operational ownership/cleanup process. The policy explains the in-app route and private support contact. A dedicated public deletion-request resource and its Play declaration remain separate launch work; a generic email paragraph is not treated as verified compliance with that requirement.

The site stays static: no new form, script, tracker, cookies, external fonts or authentication. Existing policy section URLs are retained; the new cloud section is `#cloud` and sign-out/deletion information is `#account-deletion`.

## Verification and deployment

Review HTML structure, all thirteen numbered section targets, policy links, operator/contact, sitemap and source text before publication. Check phone and desktop layouts, larger text, broken images and external requests. Publish the existing main-branch GitHub Pages site without changing its domain or hosting. Verify the public HTTPS response without authentication and compare its bytes with the committed policy. Record the actual commit, deployment and hash after that verification; a successful source push alone is not proof of publication.

For the earlier 1.17/1.18-scoped publication on 22 October, policy commit `b025d3b8a803df8284b99023744cf98465e4542d` deployed successfully in Pages run **39839445918**. The normal public HTTPS policy returned **200** without authentication and all **34,211 bytes** matched source; SHA-256 **`23e6b001d54f4c25d72a4a374aae6d3e1bb57ea5484c25a31f0c83ab97a30f47`**. The website notice and sitemap also matched their public responses. **33** local viewport/larger-text checks passed, all thirteen numbered anchors resolved and the static pages made no external requests. The game repository records that historical publication separately in `docs/privacy-policy-website-audit.json`; those results are not proof that this 1.19 proposal is live.

The 1.19 proposal is prepared locally from site commit `a85e15732f1baf13cf1593b4583ca66bea33ae93`. Its static structure, canonical Markdown-to-HTML content, retained sections, date, links and lack of new scripts/forms/resources are checked in `/workspace/reports/eggy119-public-policy-proposal.json`. No website commit, push or deployment is part of this preparation. After owner review, the publisher must verify the new public HTTPS response and matching bytes, then record that deployment separately. Existing responsive results describe the unchanged layout; a final rendered spot-check remains appropriate for the updated copy.

The first manual monitor failed because its duplicate request cancelled an automatic Pages build, then it read that earlier same-commit failure. The active deployment above succeeded. The publisher now reuses an existing queued, building or built publication and tracks immutable build URLs; an earlier failed build cannot stand in for a newly requested one. Eight mocked regression tests cover reuse, stale failures, genuine failure, time bounds and unchanged source/domain/main guards. Publication still requires real Pages success and a public byte check.
