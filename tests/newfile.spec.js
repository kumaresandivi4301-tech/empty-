import {test} from "@playwright/test"
import home from "../POM-AZTS/home.page"
import TodayDeals from "../POM-AZTS/TodayDeals.page"
import product from "../POM-AZTS/product.page"
import brand from "../POM-AZTS/brand.page"
import buynow from "../POM-AZTS/buynow.page"
import testdata from "../testData/e2e10.json"
test("",async ({page}) => {

    let url=testdata.url

    let homeazts=new home(page)
    let todaysale=new TodayDeals(page)
    let brandTD=new brand(page)
     let productTD=new product(page)
    let buynowTD=new buynow(page)

    await page.goto(url)

    await homeazts.homeTS.click()
    await todaysale.clickradiobtn.click()
    await brandTD.clickbrand.click()
    await productTD.clickproduct.click()
    await buynowTD.bynow.click()
    
})