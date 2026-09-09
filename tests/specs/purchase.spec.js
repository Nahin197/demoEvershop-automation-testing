import { test, expect } from "@playwright/test";
import { Search } from "../pageObjects/search/searchActions";
import { Product } from "../pageObjects/productDetails/productDetailsActions";

const searchText = "Stainless Steel Thermos";

test.describe("Evershop site product purchase test journeys", () => {
  let search, product;

  test.beforeEach(async ({ page }) => {
    search = new Search(page);
    product = new Product(page);

    await page.goto("https://demo.evershop.io/");
  });

  test("Successfully search product and purchase", async ({ page }) => {
    await search.clickSearchIcon();
    await search.doSearch(searchText);

    expect(await search.isSearchResultDisplayed(searchText)).toBeTruthy();
    await product.selectProduct(searchText, 2);
    await product.selectProductColor("Black");
    await product.clickAddToCartButton();
    expect(await product.isProductVisiableInCart(searchText, "Black")).toBeTruthy();
  });
});