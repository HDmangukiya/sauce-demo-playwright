import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { ProductsPage } from "../../pages/productsPage";
import { loginUsers } from "../login/loginData";
import { products } from "./cartData";

test.describe("Add to Cart Functionality", () => {
  test("should add Bolt T-Shirt to cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.navigate();
    await loginPage.login(
      loginUsers.standardUser.username,
      loginUsers.standardUser.password,
    );
    await productsPage.addProductToCart(products.boltTShirt);
    await productsPage.goToCart();

    await expect(page.locator(".cart_item")).toContainText(products.boltTShirt);
  });
});
