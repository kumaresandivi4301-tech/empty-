import {test} from "@playwright/test"
import home from "../POM-MMT/home.page"
import date from "../POM-MMT/date.page"
import testdata from "../testData/MMT.json"
test("",async ({page}) => {

    let url=testdata.url

    let homeMMT=new home(page)
    let date1=new date(page)

    await page.goto(url)
    await homeMMT.clickbus.click()
    await homeMMT.clickFTF.click()
    await homeMMT.enterFTF.fill("bangalore")
    await homeMMT.clickTTF.click()
    await homeMMT.enterTTF.fill("chennai")
    await homeMMT.clicksearch.click()
    
    await date1.clickdate.click()
    await date1.clickAC.click()
    await date1.ClickSeatType.click()
    await date1.clickcheckbox.click()
    await date1.clickpickupDT.click()
    await date1.clickpickuptime.click()
    await date1.clickoperators.click()
    await date1.clickdroppointDT.click()
    await date1.clickdroptime.lick()
    await date1.clickselectseat.click()
    await date1.selectberth.click()
    await date1.clickpickup1.click()
    await date1.clickdrop1.click()
    await date1.clickcontinue1.click()
    
})