const {test, expect} = require('@playwright/test')

test('Validate the text box fields', async ({page}) =>{

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    const bolean = await page.locator('#email1').isEnabled();

    await expect(page.locator('#email1')).toHaveAttribute('id', 'emal1');

    console.log(bolean);
})