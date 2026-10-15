import { test, expect } from '@playwright/test';

import { Loginpage } from '../pages/loginpage';

let loginpage: Loginpage;

test.beforeEach(async ({ page }) => {

    loginpage = new Loginpage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test('verify login with valid creadentials', async () => {

    await loginpage.login('Admin', 'admin123');

})
test('verify login with invalid password', async () => {

    await loginpage.login('Admin', 'admin1223');

    await expect(loginpage.errorMessage).toBeVisible();

})
test('verify login with invalid username', async () => {

    await loginpage.login('Admin1', 'admin123');

    await expect(loginpage.errorMessage).toBeVisible();

})
test('verify login with only username', async () => {

    await loginpage.login('Admin', '');

    await expect(loginpage.errorMessage).toBeVisible();

})
test('verify login with only password', async () => {

    await loginpage.login('', 'admin123');

    await expect(loginpage.errorMessage).toBeVisible();

})
test('verify forgot password lonk', async () => {
    await loginpage.forgotPassword.click();

    await expect(loginpage.heading).toBeVisible();
    console.log("forgot password link is working fine");
})

