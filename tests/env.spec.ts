import { test } from '@playwright/test';

import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
//Reads the .env file and loads its values into process.env.
test('read env', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const userN = process.env.username1 as string
    const passW = process.env.password as string
    await page.locator(`input[class="oxd-input oxd-input--active"]`).first().fill(userN);
    console.log('username is ' + userN);
    await page.locator(`input[class='oxd-input oxd-input--active']`).last().fill(passW);
    await page.getByRole('button', { name: 'Login' }).click()

})