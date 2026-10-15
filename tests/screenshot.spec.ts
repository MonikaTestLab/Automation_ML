import { test, expect } from '@playwright/test';

test('Capture OrangeHRM screenshot', async ({ page }) => {

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Verify that the page has loaded
    await expect(
        page.getByRole('textbox', { name: 'Username' })
    ).toBeVisible();

    console.log('Current URL:', page.url());
    console.log('Page title:', await page.title());

    // Capture full page screenshot
    /* await page.screenshot({
         path: 'screenShots/full-page.png',
         fullPage: true
     });
     */

    // Capture screenshot of a specific element (e.g., the login form)
    const loginForm = page.locator('.orangehrm-login-form');
    await loginForm.screenshot({ path: 'screenShots/login-form.png' });

})