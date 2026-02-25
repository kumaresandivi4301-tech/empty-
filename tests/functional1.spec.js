//To verify search text field accepted alphabet characters and numbers and special charactors

import {test , expect} from "@playwright/test"
import search from "../POM-functional1/search.page"
import testdata from "../testData/functional1.json"
test("",async ({page}) => {
    let url=testdata.url
    let searchproduct=testdata.search

    let searchTF=new search(page)

    await page.goto(url)
    await expect(page).toHaveURL(url)
    await searchTF.searchTextField.fill(searchproduct)
    await page.keyboard.press("Enter")
    await expect(searchTF.searchTextField).toBeVisible()
})