import {test} from "@playwright/test"
import loginbook from "../POM-BOOK/loginbook.page"
import bookshop from "../POM-BOOK/bookshop.page"
import selectbook from "../POM-BOOK/selectbook.page"
import addtocartclick from "../POM-BOOK/addtocartclick.page"
import logout from "../POM-BOOK/logout.page"
import testdata from "../testData/e2e7.json"

test("",async ({page}) => {
    let url=testdata.url
    let username=testdata.username
    let password=testdata.password


    page.on("dialog",async (dialog) => {
       console.log(await dialog.message());
       await dialog.accept()
               
    })

    let loginbooks=new loginbook(page)
    let booksShop=new bookshop(page)
    let selectbooks=new selectbook(page)
    let addtocart=new addtocartclick(page)
    let logoutclick=new logout(page)

    await page.goto(url)
    await loginbooks.loginbtn.click()
    await loginbooks.username.fill(username)
    await loginbooks.password.fill(password)
    await loginbooks.signin.click()

    await booksShop.clickEE.click()

    await selectbooks.clickbook.click()

    await addtocart.addtocart.click()

    await logoutclick.clicklogout.click()




    
})