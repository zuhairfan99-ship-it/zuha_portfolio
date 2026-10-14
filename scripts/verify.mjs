import { chromium } from '@playwright/test';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const out = 'artifacts/review';
await mkdir(out, { recursive: true });
const slugs = ['flood-prediction-system','air-quality-prediction-system','heart-disease-detection-system','smart-campus-resource-management-system','workflow-automation-pipeline','student-learning-companion-uiux'];
const routes = ['/', '/about', '/experience', '/projects', ...slugs.map(s => `/projects/${s}`), '/skills', '/certifications', '/resume', '/contact'];
const widths = [375,430,768,1024,1280,1440,1920];
const browser = await chromium.launch({ headless: true });
const errors = [];
const results = [];
const page = await browser.newPage({ reducedMotion: 'reduce' });
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error' && !m.text().includes('net::ERR')) errors.push(m.text()); });
await page.addInitScript(() => sessionStorage.setItem('zuha-intro', 'seen'));
try {
  for (const width of (process.argv.includes('--interactions') ? [] : widths)) {
    await page.setViewportSize({ width, height: 960 });
    for (const route of routes) {
      await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle' });
      await page.locator('h1').waitFor();
      const title = await page.locator('h1').innerText();
      const overflow = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth, elements: [...document.querySelectorAll('main *')].filter(e => { const r = e.getBoundingClientRect(); return r.width && (r.right > innerWidth + 2 || r.left < -2) && !e.closest('.marquee,.hero,.skill-orbit,.contact-page,.section-index'); }).map(e => ({ tag: e.tagName, cls: e.className, width: Math.round(e.getBoundingClientRect().width) })).slice(0, 12) }));
      assert.ok(overflow.scroll <= width + 1, `${route} at ${width}: document overflow ${JSON.stringify(overflow)}`);
      if (overflow.elements.length) results.push({ route, width, review: overflow.elements });
      const name = route === '/' ? 'home' : route.replaceAll('/', '_').slice(1);
      if (width === 375 || width === 1440) {
        await page.screenshot({ path: `${out}/${name}-${width}.png`, fullPage: true });
        await page.screenshot({ path: `${out}/${name}-${width}-hero.png` });
      }
      console.log(`PASS ${width} ${route}: ${title.replaceAll('\n', ' ')}`);
    }
  }
  if (!process.argv.includes('--interactions')) assert.deepEqual(results, [], 'No content outside the viewport beyond intentional artwork');
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  assert.equal(await page.locator('.mobile-menu').evaluate(e => e.open), true);
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('.mobile-menu').evaluate(e => e.open), false);
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Projects' }).click();
  await page.waitForURL('**/projects');
  await page.locator('.projects-page').waitFor();
  await page.getByRole('button', { name: 'UI/UX', exact: false }).click();
  await page.waitForTimeout(400);
  assert.equal(await page.locator('.project-showcase').count(), 1);
  await page.getByRole('button', { name: 'All', exact: false }).click();
  await page.waitForTimeout(400);
  assert.equal(await page.locator('.project-showcase').count(), 6);
  await page.goto('http://localhost:3000/certifications');
  const cert = page.getByRole('button', { name: /View certificate details/ }).first();
  await cert.click();
  assert.equal(await page.locator('.certificate-dialog').evaluate(e => e.open), true);
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => !!document.activeElement.closest('dialog')), true);
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('.certificate-dialog').evaluate(e => e.open), false);
  assert.equal(await cert.evaluate(e => e === document.activeElement), true);
  await page.goto('http://localhost:3000/resume');
  await page.getByRole('button', { name: 'View resume', exact: true }).nth(2).click();
  assert.ok((await page.locator('#resume-document').innerText()).includes('UI/UX Design Resume'));
  await page.goto('http://localhost:3000/contact');
  await page.getByRole('button', { name: 'Send message' }).click();
  assert.equal(await page.locator('[aria-invalid="true"]').count(), 4);
  await page.getByLabel('Your name').fill('Portfolio Review');
  await page.getByRole('textbox', { name: 'Email address' }).fill('review@example.org');
  await page.getByLabel('What is it about?').fill('Project inquiry');
  await page.getByLabel('Your message').fill('I would love to discuss a design project.');
  await page.getByRole('button', { name: 'Send message' }).click();
  assert.ok((await page.locator('.form-status').innerText()).includes('not available'));
  await page.goto('http://localhost:3000/projects/missing-project');
  await page.getByRole('heading', { name: 'Project Not Found' }).waitFor();
  assert.ok((await page.locator('main').innerText()).includes('Project Not Found'));
  await page.goto('http://localhost:3000/missing-page');
  assert.ok((await page.locator('h1').innerText()).includes('Page Not Found'));

  // Native history, route transition, and live motion preference cleanup.
  await page.setViewportSize({ width: 1440, height: 960 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(1600);
  await page.mouse.move(550, 400);
  assert.equal(await page.locator('.custom-cursor').count(), 1);
  await page.evaluate(() => window.scrollTo({ top: 700, behavior: 'instant' }));
  await page.waitForTimeout(300);
  const previousY = await page.evaluate(() => scrollY);
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'About', exact: true }).click();
  await page.waitForTimeout(1300);
  assert.ok(await page.evaluate(() => scrollY < 5), 'New route should start at top');
  await page.goBack();
  await page.waitForTimeout(1300);
  assert.ok(Math.abs(await page.evaluate(() => scrollY) - previousY) < 30, 'Back restores scroll');
  await page.goForward();
  await page.waitForTimeout(1300);
  assert.ok((await page.locator('h1').innerText()).includes('Curious mind'));
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForTimeout(300);
  assert.equal(await page.locator('.custom-cursor').count(), 0);
  assert.equal(await page.evaluate(() => document.documentElement.classList.contains('lenis')), false);
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(1300);
  assert.equal(await page.locator('.custom-cursor').count(), 0);
  assert.equal(await page.evaluate(() => document.documentElement.classList.contains('lenis')), false);
  await writeFile(`${out}/${process.argv.includes('--interactions') ? 'interactions' : 'report'}.json`, JSON.stringify({ routeChecks: process.argv.includes('--interactions') ? 0 : routes.length * widths.length, widths, errors, layoutReview: results, interactions: 'passed' }, null, 2));
  assert.deepEqual(errors, [], 'No runtime console errors');

  // Contact sheets for visual review; originals remain available at full resolution.
  for (const width of [375,1440]) {
    const cards = [];
    for (const route of routes) {
      const name = route === '/' ? 'home' : route.replaceAll('/', '_').slice(1);
      const data = (await readFile(`${out}/${name}-${width}-hero.png`)).toString('base64');
      cards.push(`<article><p>${route}</p><img src="data:image/png;base64,${data}"></article>`);
    }
    await page.setViewportSize({ width: width === 375 ? 1500 : 1800, height: 1000 });
    await page.setContent(`<style>body{margin:15px;background:#ddd;display:grid;grid-template-columns:repeat(${width === 375 ? 5 : 3},1fr);gap:15px;font:12px sans-serif}article{min-width:0}p{height:28px;overflow-wrap:anywhere}img{width:100%;display:block}</style>${cards.join('')}`);
    await page.screenshot({ path: `${out}/contact-sheet-${width}.png`, fullPage: true });
  }
  console.log(`Passed ${process.argv.includes('--interactions') ? 0 : routes.length * widths.length} route/viewport checks and all interaction checks.`);
} finally { await browser.close(); }


