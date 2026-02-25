import {test} from "@playwright/test"
import homeAMZ from "../POM-AMZ/homeAMZ.page"
import shirt from "../POM-AMZ/shirt.page"
import ClickAddToCart from "../POM-AMZ/ClickAddToCart.page"
import testdata from "../testData/e2e3.json"
test("",async ({page}) => {

let url=testdata.url

let homepage=new homeAMZ(page)
let shirtpage=new shirt(page)
let addtocartpage=new ClickAddToCart(page)

await page.goto(url)
await homepage.searchTF.fill("shirt for men")
await page.keyboard.press('Enter')

//await shirtpage.clickShirt.click()
const [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    shirtpage.clickShirt.click()
  ])

  await newPage.waitForLoadState()
await addtocartpage.ClickAddToCart.click()
    
 })