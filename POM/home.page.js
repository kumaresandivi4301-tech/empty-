class home{
    constructor(page){
        this.createticketLink=page.locator('//a[@href="create-ticket.php" and text()=" Create Ticket"]')
        this.viewticketLink=page.locator('//a[@href="view-tickets.php" and text()=" View Ticket"]')

    }
}
export default home