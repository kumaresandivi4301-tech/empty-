import {test} from "@playwright/test"
test("getby",async({page})=>{
   // await page.goto("https://demo.nopcommerce.com/login")
    //await page.getByLabel("Email",{exact:false}).fill("kumaresh@gmail.com")

   // --------------------placeholder--------------------
   //await page.getByPlaceholder("Search",{exact:false}).fill("computers")
   //await page.getByText("Electronics").first().click()
  // await page.getByAltText("nopCommerce demo store",{exact:true}).click()
  await page.goto("https://demo.nopcommerce.com/electronics")
  await page.getByTitle("Show products in category Camera & photo").first().click()
})