import {test} from "@playwright/test"
test("dropdowns",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.waitForTimeout(2000)
    //await page.locator('#select3')
    //select option
    //await page.locator('#select3').selectOption({value:'India'}) //selecting through value
    //await page.locator('#select3').selectOption({label:'India'})//label
    //})await page.locator('#select3').selectOption({index:7//index
    //await page.locator('#select3').selectOption("India")//we can pass directly value
    //await page.waitForTimeout(2000)
    //------multiple selection---------
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.waitForTimeout(2000)
    await page.locator('#select-multiple-native').selectOption({value:'Mens Casual Premium ...'},{value:'Mens Cotton Jacket...'})
    await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
    await page.waitForTimeout(2000)
    
})