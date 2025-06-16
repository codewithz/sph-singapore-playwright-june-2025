import { test, expect } from '@playwright/test';

const name = 'Sofia';

test('Storage - test from the UI perspective', async ({ page }) => {

    await page.goto('http://localhost:3000/');

    const input = page.getByLabel('First name');
    await input.fill(name);
    await page.reload();
    await expect(input).toHaveValue('');

    input.fill(name);
    await page.getByRole('button', { name: 'Save Input' }).click();
    await page.reload();
    await expect(input).toHaveValue(name);
});

test('Local Storage', async ({ page }) => {

    await page.goto('http://localhost:3000/');
    page.getByLabel('First name').fill(name)
    await page.getByRole('button', { name: 'Save Input' }).click();

    const storage = await page.context().storageState();

    console.log(storage.cookies);
    console.log(storage.origins[0].localStorage);
    console.log(storage.origins);
});

test('Session (or Local) Storage', async ({ page }) => {

    await page.goto('http://localhost:3000/');

    const input = page.getByLabel('First name');
    input.fill(name);
    await page.getByRole('button', { name: 'Save Input' }).click();

  
    const storage = await page.evaluate(() => window.sessionStorage);
    console.log(storage);

    // clear
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();
    await expect(input).toHaveValue('');

    // set
    await page.evaluate(setLocalStorage);
    await page.reload();
    await expect(input).toHaveValue('Zartab');
});

function setLocalStorage() {
    sessionStorage.setItem('firstName', 'Zartab');
}