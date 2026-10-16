import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginnnpage';

test('user can log in and view the Dashboard', async ({ page }) => {
    const loginPage = new Loginpage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.login('Admin', 'admin123');
    await expect(page).toHaveURL(/dashboard\/index/)
});

test('invalid credentials show an error message', async ({ page }) => {
    const loginPage = new Loginpage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.login('invalidUser', 'invalidPassword');
    await expect(loginPage.errorMessage).toBeVisible();
});

test('empty credentials show required field errors', async ({ page }) => {
    const loginPage = new Loginpage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.login('', '');
    await expect(loginPage.requiredField).toHaveCount(2);
    await expect(loginPage.requiredField.first()).toBeVisible();
});

test('forgot password opens the password reset page', async ({ page }) => {
    const loginPage = new Loginpage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.forgotPassword.click();
    await expect(loginPage.heading).toBeVisible();
})