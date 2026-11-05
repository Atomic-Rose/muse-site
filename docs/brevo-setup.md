# Brevo tester registration: launch checklist

Prepared November 5, 2026. This is an operator checklist, not evidence that a Brevo
account, form, sender, mailbox, or email workflow has been configured. No external
setup or sending was performed during implementation. Release automation is out of scope.

## Domain evidence and decision

- Before this change, `astro.config.mjs` and `public/CNAME` specified `muse.lunareos.com`.
- Commit `02ff708` changed the site from a GitHub Pages subpath to that domain.
- A public HTTPS HEAD request to `https://musewritingapp.com` returned 200 and
  `server: GitHub.com`; a public page read showed the Muse homepage.
- `muse.lunareos.com` failed DNS resolution from the implementation environment.
  This observation does not establish domain ownership or the intended migration.
- Owner decision: keep `musewritingapp.com`. The repository's Astro `site`, public
  `CNAME`, and README website links now use it. DNS, redirects, and GitHub Pages
  dashboard settings were not changed. Verify Pages settings before deployment.
- Do not infer the DNS provider or mailbox provider from the web server. Check the
  actual dashboards. Use the confirmed canonical origin for privacy and form redirects.

## 1. Ownership, access, and contacts

- Create or select the company-controlled Lunareos LLC account; confirm business
  identity, account ownership, recovery access, and current plan entitlements.
- Enable MFA for the owner and every additional administrator the plan supports;
  store recovery codes securely. Do not share passwords to work around seat limits.
- Confirm that the existing repository contacts `support@lunareos.com` and
  `privacy@lunareos.com` receive mail and have an assigned operator. Their presence
  in source files is not proof of mailbox operation. Do not open registration until
  departure, deletion, and preference-recovery requests can be handled.

## 2. Sender and domain authentication

- Choose a real sender identity controlled by Lunareos and a monitored reply-to
  address. No new sender mailbox has been assumed or created by this integration.
- In Settings > Senders, Domains, IPs, add/verify the sender and authenticate its
  domain. A sending subdomain can separate configuration from the website; choose
  it only after checking ownership and existing records.
- Use **the exact DNS names, record types, and values supplied by your Brevo
  account**: Brevo verification code, DKIM, and DMARC as applicable. The current
  documentation describes one DKIM TXT record or two DKIM CNAME records.
- Preserve existing website records and Microsoft 365/Google Workspace MX and DKIM
  records. Do not weaken or blindly replace an existing DMARC policy. Standard
  shared-IP authentication does not require new SPF or MX records. Never add a
  second SPF policy at the same hostname; if a future configuration requires SPF,
  have the mail administrator merge the authorized senders into one valid policy.
- Some accounts have Brevo's newer domain flow including branded return-path and
  tracking CNAMEs. Follow the records actually shown; do not overwrite occupied
  website or mailbox names. Wait for dashboard authentication success and later
  check received-message authentication headers using controlled test addresses.

## 3. Create this contact schema

In Settings > Contacts > Contact attributes, reuse existing defaults where present.
These are proposed exact application names; Brevo assigns list IDs in the dashboard.

| Attribute | Type / values | Who may set it |
| --- | --- | --- |
| `EMAIL` | Existing email identifier, required | Signup; read-only on profile form |
| `FIRSTNAME` | Text, optional | Signup/profile |
| `MUSE_PLATFORMS` | Multiple choice: Windows, macOS, Linux, iOS/iPadOS, Android | Signup/profile |
| `MUSE_WANTS_TESTING` | Boolean, optional, initially unchecked | Signup/profile |
| `MUSE_TESTER_STATUS` | Category: applicant, invited, accepted, paused, departed | Administrator only |
| `MUSE_COHORT` | Text, assigned cohort identifier | Administrator only |

An absent status/cohort is ineligible, not implicitly accepted. Initialize applicants
administratively after confirmation; no automation for this is supplied. Rejoining
does not restore acceptance. Platform interest does not indicate build availability.

Create these lists in a `Muse` folder:

| List | Purpose |
| --- | --- |
| `MUSE_CONFIRMED` | Master list reached only after the managed DOI process |
| `MUSE_PREF_TEST_INVITATIONS` | Opt-in to testing invitations |
| `MUSE_PREF_BUILD_ANNOUNCEMENTS` | Opt-in to relevant build news |
| `MUSE_PREF_PRODUCT_NEWS` | Opt-in to general product news |

Use the three preference lists as the form's public multi-list choices. Never use a
preference list as acceptance, and never send to the entire master list by default.
Do not use the higher-tier consent-groups feature for this design. Do not create a
public accepted-testers list or expose status/cohort fields, including hidden inputs.

