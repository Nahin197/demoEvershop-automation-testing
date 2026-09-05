import searchObjects from "./searchObjects";

class Search{
    constructor(page){
        this.page = page;
        this.locator = new searchObjects(page);
    }
    async clickSearchIcon(){
        await this.locator.searchIcon.click();
    }
    async enterSearchText(searchText){
        await this.locator.searchInput.fill(searchText);
        await this.page.keyboard.press("enter");
    }
    async isSearchResultDisplayed(searchText){
         let locator;
        const results = this.locator.searchResultTitel(searchText);
        for(let i=0 ; i<results.length;i++){
             locator = `(${results})[${i+1 }]`;
        }

        return await locator.isDisplayed();

    }

    async selectProduct(searchText,index=1){
        try{
            const product = `(${this.locator.searchResultTitel(searchText)})[${index}]`;
            await product.click();
        }
        catch(error){
            const product = `(${this.locator.searchResultTitel(searchText)})[1]`;
            await product.click();
        }

    }

    async selectProductColor(color){
        await this.locator.productColor(color).click();
    }

    async clickAddToCartButton(){
        await this.locator.buttonAddToCart.click();
    }
    

  

}