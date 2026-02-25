//To verify user can able to acess login page with valid credential
import {test , expect} from "@playwright/test"
import login from "../POM-functional/login.page"
import testdata from "../testData/functional.json"
test("",async ({page}) => {
 
    let url=testdata.url
    let UTF=testdata.username
    let PTF=testdata.password

    let clicklogin=new login(page)

    await page.goto(url)
    await expect(page).toHaveURL(url)
    await clicklogin.usernameTF.fill(UTF)
    await clicklogin.PasswordTF.fill(PTF)
    await clicklogin.clicklogin.click()
    await expect(clicklogin.clicklogin).toBeVisible()
})