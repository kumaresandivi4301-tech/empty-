class searchTF{
    constructor(page){
        this.searchfood=page.locator('//input[@class="ssM7E"]')
        this.clickrestourent=page.locator('//span[text()="Restaurants"]')
        this.ClickIceCream=page.locator('(//img[@class="_3Kt2R"])[1]')
    }
}
export default searchTF