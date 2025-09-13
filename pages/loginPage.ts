import { Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput = "#user-name";
  readonly passwordInput = "#password";
  readonly loginButton = "#login-button";
  readonly errorMessage = '[data-test="error"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://www.saucedemo.com");
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async getErrorMessage(): Promise<string> {
    const text = await this.page.textContent(this.errorMessage);
    if (text === null) {
      throw new Error("Error message element not found");
    }
    return text;
  }
}
