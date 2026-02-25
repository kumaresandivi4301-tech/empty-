class loginform{
    constructor(page){
        this.clicklgb=page.locator('//button[@id="login_button"]')
        this.lus=page.locator('//input[@name="login_username"]')
        this.lpwd=page.locator('//input[@name="login_password"]')
        this.lsubmit=page.locator('//button[@value="login"]')
    }
}
export default loginform