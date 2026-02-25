class login{
    constructor(page){
        this.usernameTF=page.locator('//input[@name="email"]')
        this.PasswordTF=page.locator('//input[@name="password"]')
        this.clicklogin=page.locator('//button[@class="btn btn-primary btn-cons pull-right"]')
    }
}
export default login