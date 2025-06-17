import { test } from '@playwright/test';

test('Filtering demo', async ({ page }) => {

    await page.goto('http://localhost:3000/savings.html');

    const rows= page.getByRole('row');
    console.log(`Total rows: ${await rows.count()}`);

    const row=page.getByRole('row').filter({hasText:'Competition'});

    console.log("Row Content: ", await row.textContent());

    const cell = page.getByRole('row')
        .filter({ hasText: 'Competition' })
        .getByRole('cell')
        .nth(1);        // 2%

    console.log(await cell.textContent());
});