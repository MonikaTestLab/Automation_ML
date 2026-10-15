import { test, expect } from '@playwright/test';

test("locators", async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username', { exact: true }).fill("Admin")
    await page.getByPlaceholder('Password', { exact: true }).fill("admin123")
    await page.getByRole('button', { name: "Login" }).click();
    await expect(page).toHaveURL(/dashboard/);

    // The current demo page uses a placeholder, not a <label> or aria-label.
    await page.getByPlaceholder('Search', { exact: true }).fill('Admin');

    // getByLabel example (requires an associated <label> or aria-label):
    // await page.getByLabel('Search').fill('Admin');

    // The public OrangeHRM demo page currently has no title attributes,
    // so this works only after the application adds title="...".
    await page.getByText('PIM').click();

    await page.getByAltText('profile picture').click();

    // The public OrangeHRM demo page currently has no data-testid attributes,
    // so this works only after the application adds data-testid="...".
    // await page.getByTestId('dashboard-widget').click();
})
