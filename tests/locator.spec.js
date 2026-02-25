import {test,expect} from "@playwright/test"
test("locators",async({page})=>{
await page.goto("https://practicetestautomation.com/practice-test-login/")
await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/")
await page.locator("//input[@id='username']").fill("student")
await expect(page.locator("//input[@id='username']")).toBeVisible()
await page.locator("//input[@id='password']").fill("Password123")
await expect(page.locator("//input[@id='password']")).toBeVisible()
await page.locator("//button[@id='submit']").click()
await expect(page.locator("//button[@id='submit']")).toBeVisible()
})