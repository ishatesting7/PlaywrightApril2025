import { test, expect } from '@playwright/test';

/*
Test 
*/
var baseURL = "https://www.saucedemo.com/"

test('Validate the Title of the Page', async({page}) =>{

    await page.goto(baseURL);

    await expect(page).toHaveTitle(/.*Labs/);
    
    ///page.locator

    //const baseURL = "www.google.com";

    await expect(page).toHaveTitle('Swag Labs');

})


test.skip('Validate the URL of the Page', async ({page}) =>{

    await page.goto(baseURL);

    await expect(page).toHaveURL(/.*saucedemo.com/);

    await expect(page).toHaveURL('https://www.saucedemo.com/');

})

/*
Expect
*/