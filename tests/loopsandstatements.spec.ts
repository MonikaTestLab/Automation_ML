import { test, expect } from 'playwright/test';

import { Loginpage } from '../pages/loginnnpage'

import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

test('for...loop', async ({ page }) => {

    const pageUrl = process.env.url as string
    const userName = process.env.username1 as string
    const passWord: string = process.env.password as string
    const loginToPage = new Loginpage(page);

    await page.goto(pageUrl);
    await loginToPage.login(userName, passWord);

    await page.waitForLoadState('networkidle');

    //for...loop example 1
    /* const menuItems = page.locator('//div[@class="oxd-sidepanel-body"]//ul//li');
     const count = await menuItems.count();
     console.log('count of menu items is:', count);
 
     for (let i = 0; i < count; i++) {
         console.log('menu item is:', await menuItems.nth(i).innerText());
     }*/

    //example 2
    await page.locator('//ul[@class="oxd-main-menu"]//li[2]').click();

    await page.locator('(//div[@class="oxd-select-text oxd-select-text--active"])[3]').click();

    const pimEmpJobTitle = page.locator('.oxd-select-option');

    const pimEmpJobTitleCount = await pimEmpJobTitle.count();

    for (let i = 0; i < pimEmpJobTitleCount; i++) {

        const jobTitle = await pimEmpJobTitle.nth(i).innerText();

        if (jobTitle === 'Account Assistant') {
            continue;
        }

        console.log('Job Titles are:', jobTitle);
    }

    //For..loop with conditional statements example 1



});

