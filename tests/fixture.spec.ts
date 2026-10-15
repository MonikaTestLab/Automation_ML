import { test } from '../fixtures/login';

// Example test using the loginPage fixture
test('login test', async ({ loginPage, page }) => {
    // Navigate to the login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Perform login using the loginPage fixture
    await loginPage.login('Admin', 'admin123');
});