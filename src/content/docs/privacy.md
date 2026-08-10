---
title: Privacy Policy
description: How MUSE handles your data — what stays on your device, and the few optional features that make network requests.
---

**Last updated: 10 August 2026**

The short version: **your manuscript stays on your device.** MUSE has no accounts and no
servers. We cannot read what you write, because it is never sent to us.

## Summary

- MUSE stores your manuscript **locally on your device** in `.muse` project files.
- MUSE has **no analytics, no advertising identifiers, no third-party tracking, and no
  hosted crash reporting**.
- MUSE does **not** upload your manuscript text in the background.
- A few **optional** features make network requests. Every one is listed below.

We collect no data, so there is nothing for us to sell, share, or hand over. There is no
account to delete, because there is no account.

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

MUSE is a general-purpose writing tool. It is not directed at children and does not
knowingly collect information from anyone, of any age.

## Changes to this policy

If MUSE's data handling ever changes, this page is updated before the change ships. The date
at the top reflects the most recent revision.

## Contact

Questions about privacy: **privacy@lunareos.com**

General support: **support@lunareos.com**
