const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const {chromium, expect} = require('@playwright/test');
const LoginPage = require('../../../pages/saucedemo/loginpage');

let browser, page;
let loginPage;
let inventoryPage;

Before(async()=>{

    browser = await chromium.launch({headless:true})
    const context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
})


Given('I navigated to the sauce demo application', async()=>{

    await page.goto('https://www.saucedemo.com/')

})

When('User entered the valid creds', async()=>{

    await loginPage.login('standard_user', 'secret_sauce');
})