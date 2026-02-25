import {test} from "@playwright/test";
test("browsercontrol",async({browser})=>{
    let context=await browser.newContext();
   let page = await context.newPage();
   console.log(await context.cookies());
   
 await page.goto("https://www.google.com")
  console.log(await context.cookies());
//  const title=await page.title()
//  console.log(title);
//  console.log(await page.url())

 
// let size1 = await page.viewportSize()
// console.log(size1);
// await page.setViewportSize({width:1000,height:500})
// let size = await page.viewportSize()
// console.log(size);
// await page.goto("https://www.amazon.in/")
// const title=await page.title()
// console.log(title);


})
test.only("instance",async()=>{
    let browser=await webkit.launch()
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.google.com")
})