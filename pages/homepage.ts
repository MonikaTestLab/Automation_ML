
import { Page } from '@playwright/test';

export class homePage {
    page: Page;

    readonly adminTabXpath;
    readonly addButtonXpath;
    readonly selectUserRoleXpath;
    readonly employeeNameXpath;
    readonly selectUserStatusXpath
    readonly userNameXpath
    readonly saveButtonXpath

    constructor(page: Page) {
        this.page = page;


        this.adminTabXpath = this.page.getByRole('link', { name: 'Admin' });
        this.addButtonXpath = this.page.getByRole('button', { name: 'Add' });
        this.selectUserRoleXpath = this.page.locator('.oxd-select-text').first();
        this.employeeNameXpath = this.page.locator('//input[@placeholder="Type for hints..."]');
        this.selectUserStatusXpath = this.page.locator('.oxd-select-text').last();
        this.userNameXpath = this.page.locator('(//div[@class="oxd-input-group oxd-input-field-bottom-space"]//input)[2]')
        this.saveButtonXpath = this.page.locator('//div[@class="oxd-form-actions"]//button').last()
    }
    async createEmpOnTheDashBoard() {


        console.log("Clicking on the Admin Tab Button");
        await this.adminTabXpath.click();
        await this.addButtonXpath.click();
        await this.selectUserRoleXpath.click();
        await this.page.getByRole('option', { name: 'Admin' }).click();
        await this.employeeNameXpath.fill('Monika');
        await this.selectUserStatusXpath.click()
        await this.page.getByRole('option', { name: 'Enabled' }).click();
        await this.userNameXpath.fill('gvgftf');
        await this.saveButtonXpath.click()



    }
}
