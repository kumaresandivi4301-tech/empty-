import {test} from "@playwright/test"
test("auto sugg",async ({browser}) => {
    //creating multiple tab manually
    let context=await browser.newContext()
    let page=await context.newPage()
    // await page1.goto("https://www.flipkart.com/")
    // let page2=await context.newPage()
    // await page2.goto("https://www.amazon.in/")

    //new tab via user action
    await page.goto("https://www.flipkart.com/search?q=shoes&as=on&as-show=on&otracker=AS_Query_TrendingAutoSuggest_2_0_na_na_na&otracker1=AS_Query_TrendingAutoSuggest_2_0_na_na_na&as-pos=2&as-type=TRENDING&suggestionId=shoes&requestId=975dda20-a0b2-40e9-862c-341106d13f74")
    await page.click('(//img[@class="MZeksS"])[1]')
    await page.waitForTimeout(3000)

    await page.goto("https://www.redbus.in/")
    await page.click('//a[text()="Contact us"]')
     await page.waitForTimeout(3000)
    
})