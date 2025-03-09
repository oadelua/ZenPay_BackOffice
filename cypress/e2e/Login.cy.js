import LoginPage from "../support/POM/LoginPage.js";

const loginPage = new LoginPage

describe ('BackOffice Login', () => {

    it('Verify that user can log in with valid credential', () => {
        
        cy.visit('/')
        loginPage.EmailAddressButton().type(Cypress.env('USER_EMAIL'))
        loginPage.PasswordButton().type(Cypress.env('USER_PASSWORD'))
        loginPage.LoginButton()

    });

})