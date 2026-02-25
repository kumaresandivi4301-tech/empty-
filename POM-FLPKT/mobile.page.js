class mobile{
    constructor(page){
        this.mindropdown=page.locator('(//select[@class="hbnjE2"])[1]')
        this.maxdropdown=page.locator('(//select[@class="hbnjE2"])[2]')
    }
}
export default mobile