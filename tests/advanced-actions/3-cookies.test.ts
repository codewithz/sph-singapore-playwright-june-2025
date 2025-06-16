import { test } from '@playwright/test';


test('Cookies', async ({ page }) => {

    await page.goto("http://localhost:3000");;
    console.log(await page.context().cookies());

    await page.context().addCookies([
        {
            name: 'test_cookie',
            value: 'test_value',
            url: 'https://playwright.dev'
        }]);

    console.log(await page.context().cookies());

    await page.context().clearCookies();
    console.log(await page.context().cookies());

});