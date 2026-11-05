# Accessibility work toward WCAG 2.2 AA

Status: first implementation pass, November 5, 2026. This document is an engineering
record, not a conformance claim. Changes are on `feat/brevo-tester-registration` and
have not been deployed. Website changes do not assess the offline Muse application.

## Changes made

- **Text contrast (1.4.3):** replaced the homepage's faint secondary text tokens in
  light and dark modes. The check covers normal text at 4.5:1, without relying on
  the lower threshold for large text. This fixes the identified platform/footer text
  failures and strengthens other uses of the same token.
- **Keyboard bypass (2.4.1):** made the homepage main landmark programmatically
  focusable with `tabindex="-1"`, so the existing skip link has a focus destination
  without adding a stop to normal Tab navigation. Verify in actual browsers.
- **Focus visibility (2.4.7, 2.4.11):** strengthened focus outlines, added scroll padding
  for the desktop homepage header, and made its header static on narrow or short
  viewports. Documentation pages retain Starlight's scroll-padding behavior and get
  a stronger theme-aware focus outline, with a system color in forced-colors mode.
- **Reflow and text spacing (1.4.10, 1.4.12):** removed global horizontal clipping,
  allowed content to wrap, and removed the fixed header height. Homepage navigation
  now wraps instead of disappearing below 680px. Grid content can shrink to its track.
  These changes need rendered checks; CSS inspection alone does not establish reflow.
- **Pointer targets (2.5.8):** homepage navigation/footer links now have a minimum
  44px height; theme toggle is 44px square. Inline prose links are unchanged. This
  does not constitute a measurement of every target in Starlight or the future form.
- **Control state (4.1.2):** the theme toggle uses a stable accessible name, “Dark
  theme,” with `aria-pressed` indicating its state rather than changing its name
  between actions.

## Verification performed

- `npm run build`: passed, 60 pages generated. Existing dependency deprecation warning
  remains; it did not prevent the build.
- `npm run check:contrast`: passed 54 theme-token pairs for text, primary button text,
  and focus against selected homepage/documentation surfaces.
- Verified the contrast checker fails when the previous failing secondary colors are
  reintroduced in a temporary isolated fixture. No fixture was retained in the site.
- Parsed all generated HTML pages: language present, one H1 per page, unique IDs,
  image alt attributes, iframe titles where applicable, and no positive tabindex.
  Verified the homepage skip link targets its programmatically focusable main landmark.
- `git diff --check`: passed.

The contrast script reads the actual theme declarations and uses WCAG's relative
luminance calculation. It does not inspect computed styles, gradients, transparency,
interaction states, third-party content, or every text element. Passing the script is
a regression guard, not a browser accessibility audit. Presence of an alt attribute
also does not establish that its wording is appropriate.

No browser surface was available for this pass. No axe/Lighthouse browser scan,
visual measurement, keyboard interaction, or screen-reader test has been performed.

## Remaining verification before any conformance claim

Use both light/dark themes and record the browser, assistive technology, page, state,
result, and any fixes. Representative pages must include the homepage, registration,
support, privacy, and manual pages with tables, code, callouts, and long navigation.
The complete scope must account for every page and applicable A/AA success criterion.

1. **Keyboard:** Tab/Shift+Tab through header, skip link, navigation, theme control,
   docs sidebar, search opening/results/closing, copy buttons, and footer. Confirm
   logical order, visible focus, no traps, and focus return after closing overlays.
2. **Screen readers:** check VoiceOver/Safari and a Windows reader/browser combination
   such as NVDA/Firefox. Confirm headings, landmarks, decorative mockups, link purposes,
   expanded/collapsed states, search results, and theme announcements are understandable.
3. **Zoom and reflow:** check 320 CSS-pixel width and 1280px at 400% browser zoom, plus
   200% text resizing. Confirm content/functionality is preserved, header links remain
   available, and reading prose does not require horizontal scrolling. Review any
   tables/code separately rather than assuming all overflow qualifies for an exception.
4. **Text spacing:** apply line-height 1.5, paragraph spacing 2em, letter spacing
   0.12em, and word spacing 0.16em; verify no clipped, overlapped, or lost content.
5. **Rendered contrast:** measure text, search/placeholders, hover/focus/selected states,
   control boundaries, and icons against their actual backgrounds. Verify focus remains
   visible in forced-colors mode and beneath sticky navigation at each viewport size.
6. **Targets and mobile:** measure target bounds/spacing and check touch, portrait,
   landscape, menus, scrolling, and reduced-motion behavior.
7. **Automated browser scan:** run axe or an equivalent tool on rendered routes and
   interactive states. Triage findings and verify fixes; a clean scan is not sufficient
   by itself to claim WCAG conformance.
8. **Brevo, once configured:** test labels/instructions, required fields, errors,
   keyboard entry/exit from the iframe, CAPTCHA alternatives, submission, confirmation,
   welcome links, preferences, and unsubscribe as a complete process. A direct link to
   the same inaccessible hosted form would not fix an accessibility barrier. Registration
   remains unavailable until external setup and verification are completed.

Do not add an accessibility badge or claim AA compliance until the defined scope and
all applicable WCAG 2.2 A/AA criteria have been evaluated and outstanding issues resolved.

## Official criteria

- [WCAG 2.2 and conformance requirements](https://www.w3.org/TR/WCAG22/)
- [Contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- [Text spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- [Focus not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [Target size minimum and its exceptions](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
