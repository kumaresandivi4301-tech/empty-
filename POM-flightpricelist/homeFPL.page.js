class homeFPL{
    constructor(page){
        this.clickflight=page.locator('(//span[@class="headerIconTextAlignment chNavText darkGreyText"])[1]')
        this.clickFTF=page.locator('//span[text()="From"]')
        this.clickban=page.locator('(//div[@class="revampedSuggestionContent"])[1]')
        this.clickTTF=page.locator('//label[@for="toCity"]')
        this.clickmum=page.locator('(//div[@class="revampedSuggestionContent"])[2]')
        this.clickdate=page.locator('(//p[text()="23"])[2]')
        this.clicksearch=page.locator('//a[text()="Search"]')
    }
}
export default homeFPL