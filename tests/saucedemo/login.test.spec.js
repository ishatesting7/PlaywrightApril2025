// /tests/login.test.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/saucedemo/loginpage');
const InventoryPage = require('../../pages/saucedemo/inventorypage');

test.describe('Login Tests', () => {
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
  });

  test('should login with valid credentials', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(inventoryPage.productList).toBeVisible();
  });

  test('should show error with invalid credentials', async () => {
    await loginPage.login('invalid_user', 'wrong_password');
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Username and password do not match any user in this service');
  });
});
