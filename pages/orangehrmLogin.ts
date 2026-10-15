import { Page } from '@playwright/test'



export class orangeHRM {
    page: Page;
    readonly companylogo;
    readonly logintext;
    readonly username;
    readonly password;
    readonly loginButton;
    readonly homePage;



    //-----------Locators-----------------
    constructor(page: Page) {

        this.page = page;
        this.companylogo = this.page.locator(`img[alt='company-branding']`);
        this.logintext = this.page.locator('.oxd-text.oxd-text--h5.orangehrm-login-title');
        this.username = this.page.locator("input[placeholder='Username']");
        this.password = this.page.locator("input[placeholder='Password']");
        this.loginButton = this.page.locator('button[type="submit"]');
        this.homePage = this.page.locator('//div[@class="oxd-topbar-header-title"]//span')

    }

    //-------------------actions---------------
    async Login(username: string, password: string) {
        await this.username.fill(username)
        await this.password.fill(password);
        await this.loginButton.click();
    }

}

