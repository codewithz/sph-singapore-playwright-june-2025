import { test, expect } from '@playwright/test';

const name = 'Sofia';

test('Dialog test - Default handling is to dismiss', async ({ page }) => {

    await page.goto('http://localhost:3000/');

    const input = page.getByLabel('First name');
    await input.fill(name);
    await expect(input).toHaveValue(name);

    await page.getByRole('button', { name: 'Clear' }).click();
    await expect(input).toHaveValue(name);

});

test('Dialog test - OK or Dismiss', async ({ page }) => {

    page.once('dialog', dialog => dialog.accept());

    await page.goto('http://localhost:3000/');

    const input = page.getByLabel('First name');
    await input.fill(name);

    await page.getByRole('button', { name: 'Clear' }).click();
    await expect(input).toHaveValue('');
});