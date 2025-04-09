import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
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
  await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
});