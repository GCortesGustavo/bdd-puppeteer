const { I, loginPage } = inject()

Given('Im on the right page', () => {
    loginPage.visit()
});

When('I fill the form with my email and my password', () => {
    loginPage.login("Gustiplatzi934@gmail.com", "puppeteer2024")
});

Then('I should see the dashboard page', () => {
    loginPage.validateLogin()
});
