import { test, expect } from '@playwright/test';


var baseURL = "https://www.saucedemo.com/"

test.only('Saucelab login', async({page}) =>{

    await page.goto(baseURL);

    await page.getByPlaceholder("Username").fill("standard_user");

    await page.getByPlaceholder("Password").fill("secret_sauce");

    await page.locator('[type="submit"]').click();

    await page.waitForTimeout(10000);


})