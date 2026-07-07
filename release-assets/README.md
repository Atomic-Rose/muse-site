# Release assets

This folder is for staging installer files before they are uploaded to GitHub Releases.

Installer binaries should live here locally so they can be checked, checksummed, and uploaded,
but they should not be committed to git. The `.gitignore` rules at the repo root ignore common
installer formats in this folder.

Recommended flow:

1. Create a version folder, such as `v0.1.0-alpha.1`.
2. Drop the finished installers into that folder.
3. Generate `SHA256SUMS.txt`.
4. Upload the installers, checksums, and release notes to a GitHub Release.

Suggested file names:

```text
muse-0.1.0-alpha.1-amd64.deb
muse-0.1.0-alpha.1-x86_64.rpm
muse-0.1.0-alpha.1-setup.exe
muse-0.1.0-alpha.1-x64.dmg
muse-0.1.0-alpha.1-arm64.dmg
SHA256SUMS.txt
RELEASE_NOTES.md
```

Generate checksums from the repo root:

```powershell
.\scripts\New-ReleaseChecksums.ps1 -ReleaseDir .\release-assets\v0.1.0-alpha.1
```

Create the GitHub release after the files look right:

```powershell
gh release create v0.1.0-alpha.1 `
  .\release-assets\v0.1.0-alpha.1\MUSE_0.1.0_amd64.deb `
  .\release-assets\v0.1.0-alpha.1\MUSE-0.1.0-1.x86_64.rpm `
  .\release-assets\v0.1.0-alpha.1\MUSE_0.1.0_x64-setup.exe `
  .\release-assets\v0.1.0-alpha.1\MUSE_0.1.0_aarch64.dmg `
  .\release-assets\v0.1.0-alpha.1\MUSE_0.1.0_x64.dmg `
  .\release-assets\v0.1.0-alpha.1\SHA256SUMS.txt `
  --title "MUSE v0.1.0 Alpha 1" `
  --prerelease `
  --notes-file .\release-assets\v0.1.0-alpha.1\RELEASE_NOTES.md
```
