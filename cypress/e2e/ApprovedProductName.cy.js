import ApprovedProductNameTab from "../support/POM/InventoryMgtModule/ApprovedProductNamesTab"
const approvedProductNameTab = new ApprovedProductNameTab

import LoginPage from "../support/POM/LoginPage";
const loginPage = new LoginPage


describe('Inventory Module', () => {

    beforeEach (() => {
        cy.visit('/')
        loginPage.EmailAddressButton().type('jacob_ndifreke@zenbyzenith.com')
        loginPage.PasswordButton().type(Cypress.env('USER_PASSWORD'))
        loginPage.LoginButton()
    })

    it('Verify BO officer can add product name', () => {

        approvedProductNameTab.InventoryMgtModuleButton().click()
        approvedProductNameTab.AddProductNameButton().click()
        approvedProductNameTab.ProductNameField().type('Brown Jacket')
        cy.wait(3000)
        approvedProductNameTab.AddAnotherButton().click()
        approvedProductNameTab.SecondProductNameField().type('Brown Suede Loafers')
        approvedProductNameTab.AddAnotherButton().click()
        approvedProductNameTab.ThirdProductNameField().type('Brown Suede')
        cy.contains('Submit')

    });

    it('Verify BO officer canot not add product name already in Approved Product name queue', () => {
        approvedProductNameTab.InventoryMgtModuleButton().click()
        approvedProductNameTab.AddProductNameButton().click()
        approvedProductNameTab.ProductNameField().type('Mosquito Repellant')
        cy.wait(3000)
        cy.contains('Product name already exists. This cannot be added again').click()
       
    });

    it('Verify BO officer cannot add Banned product name to Approved Product list', () => {
        approvedProductNameTab.InventoryMgtModuleButton().click()
        approvedProductNameTab.AddProductNameButton().click()
        approvedProductNameTab.ProductNameField().type('Pistol Man')
        cy.contains('Submit').click
    });


})
