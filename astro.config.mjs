import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://homesteadkeeper.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      lastmod: new Date(),
      filter: (page) =>
        !page.endsWith('/404/') &&
        !page.endsWith('/404.html') &&
        !page.endsWith('/features/supplies/') &&
        !page.endsWith('/support/thanks/') &&
        !page.endsWith('/workflows/import-excel-csv/') &&
        !page.endsWith('/use-cases/hobby-farms/') &&
        !page.endsWith('/use-cases/chicken-egg-tracker/') &&
        !page.endsWith('/use-cases/garden-harvest-tracker/'),
    }),
  ],
});
