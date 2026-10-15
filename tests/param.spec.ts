import { test } from '@playwright/test'

test('parameterization', async ({ page }) => {

    const users = [
        { username: 'Admin', pw: 'admin123' },
        { username: 'admin1', pw: 'admin123' }
    ];
    for (const user of users) {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByPlaceholder('Username').fill(user.username);
        //console.log(user.username)
        await page.getByPlaceholder('Password').fill(user.pw)

    }
})
