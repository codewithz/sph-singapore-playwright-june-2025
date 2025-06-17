import {test, expect} from '@playwright/test';
import { CLIENT_RENEG_LIMIT } from 'tls';

const people= ["Alex", "Bob", "Charlie"];

for (const person of people) {
  test(`greet ${person}`, async ({page}) => {
    console.log(`greet ${person}`);
    await page.goto('http://localhost:3000');
  });
}



const map1 = new Map();
map1.set(2, 20);
map1.set(3, 30);

for (const [key, value] of map1) {
    test(`testing 10x function with ${key} and ${value}`, async () => {
        expect(key * 10).toEqual(value);
    });
}


const inputs = [
    ["10", "6 months", "After 6 Months you will earn $0.20 on your deposit"],
    ["20", "1 Year", "After 1 Year you will earn $1.00 on your deposit"]
];

// ❓ Question:
// You are testing a savings calculator web page (/savings.html). The page includes:

// A deposit amount input field with data-testid="deposit"

// A savings period dropdown with data-testid="period"

// A result display with data-testid="result"

// You want to write a Playwright test that runs multiple input combinations to validate that the correct result is displayed based on the deposit and period selected.

// How would you write a data-driven test that runs the same logic with different [sum, period, expected result] combinations?

for (const [sum, period, result] of inputs) {
    test(`testing with ${sum} ${period} ${result}`, async ({ page }) => {
      await page.goto('/savings.html');
      await page.getByTestId('deposit').fill(sum);
      await page.getByTestId('period').selectOption(period);
      await expect(page.getByTestId('result')).toHaveText(result);
    });
  }
  