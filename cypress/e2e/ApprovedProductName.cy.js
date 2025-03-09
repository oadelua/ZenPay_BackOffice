import { ApprovedProductNameTab } from "../support/POM/InventoryMgtModule/ApprovedProductNamesTab.js";
const approvedProductNameTab = new ApprovedProductNameTab

import LoginPage from "../support/POM/LoginPage.js";
const loginPage = new LoginPage


describe('Inventory Module', () => {

    beforeEach (() => {
        cy.visit('/')
        loginPage.EmailAddressButton().type(Cypress.env('USER_EMAIL'))
        loginPage.PasswordButton().type(Cypress.env('USER_PASSWORD'))
        loginPage.LoginButton()
    })

    it.skip('Verify BO officer can add product name', () => {

        approvedProductNameTab.InventoryMgtModuleButton().click()
        approvedProductNameTab.AddProductNameButton().click()
        approvedProductNameTab.ProductNameField1().type('Brown Jacket')
        cy.wait(3000)
        approvedProductNameTab.AddAnotherButton().click()
        approvedProductNameTab.ProductNameField2().type('Brown Suede Loafers')
        cy.wait(3000)
        approvedProductNameTab.AddAnotherButton().click()
        approvedProductNameTab.ProductNameField3().type('Brown Suede')
        approvedProductNameTab.SubmitButton().click()

    });

    it.skip('Verify BO officer canot not add product name in Awaiting Approval queue', () => {
        approvedProductNameTab.InventoryMgtModuleButton().click()
        approvedProductNameTab.AddProductNameButton().click()
        approvedProductNameTab.ProductNameField1().type('Brown Jacket')
        cy.wait(3000)
        cy.contains('A similar request is awaiting approval').click()
       
    });

    it.skip('Verify BO officer canot not add product name in Approved Product Name queue', () => {
        approvedProductNameTab.InventoryMgtModuleButton().click()
        approvedProductNameTab.AddProductNameButton().click()
        approvedProductNameTab.ProductNameField1().type('Buttermilk')
        cy.wait(3000)
        cy.contains('Product name already exists. This cannot be added again')
       
    });

    it.skip('Verify BO officer cannot add Banned product name to Approved Product list', () => {
        approvedProductNameTab.InventoryMgtModuleButton().click()
        approvedProductNameTab.AddProductNameButton().click()
        approvedProductNameTab.ProductNameField1().type('Nail Cutter')
        cy.contains('This is a banned product. This cannot be added.').should('be.visible').and('have.text','This is a banned product. This cannot be added.')
    });

    it ('Verify that the BO Officer can upload a bulk product name file', () => {
        approvedProductNameTab.InventoryMgtModuleButton().click()
        cy.wait (3000)
        approvedProductNameTab.AddProductNameButton().click()
        approvedProductNameTab.BulkUploadButton().click ()
        approvedProductNameTab.AttachFileButton().dblclick('center')
        cy.wait (3000)
    })
})
