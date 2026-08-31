import { test } from "@playwright/test";
import { Registration } from "../pageObjects/registration/regActions";


test.describe("Evershop Ecommers Registration Feature",() =>{
    test("Succesfully Register with a valid information", async ({page}) => {
        const registration = new Registration(page);
        await page.goto("https://demo.evershop.io/");
        await registration.clickAccountIcon();
        await registration.clickOnCreatAccountLink();
        await page.waitForTimeout(2000);
        await registration.enterFullName("Nahin");
         await page.waitForTimeout(2000);
        await registration.enterEmail("kha@gmail.com");
         await page.waitForTimeout(2000);
        await registration.enterPassword("12345678");
         await page.waitForTimeout(2000);
        await registration.clickOnSignButton();
    });

    // test("Unsuccesfully Register with a valid information", async ({page}) => {});

});
