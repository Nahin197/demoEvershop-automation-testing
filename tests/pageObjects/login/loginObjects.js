export class LoginObjects {
  constructor(page) {
    this.page = page;
    this.buttonSignIn = this.page.getByRole("button", { name: "Sign In" });
  }
}