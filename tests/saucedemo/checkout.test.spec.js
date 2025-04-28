// /tests/checkout.test.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/saucedemo/loginpage');
const InventoryPage = require('../../pages/saucedemo/inventorypage');
const CartPage = require('../../pages/saucedemo/cartpage');
const CheckoutPage = require('../../pages/saucedemo/checkoutpage');

test.describe('Checkout Tests', () => {
  let loginPage;
  let inventoryPage;
  let cartPage;
  let checkoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();
  });

  test('should complete checkout with valid information', async () => {
    await checkoutPage.fillShippingInfo('John', 'Doe', '12345');
    await checkoutPage.completePurchase();
    const confirmationMessage = await checkoutPage.getConfirmationMessage();
    expect(confirmationMessage).toContain('Thank you for your order!');
  });
});
