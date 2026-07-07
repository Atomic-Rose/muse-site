# v0.1.0-alpha.1 staging

Drop the alpha installers in this folder when they are ready.

Expected files:

```text
MUSE_0.1.0_amd64.deb
MUSE-0.1.0-1.x86_64.rpm
MUSE_0.1.0_x64-setup.exe
MUSE_0.1.0_aarch64.dmg
MUSE_0.1.0_x64.dmg
```

Optional if you build separate Mac installers:

```text
MUSE_0.1.0_universal.dmg
MUSE_0.1.0_aarch64.dmg
```

After copying files here, run:

```powershell
.\scripts\New-ReleaseChecksums.ps1 -ReleaseDir .\release-assets\v0.1.0-alpha.1
```

That creates `SHA256SUMS.txt` for upload with the installers.
