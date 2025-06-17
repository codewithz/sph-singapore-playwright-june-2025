import { test, expect } from '@playwright/test';

test('Screenshot demo with mask and fullPage', async ({ page }) => {
  await page.goto('/');

  // Optional: Trigger any interactions needed
  await page.getByRole('button', { name: 'Register' }).click();

  // Masking element (must await it before passing to options)
  const maskedLocators = await page.getByTestId('location').all();

  // Full page screenshot with mask
  await page.screenshot({
    path: 'screenshots/screenshot-masked.png',
    fullPage: true,
    mask: maskedLocators,
  });

  // Ensure screenshot is taken *after* everything is loaded/interacted
  await expect(page.locator('.invalid-feedback')).toHaveCount(3);
});
