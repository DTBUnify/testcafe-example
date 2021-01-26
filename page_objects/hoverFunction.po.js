import { Selector, t } from 'testcafe';

class HoverPage {

    constructor() {
        this.firstImage = Selector('div > img:nth-child(1)');
        this.viewProfile = Selector('a[href*=\'users/1\']', {timeout: 10000});
    }
}

export default new HoverPage();