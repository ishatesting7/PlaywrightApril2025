const {test, expect} = require('@playwright/test');

test('Try Catch Demo', async({page})=>{

    try{

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Leave' }).click();
  await page.getByRole('link', { name: 'Apply' }).click();
  
  await expect(page.getByText('No Leave Types with Leave')).toBeVisible();
  await page.getByRole('heading', { name: 'Apply Leave' }).click();
  await expect(page.getByRole('button', { name: 'Upgrade' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'client brand banner' })).toBeHidden();

    }

    catch(error)
    {
        console.error("Un expected Error");

        throw error;
    }
    finally{
        console.log(" I  will get executed ")
    }
})

/*


91 passed 9 failed

95 passed 5 failed

91 passed 9 failed

98 passed 2 failed

98 passed 2 failed

*/