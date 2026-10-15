import { Page, expect } from '@playwright/test'

export class LoginToOrangeHrm {
    page: Page
    readonly usernameXpath;
    readonly passwordXpath;
    readonly loginButtonXpath;

    //------------------------Locators-------------------------------------------------
    constructor(page: Page) {
        this.page = page;
        this.usernameXpath = this.page.locator('//input[@placeholder="Username"]');
        this.passwordXpath = this.page.locator('//input[@placeholder="Password"]');
        this.loginButtonXpath = this.page.locator('//button[@type="submit"]')
    }
    //-------------------------actions--------------------------------------------------

    async loginToApp(usernameXpath: string, passwordXpath: string) {
        // await expect(this.usernameXpath).toBeVisible();
        await this.usernameXpath.fill(usernameXpath);
        //  await expect(this.passwordXpath).toBeVisible();
        await this.passwordXpath.fill(passwordXpath);
        //  await expect(this.loginButtonXpath).toBeEnabled();
        await this.loginButtonXpath.click()


    }

}

