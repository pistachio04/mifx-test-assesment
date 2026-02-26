import { test, expect, BrowserContext, Page } from "@playwright/test";
import { SwagLabsPage } from "../pages/SwagLabsPage";
import { SinglePageAppsPage } from "../pages/SinglePageAppsPage";
import * as testData from "../data/Login.json";

test.describe.serial("Login Flow", () => {
  let page: Page;
  let context: BrowserContext;
  let swagLabsPage: SwagLabsPage;
  let singlePageAppsPage: SinglePageAppsPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext({
      baseURL: process.env.BASE_URL || "https://www.saucedemo.com",
    });
    page = await context.newPage();
    swagLabsPage = new SwagLabsPage(page);
    singlePageAppsPage = new SinglePageAppsPage(page);
  });

  test.afterAll(async () => {
    await context.close();
  });

  test("should complete Login successfully", async () => {
    await page.goto("/");
    await expect(swagLabsPage.swagLabsText).toBeVisible();
    const username = await swagLabsPage.usernameText.innerText();
    console.log("username:", username);
    const password = await swagLabsPage.passwordText.innerText();
    console.log("password:", password);
    const loginButton = await swagLabsPage.loginButtonText.innerText();
    console.log("loginButton:", loginButton);
    await swagLabsPage.fillUsername(testData.username);
    await swagLabsPage.fillPassword(testData.passwordPassword);
    await swagLabsPage.clickLoginbutton();
    await expect(swagLabsPage.productsNameAToZText).toBeVisible();
  });
});
