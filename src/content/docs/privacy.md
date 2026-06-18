---
title: Privacy
description: How MUSE handles your data — what stays on your computer and the few optional features that make network requests.
---

This page describes how MUSE handles your data.

## Summary

- MUSE stores your manuscript content **locally on your device** in `.muse` project files.
- MUSE does **not** include analytics, ad trackers, or hosted crash reporting.
- MUSE does **not** upload your manuscript text for background telemetry.
- A few **optional** features make outbound network requests. Those are listed below.

## What's stored locally

- Project content in `.muse` SQLite files
- Automatic backups and snapshots on disk
- Recovery drafts in the app's local data directory
- Settings, preferences, and local diagnostics in local app storage
- Imported research assets in the project's asset vault

## No telemetry

MUSE has no analytics collection, behavior tracking, hosted crash reporting, session replay,
or advertising identifiers. If that ever changes, this page will be updated before release.

## Optional outbound requests

MUSE only contacts outside services in these cases, and only after you opt in or take a
direct action:

1. **Online thesaurus (Datamuse).** Only when you enable the online thesaurus and request a
   lookup. Sends the word you look up to `api.datamuse.com`. Off by default.
2. **Offline voice models (Kokoro).** Only when you enable Kokoro voices and choose to
   download the model files from Hugging Face. Your manuscript text is not uploaded. Off by
   default.
3. **YouTube thumbnail previews.** Only after you click **Load thumbnail** on a YouTube
   research item. Sends the video ID to load a preview image.
4. **External links you open.** Only when you click or open a link, which opens it outside
   MUSE as a normal browser request would.

## Logging

Error logs stay on your computer unless you manually copy them out. MUSE does not
automatically upload logs or diagnostics.

## Contact

If privacy behavior changes, this page will be updated alongside the change. For alpha
feedback, use the [feedback channel](/alpha/feedback/) provided with your build.
