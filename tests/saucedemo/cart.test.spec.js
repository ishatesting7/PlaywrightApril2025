// /tests/cart.test.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/saucedemo/loginpage');
const InventoryPage = require('../../pages/saucedemo/inventorypage');
const CartPage = require('../../pages/saucedemo/cartpage');

test.describe('Cart Tests', () => {
  let loginPage;
  let inventoryPage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should navigate to cart', async () => {
    await inventoryPage.goToCart();
    await expect(cartPage.checkoutButton).toBeVisible();
  });
});
