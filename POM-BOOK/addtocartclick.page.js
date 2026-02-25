class addtocartclick{
    constructor(page){
        this.addtocart=page.locator('//a[@id="buyLink"]')
        this.cart=page.locator('//span[@class="glyphicon glyphicon-shopping-cart"]')
    }
}
export default addtocartclick