Use Brevo's native DOI state and event/transactional logs for confirmation evidence.
Do not create a client-writable confirmation timestamp, consent source, or accepted
flag. Record form/template version and wording in a restricted operational record;
retain submission time, confirmation time, source form, selected topics, and wording
version evidence according to the approved retention policy. A contact creation date
alone is not proof of confirmation. Do not put personal exports in git or `public/`.

## 4. Create the managed signup form

In Marketing > Forms > Sign-up, create a **Full page/embedded** form named
`muse-testers-v1`. This version is an internal identifier, not an invented form ID.

- Add required email, optional name, platform multi-select, testing-interest checkbox,
  and the three separate topic list choices. Leave optional consent choices unchecked.
  Confirm multiple-choice and boolean field mappings in the actual editor.
- Explain optional registration, applicant status, and the offline app distinction.
  Link the reviewed privacy policy at the confirmed website origin; explain Brevo
  processing and the actual CAPTCHA provider. Do not collect manuscripts or passwords.
- Enable CAPTCHA; prefer Cloudflare Turnstile if offered in the account, otherwise
  review the available alternative and update the privacy notice accordingly. Verify
  domain settings, account ownership, and validation. Do not use Simple HTML embedding:
  Brevo documents that it omits CAPTCHA and other JavaScript-dependent behavior.
- Choose `MUSE_CONFIRMED` as the master list; map topics to preference lists.
- Select **Double confirmation email**. Single/no confirmation is not acceptable.
  Verify topic membership and profile updates do not make unconfirmed contacts sendable.
- Use a DOI template preserving Brevo's required confirmation-link mechanism. Include
  the exact consent wording/version and make the confirmation request clear.
- Enable the **Final confirmation email** as the welcome message, after confirmation
  only. Say interest is recorded and acceptance is separate. Avoid a duplicate welcome
  automation. Confirm the sender/template are usable under the actual account plan.
- Use Brevo's default confirmation pages initially. Any custom redirect must be a
  reviewed HTTPS URL; visiting a website page must not itself confirm registration.
- Review neutral response text. Repeated or existing-address submissions must not
  expose profile data, reset preferences without confirmation, or clear suppression.

## 5. Preferences, unsubscribe, departure, and deletion

- Create a profile-update form exposing optional name, platforms, testing interest,
  and the three preference lists only. Set email read-only. Exclude administrative
  status/cohort fields and confirm they cannot be set through tampered submissions.
- Review double confirmation for new list subscriptions and verify removals actually
  stop the relevant topic. Test existing-contact behavior in the actual account.
- Insert Brevo's personalized profile-update link through the email editor and a
  genuine global unsubscribe link in registration-related emails. Do not paste a
  contact's personalized profile URL into the website or configuration file.
- Verify welcome-template support for these links; Brevo notes differences between
  marketing and transactional profile forms. Do not assume a profile link substitutes
  for global unsubscribe. Offer mailbox recovery for expired profile links.
- Treat program departure as a manual support request: record `departed`, remove
  cohort eligibility, and preserve only independently chosen news preferences.
- Treat deletion as a separate privacy request. Verify address ownership proportionately,
  stop mail first, and remove details/exports under the approved policy. Decide how
  minimum suppression information is retained before promising erasure of every record.
- Unsubscribed, bounced, and complained contacts stay suppressed. Imports, routine
  signup, retries, and future release work must never routinely unblock them.
- Re-subscription requires a fresh explicit request and confirmation. Verify the
  managed form does not reactivate before confirmation. Escalate unsuitable behavior
  rather than publishing a workaround that clears blocklists automatically.

## 6. Privacy review and operational launch gates

The public privacy/support text deliberately describes a closed, planned service.
Before enabling the URL, the owner must review and update that text to match reality:

- Define retention for pending attempts, applicants, accepted testers, consent evidence,
  provider logs, support requests, and any exports. No fixed duration is promised here.
- Decide the minimum suppression address/reason/date kept to prevent accidental future
  mailings, its justification/access/retention, and how deletion requests are handled.
  Deleting a Brevo contact can discard its blocklist status; recovery/import procedures
  must not recreate mailing eligibility. Do not promise unconditional record erasure.
- Verify processor terms and actual CAPTCHA/tracking configuration. Disable unnecessary
  tracking; do not add Brevo's website tracker for signup. Describe actual processing.
- Assign an operator, request-handling procedure, and an abuse response. Check current
  plan limits and confirmation-email resend controls; CAPTCHA alone is not a guarantee.
- Establish a restricted export/recovery process if needed. Restore suppression before
  active audiences and reconcile subsequent departures/deletions. No database is needed.

## 7. Connect the public URL

