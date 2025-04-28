// /pages/checkoutPage.js
class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.firstNameInput = page.locator('#first-name');
      this.lastNameInput = page.locator('#last-name');
      this.zipCodeInput = page.locator('#postal-code');
      this.continueButton = page.locator('.cart_button');
      this.finishButton = page.locator('.cart_button');
      this.confirmationMessage = page.locator('.complete-header');
    }
  
    async fillShippingInfo(firstName, lastName, zipCode) {
      await this.firstNameInput.fill(firstName);
      await this.lastNameInput.fill(lastName);
      await this.zipCodeInput.fill(zipCode);
      await this.continueButton.click();
    }
  
    async completePurchase() {
      await this.finishButton.click();
    }
  
    async getConfirmationMessage() {
      return await this.confirmationMessage.textContent();
    }
  }
  
  module.exports = CheckoutPage;
  