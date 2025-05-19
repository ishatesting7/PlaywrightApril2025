const assertions = require('../tests/assertionTest')
const {test, expect} = require('@playwright/test')

test('example test', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const checkbox = page.locator("label[for='sunday']");
  await assertions.toBeChecked(checkbox);

  const input = page.locator('#textarea');
  await assertions.toBeEditable(input);
});
