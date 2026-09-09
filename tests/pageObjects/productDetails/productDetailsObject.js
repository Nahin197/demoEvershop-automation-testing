export class ProductDetailsObjects {
  constructor(page) {
    this.page = page;
    this.buttonAddToCart = this.page.getByRole("button", {
      name: "ADD TO CART",
    });
  }

  productColor(color) {
    return this.page.getByRole("link", {
      name: color,
    });
  }

  selectedProductInCart(productName, color) {
  // await page.getByText('Welcome, John', { exact: true });
  return this.page.getByText(`${productName} - ${color}`, {
    exact: true,
  });
}
}