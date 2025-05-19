require('dotenv').config();

const{test, expect} = require('@playwright/test')

test('Test Dot Env File', async({page})=>{

    const baseURL = process.env.BASE_URL
    const userName = process.env.USERNAME;
    console.log(baseURL)

    await page.goto(baseURL);

    await login.loginDesti(process.env.USER_EMAIL,process.env.USER_PASSWORD);

    await page.locator('').fill(userName);
})