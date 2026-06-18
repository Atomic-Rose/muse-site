---
title: Backups & safety
description: How MUSE protects your manuscript — automatic backups, snapshots, crash recovery — and how to recover work.
---

Your manuscript's safety is the most important thing MUSE does. Several systems work together
so you never lose work.

## Automatic backups

MUSE automatically creates periodic backups of your `.muse` project, stored in timestamped
folders alongside the project file. Backups use a safe, database-aware copy method (not a
naive file copy), so they're trustworthy even while you're actively writing.

You can configure backups in **Settings**:

- Turn automatic backups on or off
- How often they run
- Whether to back up when you close the app or when you compile
- How many backups to keep per project
- Whether to verify each backup's integrity

You can also **lock** a backup so it's never automatically removed.

:::tip[Belt and suspenders]
Because each project is a single `.muse` file, you can always make your own backup by simply
copying that file to another drive or folder.
:::

## Snapshots

Within a project, [snapshots](/manual/review-workflow/#snapshots-version-history) freeze a
single document so you can compare against or roll back to an earlier version. Backups
protect the *whole project file*; snapshots protect *individual documents*.

## Crash recovery

While you have unsaved changes, MUSE quietly saves a recovery draft every few seconds. If the
app or your computer shuts down unexpectedly, the next time you open the project MUSE offers
to **recover** your most recent work or **discard** it.

## During alpha: keep copies

MUSE is in early testing. Its safety systems are real, but **do not rely on MUSE as the only
home for irreplaceable work during alpha.** Keep copies of anything you can't afford to lose.

If you ever lose work or suspect you might have, **do not overwrite the backup folders next
to your `.muse` file** — and [report it immediately](/alpha/feedback/). Data-loss issues are
our highest priority.
