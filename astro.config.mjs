// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Project Pages deploys at https://atomic-rose.github.io/muse-site/.
// When moving to a custom domain, set SITE to that domain and remove BASE_PATH.
const SITE = 'https://atomic-rose.github.io';
const BASE_PATH = '/muse-site/';

const SITE_REPO_URL = 'https://github.com/atomic-rose/muse-site';

export default defineConfig({
  site: SITE,
  base: BASE_PATH,
  integrations: [
    starlight({
      title: 'MUSE',
      description:
        'MUSE is a desktop writing app for novelists, screenwriters, and researchers — Scrivener-style organization, a modern editor, and single-file projects that stay on your computer.',
      logo: {
        src: './src/assets/muse-logo.svg',
        alt: 'MUSE',
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: SITE_REPO_URL }],
      // Surface the download link in the top-right of every page.
      head: [],
      editLink: {
        baseUrl: `${SITE_REPO_URL}/edit/main/`,
      },
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'What is MUSE?', slug: 'manual/what-is-muse' },
            { label: 'Install & first launch', slug: 'alpha/install' },
            { label: 'Getting started', slug: 'manual/getting-started' },
            { label: 'Importing your work', slug: 'manual/importing' },
          ],
        },
        {
          label: 'Organizing',
          items: [
            { label: 'The binder', slug: 'manual/the-binder' },
            { label: 'Root folders', slug: 'manual/root-folders' },
            { label: 'Labels, statuses & keywords', slug: 'manual/labels-statuses-keywords' },
            { label: 'Custom metadata', slug: 'manual/metadata' },
            { label: 'Collections', slug: 'manual/collections' },
          ],
        },
        {
          label: 'Writing',
          items: [
            { label: 'The editor', slug: 'manual/the-editor' },
            { label: 'Formatting & styles', slug: 'manual/formatting-and-styles' },
            { label: 'Focus, Zen & typewriter', slug: 'manual/focus-and-typewriter' },
            { label: 'Wikilinks & backlinks', slug: 'manual/wikilinks-and-backlinks' },
            { label: 'Footnotes & endnotes', slug: 'manual/footnotes' },
            { label: 'Templates & guidance', slug: 'manual/templates-and-guidance' },
            { label: 'Scrivenings & split view', slug: 'manual/scrivenings-and-split' },
            { label: 'Read-aloud & lookup', slug: 'manual/read-aloud-and-lookup' },
          ],
        },
        {
          label: 'Planning',
          items: [
            { label: 'The Scene Board', slug: 'manual/scene-board' },
            { label: 'The Canvas', slug: 'manual/canvas' },
            { label: 'The Outliner', slug: 'manual/outliner' },
            { label: 'Story threads & Story Lines', slug: 'manual/story-threads' },
            { label: 'Characters & POV', slug: 'manual/characters-and-pov' },
          ],
        },
        {
          label: 'Research',
          items: [
            { label: 'The Research workspace', slug: 'manual/research-workspace' },
            { label: 'Research item types', slug: 'manual/research-item-types' },
            { label: 'Annotations & tags', slug: 'manual/research-annotations' },
            { label: 'Linking research', slug: 'manual/linking-research' },
          ],
        },
        {
          label: 'Revising',
          items: [
            { label: 'Suggesting mode', slug: 'manual/review-workflow' },
            { label: 'Comments', slug: 'manual/comments' },
            { label: 'Revision passes', slug: 'manual/revision-passes' },
            { label: 'Version history', slug: 'manual/version-history' },
            { label: 'Bookmarks', slug: 'manual/bookmarks' },
            { label: 'Consistency audit', slug: 'manual/consistency-audit' },
            { label: 'Manuscript health & finishing', slug: 'manual/manuscript-health' },
          ],
        },
        {
          label: 'Finding your way',
          items: [
            { label: 'Project search', slug: 'manual/project-search' },
            { label: 'Find & replace', slug: 'manual/find-and-replace' },
            { label: 'Command palette & quick open', slug: 'manual/command-palette' },
            { label: 'Outline & connections', slug: 'manual/outline-and-connections' },
          ],
        },
        {
          label: 'Goals & progress',
          items: [
            { label: 'Writing goals', slug: 'manual/writing-goals' },
            { label: 'Sessions & statistics', slug: 'manual/statistics' },
          ],
        },
        {
          label: 'Compiling & exporting',
          items: [
            { label: 'Compile & export', slug: 'manual/compile-and-export' },
            { label: 'Compile presets', slug: 'manual/compile-presets' },
            { label: 'Front & back matter', slug: 'manual/front-and-back-matter' },
            { label: 'Chapter & part numbering', slug: 'manual/numbering' },
            { label: 'Section layouts', slug: 'manual/section-layouts' },
            { label: 'Review modes', slug: 'manual/review-modes' },
            { label: 'Submission & validation', slug: 'manual/submission-and-validation' },
          ],
        },
        {
          label: 'Settings & customization',
          items: [
            { label: 'Settings', slug: 'manual/settings' },
            { label: 'Keyboard shortcuts', slug: 'manual/keyboard-shortcuts' },
            { label: 'Appearance & Theme Studio', slug: 'manual/appearance' },
            { label: 'Author & manuscript details', slug: 'manual/author-details' },
          ],
        },
        {
          label: 'Safety',
          items: [
            { label: 'Backups', slug: 'manual/backups-and-safety' },
            { label: 'Restore & Safety Ledger', slug: 'manual/restore-and-safety-ledger' },
            { label: 'Crash recovery', slug: 'manual/crash-recovery' },
            { label: 'Privacy', slug: 'privacy' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Glossary', slug: 'manual/glossary' },
          ],
        },
        {
          label: 'Alpha testers',
          items: [
            { label: 'Reporting bugs & feedback', slug: 'alpha/feedback' },
            { label: 'What to expect', slug: 'alpha/expectations' },
          ],
        },
      ],
    }),
  ],
});
