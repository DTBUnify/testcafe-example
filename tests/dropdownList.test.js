import HomePage from '../page_objects/homePage.po';
import DropdownPage from '../page_objects/dropdownPage.po';

fixture `Test dropdown option selection`
    .page `https://the-internet.herokuapp.com/`;

test(`Select an option from the drop-down menu`, async t => {
    await t
        .click(HomePage.dropdown);

    await DropdownPage
        .selectOption('Option 1');
});
