import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can log in and view the Dashboard', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await loginPage.expectDashboard();
});

test('invalid credentials show an error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('InvalidUser', 'wrongPassword');
    await loginPage.expectInvalidCredentials();
});

test('empty credentials show required field errors', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('', '');
    await loginPage.expectRequiredFieldErrors();
});

test('forgot password opens the password reset page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.openForgotPassword();
    await loginPage.expectForgotPasswordPage();
});