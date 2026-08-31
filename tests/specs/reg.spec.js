import { expect, test } from "@playwright/test";
import { Registration } from "../pageObjects/registration/regActions";
import { RegistrationObjects } from "../pageObjects/registration/regObjects";


test.describe("Evershop Ecommers Registration Feature",() =>{
    test("Succesfully Register with a valid information", async ({page}) => {
        const registration = new Registration(page);
        const regLocator = new RegistrationObjects( page);
        await page.goto("https://demo.evershop.io/");
        // await page.pause(); it is use for finding locator
        await registration.clickAccountIcon();
        await registration.clickOnCreatAccountLink();
        await page.waitForTimeout(2000);
        await registration.enterFullName("Nahin");
         await page.waitForTimeout(2000);
        await registration.enterEmail("kha13@gmail.com");
         await page.waitForTimeout(2000);
        await registration.enterPassword("12345678");
         await page.waitForTimeout(2000);
        await registration.clickOnSignButton();
        await page.waitForTimeout(5000);//here ive added 5 sec because the page loads quickly and it cant read the expected url ..so added some delay here
        expect (await page.url()).toEqual("https://demo.evershop.io/");
        await expect  (regLocator.accountIconAfterLogin).toBeVisible();
    });

    // test("Unsuccesfully Register with a valid information", async ({page}) => {});

});
