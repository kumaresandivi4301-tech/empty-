//To verify user can able to search product or not
//To verify user able to click percular product or not
//To verify product page can able to click or not
//To verify use can able get product price or not
//To verify user can able to add to cart or not
//To verify product sucessfully added in to the cart or not


import {expect, test} from "@playwright/test"
import pricehome from "../POM-prices/pricehome.page"
import pricelist from "../POM-prices/pricelist.page"
import testdata from "../testData/price.json"
import { log } from "console"
test("",async ({page}) => {
    let url=testdata.url
    let search=testdata.search

    let homeprice=new pricehome(page)
    let listprice=new pricelist(page)

    await page.goto(url)
    await expect(page).toHaveURL(url)
    await homeprice.searchTF.fill(search)
    await page.keyboard.press("Enter")



   let text= await listprice.listofprice.textContent()
   console.log(text);
   await expect(listprice.listofprice).toBeVisible(text)

   await listprice.addtocart.click()
    await expect(listprice.addtocart).toBeVisible()

    

   await listprice.gotocart.click()
   await expect(listprice.gotocart).toBeVisible()
   
})