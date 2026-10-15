import { test, expect, firefox } from '@playwright/test';

import { Loginpage } from '../pages/loginpage';

test('browser context practice', async ({ }) => {
    // Create a new browser 
    const browser = await firefox.launch();
    //create a new browser context  
    const context = await browser.newContext();
    //create a new page in the context
    const page = await context.newPage();
    // Navigate to the login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Print the title of the page
    console.log('title of the page:' + await page.title());
    // Create a new instance of the Loginpage class and pass the page object to it
    const loginPage = new Loginpage(page);
    // Call the login method of the Loginpage class to perform the login action
    await loginPage.login('Admin', 'admin123');

})
// when fixture is used, we can use the page object directly from the fixture without creating a new browser context and page.
//The fixture handles the setup and teardown of the browser context for us, making the test code cleaner and more maintainable.
// when we use context, we have to create a new browser context and page for each test, which can be more time-consuming and less efficient.
// when we dont use fixture, we have to create a new browser context and page for each test, which can be more time-consuming and less efficient.