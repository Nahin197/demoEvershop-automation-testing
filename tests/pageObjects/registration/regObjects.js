export class RegistrationObjects{
     constructor(page){
        this.page = page;
        this.accountIcon =  this.page.locator("//a[contains(@href,'account/login')]");
        this.creatAccountLink =  this.page.locator("//a[contains(@href,'register')]");
        this.fullNameInput = this.page.getByRole("textbox",{name: 'Full Name'});
        this.emailInput = this.page.getByRole("textbox",{name: 'email'});
        this.passwordInput = this.page.getByRole("textbox",{name: 'password'});
        this.buttonSignUp = this.page.getByRole("button",{name: 'Sign Up'});
        this.accountIconAfterLogin =  this.page.locator("//a[contains(@href,'account')]");
        this.emailDuplicateErrorModal = this.page.getByRole("alert",{name:"Email is already used"});

     }
}