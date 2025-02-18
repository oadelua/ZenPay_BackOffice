import LoginPage from "../support/POM/LoginPage";

const loginPage = new LoginPage

describe ('BackOffice Login', () => {

    it('Verify that user can log in with valid credential', () => {
        
        cy.visit('/')
        loginPage.EmailAddressButton().type('jacob_ndifreke@zenbyzenith.com')
        loginPage.PasswordButton().type(Cypress.env('USER_PASSWORD'))
        loginPage.LoginButton()

    });

})