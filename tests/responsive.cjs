/* Verify that the static site fits narrow and wide browser viewports.
   Run with: npm install --no-save playwright && npx playwright install chromium && node tests/responsive.cjs */
const { chromium } = require('playwright');
const { spawn } = require('node:child_process');
const assert = require('node:assert/strict');

(async () => {
  const server = spawn('python3', ['-m', 'http.server', '4173', '--bind', '127.0.0.1'], { stdio: 'ignore' });
  let browser;
  try {
    let ready = false;
    for (let i = 0; i < 50; i++) {
      try {
        const response = await fetch('http://127.0.0.1:4173/');
        if (response.ok) { ready = true; break; }
      } catch {}
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    assert(ready, 'Local site server failed to start');
    browser = await chromium.launch({ headless: true });
    for (const path of ['/', '/eggy-weggy.html', '/privacy.html', '/eggy-weggy-privacy.html', '/missing-page']) {
      for (const width of [320, 360, 390, 430, 768, 1280]) {
        const page = await browser.newPage({ viewport: { width, height: 850 }, deviceScaleFactor: 1 });
        const response = await page.goto('http://127.0.0.1:4173' + path, { waitUntil: 'networkidle' });
        assert(response, 'No HTTP response');
        const result = await page.evaluate(() => {
          const brand = document.querySelector('.brand-avatar');
          const official = document.querySelector('.official-logo');
          const screen = document.querySelector('.screen-frame');
          const images = [...document.images].filter(img => img.currentSrc && (!img.complete || img.naturalWidth === 0)).map(img => img.src);
          return {
            viewport: window.innerWidth,
            document: document.documentElement.scrollWidth,
            body: document.body.scrollWidth,
            brandWidth: brand?.getBoundingClientRect().width,
            officialRight: official?.getBoundingClientRect().right,
            gameImageRight: screen?.getBoundingClientRect().right,
            images
          };
        });
        console.log(path, width, JSON.stringify(result));
        assert.equal(result.viewport, width, 'Viewport mismatch');
        assert(result.document <= width + 1, 'Horizontal document overflow: ' + path + ' at ' + width);
        assert(result.body <= width + 1, 'Horizontal body overflow: ' + path + ' at ' + width);
        if (result.brandWidth !== undefined) assert(result.brandWidth <= 42, 'Oversized header brand');
        if (result.officialRight !== undefined) assert(result.officialRight <= width + 1, 'Official logo exceeds viewport');
        if (result.gameImageRight !== undefined) assert(result.gameImageRight <= width + 1, 'Gameplay screenshot exceeds viewport');
        assert.deepEqual(result.images, [], 'Broken local images');
        await page.close();
      }
    }
    console.log('Responsive pages passed at 320, 360, 390, 430, 768 and 1280px.');
  } finally {
    if (browser) await browser.close();
    server.kill('SIGTERM');
  }
})().catch(e => { console.error(e); process.exitCode = 1; });
