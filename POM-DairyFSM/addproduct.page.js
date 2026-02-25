class addproduct{
    constructor(page){
        this.clickcompany=page.locator('//span[text()="Company"]')
        this.add=page.locator('//a[@href="add-company.php"]')
        this.addcompany=page.locator('//input[@id="validationCustom03"]')
        this.submitBtn=page.locator('//button[@name="submit"]')
    }
}
export default addproduct