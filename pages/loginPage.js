const { I } = inject()

class LoginPage {


    constructor() {
        this.navBar = '#fadein > header';
        this.inputEmail = '#email';
        this.inputPassword = '#password';
        this.submitButton = '#submitBTN';
        this.loginPageText = '#fadein > header > div > div.d-flex > a > img';
    }

    visit() {

        I.amOnPage("login")
        I.waitForElement(this.navBar)
        I.seeInCurrentUrl("login")
    
    }

    login(email, password) {

        I.waitForElement(this.inputEmail)
        I.fillField(this.inputEmail, email)
        I.fillField(this.inputPassword, password);
        I.click(this.submitButton);

    }

    validateLogin() {

        I.waitForElement(this.loginPageText)
        I.waitForElement(this.navBar)

    }
}

module.exports = new LoginPage()
module.exports.LoginPage = LoginPage