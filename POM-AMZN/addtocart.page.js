class addtocart{
    constructor(page){
        this.addcart=page.locator('//input[@id="add-to-cart-button"]')
        this.gotocart=page.locator('//a[@href="/cart?ref_=ox_ewc_ret_gtc_dsk_in"]')
    }
}
export default addtocart