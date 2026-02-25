import {test} from "@playwright/test"
import { log } from "node:console"
test("",async ({browser}) => {
    let context=await browser.newContext({permissions:["notifications","microphone","geolocation","camaras"]})
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.getByRole("button",{name:"Notification"}).click()
    //validation of permission status------------------
    let result=await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(`permissions:${result}`);
    //revoke the all permissions--------
    await context.clearPermissions()
    let result2=await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(`permissions:${result2}`);


    
})