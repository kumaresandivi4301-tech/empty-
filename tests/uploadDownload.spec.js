import {test} from "@playwright/test"
test("uploadDownload files",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    console.log(__dirname);
     await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../../uploadfiles/aa.xlsx"))
    
    await page.locator("#singleFileInput").setInputFiles("C:/Users/hp 0724/Desktop/playwright/tests/uploadfiles/resume.txt")
    await page.getByRole("button",{name:"Upload Single File"}).click()
    await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/hp 0724/Desktop/playwright/tests/uploadfiles/aa.xlsx","C:/Users/hp 0724/Desktop/playwright/tests/uploadfiles/resume.txt"])
    await page.getByRole("button",{name:"Upload Multiple Files"}).click()
    await page.waitForTimeout(4000)
})