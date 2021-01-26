import { Selector, t } from 'testcafe';

class DropdownPage {

    constructor() {
        // No relevant accessable elements for this test. Use created methods found below for uniformity.
    }

    async selectOption(optionText) {
        var dropdownSelection = Selector('select#dropdown');
        var dropdownOptions = dropdownSelection.find('option');
        await t
            .click(dropdownSelection)
            .click(dropdownOptions.withText(optionText))
            .expect(dropdownSelection.value).contains('1');
    }
}

export default new DropdownPage();