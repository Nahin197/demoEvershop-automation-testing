import { RegistrationObjects } from "./regObjects.js";
 
export class Registration{
    constructor(page){
        this.page = page;
        this.locator =new RegistrationObjects(page);
    }

    async clickAccountIcon(){
        await this.locator.accountIcon.click();
    }
    async clickOnCreatAccountLink(){
        await this.locator.creatAccountLink.click();
    }

    async enterFullName(fullname){
        await this.locator.fullNameInput.fill(fullname);
    }

    async enterEmail(email){
        await this.locator.emailInput.fill(email);
    }

     async enterPassword(password){
        await this.locator.passwordInput.fill(password);
    }

     async clickOnSignButton(){
        await this.locator.buttonSignUp.click();
    }
     

}