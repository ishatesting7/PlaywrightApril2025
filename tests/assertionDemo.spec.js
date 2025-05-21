const {test, expect} = require('@playwright/test')

test('Validate the text box fields', async ({page}) =>{

    try{
    await page.goto('https://freelance-learn-automation.vercel.app/login');

    const m = [1,2,4];
    console.log(m[5]);

    console.log(m);
    const bolean = await page.locator('#email1').isEnabled();

    await expect(page.locator('#email1')).toHaveAttribute('id', 'email1');
    }
    catch(error)
    {
        console.error("Error", error);
    }
    //console.log(bolean);
})