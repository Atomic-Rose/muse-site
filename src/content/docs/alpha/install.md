---
title: Install & first launch
description: Download, install, and open MUSE for the first time on macOS, Windows, or Linux.
---

Welcome, and thank you for trying MUSE during its earliest testing phase. You're one of a
small group of writers helping shape this app before it reaches the wider public.

:::tip[A promise]
Every tester who participates in the alpha or beta receives a permanent **50% discount code**
at the 1.0 launch, usable on your first purchase. You'll be emailed your code when the public
release ships.
:::

## Download

<!-- TODO: replace this link with your real download location once releases are published.
     The recommended setup is GitHub Releases, which hosts the installers for free. -->
Download the latest alpha build for your operating system from the
**[MUSE releases page](https://github.com/atomic-rose/muse-writing-app/releases/latest)**,
then follow the steps for your platform below.

Because MUSE is in private alpha, builds are signed on some platforms and unsigned on others.
If your operating system shows a warning, the steps below explain exactly what to click.

## macOS

1. Download the `.dmg` file (it works on both Apple Silicon and Intel Macs).
2. Double-click the `.dmg` to open it.
3. Drag the **MUSE** icon into your **Applications** folder.
4. Eject the disk image.
5. Open **Applications** and double-click MUSE.

**If you see "MUSE cannot be opened because the developer cannot be verified":**

This build isn't yet signed with an Apple Developer ID. To open it once:

1. Right-click (or Control-click) the MUSE app in Applications.
2. Choose **Open** from the menu.
3. In the dialog that appears, click **Open**.

After opening it this way the first time, macOS remembers your choice and launches it
normally afterward.

## Windows

1. Download the `-setup.exe` installer.
2. Double-click it to run the installer.

**If you see a blue "Windows protected your PC" dialog from SmartScreen:**

This build isn't yet signed with a Windows code-signing certificate. To proceed:

1. Click **More info**.
2. Click **Run anyway**.
3. Follow the installer prompts.

This warning is expected for unsigned alpha builds and will go away once the Windows
certificate is in place.

## Linux

1. Download the `.AppImage` file.
2. Make it executable:
   ```bash
   chmod +x MUSE_*.AppImage
   ```
3. Double-click to run, or from the terminal:
   ```bash
   ./MUSE_*.AppImage
   ```

On some distributions you may need FUSE installed
(`sudo apt install libfuse2` on Ubuntu/Debian, `sudo dnf install fuse` on Fedora).

## First launch

When MUSE opens for the first time:

1. You'll see the welcome screen.
2. Create a new project from the welcome screen and pick a location for the `.muse` file.
3. Start writing. The binder on the left organizes your documents, the editor is in the
   middle, and the inspector on the right holds metadata and statistics.

If anything feels confusing or unexpected on first launch, that's itself valuable feedback —
please [tell us](/alpha/feedback/).

Next: [Getting started](/manual/getting-started/).
