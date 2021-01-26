import HomePage from '../page_objects/homePage.po';
import HoverPage from '../page_objects/hoverFunction.po';

fixture `Test hover over action`
    .page `https://the-internet.herokuapp.com/`;

test(`Hover over elements to display their extra elements`, async t => {
    await t
        .click(HomePage.hoverFunction)
        .hover(HoverPage.firstImage)
        .expect(HoverPage.viewProfile.exists).ok();

});
