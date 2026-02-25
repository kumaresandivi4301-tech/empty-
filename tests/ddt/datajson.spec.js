import {test} from "@playwright/test"
import fs from "fs"
let datafile=fs.readFileSync("C:/Users/hp 0724/Desktop/playwright/testData/singlesetdata.json")
let data=JSON.parse(datafile)
test("get data from json",async ({page}) => {
   //console.log(data.greet);
//    data.forEach(d=>{
//     console.log(d.greet);
await page.goto(data.url)
await page.locator("input#username").fill("data.Username")
await page.locator("input#password").fill("data.Password")
await page.getByRole("button",{name:"Submit"}).click()
let title=await page.title()
//console.log(title);
if(title=="Test Login | Practice Test Automation"){
    console.log("valid cred");
    
}else{
    console.log("invalid cred");
    
}
})

test.only("multiple set of data",async ({page}) => {
    // data.forEach(d=>{
    //     let url=url
    //     let Username=d.Username
    //     let Password=d.Password
    //     await page.goto()

    // })
    for(let testdata of data){
        let url=testdata.url
        let u=testdata.Username
        let p=testdata.Password
        await page.goto(url)
 await page.locator("input#username").fill(u)
await page.locator("input#password").fill(p)
await page.getByRole("button",{name:"Submit"}).click()
let title=await page.title()
//console.log(title);
if(title=="Test Login | Practice Test Automation"){
    console.log("valid cred");
    
}else{
    console.log("invalid cred");
    
}
    }
    
})


    
   
   
    
