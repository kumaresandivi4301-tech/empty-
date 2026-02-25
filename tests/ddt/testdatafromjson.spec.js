import {test} from "@playwright/test"
import data from "../../testData/data.json"
test("",async ({page}) => {
    for(let d of data.valid){
        await page.goto(d.url)
        await page.locator("input#username").fill(d.Username)
        await page.locator("input#password").fill(d.Password)
        await page.getByRole("button",{name:"Submit"})
        if(title=="Test Login | Practice Test Automation"){
    console.log("valid cred");
    
}else{
    console.log("invalid cred");
    
}
    }
    for(let d of data.invalid){
        await page.goto(d.url)
        await page.locator("input#username").fill(d.username)
        await page.locator("input#password").fill(d.password)
        await page.getByRole("button",{name:"Submit"})
        if(title=="Test Login | Practice Test Automation"){
    console.log("valid cred");
    
}else{
    console.log("invalid cred");
    
}
    }
    
})

test.only(" ",async ({page}) => {
    for(let key in data){
        console.log(key);
        for(let d of data[key]){
            await page.goto(d.url)
               await page.locator("input#username").fill(d.username)
        await page.locator("input#password").fill(d.password)
        await page.getByRole("button",{name:"Submit"})
        if(title=="Test Login | Practice Test Automation"){
    console.log("valid cred");
    
}else{
    console.log("invalid cred");
    
}
        }
        
    }
})