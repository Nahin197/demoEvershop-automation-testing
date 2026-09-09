export class LogoutObjects {
  constructor(page) {
    this.page = page;
    this.logoutLink = this.page.getByRole("link", { name: "Logout" });
  }
}