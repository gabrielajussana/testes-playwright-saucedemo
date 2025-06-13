import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly productItems: Locator;
  readonly addToCartButton: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productItems = page.locator('.product-item');
    this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/products', { waitUntil: 'networkidle' });
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}