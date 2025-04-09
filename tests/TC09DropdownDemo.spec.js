import { test, expect } from '@playwright/test';

test('Dropdown Demo', async ({ page }) => {
// Go to login page
    await page.goto('https://www.facebook.com/');

    await page.locator('[href="/r.php?entry_point=login"]').click();

    const dropDownList =  page.locator('#month');

    await expect(dropDownList).toHaveValue('4');
    
    const dropDownListValue =  page.locator('#month > option');
    // 12 Matching -- 12 Text

    //console.log(dropDownListValue);

    await expect(dropDownListValue).toHaveText(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);

    await dropDownList.selectOption('Sep');

    await expect(dropDownList).toHaveValue('9');

    // const value = await page.locator('#year').allTextContents();

    // console.log(value);

   // const value1= await page.locator('#year').allInnerTexts();

    const value2= await page.locator('#year > option').count();

    console.log(value2);

    // console.log(value1);

    // expect(value1.length).toBeGreaterThan(25);

    
});