const { expect } = require("@playwright/test");

exports.HomePage = 
class HomePage{


    constructor(page)
    {
        this.page = page;
        this.logoutBtnLocator = '[onclick="logOut()"]';
    }

    async validateLogoutBtn()
    {
        await expect(this.page.locator(this.logoutBtnLocator)).toBeVisible();
    }
}
