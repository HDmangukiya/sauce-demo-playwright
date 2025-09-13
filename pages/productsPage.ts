import { Page } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToCart(productName: string) {
    const productSelector = `text=${productName} >> xpath=../.. >> button`;
    await this.page.click(productSelector);
  }

  async goToCart() {
    await this.page.click(".shopping_cart_link");
  }
}
