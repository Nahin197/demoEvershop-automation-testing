import { expect, test } from "@playwright/test";
import { Registration } from "../pageObjects/registration/regActions";
import { RegistrationObjects } from "../pageObjects/registration/regObjects";
import { Utilities } from "../../Utils/utilities";
import { Logout } from "../pageObjects/logout/logoutActions";
import { Login } from "../pageObjects/login/loginActions";

let email = "", password = "12345678";


test.describe("Evershop Ecommers Registration Feature", () => {

    let registration, regLocator, utilities, logout, login,page,context;
    // test.beforeEach(async ({ page }) => {

    //     registration = new Registration(page);
    //     regLocator = new RegistrationObjects(page);
    //     utilities = new Utilities();
    //     logout = new Logout(page);
    //     login = new Login(page);
    //     await page.goto("https://demo.evershop.io/");

    // });

    // test.beforeAll(async ({ browser }) => {
    //     page = await (await browser.newContext()).newPage();
    //     await page.goto("https://demo.evershop.io/");
    //     registration = new Registration(page);
    //     // regLocator = new RegistrationObjects(page);
    //     utilities = new Utilities();
    //     logout = new Logout(page);
    //     login = new Login(page);

        
    // });

    test.beforeAll(async ({ browser }) => {
  // context = await browser.newContext();
  // page = await browser.newContext();
  // await page.goto("https://demo.evershop.io/");

  registration = new Registration(page);
  utilities = new Utilities();
  logout = new Logout(page);
  login = new Login(page);
});

    // tdd ,ddd format 
    test("Succesfully Register with a valid information", async ({ page }) => {

        // await page.pause(); it is use for finding locator
        await registration.clickAccountIcon();
        await registration.clickOnCreatAccountLink();
        await page.waitForTimeout(2000);
        await registration.enterFullName("Nahin");

        await page.waitForTimeout(2000);
        email = utilities.randomEmail();
        console.log(`new register emia: ${email}`)
        await registration.enterEmail(email);
        await page.waitForTimeout(2000);
        await registration.enterPassword(password);
        await page.waitForTimeout(2000);
        await registration.clickOnSignButton();
        await page.waitForTimeout(5000);//here ive added 5 sec because the page loads quickly and it cant read the expected url ..so added some delay here

        // --------------------Nonfunctional testing-------------------------
        expect(await page.url()).toEqual("https://demo.evershop.io/");
        await expect(regLocator.accountIconAfterLogin).toBeVisible();
        await expect(registration.isAccountIconVisible()).toBeTruthy();

    });

    test("Unsuccesfully Register with a valid information", async ({ page }) => {
        await registration.clickAccountIcon();
        await registration.clickOnCreatAccountLink();
        await page.waitForTimeout(2000);
        await registration.enterFullName("Nahin");
        await page.waitForTimeout(2000);
        await registration.enterEmail(utilities.randomEmail());
        await page.waitForTimeout(2000);
        await registration.enterPassword("12345678");
        await page.waitForTimeout(2000);
        await registration.clickOnSignButton();
        await page.waitForTimeout(5000);//here ive added 5 sec because the page loads quickly and it cant read the expected url ..so added some delay here

        // --------------------Nonfunctional testing-------------------------
        // expect(await page.url()).toEqual("https://demo.evershop.io/");
        // await expect(regLocator.accountIconAfterLogin).toBeVisible();
        // await expect(registration.isAccountIconVisible()).toBeTruthy();

    });

    test("Successfully Logout out from system", async ({ page }) => {
        await registration.clickOnAccountIcon();
        await logout.clickLogoutLink();
    });

    test("Successfully login with new user email", async ({ page }) => {
        await registration.clickOnAccountIcon();
        await registration.enterEmail(email);
        await registration.enterPassword(password);
        await login.clickSignInButton();

    });

});
