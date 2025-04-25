exports.LoginPage = 
class LoginPage{


    //Page Locator
    //Page Action
    constructor(page)
    {
        this.page = page;
        this.loginButton = '#login2';
        this.loginUsername = '#loginusername';
        this.loginPassword = '#loginpassword';
        this.loginBtn = '[onclick="logIn()"]';
        this.loginCloseBtn = "//div[@id='logInModal']//button[@type='button'][normalize-space()='Close']";
    }

    async navigateToLogin()
    {
        await this.page.goto('https://demoblaze.com/');
    }

    async enterLoginCreds(username, password)
    {
        await this.page.locator(this.loginButton).click();
        await this.page.locator(this.loginUsername).fill(username);
        await this.page.locator(this.loginPassword).fill(password);
        await this.page.locator(this.loginBtn).click();
        
    }

    async closeLoginPopup()
    {
        await this.page.locator(this.loginButton).click();
        await this.page.locator(this.loginCloseBtn).click();
    }



}