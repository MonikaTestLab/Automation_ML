import { Page, expect } from '@playwright/test'

export class RecruitmentVacancyPage {

    page: Page;
    readonly selectVacancyXpath
    readonly addButtonXpath
    readonly vacancyNameXpath
    readonly jobTitleDropDownXpath
    readonly selectJobPositionXpath
    readonly descriptionXpath
    readonly hiringManagerXpath
    readonly selectHiringManagerXpath
    readonly numberOfPositionsXpath;
    readonly activeCheckXpath;
    readonly publishInWebPageXpath;
    readonly saveButtonXpath;
    readonly successMessageXpath

    constructor(page: Page) {

        this.page = page;
        this.selectVacancyXpath = this.page.locator('//div[@class="oxd-topbar-body"]//li[2]')
        this.addButtonXpath = this.page.locator('//div[@class="orangehrm-paper-container"]/div/button')
        this.vacancyNameXpath = this.page.locator('(//div[@class="oxd-input-group oxd-input-field-bottom-space"]//input)[1]')
        this.jobTitleDropDownXpath = this.page.locator('//div[@class="oxd-select-wrapper"]//i')
        this.selectJobPositionXpath = this.page.locator('(//div[@role="listbox"]//div)[3]')
        this.descriptionXpath = this.page.locator('//textarea[@placeholder="Type description here"]')
        this.hiringManagerXpath = this.page.locator('//input[@placeholder="Type for hints..."]')
        this.selectHiringManagerXpath = this.page.locator('//div[@role="listbox"]//div[1]', { hasText: 'John KaneAITest2' });
        this.numberOfPositionsXpath = this.page.locator("//label[text()='Number of Positions']/parent::div/following-sibling::div//input");
        this.activeCheckXpath = this.page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters orangerhrm-switch-wrapper"]//input)[1]');
        this.publishInWebPageXpath = this.page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters orangerhrm-switch-wrapper"]//input)[2]');
        this.saveButtonXpath = this.page.locator('//button[@type="submit"]');
        this.successMessageXpath = this.page.getByText('Successfully Saved', { exact: true });

    }

    async fillTheRequirementDetailsForm() {
        await this.selectVacancyXpath.click()
        await this.addButtonXpath.click();
        expect(await this.page).toHaveURL(/recruitment\/addJobVacancy/);
        await this.page.waitForTimeout(10000);

        await this.vacancyNameXpath.fill("Automation Playwright expert-11")
        await this.jobTitleDropDownXpath.click()
        await this.selectJobPositionXpath.click()
        await this.descriptionXpath.fill('Required within 30 days notice period candidate')
        await this.hiringManagerXpath.click()
        await this.hiringManagerXpath.fill('John KaneAITest2');
        await this.page.waitForTimeout
        await this.selectHiringManagerXpath.click()
        await this.numberOfPositionsXpath.fill('5');
        await expect(this.activeCheckXpath).toBeChecked();
        await expect(this.publishInWebPageXpath).toBeChecked();
        await this.saveButtonXpath.click({ force: true });

        //await expect(this.successMessageXpath).toBeVisible({ timeout: 10000 });
        //const message = await this.successMessageXpath.innerText();
        // console.log('vacancy creation message is ' + message);

    }

}