class singin{
    constructor(page){
        this.email=page.locator("#txtusername")
        this.pwdTF=page.locator("#txtpassword")
        this.loginButton=page.getByRole("button",{name:"Login"})
    }
}
export default singin