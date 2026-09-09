import { LoginObjects } from "./loginObjects";

export class Login {
  constructor(page) {
    this.page = page;
    this.locator = new LoginObjects(page);
  }

  async clickSignInButton() {
    await this.locator.buttonSignIn.click();
  }
}