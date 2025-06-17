import { test } from "@playwright/test"
import { AmazonPage } from "../../pages/amazonpage"

test.use({
    launchOptions: {
        headless: false, // Set to false to see the browser actions
        slowMo: 5000, 
    }// Slows down the execution by 50ms for each action
});


test.describe("Amazon Test Cases", () => {
  test("Search Product Test Case", async ({ page }) => {
    const productName = "Apple Watch"
    const productCategory = "Electronics"

    await page.goto("https://amazon.in")
    const amazonPage = new AmazonPage(page)

    await amazonPage.searchProduct(productName, productCategory)
  })
})