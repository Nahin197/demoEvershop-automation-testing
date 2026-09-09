export  class SearchObjects {
  constructor(page) {
    this.page = page;
    this.searchIcon = this.page.getByRole("link", { name: "Search" });
    this.searchInput = this.page.getByRole("textbox", { name: "Search" });
    this.buttonAddToCart = this.page.getByRole("button", {
      name: "ADD TO CART",
    });
  }

  searchResultTitle(searchText,index) {
    return this.page.locator(`(//h3[contains(text(),'${searchText}')])[${index}]`);
  }

 
}