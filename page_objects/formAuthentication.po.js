import { Selector, t } from 'testcafe';

class FormAuthenticationPage {

    constructor() {
        this.username = Selector('#username');
        this.password = Selector('#password');
        this.loginButton = Selector('button[type=submit]');
        this.successfulLogin = Selector('div.flash.success', {timeout: 60000});
    }

    async loginWithCredentials(username, password) {
        await t
            .typeText(this.username, username)
            .typeText(this.password, password)
            .click(this.loginButton)
            .expect(this.successfulLogin.exists).ok();
    }
}

export default new FormAuthenticationPage();