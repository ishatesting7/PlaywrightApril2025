import { test, expect } from '@playwright/test';

test('Dropdown Demo', async ({ page }) => {
  
  await page.goto('https://www.facebook.com/');

  await page.locator('[href="/r.php?entry_point=login"]').click();
  // Wait for dropdowns to be visible
  await page.waitForSelector('select[name="birthday_day"]');
  await page.waitForSelector('select[name="birthday_month"]');
  await page.waitForSelector('select[name="birthday_year"]');

  // Get selected values
  const dayValue = await page.$eval('select[name="birthday_day"]', el => el.value);
  const monthValue = await page.$eval('select[name="birthday_month"]', el => el.value);
  const yearValue = await page.$eval('select[name="birthday_year"]', el => el.value);

  console.log('Selected Day:', dayValue);
  console.log('Selected Month:', monthValue);
  console.log('Selected Year:', yearValue);

  // Validate selected values (example: not empty or default)
  if (dayValue === 10 || monthValue === 4 || yearValue === 2025) {
    console.log('❌ Validation failed: One or more dropdowns are not selected.');
  } else {
    console.log('✅ Validation passed: All dropdowns have selected values.');
  }

  await page.selectOption('select[name="birthday_month"]', { label: 'Sep' }); // You can also use value '9'
  await page.selectOption('select[name="birthday_day"]', '15');
  await page.selectOption('select[name="birthday_year"]', '2001');

  const dayValue1 = await page.$eval('select[name="birthday_day"]', e2 => e2.value);
  const monthValue1= await page.$eval('select[name="birthday_month"]', el => el.value);
  const yearValue1 = await page.$eval('select[name="birthday_year"]', el => el.value);

  console.log('Selected Day:', dayValue1);
  console.log('Selected Month:', monthValue1);
  console.log('Selected Year:', yearValue1);

  if (dayValue1 === '15' && monthValue1 === '9' && yearValue1 === '2001') {
    console.log('✅ Dropdown values correctly selected.');
  } else {
    console.log('❌ Validation failed: Incorrect dropdown selections.');
  }

});
