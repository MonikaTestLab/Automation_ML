import { test } from '@playwright/test';
import { Loginpage } from '../pages/loginnnpage';
import dotenv from 'dotenv';

let loginpage: Loginpage
dotenv.config({ path: '.env' })

test('read .env file', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    loginpage = new Loginpage(page);

    const loginUN = process.env.username1 as string

    const loginPW = process.env.password as string


    await loginpage.login(loginUN, loginPW)

    console.log('username is ' + loginUN)


})