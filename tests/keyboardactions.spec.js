import {test} from "@playwright/test"
test("keyboard actions",async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // await page.locator("#name").fill("kumaresh")
    // //type
    // await page.locator("#name").type("kumaresh")
    // await page.type("#name","kumaresh")
    await page.locator("#name").click()
    await page.keyboard.type("kumaresh")
    await page.waitForTimeout(2000)

    //insert text
    await page.locator("#name").click()
    await page.keyboard.insertText("kumaresh")
    await page.waitForTimeout(2000)

    //down and up
    await page.keyboard.down('space')
    await page.keyboard.up('space')
    await page.keyboard.down('R')
    await page.keyboard.up('R')
})