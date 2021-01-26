import HomePage from '../page_objects/homePage.po';
import FormAuthenticationPage from '../page_objects/formAuthentication.po';

fixture `Test form authentication`
    .page `https://the-internet.herokuapp.com/`;

test(`Login using the form authentication`, async t => {
    await t
        .click(HomePage.formAuthentication);

    await FormAuthenticationPage
        .loginWithCredentials('tomsmith', 'SuperSecretPassword!');
});
