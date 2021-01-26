import { Selector } from 'testcafe';

class HomePage {
    constructor() {
        this.dropdown = Selector('a[href*=dropdown]');
        this.formAuthentication = Selector('a[href*=login]');
        this.hoverFunction = Selector('a[href*=hover]');
    }
}

export default new HomePage();