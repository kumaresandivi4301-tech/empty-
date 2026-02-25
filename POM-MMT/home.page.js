class home{
    constructor(page){
        this.clickbus=page.locator('(//span[@class="headerIconTextAlignment chNavText darkGreyText"])[6]')
        this.clickFTF=page.locator('//input[@id="fromCity"]')
        this.enterFTF=page.locator('//input[@class="react-autosuggest__input react-autosuggest__input--open"]')
        this.clickTTF=page.locator('//input[@id="toCity"]')
        this.enterTTF=page.locator('//input[@title="To"]')
        this.clicksearch=page.locator('//html[@class="__variable_82f16b"]')
    }
}
export default home