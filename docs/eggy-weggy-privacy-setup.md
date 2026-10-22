# Eggy Weggy public privacy notice

Reviewed 22 October 2026 at the owner's instruction to update the website.

- Public policy: https://boontanggames.com/eggy-weggy-privacy.html
- Controller: **Kenneth Burton, trading as Boontang Games**, United Kingdom.
- Privacy/support contact: **boontanggames@gmail.com**, previously confirmed by the owner.
- Policy effective/update date: **22 October 2026**.
- Separate website-only notice: https://boontanggames.com/privacy.html

## Scope and accuracy

The notice distinguishes the published **1.17.1 / code 27** GitHub preview from the **1.18.0 / code 28 private test candidate**. Optional Firebase Authentication, cloud backups, avatars and approved-friend scores are described only for 1.18. Cloud/social remains restricted to private known-adult testing after explicit native opt-in. Children, teens and unknown-age profiles remain offline for these features. No validated family provisioning is claimed.

The update discloses chosen profile fields, native Google identity handling, private complete-backup snapshots, separate friends activation, pending-request profile visibility, approved-friend score access, recipients, retention, international processing, sign-out versus deletion and cleanup limitations. It retains optional advertising/consent and disabled checkout disclosures. Firebase Analytics is not included; Firebase Auth/Firestore can still process account, device, network and service information.

Three wording details were checked against the actual 1.18 controller/UI:

1. Automatic checkpoints start only after a successful manual save or confirmed restore. Signing in alone does not enable automatic uploads. Saving checks the remote revision before replacement.
2. The app exposes Enable friends, not a local Friends off control. Signing out or opting out does not delete server relationships or revoke existing approved-friend access; remove a friend or delete the game account.
3. The account action is labelled **Delete cloud account**.

The already built 1.18 APK includes the full offline cloud-aware notice dated 22 October. This website task does not change that APK. Those three wording clarifications are recorded for its next policy update, rather than claiming that an installed notice changed remotely.

## What publication does not establish

Publishing the notice does not launch public accounts, enable live advertising or checkout, publish an APK, submit Google Play declarations or certify Families compliance. Real Google sign-in, two-device recovery/friend access, SDK traffic, project location/provider retention and account-deletion operations still need the acceptance recorded in the private game repository.

This task does not publish a new account-deletion page or verify the operational ownership/cleanup process. The policy explains the in-app route and private support contact. A dedicated public deletion-request resource and its Play declaration remain separate launch work; a generic email paragraph is not treated as verified compliance with that requirement.

The site stays static: no new form, script, tracker, cookies, external fonts or authentication. Existing policy section URLs are retained; the new cloud section is `#cloud` and sign-out/deletion information is `#account-deletion`.

## Verification and deployment

Review HTML structure, all thirteen numbered section targets, policy links, operator/contact, sitemap and source text before publication. Check phone and desktop layouts, larger text, broken images and external requests. Publish the existing main-branch GitHub Pages site without changing its domain or hosting. Verify the public HTTPS response without authentication and compare its bytes with the committed policy. Record the actual commit, deployment and hash after that verification; a successful source push alone is not proof of publication.

On 22 October, policy commit `b025d3b8a803df8284b99023744cf98465e4542d` deployed successfully in Pages run **39839445918**. The normal public HTTPS policy returned **200** without authentication and all **34,211 bytes** matched source; SHA-256 **`23e6b001d54f4c25d72a4a374aae6d3e1bb57ea5484c25a31f0c83ab97a30f47`**. The website notice and sitemap also matched their public responses. **33** local viewport/larger-text checks passed, all thirteen numbered anchors resolved and the static pages made no external requests. The game repository records this separately in `docs/privacy-policy-website-audit.json`.

The first manual monitor failed because its duplicate request cancelled an automatic Pages build, then it read that earlier same-commit failure. The active deployment above succeeded. The publisher now reuses an existing queued, building or built publication and tracks immutable build URLs; an earlier failed build cannot stand in for a newly requested one. Eight mocked regression tests cover reuse, stale failures, genuine failure, time bounds and unchanged source/domain/main guards. Publication still requires real Pages success and a public byte check.
