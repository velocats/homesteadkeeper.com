// Run `npm run generate:logs` after editing a focused printable's content or styles.
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = new URL('../', import.meta.url);
const logs = [
  'egg-production-log',
  'equipment-maintenance-log',
  'homestead-maintenance-checklist',
  'garden-planting-harvest-log',
  'farm-sitter-handoff-checklist',
];
const mime = { '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.png': 'image/png' };
const server = createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    const file = new URL(`dist${pathname.endsWith('/') ? `${pathname}index.html` : pathname}`, root);
    if (!file.href.startsWith(new URL('dist/', root).href)) throw new Error('Invalid path');
    const extension = pathname.slice(pathname.lastIndexOf('.'));
    response.setHeader('Content-Type', mime[extension] || 'text/html');
    response.end(await readFile(file));
  } catch {
    response.writeHead(404).end();
  }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let browser;
try {
  browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: 'chrome' });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const origin = `http://127.0.0.1:${server.address().port}`;
  // Exports use local content only and never send notification emails.
  await page.route('**/*', route => route.request().url().startsWith(origin) ? route.continue() : route.abort());
  await mkdir(new URL('public/planner/', root), { recursive: true });
  for (const log of logs) {
    await page.goto(`${origin}/planner/${log}/`);
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({
      path: fileURLToPath(new URL(`public/planner/${log}.pdf`, root)),
      preferCSSPageSize: true,
      printBackground: true,
      displayHeaderFooter: false,
    });
    console.log(`Exported ${log}.pdf`);
  }
} finally {
  await browser?.close();
  server.close();
}
