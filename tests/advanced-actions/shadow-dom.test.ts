import { test, expect } from '@playwright/test';

test('Access and click shadow DOM button', async ({ page }) => {
  await page.goto('http://localhost:3000/test.html');

  // Use Playwright’s piercing selector directly from the page
  const shadowButton = page.locator('my-shadow-root >>> #shadow-btn');

  // Wait for visibility and click
  await expect(shadowButton).toBeVisible();
  await shadowButton.click();
});
