import {test} from "@playwright/test"
import homeflpk from "../POM-FLPK/homeflpk.page"
import clickmobile from "../POM-FLPK/clickmobile.page"
import clickdropdown from "../POM-FLPK/clickdropdown.page"
import testdata from "../testData/e2e4.json"
test("",async ({page}) => {
    let url=testdata.url

    let homepage=new homeflpk(page)
    let mobileclick=new clickmobile(page)
    let dropdownclick=new clickdropdown(page)

    await page.goto(url)
    await homepage.searchTF.fill("samesung 5G mobile")
    await page.keyboard.press("Enter")
    await mobileclick.mobpage.click()
    await dropdownclick.clickcheckbox.click()
    await dropdownclick.clickAddToCampare.click()
    
})