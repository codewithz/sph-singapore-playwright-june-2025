import { test, expect } from '@playwright/test';

test('Generic locators examples', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await page.locator('.needs-validation label[for="firstName"]').fill('Zartab');
    await page.locator('//form//button[2]').click();

    await expect(page.getByText('Valid last name is required')).toBeVisible();
});