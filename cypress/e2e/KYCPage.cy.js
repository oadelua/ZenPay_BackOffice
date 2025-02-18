import KYCPage from "../support/POM/KYCPage";

const kycPage = new KYCPage

describe('MerchantSupport', () => {

    it('Verify user can search for a Merhant', () => {
        cy.visit('/')
        cy.get('input[placeholder="Enter Email Address"]').type('jacob_ndifreke@zenbyzenith.com')
        cy.get('input[placeholder="Enter password"]').type('Password@1234')
        cy.get('#sign-in-button').click()
        kycPage.KYCPageButton().click()
        kycPage.MerchantSupportButton().click()
        kycPage.MerchantsupportSearchField().type('a{enter}')
        kycPage.MerchantDetails().click()


    
    });

})
