import { expect, test } from "@playwright/test";
import { Registration } from "../pageObjects/registration/regActions";
import { RegistrationObjects } from "../pageObjects/registration/regObjects";
import { Utilities } from "../../Utils/utilities";


test.describe("Evershop Ecommers Registration Feature",() =>{

  let registration,reLocator,utilities;
    test.beforeEach(async ({page}) =>{

        const registration = new Registration(page);
        const regLocator = new RegistrationObjects( page);
        const utilities = new Utilities();
        await page.goto("https://demo.evershop.io/");

    } );
    test("Succesfully Register with a valid information", async ({page}) => {

        // await page.pause(); it is use for finding locator
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
        expect (await page.url()).toEqual("https://demo.evershop.io/");
        await expect  (regLocator.accountIconAfterLogin).toBeVisible();
        await expect (registration.isAccountIconVisible()).toBeTruthy(); 
        
    });

    test("Unsuccesfully Register with a valid information", async ({page}) => {
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
        expect (await page.url()).toEqual("https://demo.evershop.io/");
        await expect  (regLocator.accountIconAfterLogin).toBeVisible();
        await expect (registration.isAccountIconVisible()).toBeTruthy(); 
        
    });

});
