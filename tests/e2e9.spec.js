import {test} from "@playwright/test"
import home from "../POM-FLPKT/home.page"
import mobile from "../POM-FLPKT/mobile.page"
import mobileselect from "../POM-FLPKT/mobileselect.page"
import testdata from "../testData/e2e9.json"
import buy from "../POM-FLPKT/buy.page"
import cont from "../POM-FLPKT/cont.page"
import cod from "../POM-FLPKT/cod.page"
test("",async ({page}) => {

    let url=testdata.url
    let searchbox=testdata.search

    let homeflpkt=new home(page)
    let mobiles=new mobile(page)
    let selectmobile=new mobileselect(page)
    

    await page.goto(url)
    await homeflpkt.search.fill(searchbox)
    await page.keyboard.press("Enter")
    await mobiles.mindropdown.selectOption({value:"15000"})
    await mobiles.maxdropdown.selectOption({value:"30000"})
    let[newpage]=await Promise.all([
        page.waitForEvent('popup'),
        selectmobile.clickmobile.click()
    ])

    let buynow=new buy(newpage)
    let continu=new cont(newpage)
    let cash=new cod(newpage)

    await buynow.buynow.click()
    await continu.continue.click()
    await cash.COD.click()
    await cash.POD.click()

    
})