import  {test,expect} from '@playwright/test';

test("Simple Assertions Demo",async()=>{
    const expectedTitle = "Playwright";
    const actualTitle = "Playwright";

    // Simple assertion
    expect(actualTitle).toBe(expectedTitle);

    // Assertion with message
    expect(actualTitle, "The actual title does not match the expected title").toBe(expectedTitle);

    // Using toContain for partial matches
    const actualText = "Playwright is a powerful tool";
    expect(actualText).toContain("powerful");

    // Using toBeTruthy
    const isVisible = true;
    expect(isVisible).toBeTruthy();

    // Using toBeFalsy
    const isHidden = false;
    expect(isHidden).toBeFalsy();
});

test("Testing with Auto Retry", async ({ page }) => {

    await page.goto('http://localhost:3000/');

    await expect(page.getByTestId('location')).toContainText('New York');

    await expect(page).toHaveTitle("Credit Association");
    await expect(page).toHaveURL("http://localhost:3000/");
})


