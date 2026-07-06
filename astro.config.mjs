import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://homesteadkeeper.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/features/supplies/'),
    }),
  ],
});
