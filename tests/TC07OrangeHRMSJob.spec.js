import { test, expect } from '@playwright/test';

test('Add Pay Grades Testcase', async ({ page }) => {
// Go to login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
    // Login
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{name: 'Login' }).click();
 
    await page.waitForTimeout(5000);
     // Navigate to Admin → Job → Pay Grades
    await page.locator("[href='/web/index.php/admin/viewAdminModule']").click();
    await page.waitForTimeout(5000);
    await page.locator("//span[normalize-space()='Job']").click();
    await page.getByText('Pay Grades').click();
 
    // Add Pay Grades
    await page.getByRole('button',{name: 'Add'}).click();
    
    await page.waitForTimeout(3000);

    await page.locator(".oxd-input.oxd-input--active").last().fill('Testing');
    await page.getByRole('button',{name: 'Save'}).click();
 
    //button[class='oxd-button oxd-button--medium oxd-button--secondary']
 
    
});