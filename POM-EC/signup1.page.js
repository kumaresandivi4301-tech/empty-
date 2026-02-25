class signup1{
    constructor(page){
        this.clicksignup=page.locator('//button[@id="register_button"]')
        this.unTF=page.locator('//input[@name="register_username"]')
        this.pwdTF=page.locator('//input[@name="register_password"]')
        this.submit=page.locator('//button[@value="register"]')
    }
}
export default signup1