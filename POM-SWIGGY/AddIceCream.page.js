class AddIceCream{
    constructor(page){
        this.additem=page.locator('(//div[@class="sc-fvtFIe bpQWUi"])[1]')
        this.viewchart=page.locator('//span[text()="1 item added"]')
    }
}
export default AddIceCream