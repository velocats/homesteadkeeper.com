import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://velocats.github.io',
  base: '/homesteadkeeper.com',
  integrations: [sitemap()],
});
