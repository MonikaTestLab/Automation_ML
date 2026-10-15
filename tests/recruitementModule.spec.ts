
import { test, expect } from '@playwright/test';
import { LoginToOrangeHrm } from '../pages/recruitmntlogin';
import { RecruitmentCandidatePage } from '../pages/recruitmentCandidatePage'
import { RecruitmentVacancyPage } from '../pages/recruitmentVacancyPage';
import dotenv from 'dotenv';
// Import dotenv package

dotenv.config({ path: '.env' });
// Load environment variables from .env file

test('login to OrangeHRM and create recruitment', async ({ page }) => {

    // Read application URL from .env file
    const url = process.env.url as string;
    const userName = process.env.username1 as string;
    const passWord = process.env.password as string;

    // Create an object for Page class
    const loginToOrangeHrm = new LoginToOrangeHrm(page);
    const recruitmentCandidatePage = new RecruitmentCandidatePage(page)
    const recruitmentVacancyPage = new RecruitmentVacancyPage(page)

    //--------------------LoginPage----------------
    await page.goto(url);
    await loginToOrangeHrm.loginToApp(userName, passWord);
    console.log('Current URL:', page.url());    
    await expect(page).toHaveURL(/dashboard\/index$/);

    //-------------------------recuruitment Candidate page------------------------------------------
    await recruitmentCandidatePage.searchCandidateRecruitmentDetails();
    //console.log('Current URL:', page.url());
    //await expect(page).toHaveURL(/recruitment\/viewCandidates/);
    //await page.waitForTimeout(10000)

    //add candidate
    await recruitmentCandidatePage.addCandidateForRecruitment()
    //await page.waitForTimeout(20000)


    //-------------------------recuruitment Vacancy page------------------------------------------
    await recruitmentVacancyPage.fillTheRequirementDetailsForm()

});


// (//div[@class="oxd-select-text oxd-select-text--active"])[1]
// (//div[@class="oxd-select-text oxd-select-text--active"])[2]
// (//div[@class="oxd-select-text oxd-select-text--active"])[3]
// (//div[@class="oxd-select-text oxd-select-text--active"])[4]







