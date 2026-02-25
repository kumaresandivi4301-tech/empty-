class homeFSM{
    constructor(page){
        this.UNTF=page.locator('//input[@name="username"]')
        this.PWDTF=page.locator('//input[@name="password"]')
        this.LOGIN=page.locator('//button[text()="Login"]')
    }
}
export default homeFSM
