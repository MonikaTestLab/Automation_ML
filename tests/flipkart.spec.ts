import { test, expect } from '@playwright/test'
import { addToCart } from '../pages/flipcart';

test('add product to cart', async ({ page, context }) => {

    //const flipKart = new addToCart(page)
    //await page.goto('https://www.flipkart.com/');

    //const searchbox = flipKart.searchBox.first();

    //await searchbox.fill('dell laptop');

    //await searchbox.press('Enter');

    //const [newTab] = await Promise.all([context.waitForEvent('page'),
    //flipKart.newpage.first().click()]);

    //const newURL: any = await newTab.getByText('Buy now', { exact: true }).click();

    //await newURL.waitForLoadState();

    //console.log('URL:', newURL.url());


    //console.log( 'Deliver to count:', await newTab.getByText('Deliver to:', { exact: true }).count() );

    //await expect( newTab.locator('div').filter({ hasText: /^Deliver to:$/ }).first()).toBeVisible({ timeout: 10000 });

    const flipKart = new addToCart(page);

    await page.goto('https://www.flipkart.com/');

    const searchbox = flipKart.searchBox.first();

    await searchbox.fill('dell laptop');
    await searchbox.press('Enter');

    // First new page - Product page
    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        flipKart.newpage.first().click()
    ]);

    await newTab.waitForLoadState('domcontentloaded');

    // Second new page - Checkout page
    const [checkoutPage] = await Promise.all([
        context.waitForEvent('page'),
        newTab.getByText('Buy now', { exact: true }).click()
    ]);

    await checkoutPage.waitForLoadState('domcontentloaded');

    console.log('Checkout URL:', checkoutPage.url());

    await expect(
        checkoutPage.getByText('Deliver to:', { exact: true })
    ).toBeVisible();

})