class loginbook{
    constructor(page){
        this.loginbtn=page.locator('//button[@id="login_button"]')
        this.username=page.locator('//input[@name="login_username"]')
        this.password=page.locator('//input[@name="login_password"]')
        this.signin=page.locator('//button[@name="submit" and @value="login"]')
    }
}
export default loginbook