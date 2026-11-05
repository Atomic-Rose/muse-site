---
title: Privacy Policy
description: How the offline MUSE application and optional website tester registration handle information.
---

**Last updated: 5 November 2026**

The short version: **your manuscript stays on your device.** The MUSE application does not
require an account or upload your manuscripts. Optional website tester registration is
separate from the offline application and is described below.

## Summary

- MUSE stores your manuscript **locally on your device** in `.muse` project files.
- MUSE has **no analytics, no advertising identifiers, no third-party tracking, and no
  hosted crash reporting**.
- MUSE does **not** upload your manuscript text in the background.
- A few **optional** features make network requests. Every one is listed below.

The offline application does not collect your manuscript or usage telemetry. Website
registration, when available, involves the information you choose to submit.

## Website tester registration

Tester registration is not open yet. The registration page currently has no active form
and collects no registration information. The following describes the intended registration
service before it is enabled.

Lunareos LLC plans to use Brevo to collect and store your email address, optional name,
platform interests, and selected email topics: testing invitations, relevant build
announcements, and general product news. These details would be used to manage testing
interest and send the communications you choose. Confirmation and consent records would
document your request and email confirmation. Registration would not create an account
required to use MUSE, and would not include manuscript uploads or cloud sync.

The hosted form and its bot protection would involve requests to Brevo and its configured
CAPTCHA provider. The final provider configuration and retention details will be described
here before registration opens.

Stopping emails, leaving testing, and requesting deletion are different actions. Once email
registration is enabled, unsubscribe links will stop registration-related emails. Contact
**support@lunareos.com** to request departure from testing, or **privacy@lunareos.com** to
request deletion of registration information. There is no self-service departure or deletion
portal. We may need to verify that a request concerns your address.

Before registration opens, this notice will explain how long registration and consent
records are retained and whether limited suppression information is kept to prevent
accidental future mailings. No specific retention period has been established in this notice.

## What's stored locally

- Project content in `.muse` SQLite files
- Automatic backups and snapshots
- Recovery drafts, so a crash cannot cost you a paragraph
- Settings, preferences, and local diagnostics
- Imported research assets in the project's asset vault

### Where projects live

On **desktop**, your `.muse` files live wherever you saved them. MUSE does not move them.

On **iPhone and iPad**, projects live in the app's own storage unless you choose to open or
save one somewhere else, such as iCloud Drive, Dropbox, or On My iPad. When you do, that
file is handled by the storage provider you picked, under their terms — not ours.

## No telemetry

MUSE has no analytics collection, behavior tracking, hosted crash reporting, session replay,
or advertising identifiers. If that ever changes, this page will be updated before the
change ships.

## Optional outbound requests

MUSE works fully offline. It contacts outside services only in these cases, and only after
you opt in or take a direct action:

1. **Online thesaurus (Datamuse).** Only when you enable the online thesaurus and request a
   lookup. Sends the single word you looked up to `api.datamuse.com` — never the surrounding
   text. **Off by default.**
2. **Offline voice models (Kokoro).** Only when you enable Kokoro voices and choose to
   download the model files from Hugging Face. Your manuscript text is not uploaded.
   **Off by default, and desktop only** — see Read aloud below.
3. **YouTube thumbnail previews.** Only after you click **Load thumbnail** on a YouTube
   research item. Sends the video ID to load a preview image.
4. **External links you open.** Only when you click or open a link, which opens it outside
   MUSE as a normal browser request would.

That is the complete list. There is no update polling, no telemetry ping, and no background
sync.

## Read aloud

On **iPhone and iPad**, read-aloud uses the speech synthesis built into iOS. The text you
asked to be read is passed to the operating system to be spoken on your device. MUSE does
not send it to any server. Voice quality and any extra voices you install are managed by iOS
in Settings.

The downloadable Kokoro voice models are a **desktop** feature. The iOS app does not
download them.

## Logging

Error logs and diagnostics stay on your device unless you copy them out yourself. MUSE does
not automatically upload logs or diagnostics. If you send us a diagnostic report to help
with a problem, that is a deliberate act on your part, and you can read the contents first.

## Children

MUSE is a general-purpose writing tool and is not directed at children. The offline
application does not collect personal information. Website registration is described above.

## Changes to this policy

If MUSE's data handling ever changes, this page is updated before the change ships. The date
at the top reflects the most recent revision.

## Contact

Questions about privacy: **privacy@lunareos.com**

General support: **support@lunareos.com**
