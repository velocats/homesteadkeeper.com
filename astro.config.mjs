import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const canonicalHost = 'https://homesteadkeeper.com';
const temporaryHost = 'https://velocats.github.io/homesteadkeeper.com';

function canonicalSitemapUrls() {
  return {
    name: 'canonical-sitemap-urls',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const dist = fileURLToPath(dir);
        const files = ['sitemap-index.xml', 'sitemap-0.xml'];

        await Promise.all(
          files.map(async (file) => {
            const path = `${dist}/${file}`;
            const content = await readFile(path, 'utf8');
            await writeFile(path, content.replaceAll(temporaryHost, canonicalHost));
          })
        );
      },
    },
  };
}

export default defineConfig({
  site: 'https://velocats.github.io',
  base: '/homesteadkeeper.com',
  integrations: [sitemap(), canonicalSitemapUrls()],
});
