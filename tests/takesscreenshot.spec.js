import {test} from "@playwright/test"
test("takesscreenshot",async({page})=>{
    await page.goto("https://www.amazon.in/")
})
test("ss",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.screenshot({path:"screenshot/ss.png"})
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/-page-${time}.png`})
})