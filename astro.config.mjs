import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://homesteadkeeper.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith('/features/supplies/') &&
        !page.endsWith('/support/thanks/') &&
        !page.endsWith('/planner/thanks/') &&
        !page.endsWith('/workflows/import-excel-csv/'),
    }),
  ],
});