After the above gates and controlled verification pass, copy **only the iframe `src`
URL** from Brevo's embed code into `brevoSignupFormUrl` in
`src/config/registration.ts`. Verify that opening that same URL displays the hosted
signup form; this is also the fallback destination. Use the actual Brevo-hosted HTTPS
URL, not an API URL, embed HTML, confirmation token, or personalized preference link.

The empty string is intentional: it renders an unavailable message with no iframe,
inputs, submit button, or third-party registration request. Invalid/non-HTTPS URLs fail
the build. The component does not verify ownership or Brevo settings; operator review
is essential. Review the iframe origin explicitly if a CSP is introduced later.

In the same activation change, replace closed/planned wording in `testers.astro`,
`privacy.md`, and `support.md` with the verified launch behavior and approved retention
notice. Merely inserting a URL does not complete launch readiness. Check iframe height
against the final form, keyboard use, CAPTCHA, errors, mobile scrolling, and fallback.
The frame scrolls independently and the direct link remains available above it.

Run `npm run build` and preview locally. Publish only through the existing reviewed
GitHub Pages process after verifying its settings match `musewritingapp.com`; this task did not deploy.

**Website configuration:** one public URL, no secrets, environment variables, API key,
database, server adapter, custom endpoint, or release-announcement workflow. Never place
Brevo login credentials, API keys, subscriber exports, or personalized links in source,
build variables, generated assets, or CI logs.

## 8. Controlled end-to-end checks (pending external setup)

Use only addresses you control and explicit operator-initiated tests. No form submission,
contact creation, or email sending was performed during repository implementation.

- New signup remains pending and receives no announcements/welcome before confirmation.
- Valid confirmation records the chosen topics and produces one final welcome; expired
  or replayed links do not grant duplicate eligibility. Verify evidence and wording.
- Duplicate/existing-address submissions do not enumerate contacts, reset consent,
  promote acceptance, or silently change preferences. Tamper with administrative fields
  and list IDs and confirm no privilege changes occur.
- Verify all five platform interests, independent topics, unchecked defaults, profile
  removals, and no acceptance implied by interest. Check missing fields fail closed.
- Global unsubscribe stops marketing regardless of list membership; repeat signup and
  import do not silently reactivate. Fresh re-subscription needs new confirmation.
- Check hard-bounce/complaint suppression using provider-supported test procedures,
  never by deliberately spamming real addresses. Do not unblock them automatically.
- Test manual departure and deletion handling, preference-link expiry/recovery, and
  the agreed suppression retention/export cleanup process.
- Verify CAPTCHA and repeated-submission behavior without a flood test. Record actual
  throttling, quota limits, alerts, and the operator's Brevo form-disable procedure.
- Check 320px and desktop layouts, light/dark modes, keyboard order, iframe title,
  screen-reader labels inside the provider form, validation errors, and hosted fallback.
- Check sender authentication/delivery using controlled inboxes; inspect headers and
  confirm unsubscribe/profile links work in the actual welcome template.
- Rebuild and inspect public assets for credentials and personal data. Confirm no
  registration backend or extra tracking was introduced. Keep test records private.

To close registration, clear the URL and rebuild through the normal process **and disable
the form in Brevo**: removing the embed does not disable an already shared public URL.

## Current official references

Reviewed November 5, 2026; account UI, plan entitlements, and actual behavior still need
verification. These links support configuration instructions, not a compliance guarantee.

- [Signup forms, CAPTCHA, embeds and final confirmation](https://help.brevo.com/hc/en-us/articles/208771869-Create-a-sign-up-form-in-Brevo)
- [Multi-list preferences](https://help.brevo.com/hc/en-us/articles/360000545200-Enable-your-contacts-to-subscribe-or-unsubscribe-from-specific-lists-using-a-form-multi-list-subscriptions)
- [Profile-update forms and read-only email](https://help.brevo.com/hc/en-us/articles/360003644360-Update-your-contacts-details-and-preferences-profile-update-form)
- [Double opt-in and consent evidence](https://help.brevo.com/hc/en-us/articles/208733449-Double-opt-in-DOI-What-it-is-and-how-to-track-user-sign-ups)
- [Domain authentication](https://help.brevo.com/hc/en-us/articles/12163873383186-Authenticate-your-domain-with-Brevo-Brevo-code-DKIM-DMARC)
- [New domain setup flow](https://help.brevo.com/hc/en-us/articles/35337929909778-Set-up-your-domain-in-Brevo)
- [Blocklist channels and suppression](https://help.brevo.com/hc/en-us/articles/209458705-FAQs-What-are-the-different-types-of-blocklisted-contacts)
- [Why deleting suppressed contacts risks re-import](https://help.brevo.com/hc/en-us/articles/208732189-FAQs-Why-not-delete-contacts-who-are-blocklisted)
