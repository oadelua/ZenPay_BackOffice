import { ApprovedUOMTab } from "../support/POM/InventoryMgtModule/ApprovedUOMTab"

const approvedUOMTab = new ApprovedUOMTab

import LoginPage from "../support/POM/LoginPage"

const loginPage = new LoginPage

import { ApprovedProductNameTab } from "../support/POM/InventoryMgtModule/ApprovedProductNamesTab"

const approvedProductNameTab = new ApprovedProductNameTab


describe ('Add New UOM', () => {

    beforeEach (() => {
        cy.visit('/')
        loginPage.EmailAddressButton().type(Cypress.env('USER_EMAIL'))
        loginPage.PasswordButton().type(Cypress.env('USER_PASSWORD'))
        loginPage.LoginButton()
    })

    it('Very BO can Add New (single entry)', () => {
        
        approvedProductNameTab.InventoryMgtModuleButton().click()
        approvedUOMTab.ApprovedUOMTabButton().click()
        approvedUOMTab.AddNewUOMButton().click()
        approvedUOMTab.UnitField1().click().type('Kilogram(kg)')



    });

}) 

