import {test} from "@playwright/test"
import homeswgy from "../POM-SWIGGY/homeswgy.page"
import searchTF from "../POM-SWIGGY/searchTF.page"
import AddIceCream from "../POM-SWIGGY/AddIceCream.page"
import testdata from "../testData/e2e5.json"
test("",async ({page}) => {

    let url=testdata.url

    let hswgy=new homeswgy(page)
    let STF=new searchTF(page)
    let AIC=new AddIceCream(page)

    await page.goto(url)
    await hswgy.searchclick.click()
    await STF.fill("ice cream")
    await STF.clickrestourent.click()
    await STF.ClickIceCream.click()
    await AIC.additem.click()
    await AIC.viewchart.click()
    
})