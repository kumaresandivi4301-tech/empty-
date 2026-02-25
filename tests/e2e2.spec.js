import {test} from "@playwright/test"
import signup1 from "../POM-EC/signup1.page"
import loginform from "../POM-EC/loginform.page"
import home1 from "../POM-EC/home1.page"
import clickbook from "../POM-EC/clickbook.page"
import ATCclick from "../POM-EC/ATCclick.page"
import testdata from "../testData/e2e2.json/"
test("",async ({page}) => {
    let url=testdata.url
    let username=testdata.unTF
    let password=testdata.pwdTF

    page.on("dialog",async (dialog) => {
        console.log(await dialog.messege());
        await dialog.accept()
        
    })
    let signupEC=new signup1(page)
    let loginEC=new loginform(page)
    let homeEC=new home1(page)
    let clickbookEC=new clickbook(page)
    let ATCclickEC=new ATCclick(page)
 //launch the url 
 await page.goto(url)
 await expect(page).toHaveURL(url)
 await signup1.clicksignup.clik()
 //click signup 
await signup1.unTF.fill(username)
await signup1.pwdTF.fill(password)
 //login page
 await loginEC.lus.fill(username)
 await loginEC.lpwd.fill(password)
 //alert
 //homepage
 await homeEC.healthandcooking.clik()
 //click health and cook
 //click first book
 await homeEC.healthandcooking.ATCclick()
 //click add to cart    
})