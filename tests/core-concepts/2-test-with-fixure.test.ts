import {test} from '@playwright/test';

test("Test with fixture", async({browserName,page}) => {
    console.log("Browser name: ", browserName);
    console.log("Page URL: ", page.url());

    await page.goto('https://playwright.dev/');
    await page.screenshot({ path: `pw-${browserName}.png` });

    console.log("Page Title:", await page.title());


})