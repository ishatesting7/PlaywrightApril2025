import { test, expect } from '@playwright/test';

test('Screenshot', async ({ page }) => {
// Go to login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
    const timestamp = Math.floor(Date.now() / 1000)

    // Login
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{name: 'Login' }).click();
 
    await page.waitForTimeout(5000);
     //Element Screenshot
    await page.locator("[href='/web/index.php/admin/viewAdminModule']").screenshot({path:"./screenshot/webelement.png"})
   
    //Page Screenshot
    await page.screenshot({path:`./screenshot/pagescreenshot${timestamp}.png`});

    //Full Page Screenshot
    await page.screenshot({path:"./screenshot/job/fullpagescreenshot.png", fullPage:true});

    
});