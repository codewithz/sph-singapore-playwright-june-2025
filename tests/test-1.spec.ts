import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('checkbox', { name: 'I wish to share how I\'ve' }).check();
  await page.locator('#textarea').click();
  await page.locator('#textarea').click();
  await page.locator('#textarea').click();
  await page.locator('div').filter({ hasText: 'Register to become a member' }).nth(1).click();
});