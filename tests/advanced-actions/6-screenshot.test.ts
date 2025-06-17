import { test, expect } from '@playwright/test';


// test.use({
//     viewport: { width: 1280, height: 2000 }
//   }); 
test('Screenshot demo', async ({ page }) => {

    page.goto('/');

    await page.getByRole('button', { name: 'Register' }).click();

    const s: Promise<Buffer> = page.screenshot({
        path: 'screenshots/screenshot.png',
        fullPage: true,
    });


    page.screenshot({
        path: 'screenshots/screenshot-advanced.jpeg',
        fullPage: true,
        mask: await page.getByTestId('location').all()
    });

    await expect(page.locator('.invalid-feedback')).toHaveCount(4); // correct count is 3
});
