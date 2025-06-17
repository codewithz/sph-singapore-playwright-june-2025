import {test,expect} from '@playwright/test';

test("Built In Locators Test",async ({page})=>{

    await page.goto("http://localhost:3000/");

    const firstName=page.getByLabel("First name");
    await firstName.fill("John");
    await firstName.clear();

    await page.getByLabel("First name").fill("Zartab");

    await page.getByRole("button", {name: "Register",exact: true}).click();

    const warningMessage = page.getByText("Valid last name is required");

    await expect(warningMessage).toBeVisible();
})