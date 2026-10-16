import { test as base } from '@playwright/test';
import { Loginpage } from '../pages/loginnnpage';

type MyFixtures = {
    loginPage: Loginpage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new Loginpage(page);
        await use(loginPage);
    },
}); 