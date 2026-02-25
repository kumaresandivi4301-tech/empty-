class clickdropdown{
    constructor(page){
        this.dropdown=page.locator('//div[text()="RAM"]')
        this.clickcheckbox=page.locator('//div[text()="8 GB and Above"]')
        this.clickAddToCampare=page.locator('(//div[@class="ybaCDx"])[1]')
    }
}
export default clickdropdown