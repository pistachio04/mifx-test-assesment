import { Page, Locator } from "@playwright/test";

export class SwagLabsPage {
  readonly page: Page;
  readonly swagLabsText: Locator; // text: Swag Labs
  readonly usernameText: Locator; // css: #user-name
  readonly passwordText: Locator; // css: #password
  readonly loginButtonText: Locator; // css: #login-button
  readonly usernameInput: Locator; // css: #user-name
  readonly passwordInput: Locator; // css: #password
  readonly loginbuttonButton: Locator; // css: #login-button
  readonly productsNameAToZText: Locator; // testId: secondary-header
  readonly reactburgermenubtnButton: Locator; // css: #react-burger-menu-btn
  readonly errorMessageText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.swagLabsText = page.getByText(/Swag Labs/i);
    this.usernameText = page.locator("#user-name");
    this.passwordText = page.locator("#password");
    this.loginButtonText = page.locator("#login-button");
    this.usernameInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.loginbuttonButton = page.locator("#login-button");
    this.productsNameAToZText = page.locator('[data-test="secondary-header"]');
    this.reactburgermenubtnButton = page.locator("#react-burger-menu-btn");
    this.errorMessageText = page.locator(
      'h3:has-text("Epic sadface: Username and password do not match any user in this service")',
    );
  }

  async navigate() {
    await this.page.goto("/inventory.html");
  }

  async fillUsername(value: string) {
    await this.usernameInput.click();
    await this.usernameInput.pressSequentially(value, { delay: 100 });
  }

  async fillPassword(value: string) {
    await this.passwordInput.click();
    await this.passwordInput.pressSequentially(value, { delay: 100 });
  }

  async clickLoginbutton() {
    await this.loginbuttonButton.click();
  }

  async clickReactburgermenubtn() {
    await this.reactburgermenubtnButton.click();
  }
}
