// import { test, expect, Page } from '@playwright/test'

// import { orangeHRM } from '../pages/orangehrmLogin'

// import { homePage } from '../pages/homepage'

// import dotenv from 'dotenv'

// dotenv.config({ path: '.env' })

// test('validate orangeHrm login', async ({ page }) => {

//     const URL = process.env.url as string
//     const userName = process.env.username1 as string
//     const passWord = process.env.password as string
//     const ADDemploye = new homePage(page)
//     const hrmLogin = new orangeHRM(page);
//     await page.goto(URL);
//     await expect(hrmLogin.companylogo).toBeVisible();
//     await expect(hrmLogin.logintext).toBeVisible();
//     await expect(hrmLogin.UsernameCreds).toBeVisible();
//     await expect(hrmLogin.passwordCreds).toBeVisible();
//     await hrmLogin.Login(userName, passWord);
//     await expect(hrmLogin.homePage).toBeVisible();
//     await ADDemploye.createEmp();/

import { test, expect } from '@playwright/test';
import { orangeHRM } from '../pages/orangehrmLogin';
import { homePage } from '../pages/homepage';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

test('Long into orange HRM and Create the employee', async ({ page }) => {

    const url = process.env.url as string;
    const username = process.env.username1 as string;
    const password = process.env.password as string;

    const loginPage = new orangeHRM(page);
    const homePageObj = new homePage(page);

    // Navigate to application
    await page.goto(url);

    // Validate Login Page
    await expect(loginPage.companylogo).toBeVisible();
    await expect(loginPage.logintext).toBeVisible();
    await expect(loginPage.UsernameCreds).toBeVisible();
    await expect(loginPage.passwordCreds).toBeVisible();

    // Login
    await loginPage.Login(username, password);

    // Validate Home Page
    await expect(loginPage.homePage).toBeVisible();


    await expect(page).toHaveURL(/dashboard\/index/);

    // Create Employee
    await homePageObj.createEmpOnTheDashBoard();


});

