
export default class searchObjects {
    constructor(page){
        this.page =page;
        this.seachIcon = this.page.locator("//a[@class='search_icon']");
        this.searchInput = this.page.getByRole("textbox", {name:"search"});
        this.buttonAddToCart = this.page.getByRole("button",{name:"ADD TO CART"});


      }

      searchResultTitel(searchText){
        return this.page.locator(`//h3[contains(text(),'${searchText}')]`);
      }

      productColor(){
        return this.page.getByRole("link",{name:color});
      }



    }
