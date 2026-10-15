import { test, expect } from '@playwright/test'

test('test', async ({ context }) => {

    const page = await context.newPage();

    await page.goto('https://the-internet.herokuapp.com/windows');
    // promise is used to run both statements parallelly
    //context.waitForEvent('page');
    //page1.getByText('Click Here').click();
    const [page2] = await Promise.all([context.waitForEvent('page'), page.getByText('Click Here').click()]);
    //await page2.waitForLoadState();
    const titlepage = page2;
    await titlepage.waitForLoadState();
    await expect(titlepage.getByText('New Window')).toHaveText('New Window');
    console.log('title of new tab is:', await titlepage.title())

})


test('multi tab handle', async ({ context }) => {
    //create new page
    const parentpage = await context.newPage();

    await parentpage.goto('https://the-internet.herokuapp.com/windows');

    const waitforclick = context.waitForEvent('page');

    await parentpage.getByText('Click Here').click();

    const newtab = waitforclick;

    await (await newtab).waitForLoadState();

    await expect((await newtab).getByText('New Window')).toHaveText('New Window');

    console.log('Title of the page is:', await (await newtab).title());



})


/*test('multi tab handle', async ({ page}) => {

    page.goto('https://the-internet.herokuapp.com/windows');

    const parentpage = page.waitForEvent('page');

    await page.getByText('Click Here').click();

    const newpage = parentpage;

    (await newpage).waitForLoadState();

    await expect((await newpage).getByText('New Window')).toHaveText('New Window');

    console.log('new page title is:', (await newpage).title())


})*/