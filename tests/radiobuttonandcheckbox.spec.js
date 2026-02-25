import {test,expect} from "@playwright/test"
test("radiobutton and checkbox",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator('//input[@id="attended"]').click()
    await page.waitForTimeout(2000)
    //assertion
    //console.log(await page.locator('//input[@id="attended"]').isChecked());
    await expect(await page.locator('//input[@id="attended"]')).toBeChecked()
    
})

test.only("check box",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator('//input[@id="domain_b"]').check()
    await page.waitForTimeout(2000)
    //assertion
    await expect(await page.locator('//input[@id="domain_b"]')).toBeChecked()
    await page.locator('//input[@id="domain_b"]').uncheck()
    //verify unchecked
    await expect(await page.locator('//input[@id="domain_b"]').isChecked()).toBeFalsy()
     await page.waitForTimeout(2000)
})