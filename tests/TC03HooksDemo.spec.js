import { test, expect } from '@playwright/test';

/*

4 Hooks

beforeEach
afterEach
beforeAll
afterAll

*/

test.beforeEach('Description for Before Each', async({page})=>{

    console.log('I am in before each');

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

})


test.afterEach('Description of After Each Test', async({page})=>{

    console.log('I am in after each');
    
})

test.beforeAll('Description of Before All Test', async()=>{

    console.log('I am in Before All');
})

test.afterAll('Description of After Each Test', async()=>{

    console.log('I am in after All');
})



test('Login Into Application -', async({page}) =>{


    await page.waitForTimeout(4000)

    await page.locator("input[placeholder='Username']").fill("Admin");

    await page.locator("input[placeholder='Password']").fill("admin123");

    await page.locator("button[type='submit']").click();

    await page.waitForTimeout(10000);


})


test('Login Into Application - Wrong creds', async({page}) =>{


    await page.waitForTimeout(4000)

    await page.locator("input[placeholder='Username']").fill("Admin");

    await page.locator("input[placeholder='Password']").fill("admin123");

    await page.locator("button[type='submit']").click();

    await page.waitForTimeout(10000);


})