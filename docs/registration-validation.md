# Repository verification — November 5, 2026

## Performed

- `npm run build`: passed; 60 static pages generated including `/testers/`.
- `git diff --check`: passed.
- Local Astro preview: HTTP 200 for `/`, `/testers/`, `/privacy/`, and `/support/`.
- Parsed generated HTML to confirm the homepage links to `/testers/` and local links
  and fragment destinations on the registration, privacy, and support pages exist.
- Missing-configuration state: generated HTML contains the closed-registration
  message and no iframe or registration form. No provider URL is configured.
- Configured component: temporary local build fixture verified one iframe with an
  accessible title, HTTPS source, no-referrer policy, and a direct fallback pointing
  to the same URL. The fixture used the reserved `example.invalid` hostname and was
  never requested. It was removed; fixture output was isolated in a temporary folder.
- Invalid configuration: a temporary HTTP URL fixture failed the build as intended.
  Removed it and reran the normal production build successfully.
- Scanned generated text assets for common Brevo/GitHub/AWS credential patterns and
  private-key markers: no matches. No registration data or temporary fixtures were
  included. Email matches were existing public support/privacy addresses and public
  Pagefind contributor attributions verified against the installed dependency.
  This is a limited artifact check, not a complete secret-history audit or PII detector.
- Following owner confirmation, updated `astro.config.mjs`, `public/CNAME`, and README
  website links to `musewritingapp.com`. Package dependencies and deployment workflow
  remain unchanged. No backend or announcement automation was added.

The build emits a Node dependency deprecation warning about child-process shell
arguments. An initial cached content sync also warned about duplicate privacy/support
IDs; the final clean-content build did not repeat those ID warnings. Neither prevented
the build. No testing framework or production verification fixture was added.

## Not performed / launch remains blocked

No browser surface was available for visual, screen-reader, or mobile interaction
checks. The component uses a full-width frame and the existing responsive Starlight
layout; final iframe height, provider form responsiveness, keyboard interaction, and
CAPTCHA/error usability still require checking with the actual configured form.

No form was submitted, contact created, email sent, dashboard changed, DNS record
changed, or deployment performed. Brevo account settings, consent evidence, quotas,
suppression and re-subscription behavior, mailbox operation, and email delivery remain
unverified. The complete external checklist is in [brevo-setup.md](brevo-setup.md).

The owner confirmed `musewritingapp.com` as the canonical domain. GitHub Pages dashboard
settings still need verification. Retention/suppression wording needs owner approval.
Registration remains closed until configuration and controlled end-to-end checks pass.
