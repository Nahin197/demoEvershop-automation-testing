import { ProductDetailsObjects } from "./productDetailsObject";

import { SearchObjects } from "../search/searchObjects";

export class Product {
  constructor(page) {
    this.page = page;
    this.locator = new ProductDetailsObjects(page);
    this.searchLocator = new SearchObjects(page);
  }


  async selectProduct(searchText, index = 1) {
  try {
    const product = `(${this.searchLocator.searchResultTitle(searchText)})[${index}]`;
    await product.click();
  } catch (error) {
    const product = `(${this.searchLocator.searchResultTitle(searchText)})[1]`;
    await product.click();
  }
}

async selectProductColor(color) {
  await this.locator.productColor(color).click();
}

async clickAddToCartButton() {
  await this.locator.buttonAddToCart.click();
}

async isProductVisiableInCart(product, color) {
  return await this.locator
    .selectedProductInCart(product, color)
    .isDisplayed();
}
}