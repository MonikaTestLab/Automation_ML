import { expect, Page } from '@playwright/test';

export class LoginPage {
    readonly username;
    readonly password;
    readonly loginButton;
    readonly forgotPasswordLink;
    readonly invalidCredentialsAlert;
    readonly requiredMessages;

    constructor(private readonly page: Page) {
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.forgotPasswordLink = page.getByText('Forgot your password?', { exact: true });
        this.invalidCredentialsAlert = page.getByRole('alert');
        this.requiredMessages = page.getByText('Required', { exact: true });
    }

    async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async openForgotPassword() {
        await this.forgotPasswordLink.click();
    }

    async expectForgotPasswordPage() {
        await expect(this.page).toHaveURL(/\/web\/index\.php\/auth\/requestPasswordResetCode$/);
        await expect(this.page.getByRole('heading', { name: 'Reset Password' })).toBeVisible();
    }

    async expectDashboard() {
        await expect(this.page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/);
        await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    }

    async expectInvalidCredentials() {
        await expect(this.page).toHaveURL(/\/web\/index\.php\/auth\/login$/);
        await expect(this.invalidCredentialsAlert).toHaveText('Invalid credentials');
    }

    async expectRequiredFieldErrors() {
        await expect(this.page).toHaveURL(/\/web\/index\.php\/auth\/login$/);
        await expect(this.requiredMessages).toHaveCount(2);
    }
}