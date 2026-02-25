// import{test} from "@playwright/test"
// test("launch browser",async({page})=>{
//     await page.goto("https://www.amazon.in/")
// })

import {test,expect} from "@playwright/test"
test("lounching the browser",async ({page}) => {
    await page.goto("https://www.amazon.in/")
    await expect(page).toHaveURL("https://www.amazon.in/")
})