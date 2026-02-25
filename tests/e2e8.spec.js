import {test} from "@playwright/test"
import homeAMZN from "../POM-AMZN/homeAMZN.page"
import watch from "../POM-AMZN/watch.page"
import brand from "../POM-AMZN/brand.page"
import clickwatch from "../POM-AMZN/clickwatch.page"
import testdata from "../testData/e2e8.json"
import addtocart from "../POM-AMZN/addtocart.page"
test("",async ({page}) => {

    let url=testdata.url
    let searchtf=testdata.search

    let homeamzn=new homeAMZN(page)
    let searchwatch=new watch(page)
    let watchclick=new clickwatch(page)
    let clickbrand=new brand(page)
    //let clickaddtocart=new addtocart(newpage)

    await page.goto(url)
    await homeamzn.searchtextfield.fill(searchtf)
    await page.keyboard.press("Enter")
    await searchwatch.watchcheckbox.click()
    await clickbrand.brandcheckbox.click()
    let[newpage]=await Promise.all([
        page.waitForEvent('popup'),
     watchclick.watchclick.click() ])

    //after creating new page only this object creation is work
     let clickaddtocart=new addtocart(newpage)
     
    await clickaddtocart.addcart.click()
    await clickaddtocart.gotocart.click()


    

    
})