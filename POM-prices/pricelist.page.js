class pricelist{
    constructor(page){
        this.listofprice=page.locator('//span[text()="11,499"]')
        this.addtocart=page.locator('(//button[@name="submit.addToCart"])[1]')
        this.gotocart=page.locator('//span[@class="nav-cart-icon nav-sprite"]')
    }
}
export default pricelist