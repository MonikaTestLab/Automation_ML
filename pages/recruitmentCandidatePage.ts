import { Page, expect } from '@playwright/test'

export class RecruitmentCandidatePage {
    page: Page
    readonly recruitementTabXpath;
    readonly selectJobTitleXpath;
    readonly selectTitleFromDropDownXpath;
    readonly selectVacancyXpath;
    readonly selectVacancyFromDropDown;
    readonly selectHiringManager;
    readonly selectManagerFromDropDown;
    readonly selectStatusXpath;
    readonly selectStatusfromdropDown;
    readonly selectCandidateName;
    readonly selectFromDateOfApplicationXpath;
    readonly selectApplicationToDate;
    readonly selectApplicationModeXpath;
    readonly searchCandidateXpath;
    readonly clickOnAddButtonXpath;
    readonly firstNameXpath;
    readonly middleNameXpath;
    readonly lastNameXpath;
    readonly selectVancy;
    readonly selectCandidateVacancyFromDown;
    readonly addEmailXpath;
    readonly addPhoneNumberXpath;
    readonly selectFileXpath;
    readonly addKeywordsXpath;
    readonly applicationDateXpath;
    readonly selectApplicationDateXpath;
    readonly consentCheckBoxXpath;
    readonly saveButtonNewCandidateinfo;
    readonly successMessage;


    constructor(page: Page) {
        this.page = page;
        this.recruitementTabXpath = this.page.locator('//ul[@class="oxd-main-menu"]//li[5]');
        this.selectJobTitleXpath = this.page.locator('(//div[@class="oxd-select-text oxd-select-text--active"])[1]');
        this.selectTitleFromDropDownXpath = this.page.getByRole('option', { name: 'QA Engineer' }).first();
        this.selectVacancyXpath = this.page.locator('(//div[@class="oxd-select-text oxd-select-text--active"])[2]');
        this.selectVacancyFromDropDown = this.page.getByRole('option', { name: 'Senior QA Lead' }).first();
        this.selectHiringManager = this.page.locator('(//div[@class="oxd-select-text oxd-select-text--active"])[3]');
        this.selectManagerFromDropDown = this.page.getByRole('option', { name: 'Rahul Patil' });
        this.selectStatusXpath = this.page.locator('(//div[@class="oxd-select-text oxd-select-text--active"])[4]');
        this.selectStatusfromdropDown = this.page.getByRole('option', { name: 'Shortlisted' }).first();
        this.selectCandidateName = this.page.locator('//input[@placeholder="Type for hints..."]');
        this.selectFromDateOfApplicationXpath = this.page.locator('//input[@placeholder="From"]');
        this.selectApplicationToDate = this.page.locator('//input[@placeholder="To"]');
        this.selectApplicationModeXpath = this.page.locator('(//div[@class="oxd-select-text oxd-select-text--active"])[5]')
        this.searchCandidateXpath = this.page.locator('//div[@class="oxd-form-actions"]//button[2]');

        this.clickOnAddButtonXpath = this.page.locator('//div[@class="orangehrm-header-container"]//button');
        this.firstNameXpath = this.page.locator('//input[@placeholder="First Name"]');
        this.middleNameXpath = this.page.locator('//input[@placeholder="Middle Name"]');
        this.lastNameXpath = this.page.locator('//input[@placeholder="Last Name"]');
        this.selectVancy = this.page.locator('//div[@class="oxd-select-text oxd-select-text--active"]//div[1]');
        this.selectCandidateVacancyFromDown = this.page.locator('//div[@class="oxd-select-dropdown --positon-bottom"]//div[8]');
        this.addEmailXpath = this.page.locator('(//input[@placeholder="Type here"])[1]');
        this.addPhoneNumberXpath = this.page.locator('(//input[@placeholder="Type here"])[2]');
        this.selectFileXpath = this.page.locator(`//input[@type="file"]`)
        this.addKeywordsXpath = this.page.locator(`//input[@placeholder="Enter comma seperated words..."]`);
        this.applicationDateXpath = this.page.locator('//div[@class="oxd-date-input"]//i');
        this.selectApplicationDateXpath = this.page.locator('(//div[@class="oxd-calendar-dates-grid"]//div//div)[1]');
        this.consentCheckBoxXpath = this.page.locator('//input[@type="checkbox"]');
        this.saveButtonNewCandidateinfo = this.page.locator('//button[@type="submit"]');
        this.successMessage = this.page.getByText('Successfully Saved', { exact: true });
    }

    async searchCandidateRecruitmentDetails() {

        await this.recruitementTabXpath.click();

        await this.selectJobTitleXpath.click();

        await this.selectTitleFromDropDownXpath.click();

        const selectedJobTitle = await this.selectJobTitleXpath.innerText();

        console.log('Job Title is ' + selectedJobTitle);

        await this.selectVacancyXpath.click();

        await this.selectVacancyFromDropDown.click();

        const selectedVacancy = await this.selectVacancyXpath.innerText();

        console.log('Selected vacancy is ' + selectedVacancy)

        await this.selectHiringManager.click();

        await this.selectManagerFromDropDown.click();

        const selectedHiringManager = await this.selectHiringManager.innerText();

        console.log('Selected Hiring Manager is ' + selectedHiringManager)

        await this.selectStatusXpath.click();

        await this.selectStatusfromdropDown.click();

        const selectedStatus = await this.selectStatusXpath.innerText();

        console.log('Selected status is ' + selectedStatus)

        await this.selectCandidateName.fill('John Test');

        await this.selectFromDateOfApplicationXpath.fill('2026-24-09');

        await this.selectApplicationToDate.fill('2026-24-10');

        await this.selectApplicationModeXpath.click();

        await this.page.getByText('Manual').click();

        await this.searchCandidateXpath.click()

    }

    async addCandidateForRecruitment() {

        await this.clickOnAddButtonXpath.click();
        await this.firstNameXpath.fill('Monika');
        await this.middleNameXpath.fill('Gowda');
        await this.lastNameXpath.fill('R');
        await this.selectVancy.click();
        await this.selectCandidateVacancyFromDown.click();
        const selectedCandidateVacancy = await this.selectVancy.innerText();
        console.log('selected candidate vacancy is ' + selectedCandidateVacancy);
        await this.addEmailXpath.fill('abc@gmail.com');
        await this.addPhoneNumberXpath.fill('9972693776');
        await this.selectFileXpath.setInputFiles('tests/uploadFiles/D R_Monika.Manual Tester.pdf')
        await this.addKeywordsXpath.fill('Manual, Automation, Playwright');
        await this.applicationDateXpath.click();
        await this.selectApplicationDateXpath.click()
        await this.consentCheckBoxXpath.check({ force: true });
        await this.saveButtonNewCandidateinfo.click();
        await expect(this.successMessage).toBeVisible({ timeout: 5000 });
        //await expect(this.successMessage).toContainText('Successfully Saved');
        const message = await this.successMessage.innerText();
        console.log('Success Message:', message);

    }

}


