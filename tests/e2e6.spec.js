import {test} from "@playwright/test"
import homeFSM from "../POM-DairyFSM/homeFSM.page"
import addproduct from "../POM-DairyFSM/addproduct.page"
import testdata from "../testData/e2e6.json"
test("",async ({page}) => {

    
    let url=testdata.url
    let username=testdata.username
    let password=testdata.password
    let name=testdata.name

    page.on("dialog",async (dialog) => {
        console.log(await dialog.message());
        await dialog.accept()
        
    })

    let homeFSMS=new homeFSM(page)
    let addprd=new addproduct(page)

    await page.goto(url)
    await homeFSMS.UNTF.fill(username)
    await homeFSMS.PWDTF.fill(password)
    await homeFSMS.LOGIN.click()
    await addprd.clickcompany.click()
    await addprd.add.click()
    await addprd.addcompany.fill(name)
    await addprd.submitBtn.click()



    
})