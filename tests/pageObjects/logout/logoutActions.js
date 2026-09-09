import { LogoutObjects } from "./logoutObjects";

export class Logout {
  constructor(page) {
    this.page = page;
    this.locator = new LogoutObjects(page);
  }



  async clickLogoutLink() {
  await this.locator.logoutLink.click();
}
}