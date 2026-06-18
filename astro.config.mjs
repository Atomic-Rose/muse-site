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
          ],
        },
        {
          label: 'User manual',
          items: [
            { label: 'The binder', slug: 'manual/the-binder' },
            { label: 'The editor', slug: 'manual/the-editor' },
            { label: 'Review workflow', slug: 'manual/review-workflow' },
            { label: 'Compile & export', slug: 'manual/compile-and-export' },
            { label: 'Backups & safety', slug: 'manual/backups-and-safety' },
          ],
        },
        {
          label: 'Alpha testers',
          items: [
            { label: 'Reporting bugs & feedback', slug: 'alpha/feedback' },
            { label: 'What to expect', slug: 'alpha/expectations' },
          ],
        },
        {
          label: 'About',
          items: [{ label: 'Privacy', slug: 'privacy' }],
        },
      ],
    }),
  ],
});
