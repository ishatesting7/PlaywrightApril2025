// /pages/inventoryPage.js
class InventoryPage {
    constructor(page) {
      this.page = page;
      this.productList = page.locator('.inventory_list');
      this.cartButton = page.locator('.shopping_cart_link');
    }
  
    async getProductNames() {
      const products = await this.productList.locator('.inventory_item_name');
      return await products.allTextContents();
    }
  
    async goToCart() {
      await this.cartButton.click();
    }
  }
  
  module.exports = InventoryPage;
  