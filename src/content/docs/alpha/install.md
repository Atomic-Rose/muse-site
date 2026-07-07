---
title: Install & first launch
description: Download, install, and open MUSE for the first time on macOS, Windows, or Linux.
---

Welcome, and thank you for trying MUSE during its earliest testing phase. You're one of a
small group of writers helping shape this app before it reaches the wider public.

:::tip[A promise]
Every tester who participates in the alpha or beta receives a **generous one-time discount**
at the 1.0 launch, applied to your first purchase. You'll be emailed your code when the public
release ships.
:::

## Download

Download the current alpha build for your operating system:

- **macOS:** [MUSE_0.1.0_x64.dmg](https://github.com/Atomic-Rose/muse-site/releases/download/v0.1.0-alpha.1/MUSE_0.1.0_x64.dmg)
- **Windows:** [MUSE_0.1.0_x64-setup.exe](https://github.com/Atomic-Rose/muse-site/releases/download/v0.1.0-alpha.1/MUSE_0.1.0_x64-setup.exe)
- **Ubuntu / Debian:** [MUSE_0.1.0_amd64.deb](https://github.com/Atomic-Rose/muse-site/releases/download/v0.1.0-alpha.1/MUSE_0.1.0_amd64.deb)
- **Fedora / RHEL:** [MUSE-0.1.0-1.x86_64.rpm](https://github.com/Atomic-Rose/muse-site/releases/download/v0.1.0-alpha.1/MUSE-0.1.0-1.x86_64.rpm)

You can also view the full
**[MUSE v0.1.0 Alpha 1 release](https://github.com/Atomic-Rose/muse-site/releases/tag/v0.1.0-alpha.1)**
and download `SHA256SUMS.txt` if you want to verify the installers.

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

MUSE ships as a **`.deb`** package for Ubuntu/Debian and an **`.rpm`** package for
Fedora/RHEL. Download the one that matches your distribution.

### Ubuntu / Debian (`.deb`)

Download `MUSE_0.1.0_amd64.deb`, then open a terminal in the folder where you downloaded it.
On most Ubuntu and Debian systems, install it with:

```bash
sudo apt install ./MUSE_0.1.0_amd64.deb
```

The leading `./` matters — it tells `apt` to install the local file and pull in any
dependencies it needs. Once it finishes, launch MUSE from your applications menu or by
running `muse` in a terminal.

If your browser saved the file with a slightly different name, you can use:

```bash
sudo apt install ./MUSE_*.deb
```

If `apt` is not available or the install reports missing dependencies, run:

```bash
sudo dpkg -i ./MUSE_0.1.0_amd64.deb
sudo apt install -f
```

- **To update later:** download the newer `.deb` and run the same command.
- **To uninstall:** `sudo apt remove muse`

### Fedora / RHEL (`.rpm`)

Download `MUSE-0.1.0-1.x86_64.rpm`, then open a terminal in the folder where you downloaded it.
On Fedora and modern RHEL-compatible systems, install it with:

```bash
sudo dnf install ./MUSE-0.1.0-1.x86_64.rpm
```

If your browser saved the file with a slightly different name, you can use:

```bash
sudo dnf install ./MUSE-*.rpm
```

On older systems that don't have `dnf`, use:

```bash
sudo yum install ./MUSE-0.1.0-1.x86_64.rpm
```

Once it finishes, launch MUSE from your applications menu or by running `muse` in a terminal.

- **To update later:** download the newer `.rpm` and run the same command.
- **To uninstall:** `sudo dnf remove muse`

## First launch

When MUSE opens for the first time:

1. You'll see the welcome screen.
2. Create a new project from the welcome screen and pick a location for the `.muse` file.
3. Start writing. The binder on the left organizes your documents, the editor is in the
   middle, and the inspector on the right holds metadata and statistics.

If anything feels confusing or unexpected on first launch, that's itself valuable feedback —
please [tell us](/alpha/feedback/).

Next: [Getting started](/manual/getting-started/).
