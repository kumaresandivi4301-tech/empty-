import {test,expect} from "@playwright/test"
test("lounching the browser",async ({browser}) => {
    let context=await browser.newContext()
    let page1=await context.newPage()
    await page1.goto("https://www.flipkart.com/")
    await page.waitForTimeout(3000)
    await page1.getByPlaceholder("Search for Products, Brands and More").fill("shoes for men")
    await page.waitForTimeout(3000)
    await page1.keyboard.press("Enter")
    // await page.waitForTimeout(3000)
    await page1.locator('(//div[@class="v1zwn25 _1psv1zeb9 _1psv1ze0"])[1]').click()
    //await page.waitForTimeout(3000)
    let[newPage]=await Promise.all([page1.waitForEvent('popup'),
        await page1.getByText('Add to cart').click()
    ])
    await newPage.waitForLoadState();
    await newPage.getByRole('button', { name: 'ADD TO CART' }).click();
    //await page.waitForTimeout(3000)
    await n.getByText('Add to cart').click()
    // await page.waitForTimeout(3000)
})