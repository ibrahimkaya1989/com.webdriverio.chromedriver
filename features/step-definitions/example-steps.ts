const { Given, Then } = require('@wdio/cucumber-framework');

Given('I open the Google page', async () => {
    await browser.url('https://www.google.com');
});

Then('the title should be {string}', async (expectedTitle: string) => {
    const title = await browser.getTitle();
    expect(title).toEqual(expectedTitle);
});
