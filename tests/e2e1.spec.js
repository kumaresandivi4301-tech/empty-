import {test} from "@playwright/test"
import landing from "../POM/landing.page"
import signup from "../POM/singnup.page"
import singin from "../POM/signin.page"
import home from "../POM/home.page"
import createTicket from "../POM/createTicket.page"
import testdata from "../testData/e2e1.json"
test("",async ({page}) => {
    let url=testdata.url
    let name=testdata.name
    let email=testdata.email
    let password=testdata.password
    let repassword=testdata.repassword
    let contactno=testdata.cno
    let subject=testdata.sub
    let des=testdata.des
    page.on("dialog",async (dialog) => {
    console.log(await dialog.message());
    await dialog.accept()
            
    })
    let landingpage=new landing(page)
    let signuppage=new signup(page)
    let signinpage=new singin(page)
    let homepage=new home(page)
    let createTicketpage=new createTicket(page)
    //launch the url
    await page.goto(url)
    await landingpage.sinuplink.click()
    //pass name for name text field
    await signuppage.nameTF.fill(name)
    //email text field
    await signuppage.emailTF.fill(email)
    //password text field
    await signuppage.passwordTF.fill(password)
    //re-enter the password
    await signuppage.repasswordTF.fill(repassword)
    //contact number text field
    await signuppage.contactnoTF.fill(contactno)
    //gender radio button
     await signuppage.maleradio.click()
    //click on submit button
    await signuppage.SubmitButton.click()
    //alert and get the message

    //e-mail TF
    await signinpage.email.fill(email)
    //password text field 
    await signinpage.pwdTF.fill(password)
    //click on login
    await signinpage.loginButton.click()
    //create ticket - click on it
    await homepage.createticketLink.click()
    //add subject to subject text field
    await createTicketpage.subjectTF.fill(subject)
    //select an option from task type dropdown
    await createTicketpage.TTdropdown.selectOption('Option 1')
    //priority dropdown
    await createTicketpage.pdropdown.selectOption({value:"important"})
    //description text field
    await createTicketpage.descriptiontextarea.fill(des)
    //send button click
    await createTicketpage.sendbutton.click()
    //alert --msg-- accept
    //click on view ticket
    await homepage.viewticketLink.click()
    //take a screenshot
    await page.screenshot({path:"screenshot/ticketss.png"})

    
})