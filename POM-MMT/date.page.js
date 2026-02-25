class date{
    constructor(page){
        this.clickdate=page.locator('//p[text()="20 Feb, Fri"]')
        this.clickAC=page.locator('(//p[text()="AC"])[2]')
        this.ClickSeatType=page.locator('//p[text()="Sleeper"]')
        this.clickcheckbox=page.locator('//input[@id="filter-CAhSAlgB"]')
        this.clickpickupDT=page.locator('//span[@class="pointer angleToggle HideShowSection_rotateTabs__9_Vpr"]')
        this.clickpickuptime=page.locator('(//span[@class="pointer angleToggle HideShowSection_rotateTabs__9_Vpr"])[2]')
        this.clickoperators=page.locator('(//span[@class="pointer angleToggle HideShowSection_rotateTabs__9_Vpr"])[3]')
        this.clickdroppointDT=page.locator('(//span[@class="pointer angleToggle HideShowSection_rotateTabs__9_Vpr"])[4]')
        this.clickdroptime=page.locator('(//span[@class="pointer angleToggle HideShowSection_rotateTabs__9_Vpr"])[5]')
        this.clickselectseat=page.locator('(//button[text()="Select Seats"])[1]')
        this.selectberth=page.locator('(//div[@class="SeatMapContainer_font10__sDtwv false"])[1]')
        this.clickpickup1=page.locator('(//div[@class="PickUpDropSelection_pickDropAddress__JcRY2"])[1]')
        this.clickdrop1=page.locator('//div[text()="Sriperumbudur"]')
        this.clickcontinue1=page.locator('//button[text()="Continue"]')
    }
}
export default date