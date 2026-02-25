import {test} from "@playwright/test"
import home from "../POM-MOCK/home.page"
import mobile from "../POM-MOCK/mobile.page"
import addtocart from "../POM-MOCK/addtocart.page"
import testdata from "../testData/mock.json"
test("",async ({page , context}) => {
    let url=testdata.url
    let searchproduct=testdata.search

    let homepage=new home(page)
    let clickmobile=new mobile(page)
   
    await page.goto(url)

    await homepage.homepage.fill(searchproduct)
    await page.keyboard.press("Enter")
    
    await clickmobile.clickmobile.click()

    //   const[newpage]=await Promise.all([
    //     await context.waitForEvent('popup'),
         
    //       await clickmobile.clickmobile.click()
    //  ])
      const[newpage]=await Promise.all([
        await context.waitForEvent('popup'),
           await clickaddtocart.clickaddtocart.click()
          
     ])
     let clickaddtocart=new addtocart(newpage)
     await clickaddtocart.clickaddtocart.click()

    
})