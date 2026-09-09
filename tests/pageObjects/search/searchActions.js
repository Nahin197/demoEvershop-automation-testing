import {SearchObjects} from "./searchObjects";
import { error } from "node:console";

 export class Search{
    constructor(page){
        this.page = page;
        this.locator = new SearchObjects(page);
    }
    async clickSearchIcon(){
        await this.locator.isEnabled({ setTimeout: 10000});//implicit wait,explicit wait,freez wait
        await this.locator.searchIcon.click();
    }
    async enterSearchText(searchText){
        await this.locator.searchInput.fill(searchText);
        await this.page.keyboard.press("Enter");
    }
     async isSearchResultDisplayed(searchText) {
  let locator;
  const results = this.locator.searchResultTitle(searchText);
 for (let i = 0; i < results.length; i++) {
    locator = `(${results})[${i + 1}]`;
    // return await locator.isDisplayed();
    isDisplayed = await locator.isDisplayed();
    if( isDisplayed ==false){
      throw new error("search result not matched");
    }
  }
} 

  async doSearch(searchText) {
    await this.enterSearchText(searchText);
  }

}