//To verify perticular search product navigate through respective product page or not
//To verify search text field accepted alphabet characters and numbers and special charactors
import {test , expect} from "@playwright/test"
    import home from "../POM-integration/home.page"
    import product from "../POM-integration/product.page"
    import testdata from "../testData/integration.json"
    test("",async ({page}) => {

        let url=testdata.url
        let searchtf=testdata.search

        let homepage=new home(page)
        let searchproduct=new product(page)

        await page.goto(url)
        await expect(page).toHaveURL(url)
        await homepage.searchproduct.fill(searchtf)
        await page.keyboard.press("Enter")
        await searchproduct.clickproduct.click()
        await expect(searchproduct.clickproduct).toBeVisible()
        
    })
