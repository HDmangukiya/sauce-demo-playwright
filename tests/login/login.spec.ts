import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { loginUsers } from "./loginData";

test.describe("Login Functionality", () => {
  test("should login with standard user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(
      loginUsers.standardUser.username,
      loginUsers.standardUser.password,
    );
    await expect(page).toHaveURL(/inventory.html/);
  });

  test("should show error for locked out user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(
      loginUsers.lockedOutUser.username,
      loginUsers.lockedOutUser.password,
    );
    await expect(loginPage.getErrorMessage()).resolves.toContain("locked out");
  });
});
