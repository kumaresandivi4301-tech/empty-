import {test} from "@playwright/test"
test("window handles",async ({browser}) => {
    //creating multi tabs in manually
    let context=await browser.newContext()
    let page=await context.newPage()
    // await page1.goto("https://www.flipkart.com/")
    // let page2=await context.newPage()
    // await page2.goto("https://www.amazon.in/")
    await page.goto("https://www.flipkart.com/search?q=shoes&as=on&as-show=on&otracker=AS_Query_TrendingAutoSuggest_1_0_na_na_na&otracker1=AS_Query_TrendingAutoSuggest_1_0_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=shoes&requestId=975dda20-a0b2-40e9-862c-341106d13f74&as-searchtext=shoe")
    await page.click('(//img[@class="MZeksS"])[1]')
    await page.waitForTimeout(3000)

    await page.goto("https://www.redbus.in/")
    await page.click('//button[@class="primaryButton___5380e6 searchButtonWrapper___2d58a0 "]')
    await page.waitForTimeout(3000)
})