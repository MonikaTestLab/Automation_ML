import { test, expect } from '@playwright/test';

import { Loginpage } from '../pages/loginpage'

test('drop down', async ({ page }) => {
    // drop downs
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const loginpage = new Loginpage(page);
    await loginpage.login('Admin', 'admin123');
    //await expect(page.getByText('Dashboard')).toBeVisible();
    await page.locator('//ul[@class="oxd-main-menu"]/li[1]').click()
    await page.getByText('Job ').click();
    await page.getByText('Job Titles').click();

})

test('iframes', async ({ page }) => {

    await page.goto('https://practice-automation.com/iframes/');

    const frame = page.frameLocator('#iframe-1').locator('.getStarted_Sjon');
    await frame.click();

})

test('drag and drop', async ({ page }) => {

    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');

    // Select the first iframe (Photo Manager)
    const frame = page
        .locator('iframe.demo-frame')
        .first()
        .contentFrame();

    // Locate the first image
    const Drag = frame.locator('#gallery > li').first();

    // Locate the Trash area
    const Drop = frame.locator('#trash');

    await expect(Drag).toBeVisible();
    await expect(Drop).toBeVisible();

    // Perform drag and drop
    await Drag.dragTo(Drop);


})