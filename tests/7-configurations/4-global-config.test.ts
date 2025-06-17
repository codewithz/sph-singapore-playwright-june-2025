import { test } from '@playwright/test';

test.use({ headless: false });

test('Test 1', async ({ page }) => {
    await page.goto('');
    await page.goBack();
    console.log("test");
});

// npx playwright test --project=setup-cleanup-demo