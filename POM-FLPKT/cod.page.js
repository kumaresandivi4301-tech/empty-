class cod{
    constructor(page){
        this.COD=page.locator('//span[text()="Cash on Delivery"]')
        this.POD=page.locator('//button[text()="Place Order"]')
    }
}
export default cod