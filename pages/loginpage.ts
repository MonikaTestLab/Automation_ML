import { Page } from '@playwright/test'

export class Loginpage {
    readonly username;
    readonly password;
    readonly loginButton;
    readonly errorMessage;
    readonly requiredField;
    readonly forgotPassword;
    readonly heading;

    constructor(private page: Page) {

        this.username = this.page.getByPlaceholder('Username');
        this.password = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.errorMessage = this.page.getByText('Invalid credentials');
        this.requiredField = this.page.getByText('Required');
        this.forgotPassword = this.page.getByText('Forgot your password?');
        this.heading = this.page.getByRole('heading', { name: 'Reset Password' });

    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();

    }

}
