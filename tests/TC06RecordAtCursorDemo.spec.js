import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://blazedemo.com/');
  await page.locator('select[name="fromPort"]').selectOption('Philadelphia');
  await page.locator('select[name="toPort"]').selectOption('London');
  await page.getByRole('button', { name: 'Find Flights' }).click();
  await page.getByRole('row', { name: 'Choose This Flight 43 Virgin' }).getByRole('button').click();

  // await page.locator('#cardType').selectOption('amex');
  // await page.getByRole('textbox', { name: 'Credit Card Number' }).click();
  // await page.getByRole('textbox', { name: 'Credit Card Number' }).fill('5555555555');
  // await page.getByRole('textbox', { name: 'Year' }).click();
  // await page.getByRole('textbox', { name: 'Year' }).fill('2028');
  // await page.getByRole('textbox', { name: 'Name on Card' }).click();
  // await page.getByRole('textbox', { name: 'Name on Card' }).fill('John Smith');
  // await page.getByRole('checkbox', { name: 'Remember me' }).check();
  // await page.getByRole('button', { name: 'Purchase Flight' }).click();
  // await expect(page.getByRole('cell', { name: 'PendingCapture' })).toBeVisible();
  // await expect(page.getByRole('cell', { name: 'USD' })).toBeVisible();
});