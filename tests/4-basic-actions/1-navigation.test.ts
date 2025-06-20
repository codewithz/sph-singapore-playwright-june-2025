import { test, expect } from '@playwright/test';

const homeTitle = 'Credit Association';
const savingsTitle = 'Save with us';

test('Back, forward, reload (refresh) test', async ({ page }) => {

    await page.goto('http://localhost:3000/');

    await page.goto('http://localhost:3000/savings.html');
    await expect(page).toHaveTitle(savingsTitle);

    await page.goBack();
    await expect(page).toHaveTitle(homeTitle);

    await page.goForward();
    await expect(page).toHaveTitle(savingsTitle);


    await page.reload();
    await expect(page).toHaveTitle(savingsTitle);
});

test('Navigation test', async ({ page }) => {

    await page.goto('http://localhost:3000', { waitUntil: 'load', timeout: 100 });
    await expect(page).toHaveTitle(homeTitle);
});



test.use({ navigationTimeout: 8000 });


test('Load speed while navigating', async ({ page }) => {

    await page.goto('http://localhost:3000/savings.html', { timeout: 5000 });
    await expect(page).toHaveTitle(savingsTitle);

    await page.goBack({ timeout: 8000 });
    await expect(page).toHaveTitle(homeTitle);

    await page.goForward();
    await expect(page).toHaveTitle(savingsTitle);

    await page.reload();
    await expect(page).toHaveTitle(savingsTitle);
});