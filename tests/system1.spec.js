//To verify user can able to click flight option 
//To verify after clicking flight user can able to get from and to text field in that application 
//To verify after getting from and to text filed user can able to select from to desgination options in dropdown 
//To verify after select all dropdown click on search button
//To verify after click search user can able to see flight list
//To verify user can able to see all flight name
//To verify user can get all flight name and price in resukt

import {test , expect} from "@playwright/test"
import homeFPL from "../POM-flightpricelist/homeFPL.page"
import testdata from "../testData/flightpricelist.json"
test("",async ({page}) => {

    let url=testdata.url
    let FROMTF=testdata.FTF
    let TOTF=testdata.TTF

    let home=new homeFPL(page)

    await page.goto(url)
    await expect(page).toHaveURL(url)

    await page.locator('//span[@data-cy="closeModal"]').click().catch(() => {});

    await home.clickflight.click()
    await expect(home.clickflight).toBeVisible

    await page.locator('//body[@class="desktop in"]').click()

    await home.clickFTF.click()

    await page.locator('//div[@class="flightWidgetSection appendBottom40"]').click()
    await home.clickban.click()

    await home.clickTTF.click()
    await home.clickmum.click()

    await home.clickdate.click()

    await page.locator('//body[@class="desktop in"]').click()
    
    await home.clicksearch.click();
    await expect(home.clicksearch).toBeChecked()

    const flightname=await page.locator('//p[@class="boldFont blackText airlineName"]').allTextContents()
    console.log(flightname);
    
})