import {test} from "@playwright/test"
import { isArrayBufferView } from "util/types"
test("element controls",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("#name").fill("kumaresh")
    let text=await page.locator("#name").inputValue()
    console.log(text);
    // let text1=await page.locator("#email").inputValue()
    // console.log(text1);
    await page.locator("#email").type("kumaresah@gmail.com")
    console.log(await page.locator("#email").inputValue());
    
    
    
    
    // await page.locator("#email").type("kumaresah@gmail.com")
    // await page.locator('//button[text()="Register"]').click()
    // //await page.pause(3000)
    // let text=await page.locator('//section[@class="poppins text-[14px]"and text()="Radio Button"]').textContent()
    // console.log(text);
    
})