import { test, expect } from '@playwright/test';

test('interact with lazy-loaded components on beritaharian.sg', async ({ page }) => {
  // Step 1: Visit the page
  await page.goto('https://www.beritaharian.sg', { waitUntil: 'domcontentloaded' });

  // Step 2: Wait for top nav/logo to become visible (early load)
  await expect(page.getByRole('link', { name: 'Berita Harian' })).toBeVisible();

  // Step 3: Wait for a lazy-loaded news card (example selector)
  const lazyCard = page.locator('.view-homepage-newsroom .card-title').first();
  await lazyCard.waitFor({ state: 'visible', timeout: 20000 });

  // Step 4: Click as soon as it’s visible
  await lazyCard.click();

  // Step 5: Validate detail page loaded
  await expect(page.locator('article')).toBeVisible();
});
